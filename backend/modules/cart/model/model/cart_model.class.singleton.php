<?php
class cart_model {
  
        private $bll;
        static $_instance;
    
        private function __construct() {
            $this->bll = cart_bll::getInstance();
        }
    
        public static function getInstance() {
            if (!(self::$_instance instanceof self)){
                self::$_instance = new self();
            }
            return self::$_instance;
        }
    
        public function insert_compra($IDUser,$prod){
            return $this->bll->insert_compra_BLL($IDUser,$prod);
        }

        public function select_data($IDUser){
            return $this->bll->select_data_BLL($IDUser);
        
        }

        public function delete_data($IDUser,$prod){
            return $this->bll->delete_data_BLL($IDUser,$prod);
        }
    
   

    }
