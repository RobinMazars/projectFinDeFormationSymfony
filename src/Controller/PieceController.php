<?php
namespace App\Controller;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;
class PieceController extends AbstractController
{
    /**
     * @Route("/Piece", name="piece", methods={"GET"})
     */
    public function piece()
    {
        return $this->render('piece/piece.html.twig');
    }
}
