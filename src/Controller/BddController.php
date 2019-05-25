<?php
namespace App\Controller;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;
use App\Utils\Chercheur;
class BddController extends AbstractController
{
    /**
     * @Route("/Bdd", name="bdd")
     */
    public function bdd()
    {
      $nbrPage=5;


      if (isset($_GET['page'])) {
        $page=(int)htmlspecialchars($_GET['page']);
        $offset=($page-1)*$nbrPage;
      }
      else {
        $page=1;
        $offset=0;
        //// TODO: redirection vers ?page=0 a faire dans le controller
      }
      if (!isset($_GET['page'])) {
        $page=1;
      }
      if (isset($_POST['recherche'])) {
        $recherche=$_POST['recherche'] ;// TODO: escape

        return $this->render('bdd/BddResearch.html.twig');
        $PaginationEnable = false;
      }
      else {
        $chercheur=new Chercheur();
        $recherche=$chercheur->getInfoTable($nbrPage,$offset);
        return $this->render('bdd/bdd.html.twig',['nbrPage'=>$nbrPage,'info'=>$recherche['info'],'allProduct'=>$recherche['allProduct']]);
        $PaginationEnable = true;
      }
    }
}
