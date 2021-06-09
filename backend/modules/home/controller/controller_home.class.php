<?php
	class controller_home {
	    function __construct() {
	        $_SESSION['module'] = "home";
	    }


	    
	    function owl_carrousel(){
			/* echo("Tamo dentro funcion carrousel"); */
			$json = array();
		 	$json = loadModel(MODEL_HOME, "home_model", "owl_carrousel","carrousel");
			echo json_encode($json);  
			
	    }

		function categories(){
		 	/* echo("olaaa");  */
			 	$json = array();
			 	$json = loadModel(MODEL_HOME, "home_model", "categories","categories");
			 	echo json_encode($json); 
			
		}

	    function morevisited() {
		/* 	echo("moreee"); */
	    	if (isset($_POST["id"])){
				$json = array();
			 	$json = loadModel(MODEL_HOME, "home_model", "morevisited",$_POST['id']);
			 	echo json_encode($json);
			}
	    }

		function more_groups() {
			/* 	echo("moreee"); */
				
					$json = array();
					 $json = loadModel(MODEL_HOME, "home_model", "more_groups");
					 echo json_encode($json);
				
		}

	

	}