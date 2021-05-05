<?php
	class controller_contact {
       
		function __construct(){
			/* echo("Dentro goggogogogo"); */
			$_SESSION['module'] = "contact";
		}
		
		function list_contact(){

		 	 require(VIEW_PATH_INC . "top_page_contact.php");  
		  	require(VIEW_PATH_INC . "header.html");
			loadView('modules/contact/view/','contact_list1.html');
			require(VIEW_PATH_INC . "footer.html");  
		}
		
		function send_contact(){
			echo("Tamo okey");
			$data_mail = array();
			$data_mail = json_decode($_POST['fin_data'],true);
			$arrArgument = array(
				'type' => 'contact',
				'token' => '',
				'inputName' => $data_mail['cname'],
				'inputEmail' => $data_mail['cemail'],
				'inputSubject' => $data_mail['matter'],
				'inputMessage' => $data_mail['message']
			);
			
			//set_error_handler('ErrorHandler');
			try{
	            echo "<div class='alert alert-success'>".enviar_email($arrArgument)." </div>";
			} catch (Exception $e) {
				echo "<div class='alert alert-error'>Server error. Try later...</div>";
			}
			//restore_error_handler();

			$arrArgument = array(
				'type' => 'admin',
				'token' => '',
				'inputName' => $data_mail['cname'],
				'inputEmail' => $data_mail['cemail'],
				'inputSubject' => $data_mail['matter'],
				'inputMessage' => $data_mail['message']
			);
			try{
	            enviar_email($arrArgument);
			} catch (Exception $e) {
				echo "<div class='alert alert-error'>Server error. Try later...</div>";
			}
		}

	}
