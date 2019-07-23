<?php
namespace App\Controller;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;
use App\Utils\Chercheur;
class BddController extends AbstractController
{

    /**
     * @Route("/Bdd/{actualPage}",defaults={"actualPage"=1},name="bdd", methods={"GET"})
     *
     */
    public function bdd($actualPage)
    {
      // affiche la page bdd.html.twig de base
      $pages=$this->calcPagination($actualPage);

      $chercheur=new Chercheur();
      $recherche=$chercheur->getInfoTable($pages['nbrItemByPage'],$pages['offset']);
      return $this->render('bdd/bdd.html.twig',['pages'=>$pages,
                                                'info'=>$recherche['info'],
                                                'allProduct'=>$recherche['allProduct'],
                                                'namePath'=>__FUNCTION__]);
    }

    /**
     * @Route("/Bdd/search/{actualPage<\d+>}", name="search", methods={"GET"})
     */
    public function search($actualPage){
      // affiche la page bdd.html.twig en après une recherche dans la base
      $pages=$this->calcPagination(intval($actualPage));
      $recherche=htmlspecialchars($_GET['recherche']);
      $chercheur=new Chercheur();
      $nbrItemByPageOverdrive=50;
      $result=$chercheur->getResearch($nbrItemByPageOverdrive,$pages['offset'],$recherche);
      return $this->render('bdd/bdd.html.twig',['pages'=>$pages,
                                                'allProduct'=>$result['allProduct'],
                                                'recherche'=>$recherche,
                                                'namePath'=>__FUNCTION__]);

    }
    public function calcPagination($actualPage){
      // function pour calculer crées la pagination
      $nbrItemByPage=10;
      if ($actualPage>1) {
          $previousPage=$actualPage-1;
      }
      else {
        $previousPage=1;
      }
      $nextPage=$actualPage+1;
      $offset=($actualPage-1)*$nbrItemByPage;
      $pages=array("actualPage"=>$actualPage,
                   "previousPage"=>$previousPage,
                   "nextPage"=>$nextPage,
                   "nbrItemByPage"=>$nbrItemByPage,
                    "offset"=>$offset);
      return $pages;
    }
}
