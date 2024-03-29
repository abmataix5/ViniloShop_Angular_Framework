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

    public function obtain_details($arrArgument,$arrArgument2){
        return $this->bll->obtain_details_list_BLL($arrArgument,$arrArgument2);
    } 

    public function obtain_categoria($arrArgument,$arrArgument2){
        return $this->bll->obtain_categoria_list_BLL($arrArgument,$arrArgument2);
    } 
    public function obtain_grupos(){
        return $this->bll->obtain_grupos_list_BLL();
    } 

    public function data_pagination(){
        return $this->bll->obtain_pag_list_BLL();
    } 

    public function data_maps($arrArgument){
        return $this->bll->obtain_maps_BLL($arrArgument);
    } 

    public function obtain_checks($arrArgument,$arrArgument2,$arrArgument3){
        return $this->bll->obtain_checks_BLL($arrArgument,$arrArgument2,$arrArgument3);
    } 

    public function select_user_fav($arrArgument,$arrArgument2){
        return $this->bll->obtain_user_BLL($arrArgument,$arrArgument2);
    } 
    public function obtain_checks_no_user($arrArgument,$arrArgument2){
        return $this->bll->obtain_checks_no_user_BLL($arrArgument,$arrArgument2);
    } 
    public function obtain_search_model($arrArgument,$arrArgument2){
        return $this->bll->search_BLL($arrArgument,$arrArgument2);
    } 

}