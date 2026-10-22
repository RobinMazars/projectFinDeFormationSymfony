# projectFinDeFormationSymfony

Site personnel (accueil, CV, contact, BDD, canvas, pièces, tapis) — projet de fin de formation.

**Stack** : Symfony 7.4 LTS, PHP 8.5, MySQL (PDO), Webpack Encore.

---

## Mémo de déploiement — OVH (mutualisé) via FileZilla

Ce mémo récapitule tout ce qu'il faut savoir pour déployer ou mettre à jour le site
sur un hébergement mutualisé OVH. Il est issu d'un déploiement réel (octobre 2026).

### 1. Fichiers de déploiement à ne pas oublier

| Fichier | Rôle |
|---|---|
| `.ovhconfig` | Config PHP de l'hébergement (à la **racine du FTP**) |
| `composer.json` + `composer.lock` | **Ancre le `PROJECT_DIR` de Symfony** — sans eux, Symfony se perd dans `src/` et plus aucune route ne charge (404 partout) |
| `.env` | `APP_ENV=prod` obligatoire en production |
| `assets/configBDD.php` | Identifiants MySQL OVH (PDO). Gitignoré : n'existe que sur le serveur et en local. Mêmes variables : `$nameDb`, `$nameUser`, `$password` |

### 2. Contenu du `.ovhconfig` (à la racine du FTP)

```ini
app.engine=php
app.engine.version=8.5
http.firewall=none
environment=production
container.image=stable64
```

⚠️ Les **deux** lignes comptent : sans `container.image=stable64`, la version
`app.engine.version=8.5` ne s'applique pas (PHP 8.5 n'existe qu'en Stable64).

### 3. Structure sur le serveur

- Tout le projet (`src/`, `config/`, `templates/`, `vendor/`, `bin/`, `assets/`,
  `.env`, `composer.json`, `composer.lock`, `symfony.lock`) est à la **racine du FTP**,
  à côté de `www/`.
- Seul le **contenu de `www/`** (`index.php`, `.htaccess`, `build/`, `bundles/`)
  va dans le `www/` OVH (seul dossier servi par le web).
- Ne jamais rien mettre d'autre dans `www/` (sinon `assets/configBDD.php` serait
  téléchargeable par URL → identifiants exposés).

### 4. Règles critiques (pièges rencontrés et solutions)

| Règle | Pourquoi |
|---|---|
| Ne **jamais** uploader `var/` (ni le local) | Le cache compilé contient des chemins absolus de la machine locale → incompatible |
| Dossiers `src/Entity` et `src/Migrations` **vides mais présents** | Doctrine exige qu'ils existent, sinon `InvalidArgumentException` au boot |
| FTP ne supprime **rien** | Un upload ne retire pas les fichiers disparus du repo : nettoyer manuellement les fichiers obsolètes avant d'uploader |
| Après un changement de `.ovhconfig`, **attendre 2-3 min** | Propagation + opcache OVH qui sert l'ancien code compilé un court moment |
| Premier chargement après purge du cache = **lent** | Symfony recompile son cache au premier hit ; recharger la page si timeout |

### 5. Procédure de mise à jour

1. En local : `APP_ENV=prod` dans `.env`, puis
   `composer install --no-dev --optimize-autoloader`
   (génère `www/bundles/` via les auto-scripts — l'inclure dans l'upload).
2. Sur le serveur : supprimer `var/` entier (et les fichiers retirés du repo).
3. Uploader les fichiers du projet à la racine du FTP + contenu de `www/` dans `www/`.
4. Vérifier le `.ovhconfig` (PHP 8.5 + stable64).
5. Attendre 2-3 min, recharger le site (Ctrl+F5).
6. Tester toutes les pages (surtout celles qui utilisent la BDD).

### 6. Diagnostic en ligne (si besoin)

Créer temporairement `www/testroutes.php` qui boote le Kernel en prod et affiche
`getProjectDir()` + les routes enregistrées, l'ouvrir via `https://domaine/testroutes.php`,
puis **le supprimer immédiatement** après lecture.

Exemple de symptôme → cause :

- `PROJECT_DIR` pointe vers `.../src` → `composer.json` absent de la racine du FTP.
- `0 route(s)` → mauvais `PROJECT_DIR` (voir ci-dessus) ou cache périmé → purger `var/`.
- `Class WebProfilerBundle not found` → `.env` en `dev` avec un vendor `--no-dev`
  → mettre `APP_ENV=prod`.
- `Composer detected issues... require a PHP version ">= 8.5.0"` (sur la page) →
  `.ovhconfig` pas en 8.5/stable64.
