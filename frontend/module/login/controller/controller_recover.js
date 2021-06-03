viniloshop.controller('controller_recover', function($scope, services,toastr) {
/*     $scope.regUsername = /^[A-Za-z0-9._-]{5,15}$/; */

    $scope.sendRecoverEmail = function() {
        var user =  $scope.usernameRecover;

      services.post('login', 'send_email_change_passw', {user: user})
        .then(function(response){
            console.log(response);
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

viniloshop.controller('controller_recoverForm', function($scope, services) {
  /*   $scope.regPassword = /^[A-Za-z0-9._-]{5,20}$/; */

    $scope.reset_passwd = function() {
        console.log($scope.new_pss);
        services.put('login', 'update_passwd', {password:$scope.new_pss})
        .then(function(response){
            if (response == 'true') {
           /*      toastr.success('You have updated your password succesfully.' ,'Password updated succesfully.'); */
                location.href = '#/login';
            }else {
            /*     toastr.error('Something happened when trying to update your password.' ,'Error'); */
            }// end_else
        }, function(error) {
            console.log(error);
        });// end_services
    };// end_setNewPassword
});// end_controller_recoverForm