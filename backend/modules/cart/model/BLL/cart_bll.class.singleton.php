<?php
	class cart_bll {
        
	    private $dao;
	    private $db;
	    static $_instance;

	    private function __construct() {
	        $this->dao = cart_dao::getInstance();
	        $this->db = db::getInstance();
	    }

	    public static function getInstance() {
	        if (!(self::$_instance instanceof self)){
	            self::$_instance = new self();
	        }
	        return self::$_instance;
	    }

	    public function insert_compra_BLL($IDUser,$prod){

		  return $this->dao->insert_compra($this->db,$IDUser,$prod); 
          
	    }


        
	    public function select_data_BLL($IDUser){
            
            return $this->dao->select_cart($this->db,$IDUser); 
            
          }

		 public function delete_data_BLL($IDUser,$prod){

			return $this->dao->delete_compra($this->db,$IDUser,$prod); 
			
		  }

		 public function exist_BLL($IDUser,$prod){

			return $this->dao->exist_cart($this->db,$IDUser,$prod); 
			
		  }


		 public function up_cantidad_BLL($IDUser,$prod){

			return $this->dao->update_cantidad($this->db,$IDUser,$prod); 
			
		  }

		  
		 public function up_cantidad_menos_BLL($IDUser,$prod){

			return $this->dao->update_cantidad_menos($this->db,$IDUser,$prod); 
			
		  }

		  public function up_count_cart_BLL($IDUser){

			return $this->dao->count_cart($this->db,$IDUser); 
			
		  }

		  public function stock_product_BLL($prod){

			return $this->dao->stock_product($this->db,$prod); 
			
		  }
	}