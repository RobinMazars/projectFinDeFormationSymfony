<?php
namespace App\Controller;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;
class CvController extends AbstractController
{
    /**
     * @Route("/Cv", name="cv", methods={"GET"})
     */
    public function cv()
    {
        return $this->render('cv/cv.html.twig');
    }
}
