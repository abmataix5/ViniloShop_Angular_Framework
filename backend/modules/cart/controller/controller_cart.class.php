<?php
	class controller_cart {


		function __construct(){
	        $_SESSION['module'] = "cart";
		}
		
	
		function insert_product(){
		

				$token = decode_token($_POST["token"]);
				$nameUser = user_from_token($token);   
				$nameUser = ($nameUser['user']);
		

		    	$json = array();
		 	 	$json = loadModel(MODEL_CART, "cart_model", "insert_compra",$nameUser,$_POST["prod"]);  
			 	echo json_encode($json);  
			  
		}


		function select_cart_data(){
		

			   $token = decode_token($_POST["token"]);
			   $nameUser = user_from_token($token);   
			   $nameUser = ($nameUser['user']);
		

		        $json = array();
				$json = loadModel(MODEL_CART, "cart_model", "select_data",$nameUser);   
				echo json_encode($json);  
			 
	   }

	   function select_prod_user(){
		

			

			$token = decode_token($_POST["token"]);
			$nameUser = user_from_token($token);   
			$nameUser = ($nameUser['user']);
	

			$json = array();
			$json = loadModel(MODEL_CART, "cart_model", "select_exist_cart",$nameUser,$_POST["prod"]);   
			echo json_encode($json);  
		 
       }

	   
	   function update_cantidad(){
		



		$token = decode_token($_POST["token"]);
		$nameUser = user_from_token($token);   
		$nameUser = ($nameUser['user']);

     
		$json = array();
		$json = loadModel(MODEL_CART, "cart_model", "update_cart_cantidad",$nameUser,$_POST["prod"]);   
		echo json_encode($json);  
	 
      }

	  function update_cantidad_menos(){
		



		$token = decode_token($_POST["token"]);
		$nameUser = user_from_token($token);   
		$nameUser = ($nameUser['user']);

     
		$json = array();
		$json = loadModel(MODEL_CART, "cart_model", "update_cart_cantidad_menos",$nameUser,$_POST["prod"]);   
		echo json_encode($json);  
	 
      }

	   function delete_cart_data(){
		

			

			$token = decode_token($_POST["token"]);
			$nameUser = user_from_token($token);  
			$nameUser = ($nameUser['user']);
		

			$json = array();
			$json = loadModel(MODEL_CART, "cart_model", "delete_data",$nameUser,$_POST["prod"]);   
			echo json_encode($json);  
		 
        }

		function count_cart_prod(){
		
			$token = decode_token($_POST["token"]);
			$nameUser = user_from_token($token);  
			$nameUser = ($nameUser['user']);
		

			$json = array();
			$json = loadModel(MODEL_CART, "cart_model", "count_cart",$nameUser);   
			echo json_encode($json);  
		 
        }

		function check_out(){
		
			$token = decode_token($_POST["token"]);
			$nameUser = user_from_token($token);  
			$nameUser = ($nameUser['user']);
		

			$json = array();
			$json = loadModel(MODEL_CART, "cart_model", "check_out_model",$nameUser);   
			echo json_encode($json);  
		 
        }

		function comprobar_stock(){
		
			$token = decode_token($_POST["token"]);
			$nameUser = user_from_token($token);  
			$nameUser = ($nameUser['user']);
		

			$json = array();
			$json = loadModel(MODEL_CART, "cart_model", "check_stock_model",$nameUser,$_POST["prod"]);   
			echo json_encode($json);  
		 
        }



	
	}