<?php
	class controller_contact {
       
		function __construct(){
		
			$_SESSION['module'] = "contact";
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
			
		
			try{
	            echo "<div class='alert alert-success'>".enviar_email($arrArgument)." </div>";
			} catch (Exception $e) {
				echo "<div class='alert alert-error'>Server error. Try later...</div>";
			}
		

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
