<?php
	class shop_bll{
	    private $dao;
	    private $db;
	    static $_instance;

	    private function __construct() {
	        $this->dao = shop_dao::getInstance();
	        $this->db = db::getInstance();
	    }

	    public static function getInstance() {
	        if (!(self::$_instance instanceof self)){
	            self::$_instance = new self();
	        }
	        return self::$_instance;
	    }

	    public function obtain_data_list_BLL($arrArgument){
		  return $this->dao->select_data_list($this->db,$arrArgument);
	    }

	    public function obtain_details_list_BLL($arrArgument,$arrArgument2){
			return $this->dao->select_details_list($this->db,$arrArgument,$arrArgument2);
		  } 

		  public function obtain_categoria_list_BLL($arrArgument,$arrArgument2){
			return $this->dao->select_categoria($this->db,$arrArgument,$arrArgument2);
		  } 
		  public function obtain_grupos_list_BLL(){
			return $this->dao->select_grupos_list($this->db);
		  } 

		  public function obtain_pag_list_BLL(){
			return $this->dao->select_pag_list($this->db);
		  } 

		  public function obtain_maps_BLL($arrArgument){
			return $this->dao->select_maps_list($this->db,$arrArgument);
		  } 

		  public function obtain_checks_BLL($arrArgument,$arrArgument2,$arrArgument3){
			return $this->dao->select_checks_list($this->db,$arrArgument,$arrArgument2,$arrArgument3);
		  } 

		  public function obtain_user_BLL($arrArgument,$arrArgument2){
			return $this->dao->select_user($this->db,$arrArgument,$arrArgument2);
		  } 
		  public function obtain_checks_no_user_BLL($arrArgument,$arrArgument2){
			return ($this->dao->checks_no_user($this->db,$arrArgument,$arrArgument2));
		  } 
/* 	    public function obtain_data_details_BLL($arrArgument){
		  return $this->dao->select_data_details($this->db,$arrArgument);
	    }
	    public function number_breeds_BLL($arrArgument){
		  return $this->dao->select_number_breeds($this->db,$arrArgument);
	    }
	    public function all_breeds_BLL(){
	      return $this->dao->select_all_breeds($this->db);
	    }
	    public function select_user_BLL($arrArgument){
	      return $this->dao->select_user($this->db,$arrArgument);
	    }
	    public function insert_adoption_BLL($arrArgument,$arrArgument2){
	      return $this->dao->insert_adoption($this->db,$arrArgument,$arrArgument2);
	    }
	    public function update_value_BLL($arrArgument){
	      return $this->dao->update_value($this->db,$arrArgument);
	    } */
	}