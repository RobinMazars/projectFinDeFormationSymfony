<?php
namespace App\Controller;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;
class CanvasController extends AbstractController
{
    /**
     * @Route("/Canvas", name="canvas", methods={"GET"})
     */
    public function canvas()
    {
        return $this->render('canvas/canvas.html.twig');
    }
}
