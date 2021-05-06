<?php
    class login_dao {
        static $_instance;

        private function __construct() {

        }

        public static function getInstance() {
            if(!(self::$_instance instanceof self)){
                self::$_instance = new self();
            }
            return self::$_instance;
        }

        public function validate_register($db,$nameUser) {
            $id_user = $nameUser;
         
            $sql = "SELECT * FROM user WHERE username='$id_user' or IDUser = '$id_user'";
            $stmt = $db->ejecutar($sql);
            return $db->listar($stmt);
        }
        
        public function insert_register_dao($db,$data_user) {
            $nameUser =  ($data_user['username']);
            $email =  ($data_user['email']);
            $hashed_pass =  ($data_user['password']);
            $avatar =  ($data_user['avatar']);
            $token_email =  ($data_user['tokenemail']);
            
            $idUser = generate_Token_secure(20);
            $idUser = 'AUTO-' . $idUser;
            $sql = "INSERT INTO `user` (`username`, `email`, `password`, `tipo`, `avatar`, `IDUser`, `activate`, `token`) 
            VALUES ( '$nameUser', '$email', '$hashed_pass','cliente', '$avatar','$idUser','false', '$token_email')";
    
            return $db->ejecutar($sql);
        }



        public function update_active_user($db,$arrArgument) {
          
           $sql = "UPDATE user SET activate = 'true' WHERE token = '$arrArgument'";
            return $db->ejecutar($sql); 
        }
    

        
        public function select_user($db,$nameUser) {
            $id_user = $nameUser;
         
            $sql = "SELECT IDUser,email FROM user WHERE username='$id_user' or IDUser = '$id_user'";
            
            $stmt = $db->ejecutar($sql);
            return $db->listar($stmt);
        }

        
        public function up_passwd($db,$arrArgument) {

            
            $password = $arrArgument;
            $hashed_pass = password_hash(strtolower($password), PASSWORD_DEFAULT);
          
            $sql = "UPDATE user SET password = '$password' WHERE IDUSer = '$arrArgument'";
             return $db->ejecutar($sql); 
         }

         public function select_social_login($db,$nameUser) {
            $id_user = $nameUser;
         
            $sql = "SELECT * FROM user WHERE IDUser='$id_user'";
            $stmt = $db->ejecutar($sql);
            return $db->listar($stmt);
        }

        public function insert_register_social($db,$User) {
            $idUser = ($User[0]);
            $nameUser =  ($User[2]);
            $email =  ($User[1]);
     /*        $hashed_pass =  ($data_user['password']); */
            $avatar =  ($User[3]);
        /*     $token_email =  ($data_user['tokenemail']); */
            
            $sql = "INSERT INTO `user` (`username`, `email`, `password`, `tipo`, `avatar`, `IDUser`, `activate`, `token`) 
            VALUES ( '$nameUser', '$email', '','cliente', '$avatar','$idUser','true', '')";
    
            return $db->ejecutar($sql);
        }

     
    }
