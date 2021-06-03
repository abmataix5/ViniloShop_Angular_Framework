<?php
class login_model {
    private $bll;
    static $_instance;

    private function __construct() {
        $this->bll = login_bll::getInstance();
    }

    public static function getInstance() {
        if (!(self::$_instance instanceof self)){
            self::$_instance = new self();
        }
        return self::$_instance;
    }
    
    public function register_validate($nameUSer){
        return $this->bll->register_validate_BLL( $nameUSer);
    }
    public function insert_register($data_user){
        return $this->bll->insert_register_BLL( $data_user);
    }
    public function active_user($arrArgument){
        return $this->bll->active_user_BLL($arrArgument);
    }

    public function select_user_email($nameUSer){
        return $this->bll->select_user_BLL($nameUSer);
    }
    public function update_password($arrArgument,$arrArgument2){
        return $this->bll->update_password_BLL($arrArgument,$arrArgument2);
    }

    public function social_login_data($nameUSer){
        return $this->bll->register_social_login_BLL( $nameUSer);
    }

    public function social_login_register($User){
        return $this->bll->register_social_data_BLL( $User);
    }

    public function check_token($User){
        return $this->bll->check_token_BLL( $User);
    }

    
}