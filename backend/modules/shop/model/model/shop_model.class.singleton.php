<?php
class shop_model {
    private $bll;
    static $_instance;

    private function __construct() {
        $this->bll = shop_bll::getInstance();
    }

    public static function getInstance() {
        if (!(self::$_instance instanceof self)){
            self::$_instance = new self();
        }
        return self::$_instance;
    }

    public function obtain_data_list($arrArgument){
        return $this->bll->obtain_data_list_BLL($arrArgument);
    }

    public function obtain_details($arrArgument){
        return $this->bll->obtain_details_list_BLL($arrArgument);
    } 
    public function obtain_grupos(){
        return $this->bll->obtain_grupos_list_BLL();
    } 

    public function data_pagination(){
        return $this->bll->obtain_pag_list_BLL();
    } 

    public function data_maps(){
        return $this->bll->obtain_maps_BLL();
    } 

    public function obtain_checks($arrArgument,$arrArgument2){
        return $this->bll->obtain_checks_BLL($arrArgument,$arrArgument2);
    } 
/*     public function obtain_data_details($arrArgument){
        return $this->bll->obtain_data_details_BLL($arrArgument);
    }
    public function number_breeds($arrArgument){
        return $this->bll->number_breeds_BLL($arrArgument);
    }
    public function all_breeds(){
        return $this->bll->all_breeds_BLL();
    }
    public function select_user($arrArgument){
        return $this->bll->select_user_BLL($arrArgument);
    }
    public function insert_adoption($arrArgument,$arrArgument2){
        return $this->bll->insert_adoption_BLL($arrArgument,$arrArgument2);
    }
    public function update_value($arrArgument){
        return $this->bll->update_value_BLL($arrArgument);
    } */
}