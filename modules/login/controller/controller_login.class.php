<?php
	class controller_login{
		function __construct(){
			 $_SESSION['module'] = "login";
			
		}

		function list_login(){
			require(VIEW_PATH_INC . "top_page_login.php");  
			require(VIEW_PATH_INC . "header.html");
        	loadView('modules/login/view/', 'login.html');
       		require_once(VIEW_PATH_INC . "footer.html");
		}

		function list_register(){
			require(VIEW_PATH_INC . "top_page_login.php");  
			require(VIEW_PATH_INC . "header.html");
        	loadView('modules/login/view/', 'register.html');
       		require_once(VIEW_PATH_INC . "footer.html");
		}

		function list_user_change(){
			require(VIEW_PATH_INC . "top_page_login.php");  
			require(VIEW_PATH_INC . "header.html");
        	loadView('modules/login/view/', 'change_passw.html');
       		require_once(VIEW_PATH_INC . "footer.html");
		}

		function list_psswd(){
			require(VIEW_PATH_INC . "top_page_login.php");  
			require(VIEW_PATH_INC . "header.html");
        	loadView('modules/login/view/', 'up_psswd.html');
       		require_once(VIEW_PATH_INC . "footer.html");
		}



		function manual_login(){

			$User = array(); 
			$User = ($_POST["data"]);

			$nameUser =  ($User[0]['value']);
			$password =  ($User[1]['value']);

             $exist_user = loadModel(MODEL_LOGIN, "login_model", "register_validate",$nameUser);  
		
			 if ($exist_user == true) { /* El usuario existe */

				if (password_verify($password,$exist_user[0]['password'])) {
									
					/* Token dependiendo el usuario que inicie sesion, lo guardaremos en el servidor */
					$token = encode_token($nameUser);

					 echo json_encode($token);  
				exit();
			}else{

				echo("Contraseña incorrecta");

			}
			
			} else{ /* El usuario no existe */
				echo("NO existe el usuario");
			} 

		}

		function social_login(){
			$User = array(); 
            $User = ($_POST["data"]);

			$nameUser =  ($User[0]); // Cojemo el user ID

	/* 		echo($nameUser); */

			$exist_user = loadModel(MODEL_LOGIN, "login_model", "social_login_data",$nameUser);  

			if ($exist_user == true) { /* El usuario ya esta regfistrado directo login y token */
				$token = encode_token($nameUser);

				echo json_encode($token);  
			
			}else{/* Registramos el usario como social login y logeamos y token */

                
				$ok =  loadModel(MODEL_LOGIN, "login_model", "social_login_register",$User);   

				$token = encode_token($nameUser);

				echo json_encode($token);  
			}

		}



		function get_user_log(){

		    $json = array();

			$token = decode_token($_POST["token"]);
						
			$nameUser = user_from_token($token);   
			$nameUser = ($nameUser['user']);  
	 		$exist_user = loadModel(MODEL_LOGIN, "login_model", "register_validate",$nameUser);  

			echo json_encode($exist_user);
		} 

		function validate_register(){ 

				$User = array();
				$User = ($_POST["data"]);
				

		
				$nameUser =  ($User[0]['value']);
				$exist_user = loadModel(MODEL_LOGIN, "login_model", "register_validate",$nameUser);

			if ($exist_user == true) { /* Usuario ya registrado */
				echo json_encode("Ya existe usuario");
			} else {
				
				/* echo json_encode("Vamos a ello"); */

				$nameUser = ($User[0]['value']);
				$email = ($User[1]['value']);
				$password = ($User[2]['value']);
				$hashavatar = md5(strtolower(trim($nameUser)));
				$hashed_pass = password_hash(strtolower($password), PASSWORD_DEFAULT);
				$avatar="https://www.gravatar.com/avatar/$hashavatar?s=40&d=identicon";
				$tokenMail = generate_Token_secure(20);
				$data_user = [
					'username' => $nameUser,
					'email' => $email,
					'password' => $hashed_pass,
					'avatar' =>  $avatar,
					'tokenemail' => $tokenMail
				];
				$ok = loadModel(MODEL_LOGIN, "login_model", "insert_register",$data_user);
			

				$arrArgument = [
					'type' => 'alta',
					'token' => $tokenMail,
					'inputName' => $nameUser,
					'inputEmail' =>  $email,
				];

			    echo (mail::enviar_email($arrArgument)); 
			} 
		
		
		}
		

		function active_user(){
			
	    	if (isset($_GET['param'])) {
				
	    		loadModel(MODEL_LOGIN, "login_model", "active_user",$_GET['param']);

				/* Redirigimos al login */
	            self::list_login();
	    	}	
	    }

		function send_email_change_passw(){

			    $User = array();
				
				$User = ($_POST["data"]);
				$nameUser =  ($User[0]['value']);
				$exist_user = loadModel(MODEL_LOGIN, "login_model", "select_user_email",$nameUser);
				/* echo json_encode($exist_user); */
				$email =  ($exist_user[0]['email']);
                $tokenMail = ($exist_user[0]['IDUser']);

			 	$arrArgument = [
					'type' => 'changepass',
					'token' => $tokenMail,
					'inputName' => $nameUser,
					'inputEmail' =>  $email,
				];

			    echo (mail::enviar_email($arrArgument));  

		}

		function update_passwd(){ //token user
			
			loadView('modules/login/view/', 'up_psswd.html');
				
	    	if (isset($_GET['param'])) {
				
	    		loadModel(MODEL_LOGIN, "login_model", "update_password",$_GET['param']);

				/* Redirigimos al login */
	            self::list_login();
	    	}	
	
		}

	}