
viniloshop.controller('controller_cart', function($scope,services,dataCart) {

        $scope.data = dataCart;
        

      $scope.delete_prod = function(cod_prod) {

        user_active = services.post('cart', 'delete_cart_data', {'token': localStorage.getItem('token'),'prod':cod_prod}) 

        user_active.then(function(data) {
                                      
          $scope.data = data;
        
        });

      };
        
        
      $scope.add_prod = function(cantidad) {

        cantidad = (cantidad + 2);

        console.log(cantidad );


      };


      $scope.Total = function() {

          let precio_total = 0;

          for (row in $scope.data) {
            precio_total += ($scope.data[row].precio) * ($scope.data[row].cantidad) ;
          }



          return precio_total;
      }; 
        
  
});// end_controller