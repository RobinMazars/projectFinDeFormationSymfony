<?php
namespace App\Controller;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;
class TapisController extends AbstractController
{
    /**
     * @Route("/Tapis", name="tapis", methods={"GET"})
     */
    public function tapis()
    {
        return $this->render('tapis/tapis.html.twig');
    }
}
