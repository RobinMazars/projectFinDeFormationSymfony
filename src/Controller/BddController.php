<?php
namespace App\Controller;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;
use App\Utils\Chercheur;
class BddController extends AbstractController
{
    /**
     * @Route("/Bdd", name="bdd", methods={"GET","POST"})
     */
    public function bdd()
    {
      $nbrPage=10;


      if (isset($_GET['page'])) {
        $actualPage=(int)htmlspecialchars($_GET['page']);
        if ($actualPage>1) {
            $previousPage=$actualPage-1;
        }
        else {
          $previousPage=1;
        }
        $nextPage=$actualPage+1;
        $offset=($actualPage-1)*$nbrPage;
      }
      else {
        $actualPage=1;
        $previousPage=1;
        $nextPage=2;
        $offset=0;
        //// TODO: redirection vers ?page=0 a faire dans le controller
      }
      $pages=array("actualPage"=>$actualPage,"previousPage"=>$previousPage,"nextPage"=>$nextPage);
      if (isset($_POST['recherche'])) {
        $recherche=$_POST['recherche'] ;// TODO: escape
        $chercheur=new Chercheur();
        $result=$chercheur->getResearch($nbrPage,$offset,$recherche);
        return $this->render('bdd/bdd.html.twig',['nbrPage'=>$nbrPage+654,'allProduct'=>$result['allProduct'],'recherche'=>$recherche]);
        // $PaginationEnable = false;
      }
      else {
        $chercheur=new Chercheur();
        $recherche=$chercheur->getInfoTable($nbrPage,$offset);
        return $this->render('bdd/bdd.html.twig',['nbrPage'=>$nbrPage,'pages'=>$pages,'info'=>$recherche['info'],'allProduct'=>$recherche['allProduct']]);
        // $PaginationEnable = true;
      }
    }
}
