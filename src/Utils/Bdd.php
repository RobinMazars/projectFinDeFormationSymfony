<?php
namespace App\Utils;
use \PDO;
/**
 *
 */
class Bdd
{
    private $_db;
    public function __construct()
    {
        $configFile = dirname(__DIR__, 2).'/assets/configBDD.php';
        if (!is_file($configFile)) {
            throw new \RuntimeException('Database configuration file not found.');
        }
        require $configFile;
        try {
            $this->_db = new PDO($nameDb, $nameUser, $password, [
                PDO::ATTR_ERRMODE => PDO::ERRMODE_EXCEPTION,
                PDO::ATTR_DEFAULT_FETCH_MODE => PDO::FETCH_ASSOC,
                PDO::ATTR_EMULATE_PREPARES => false,
            ]);
            $this->_db->exec("SET NAMES UTF8");
        } catch (\PDOException $e) {
            error_log('Database connection failed: '.$e->getMessage());
            throw new \RuntimeException('Database connection failed.');
        }
        return $this->_db;
    }
    public function retrieveData(string $sql)
    {
        $data=$this->_db->prepare($sql);
        $data->execute();
        $result= $data->fetchAll();
        if (count($result)==0) {
          $result=false;
        }
        return $result;
    }
    public function retrieveDataWithParam(string $sql,array $recherche=array())
    {
        $data=$this->_db->prepare($sql);
        $data->execute($recherche);
        $result= $data->fetchAll();
        if (count($result)==0) {
          $result=false;
        }
        return $result;
    }
}
