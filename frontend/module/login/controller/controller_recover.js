viniloshop.controller('controller_recover', function($scope, services,toastr) {
/*     $scope.regUsername = /^[A-Za-z0-9._-]{5,15}$/; */

    $scope.sendRecoverEmail = function() {
        var user =  $scope.usernameRecover;

      services.post('login', 'send_email_change_passw', {user: user}).then(function(response){
   
           
             if (response) {
            console.log(response);
                toastr.success('Hemos enviado un correo a tu cuenta para recuperar tu contraseña');
                location.href = "#/login"
            }else {
                toastr.error('Error');
            }// end_else 

        }, function(error) {
            console.log(error);
        });

    }; //end_sendRecoverEmail

});// end_controller_recover

viniloshop.controller('controller_recoverForm', function($scope, services,checkToken,toastr) {
  
       $scope.regPassword = /^[A-Za-z0-9._-]{5,20}$/; 

   
    $scope.reset_passwd = function() {

        $scope.regPassword = /^[A-Za-z0-9._-]{5,20}$/;

         if(!$scope.password){

            $scope.error_passw = "Contrasena no segura";
    
         }else if($scope.password_2 != $scope.password){
    
            $scope.error_passw = "";
            $scope.error_passw2 = "Las dos contrasenas tienen que ser iguales";
            
         }else{

            var token = localStorage.getItem('IDUser')

            services.put('login', 'update_passwd', {password:$scope.password_2,token: token})
            .then(function(response){
                console.log(response);
                if (response == 'true') {
                    toastr.success('Tu contrasena ha sido actualizada con exito.' ,'Password update.');
                    localStorage.removeItem('IDUser');
                    location.href = '#/login';
                }else {
                    toastr.error('Error en la actualiacion de su contraseña.' ,'Error');
                }// end_else
            }, function(error) {
                console.log(error);
            });// end_services
    
           

         }
           
     
    };// end_setNewPassword
});// end_controller_recoverForm