viniloshop.controller('controller_login', function($scope, $rootScope,services,services_logIn, services_Google, services_GitHub,toastr,services_logInSocial) {

    $scope.regUsername = /^[A-Za-z0-9._-]{5,15}$/;
    $scope.regEmail = /^[A-Za-z0-9._-]{5,20}@[a-z]{3,7}.[a-z]{2,4}$/;
    $scope.regPassword = /^[A-Za-z0-9._-]{5,20}$/;
    
    /* Para que no de error el inizialitze al abrir varias sesiones */
    if (!$rootScope.socialInit) {
        $rootScope.socialInit = 0;
    }
    if ($rootScope.socialInit == 0) {
        services_logInSocial.initialize();
        $rootScope.socialInit = 1;
    }



    $scope.login = function() {




    let user = {'username': $scope.username, 'password': $scope.password};
             

    if(!$scope.username){
        $scope.error_username = "Usuario no valido";
      
     }else if(!$scope.password){
        $scope.error_username = "";
        $scope.error_passwd = "Contrasena no valida";
     }else{
        $scope.error_passwd = "";
       
        services.post('login', 'manual_login',{'data':user}).then(function(response){
        
          console.log(response);
            if (response != 'false') {

                var token2 = response.split(" ");
                var token = token2[0].replace(/['"]+/g,'');  
       
                services_logIn.redirectLogIn(token);
                toastr.success('Sesion iniciada');
            }else {
              
                console.log("error login");
                toastr.error('Usuario no encontrado');
            }

        }, function(error) {
            console.log(error);
        });
        
     }
 

    };// end_logIn



     $scope.login_Gmail = function() {
     
         services_Google.logIn(); 
     };// end_logInGoogle
     

    $scope.login_GH = function() {
        console.log("ghub");
        services_GitHub.logIn(); 
    };// end_logInGitHub 

});