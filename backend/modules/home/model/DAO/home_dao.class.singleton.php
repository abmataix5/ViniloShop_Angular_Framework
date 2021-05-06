<?php
class home_dao {
    static $_instance;

    private function __construct() {
    }

    public static function getInstance() {
        if(!(self::$_instance instanceof self)){
           
            self::$_instance = new self();
        }
        return self::$_instance;
    }

    public function select_data_carousel($db){
    
     /*   echo("hola2334");  */
        $sql = "SELECT * FROM banner";
        $stmt = $db->ejecutar($sql);
        return ($db->listar($stmt));
    }

    public function select_data_categories($db){
    
        /*   echo("hola2334");  */
           $sql = "SELECT * FROM categorias ORDER BY contador DESC";
           $stmt = $db->ejecutar($sql);
           return ($db->listar($stmt));
       }

       public function select_data_morevisited($db,$arrArgument){
    
       
           $sql = "UPDATE `categorias` SET `contador`= contador + 1 WHERE categoria = '$arrArgument' ";
           $stmt = $db->ejecutar($sql);
           return $db->ejecutar($sql);
       }

       public function select_data_more_groups($db,$arrArgument){
    
       
        $sql = "SELECT DISTINCT img_grupo,nombre_grupo FROM stock LIMIT $arrArgument";
        $stmt = $db->ejecutar($sql);
        return ($db->listar($stmt));
    }


   /*  public function select_data_list($db,$arrArgument) {
        $sql = "SELECT name,chip,breed,sex,stature,picture,date_birth FROM dogs WHERE breed LIKE '%$arrArgument%' ORDER BY chip";
        $stmt = $db->ejecutar($sql);
        return $db->listar($stmt);
    }

    public function select_data_details($db,$arrArgument) {
        $sql = "SELECT name,chip,breed,sex,stature,picture,date_birth,tlp,country,province,city,cinfo,dinfo FROM dogs WHERE chip = '$arrArgument'";
        $stmt = $db->ejecutar($sql);
        return $db->listar($stmt);
    }

    public function select_best_breed($db,$arrArgument) {
        $sql = "SELECT breed FROM dogs GROUP BY breed ORDER BY count(*) DESC LIMIT $arrArgument,2";
        $stmt = $db->ejecutar($sql);
        return $db->listar($stmt);
    }

    public function select_load_name($db) {
        $sql = "SELECT DISTINCT name FROM dogs WHERE state = 0";
        $stmt = $db->ejecutar($sql);
        return $db->listar($stmt);
    }

    public function select_auto_name($db,$arrArgument) {
        $sql = "SELECT DISTINCT name,chip,breed,sex,stature,picture,date_birth FROM dogs WHERE name LIKE '%$arrArgument%' AND state = 0";
        $stmt = $db->ejecutar($sql);
        return $db->listar($stmt);
    }

    public function update_active_user($db,$arrArgument) {
        $sql = "UPDATE users SET activate = 1 WHERE token = '$arrArgument'";
        return $db->ejecutar($sql);
    } */

}
