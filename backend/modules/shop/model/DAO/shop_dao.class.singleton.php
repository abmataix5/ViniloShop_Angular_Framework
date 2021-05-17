<?php
class shop_dao {
    static $_instance;

    private function __construct() {

    }

    public static function getInstance() {
        if(!(self::$_instance instanceof self)){
            self::$_instance = new self();
        }
        return self::$_instance;
    }

    public function select_data_list($db,$arrArgument) {
        $sql = "SELECT * FROM stock LIMIT 12 OFFSET $arrArgument";
        $stmt = $db->ejecutar($sql);
        return $db->listar($stmt);
    }

    public function select_details_list($db,$arrArgument) {
        $sql = "SELECT * FROM stock WHERE cod_producto='$arrArgument'";
        $stmt = $db->ejecutar($sql);
        return $db->listar($stmt);
    }

    public function select_grupos_list($db) {
        $sql = "SELECT  nombre_grupo,cod_grupo FROM stock GROUP BY nombre_grupo";
        $stmt = $db->ejecutar($sql);
        return $db->listar($stmt);
    }

    public function select_pag_list($db) {
        $sql = "SELECT * FROM stock ";
        $stmt = $db->ejecutar($sql);
        return $db->listar($stmt);
    }

    public function select_maps_list($db) {
        $sql = "SELECT * FROM stock ";
        $stmt = $db->ejecutar($sql);
        return $db->listar($stmt);
    }

    public function select_checks_list($db,$arrArgument) {
        $mesu = sizeof($arrArgument);
        $check_0 = $arrArgument[0];
        $check_1 = $arrArgument[1];
        $check_2 = $arrArgument[2];
        $check_3 = $arrArgument[3];
        $check_4 = $arrArgument[4];

        if($mesu > 0){
            $sql = "SELECT * FROM stock WHERE estilo_musical = '$check_0' or estilo_musical = '$check_1' or estilo_musical = '$check_2' or estilo_musical = '$check_3' or estilo_musical = '$check_4'";
            $stmt = $db->ejecutar($sql);
            return $db->listar($stmt);
        }else{
            $sql = "SELECT * FROM stock";
            $stmt = $db->ejecutar($sql);
            return $db->listar($stmt);
        }
      
    }


}
