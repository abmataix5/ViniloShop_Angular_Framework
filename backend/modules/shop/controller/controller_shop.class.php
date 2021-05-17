<?php
	class controller_shop {
		function __construct(){
	        $_SESSION['module'] = "shop";
		}
		
		function list_shop() {
			require(VIEW_PATH_INC . "top_page_shop.php");  
			require(VIEW_PATH_INC . "header.html");
        	loadView('modules/shop/view/', 'shop.html');
       		require_once(VIEW_PATH_INC . "footer.html");
	    }
		
		function all_data_shop(){
			
			/* echo json_encode($_POST["data"]); */
		    $json = array();
			 	$json = loadModel(MODEL_SHOP, "shop_model", "obtain_data_list",$_POST["data"]);
			 	echo json_encode($json);  
			  
		}

		function details(){
			
			 if ((isset($_POST["id"]))){   
			   $json = array();
				$json = loadModel(MODEL_SHOP, "shop_model", "obtain_details",$_POST["id"]);
				 echo json_encode($json); 
			 }   
	   }

	   function grupos_disponibles(){
			
 
		    $json = array();
		    $json = loadModel(MODEL_SHOP, "shop_model", "obtain_grupos","grupos_disponibles");
			echo json_encode($json); 
		
       }

	   function pagination(){
			
 
		$json = array();
		$json = loadModel(MODEL_SHOP, "shop_model", "data_pagination","data_pagination");
		echo json_encode($json); 
	
       }

	   function maps_data(){
			
 
		$json = array();
		$json = loadModel(MODEL_SHOP, "shop_model", "data_maps","data_maps");
		echo json_encode($json); 
	
       }

	   
		function checks(){
			
		
			  $json = array();
			  $json = loadModel(MODEL_SHOP, "shop_model", "obtain_checks",$_POST["checks"],$_POST["checks_2"]);
			  echo json_encode($json); 
			 
	  }
		
	
	}