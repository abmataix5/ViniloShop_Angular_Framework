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

       public function select_data_more_groups($db){
    
       
        $sql = "SELECT DISTINCT img_grupo,nombre_grupo FROM stock";
        $stmt = $db->ejecutar($sql);
        return ($db->listar($stmt));
    }




}
