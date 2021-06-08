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

 

    public function select_details_list($db,$arrArgument,$arrArgument2) {

    

        $sql = "SELECT stock.*,likes.likes  FROM stock  LEFT JOIN 
        ((SELECT DISTINCT f.cod_producto, 'like' as likes 
        FROM favoritos f
        WHERE f.IDUser  LIKE '$arrArgument2') AS likes)
        ON stock.cod_producto = likes.cod_producto WHERE stock.cod_producto = '$arrArgument'  ";
     
        $stmt = $db->ejecutar($sql);
        return $db->listar($stmt);
    }

    public function select_grupos_list($db) {
        $sql = "SELECT  nombre_grupo,cod_grupo FROM stock GROUP BY nombre_grupo";
        $stmt = $db->ejecutar($sql);
        return $db->listar($stmt);
    }

    public function select_categoria($db,$arrArgument,$arrArgument2) {
     
        $sql = "SELECT stock.*,likes.likes  FROM stock  LEFT JOIN 
        ((SELECT DISTINCT f.cod_producto, 'like' as likes 
        FROM favoritos f
        WHERE f.IDUser  LIKE '$arrArgument2') AS likes)
        ON stock.cod_producto = likes.cod_producto WHERE stock.categoria = '$arrArgument'"; 
      
        $stmt = $db->ejecutar($sql);
        return $db->listar($stmt);

        
   
    }

    public function select_pag_list($db) {
        $sql = "SELECT * FROM stock ";
        $stmt = $db->ejecutar($sql);
        return $db->listar($stmt);
    }

    public function select_maps_list($db,$arrArgument) {

      

        $sql = "SELECT stock.*,likes.likes  FROM stock  LEFT JOIN 
        ((SELECT DISTINCT f.cod_producto, 'like' as likes 
        FROM favoritos f
        WHERE f.IDUser  LIKE '$arrArgument') AS likes)
        ON stock.cod_producto = likes.cod_producto";
        
        $stmt = $db->ejecutar($sql);
        return $db->listar($stmt);
    }

    public function select_checks_list($db,$arrArgument,$arrArgument2,$arrArgument3) {

        $estilo_array = sizeof($arrArgument);
        $catego_array = sizeof($arrArgument2);

        $check_0 = $arrArgument[0];
        $check_1 = $arrArgument[1];
        $check_2 = $arrArgument[2];
        $check_3 = $arrArgument[3];
        $check_4 = $arrArgument[4];

        $catego_0 = $arrArgument2[0];
        $catego_1 = $arrArgument2[1];
        $catego_2 = $arrArgument2[2];
        $catego_3 = $arrArgument2[3];

        if($estilo_array > 0 && $catego_array == 0){
            
            $sql = "SELECT stock.*,likes.likes  FROM stock  LEFT JOIN 
            ((SELECT DISTINCT f.cod_producto, 'like' as likes 
            FROM favoritos f
            WHERE f.IDUser  LIKE '$arrArgument3') AS likes)
            ON stock.cod_producto = likes.cod_producto WHERE stock.estilo_musical = '$check_0' or stock.estilo_musical = '$check_1' 
            or stock.estilo_musical = '$check_2' or stock.estilo_musical = '$check_3' or stock.estilo_musical = '$check_4' "; 
           

        
            $stmt = $db->ejecutar($sql);
            return $db->listar($stmt);

        }if($catego_array > 0 && $estilo_array == 0){

            $sql = "SELECT stock.*,likes.likes  FROM stock  LEFT JOIN 
            ((SELECT DISTINCT f.cod_producto, 'like' as likes 
            FROM favoritos f
            WHERE f.IDUser  LIKE '$arrArgument3') AS likes)
            ON stock.cod_producto = likes.cod_producto WHERE categoria = '$catego_0' or categoria = '$catego_1'
             or categoria = '$catego_2' or categoria = '$catego_3'"; 
            

           
            $stmt = $db->ejecutar($sql);
            return $db->listar($stmt);

        } if($estilo_array == 1  && $catego_array == 1){

            $sql = "SELECT stock.*,likes.likes  FROM stock  LEFT JOIN 
            ((SELECT DISTINCT f.cod_producto, 'like' as likes 
            FROM favoritos f
            WHERE f.IDUser  LIKE '$arrArgument3') AS likes)
            ON stock.cod_producto = likes.cod_producto  WHERE estilo_musical = '$check_0'  and categoria = '$catego_0' ";
            
         
            
            $stmt = $db->ejecutar($sql);
            return $db->listar($stmt);

        }  if($estilo_array == 2  && $catego_array == 1){    
            
            $sql = "SELECT stock.*,likes.likes  FROM stock  LEFT JOIN 
            ((SELECT DISTINCT f.cod_producto, 'like' as likes 
            FROM favoritos f
            WHERE f.IDUser  LIKE '$arrArgument3') AS likes)
            ON stock.cod_producto = likes.cod_producto  WHERE categoria = '$catego_0'  and estilo_musical = '$check_1' 
            UNION
            SELECT stock.*,likes.likes  FROM stock  LEFT JOIN 
            ((SELECT DISTINCT f.cod_producto, 'like' as likes 
            FROM favoritos f
            WHERE f.IDUser  LIKE '$arrArgument3') AS likes)
            ON stock.cod_producto = likes.cod_producto  WHERE categoria = '$catego_0'  and estilo_musical = '$check_0' "; 
           

           
            
            $stmt = $db->ejecutar($sql);
            return $db->listar($stmt);

        } else{

            $sql = "SELECT stock.*,likes.likes  FROM stock  LEFT JOIN 
            ((SELECT DISTINCT f.cod_producto, 'like' as likes 
            FROM favoritos f
            WHERE f.IDUser  LIKE '$arrArgument3') AS likes)
            ON stock.cod_producto = likes.cod_producto ";
           
            $stmt = $db->ejecutar($sql);
            return $db->listar($stmt);
        }
      
    }



    public function select_user($db,$arrArgument,$arrArgument2) {

        /* Comrovem si es like o un like */
        $sql = "SELECT * FROM favoritos WHERE IDUser = '$arrArgument' and cod_producto = '$arrArgument2'";
        $stmt = $db->ejecutar($sql);
        $favorito = $db->listar($stmt);
       

        if( sizeof($favorito) == 0){
            $sql = "INSERT INTO `favoritos`(`cod_producto`, `IDUser`) VALUES ('$arrArgument2','$arrArgument')";
    
            $db->ejecutar($sql);
            return 'like';
        }else{
            $sql = "DELETE FROM `favoritos` WHERE IDUSer = '$arrArgument' AND cod_producto = '$arrArgument2' ";
    
            $db->ejecutar($sql);
            return 'unlike';
        }
    }


    

    public function checks_no_user($db,$arrArgument,$arrArgument2) {

        $estilo_array = sizeof($arrArgument);
        $catego_array = sizeof($arrArgument2);

        $check_0 = $arrArgument[0];
        $check_1 = $arrArgument[1];
        $check_2 = $arrArgument[2];
        $check_3 = $arrArgument[3];
        $check_4 = $arrArgument[4];

      
        $catego_0 = $arrArgument2[0];
        $catego_1 = $arrArgument2[1];
        $catego_2 = $arrArgument2[2];
        $catego_3 = $arrArgument2[3];

        if($estilo_array > 0 && $catego_array == 0){
            $sql = "SELECT * FROM stock WHERE estilo_musical = '$check_0' or estilo_musical = '$check_1' or estilo_musical = '$check_2' or estilo_musical = '$check_3' or estilo_musical = '$check_4'";
            $stmt = $db->ejecutar($sql);
            return $db->listar($stmt);
        }if($catego_array > 0 && $estilo_array == 0){
            $sql = "SELECT * FROM stock WHERE categoria = '$catego_0' or categoria = '$catego_1' or categoria = '$catego_2' or categoria = '$catego_3'";
            $stmt = $db->ejecutar($sql);
            return $db->listar($stmt);
        } if($estilo_array == 1  && $catego_array == 1){
            $sql = "SELECT * FROM stock WHERE estilo_musical = '$check_0'  and categoria = '$catego_0'";

            $stmt = $db->ejecutar($sql);
            return $db->listar($stmt);
        }  if($estilo_array == 2  && $catego_array == 1){
            $sql = "SELECT * FROM stock WHERE categoria = '$catego_0'  and estilo_musical = '$check_1'  UNION SELECT * FROM stock WHERE categoria = '$catego_0'  and estilo_musical = '$check_0' ";

            $stmt = $db->ejecutar($sql);
            return $db->listar($stmt);
        } else{
            $sql = "SELECT * FROM stock";
            $stmt = $db->ejecutar($sql);
            return $db->listar($stmt);

        }
      
    
    }

}
