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
			
			
		    	$json = array();
			 	$json = loadModel(MODEL_SHOP, "shop_model", "obtain_data_list",$_POST["data"]);
			 	echo json_encode($json);  
			  
		}

		function por_categoria(){
		

			if($_POST["token"]){

				$token = decode_token($_POST["token"]);
				$nameUser = user_from_token($token);   
				$nameUser = ($nameUser['user']);
			}else{
	
				$nameUser = "";
			}

		    	$json = array();
			 	$json = loadModel(MODEL_SHOP, "shop_model", "obtain_categoria",$_POST["data"],$nameUser);
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

	   function data_stock(){



		if($_POST["token"]){

			$token = decode_token($_POST["token"]);
			$nameUser = user_from_token($token);   
			$nameUser = ($nameUser['user']);
		}else{

			$nameUser = "";
		}
			
		$json = array();
		$json = loadModel(MODEL_SHOP, "shop_model", "data_maps",$nameUser);
		echo json_encode($json); 
	
       }

	   
		function checks(){
			
			if($_POST["token"]){

				$token = decode_token($_POST["token"]);
				$nameUser = user_from_token($token);   
				$nameUser = ($nameUser['user']);
			}else{
	
				$nameUser = "";
			}
		
			  $json = array();
			  $json = loadModel(MODEL_SHOP, "shop_model", "obtain_checks",$_POST["checks"],$_POST["checks_2"],$nameUser);
			  echo json_encode($json); 
			 
	  }
		

	  
	  function get_user_from_token(){

		$token = decode_token($_POST["token"]);						
		$nameUser = user_from_token($token);   
		$nameUser = ($nameUser['user']);  

	  $user = loadModel(MODEL_SHOP, "shop_model", "select_user_fav",$nameUser,$_POST["cod_fav"]); 

	  echo ($user); 
	  }
	
	}