<?php
class home_model {
    private $bll;
    static $_instance;

    private function __construct() {
        
        $this->bll = home_bll::getInstance();    
        
    }  

    public static function getInstance() {
    
        if (!(self::$_instance instanceof self)){
        
            self::$_instance = new self();
        }
        return self::$_instance;
    }

    public function owl_carrousel($arrArgument){
     
        return $this->bll->obtain_carousel_BLL();   
    }
    public function categories($arrArgument){
   
      return $this->bll->obtain_categories_BLL();   
  }

  public function morevisited($arrArgument){

  return $this->bll->obtain_morevisited_BLL($arrArgument);   
}

public function more_groups(){
  
  return $this->bll->obtain_more_groups_BLL();   
}

}