viniloshop.factory('services_cart', ['$rootScope', 'services', function($rootScope, services) {
    let service = {count_product_user: count_product_user};

    return service;

    function count_product_user() {
      
 /*        $rootScope.showCount = response.length; */
            
            services.post('cart', 'count_cart_prod', {token: localStorage.token})
            .then(function(response) {

                var total = response[0]['sum(cart.cantidad)'];
                
                $rootScope.cart_total = total;
         
                
            }, function(error) {
                console.log(error);
            });// end_services
     

    }// end_logIn

 


    

 
}]);// end_services_login