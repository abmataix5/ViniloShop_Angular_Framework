<?php
	class controller_cart {
		function __construct(){
	        $_SESSION['module'] = "cart";
		}
		
	
		
		

		function insert_product(){
		

		 	if($_POST["token"]){

				$token = decode_token($_POST["token"]);
				$nameUser = user_from_token($token);   
				$nameUser = ($nameUser['user']);
			}else{
	
				$nameUser = "";
			}

		    	$json = array();
		 	 	$json = loadModel(MODEL_CART, "cart_model", "insert_compra",$nameUser,$_POST["prod"]);  
			 	echo json_encode($json);  
			  
		}


		function select_cart_data(){
		

			if($_POST["token"]){

			   $token = decode_token($_POST["token"]);
			   $nameUser = user_from_token($token);   
			   $nameUser = ($nameUser['user']);
		   }else{
   
			   $nameUser = "";
		   }

		         $json = array();
				 $json = loadModel(MODEL_CART, "cart_model", "select_data",$nameUser);   
				echo json_encode($json);  
			 
	   }

	   function delete_cart_data(){
		

		if($_POST["token"]){

		   $token = decode_token($_POST["token"]);
		   $nameUser = user_from_token($token);   
		   $nameUser = ($nameUser['user']);
	   }else{

		   $nameUser = "";
	   }

			 $json = array();
			 $json = loadModel(MODEL_CART, "cart_model", "delete_data",$nameUser,$_POST["prod"]);   
			echo json_encode($json);  
		 
   }



	
	}