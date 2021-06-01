viniloshop.factory('services_logIn', ['$rootScope', 'services', 'services_localStorage', function($rootScope, services, services_localStorage) {
    let service = {printMenu: printMenu,redirectLogIn: redirectLogIn};

    return service;

    function printMenu() {
      
        if ((localStorage.token)) {
            
            services.post('login', 'get_user_log', {token: localStorage.token})
            .then(function(response) {

     
             if (response) {
                    $rootScope.showProfile = true; 
                    $rootScope.showLogIn = false;
                    $rootScope.showCart = true;
                    $rootScope.showLogOut = true;
                    $rootScope.profileName = response[0]['username'];
                    $rootScope.profileImg = response[0]['avatar'];
                }// end_if
          
                
            }, function(error) {
                console.log(error);
            });// end_services
        }else{
            $rootScope.showProfile = false; 
            $rootScope.showLogIn = true;
            $rootScope.showCart = false;
            $rootScope.showLogOut = false;
        }

    }// end_logIn

    function redirectLogIn(token) {
  
       services_localStorage.setSession(token);
       printMenu();
       location.href = "#/home";

    }// end_redirectLogIn


    

 
}]);// end_services_login