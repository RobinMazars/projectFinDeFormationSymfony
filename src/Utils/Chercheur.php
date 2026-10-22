<?php
namespace App\Utils;
use App\Utils\Bdd;

class Chercheur
{
  private $_bdd;

  public function __construct(){
    $this->_bdd=new Bdd();
  }
  public function getInfoTable($nbrPage,$offset){
    $nbrPage=max(1,(int) $nbrPage);
    $offset=max(0,(int) $offset);
    $sql="SELECT `productName`,`productVendor`,`productScale`,`productDescription`,`quantityInStock`,`buyPrice`
    FROM `products`LIMIT ".$nbrPage." OFFSET ".$offset." ";
    $allProduct=$this->_bdd->retrieveData($sql);

    $sql="SELECT  COUNT(`productName`),AVG(`buyPrice`) FROM `products`";
    $req=$this->_bdd->retrieveData($sql);

    $info=$req[0];
    $info["AVG(`buyPrice`)"]=round($info["AVG(`buyPrice`)"],2);
    return array('allProduct' => $allProduct,'info' => $info);
  }
  public function getResearch($nbrPage,$offset,string $recherche){
    $nbrPage=max(1,(int) $nbrPage);
    $offset=max(0,(int) $offset);
    $sql="SELECT `productName`,`productVendor`,`productScale`,`productDescription`,`quantityInStock`,`buyPrice`
    FROM `products` WHERE `productName` LIKE ? LIMIT ".$nbrPage." OFFSET ".$offset." ";
    $allProduct=$this->_bdd->retrieveDataWithParam($sql,["%".$recherche."%"]);
    return array('allProduct' => $allProduct);

  }
}






 ?>
