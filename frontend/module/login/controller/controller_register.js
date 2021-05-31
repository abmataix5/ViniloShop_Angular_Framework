viniloshop.controller('controller_register', function($scope,services,toastr) {
 /*    $scope.regUsername = /^[A-Za-z0-9._-]{5,15}$/;
    $scope.regEmail = /^[A-Za-z0-9._-]{5,20}@[a-z]{3,6}.[a-z]{2,4}$/;
    $scope.regPassword = /^[A-Za-z0-9._-]{5,20}$/; */

   $scope.register = function() {

        let user = {'username': $scope.username, 
                    'email': $scope.email, 
                    'password': $scope.password, 
                    'password_2': $scope.password_2};

     console.log(user);
 /*     Object.values(user); */

     services.post('login', 'validate_register',{'data':user} )
     .then(function(response) {
         console.log(response);
        
           
         if (response != "Ya existe usuario") {


             toastr.success("Le hemos enviado un email de confirmacion a su cuenta de email");
             location.href = "#/login";
         
         }else {
            console.log(" NO OK");
              
              toastr.error("Error en el registro");
         }// end_else
     }, function(error) {
         console.log(error);
     }); // end_services
    }; // end_register 

    
});