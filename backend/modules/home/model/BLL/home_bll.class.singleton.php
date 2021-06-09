<?php
	class home_bll {
	    private $dao;
	    private $db;
	    static $_instance;

	    private function __construct() {
	         $this->dao = home_dao::getInstance();
	         $this->db = db::getInstance();    
	    }

	    public static function getInstance() {
			
	        if (!(self::$_instance instanceof self)){
				/* echo("entraaa w2"); */
	            self::$_instance = new self();
	        }
	        return self::$_instance;
	    }


		public function obtain_carousel_BLL(){
		
			/*  echo ("holas");   */
			return $this->dao->select_data_carousel($this->db);  
		}

		public function obtain_categories_BLL(){
		
			/*  echo ("holas");   */
			return $this->dao->select_data_categories($this->db);  
		}

		public function obtain_morevisited_BLL($arrArgument){
		
			/*  echo ("holas");   */
			return $this->dao->select_data_morevisited($this->db,$arrArgument);  
		}

		public function obtain_more_groups_BLL(){
		
			/*  echo ("holas");   */
			return $this->dao->select_data_more_groups($this->db);  
		}

	}