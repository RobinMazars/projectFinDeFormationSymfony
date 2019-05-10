<?php
// src/Controller/LuckyController.php
namespace App\Controller;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;
class LuckyController extends AbstractController
{
    /**
     * @Route("/lucky/number", name="number", methods={"GET"})
     */
    public function number()
    {
        $number = random_int(0, 100);

        return $this->render('lucky/number.html.twig', [
            'number' => $number,
        ]);
    }
    /**
     * @Route("/lucky/number/{number}", name="numberGive", methods={"GET"})
     */
    public function numberGive($number)
    {
        // $number = random_int(0, 100);

        return $this->render('lucky/numberGive.html.twig', [
            'number' => $number,
        ]);
    }
}
