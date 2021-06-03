viniloshop.factory('services_cart', ['$rootScope', 'services', function($rootScope, services) {
    let service = {count_product_user: count_product_user};

    return service;

    function count_product_user() {
      

            
            services.post('cart', 'count_cart_prod', {token: localStorage.token})
            .then(function(response) {

                var total = response[0]['sum'];
                
                $rootScope.cart_total = total;
         
                
            }, function(error) {
                console.log(error);
            });// end_services
     

    }//


 
}]);