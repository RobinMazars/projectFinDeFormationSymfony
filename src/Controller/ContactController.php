<?php
namespace App\Controller;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;
class ContactController extends AbstractController
{
    /**
     * @Route("/Contact", name="contact", methods={"GET"})
     */
    public function contact()
    {
        return $this->render('contact/contact.html.twig');
    }
}
