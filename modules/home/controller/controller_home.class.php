<?php
	class controller_home {
	    function __construct() {
	        $_SESSION['module'] = "home";
	    }

	    function list_home() {
			require(VIEW_PATH_INC . "top_page_home.php");  
			require(VIEW_PATH_INC . "header.html");
        	loadView('modules/home/view/', 'home1.html');
       		require_once(VIEW_PATH_INC . "footer.html");
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
				if (isset($_POST["limit"])){
					$json = array();
					 $json = loadModel(MODEL_HOME, "home_model", "more_groups",$_POST['limit']);
					 echo json_encode($json);
				}
		}

	

	}