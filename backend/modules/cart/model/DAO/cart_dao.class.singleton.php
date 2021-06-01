<?php
class cart_dao {
    static $_instance;

    private function __construct() {

    }

    public static function getInstance() {
        if(!(self::$_instance instanceof self)){
            self::$_instance = new self();
        }
        return self::$_instance;
    }

 

    public function insert_compra($db,$IDUser,$prod) {

        $sql = "INSERT INTO `cart`(`IDUser`, `cod_producto`, `cantidad`) VALUES ('$IDUser','$prod','1')";

        return $db->ejecutar($sql);


    }


    public function select_cart($db,$IDUser) {

        $sql = "SELECT cart.cantidad,stock.nombre_disco,stock.estilo_musical,stock.precio,stock.ruta,stock.cod_producto FROM cart INNER JOIN stock ON cart.cod_producto = stock.cod_producto WHERE cart.IDUser = '$IDUser'";

        $stmt = $db->ejecutar($sql);
        return $db->listar($stmt);


    }

    public function delete_compra($db,$IDUser,$prod) {

        $sql = "DELETE FROM cart WHERE cart.IDuser = '$IDUser' and cart.cod_producto = '$prod'";
        return $db->ejecutar($sql);


    }


  

}

