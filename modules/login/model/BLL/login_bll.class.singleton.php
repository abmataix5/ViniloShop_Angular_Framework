<?php
	class login_bll{
	    private $dao;
	    private $db;
	    static $_instance;

	    private function __construct() {
	        $this->dao = login_dao::getInstance();
	        $this->db = db::getInstance();
	    }

	    public static function getInstance() {
	        if (!(self::$_instance instanceof self)){
	            self::$_instance = new self();
	        }
	        return self::$_instance;
	    }
	    
	    public function register_validate_BLL($nameUSer){
	      return $this->dao->validate_register($this->db,$nameUSer);
	    }
	    public function insert_register_BLL($data_user){
	      return $this->dao->insert_register_dao($this->db,$data_user);
	    }

        public function active_user_BLL($arrArgument){
			
            return $this->dao->update_active_user($this->db,$arrArgument);
          }

		  public function select_user_BLL($nameUSer){
			return $this->dao->select_user($this->db,$nameUSer);
		  }

		  public function update_password_BLL($arrArgument){
			return $this->dao->up_passwd($this->db,$arrArgument);
		  }

		  public function register_social_login_BLL($nameUSer){
			return $this->dao->select_social_login($this->db,$nameUSer);
		  }

		  public function register_social_data_BLL($User){
			return $this->dao->insert_register_social($this->db,$User);
		  }

	
	}