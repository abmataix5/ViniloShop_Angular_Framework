<?php
class home_model {
    private $bll;
    static $_instance;

    private function __construct() {
        
        $this->bll = home_bll::getInstance();    
        
    }  

    public static function getInstance() {
       /*  echo("entraaa"); */
        if (!(self::$_instance instanceof self)){
              /* echo("entraaa");  */
            self::$_instance = new self();
        }
        return self::$_instance;
    }

    public function owl_carrousel($arrArgument){
          /* echo("Dentro funcion");   */ 
        return $this->bll->obtain_carousel_BLL();   
    }
    public function categories($arrArgument){
        /* echo("Dentro funcion");   */ 
      return $this->bll->obtain_categories_BLL();   
  }

  public function morevisited($arrArgument){
    /* echo("Dentro funcion");   */ 
  return $this->bll->obtain_morevisited_BLL($arrArgument);   
}

public function more_groups(){
    /* echo("Dentro funcion");   */ 
  return $this->bll->obtain_more_groups_BLL();   
}
/*     public function obtain_data_details($arrArgument){
        return $this->bll->obtain_data_details_BLL($arrArgument);
    }
    public function best_breed_home($arrArgument){
        return $this->bll->best_breed_home_BLL($arrArgument);
    }
    public function load_name(){
        return $this->bll->load_name_BLL();
    }
    public function select_auto_name($arrArgument){
        return $this->bll->select_auto_name_BLL($arrArgument);
    }
    public function active_user($arrArgument){
        return $this->bll->active_user_BLL($arrArgument);
    } */
}