viniloshop.controller('controller_register', function($scope,services,toastr) {

    $scope.regUsername = /^[A-Za-z0-9._-]{5,15}$/;
    $scope.regEmail = /^[A-Za-z0-9._-]{5,20}@[a-z]{3,6}.[a-z]{2,4}$/;
    $scope.regPassword = /^[A-Za-z0-9._-]{5,20}$/; 

   $scope.register = function() {

    if(!$scope.username){
        $scope.error_username = "Usuario no valido";
      
     }else if(!$scope.email){
        $scope.error_username = "";
        $scope.error_email = "Email no valido";
     }
     else if(!$scope.password){
        $scope.error_email = "";
        $scope.error_passwd = "Contrasena no segura";
     }else if($scope.password_2 != $scope.password){
        $scope.error_passwd = "";
        $scope.error_passwd2 = "Las dos contrasenas tienen que ser iguales";
     }else{

            let user = {'username': $scope.username, 
                        'email': $scope.email, 
                        'password': $scope.password, 
                        'password_2': $scope.password_2};

    
            services.post('login', 'validate_register',{'data':user} ) .then(function(response) {
        
    
                if (response != 'false') {


                    toastr.success("Le hemos enviado un email de confirmacion a su cuenta de email");
                    location.href = "#/login";
                
                }else {
                    
                    
                    toastr.error("El usuario ya existe");
                    
                }// end_else

            }, function(error) {
                console.log(error);
            });
        }

   }
    
});