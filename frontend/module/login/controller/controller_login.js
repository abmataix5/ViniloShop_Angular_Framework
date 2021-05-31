viniloshop.controller('controller_login', function($scope,services,services_logIn, services_Google, services_GitHub,toastr) {
/*     $scope.regUsername = /^[A-Za-z0-9._-]{5,15}$/;
    $scope.regPassword = /^[A-Za-z0-9._-]{5,20}$/; */
    

    $scope.login = function() {
        let user = {'username': $scope.username, 'password': $scope.password};
        console.log(user);
        
        
       services.post('login', 'manual_login',{'data':user})
        .then(function(response){
            console.log(response);
            if (response != "NO existe el usuario") {

                var token2 = response.split(" ");
                var token = token2[0].replace(/['"]+/g,'');  
                console.log(token);
                services_logIn.redirectLogIn(token);
                toastr.success('Sesion iniciada');
            }else {
              
                console.log("error login");
                toastr.error('Usuario no encontrado');
            }// end_else

        }, function(error) {
            console.log(error);
        }); // end_services 
    };// end_logIn

     $scope.login_Gmail = function() {
     
         services_Google.logIn(); 
    };// end_logInGoogle

    $scope.login_GH = function() {
        console.log("ghub");
        services_GitHub.logIn(); 
    };// end_logInGitHub 

});