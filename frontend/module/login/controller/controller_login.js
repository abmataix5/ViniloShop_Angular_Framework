viniloshop.controller('controller_login', function($scope, $rootScope,services,services_logIn, services_Google, services_GitHub,toastr,services_logInSocial) {
/*     $scope.regUsername = /^[A-Za-z0-9._-]{5,15}$/;
    $scope.regPassword = /^[A-Za-z0-9._-]{5,20}$/; */
    
    if (!$rootScope.socialInit) {
        $rootScope.socialInit = 0;
    }// end_if
    if ($rootScope.socialInit == 0) {
        services_logInSocial.initialize();
        $rootScope.socialInit = 1;
    }// end_if

    $scope.login = function() {

    let user = {'username': $scope.username, 'password': $scope.password};
             
        
       services.post('login', 'manual_login',{'data':user}).then(function(response){
        
          
            if (response != "NO existe el usuario") {

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

    };// end_logIn



     $scope.login_Gmail = function() {
     
         services_Google.logIn(); 
     };// end_logInGoogle
     

    $scope.login_GH = function() {
        console.log("ghub");
        services_GitHub.logIn(); 
    };// end_logInGitHub 

});