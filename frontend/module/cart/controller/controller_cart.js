
viniloshop.controller('controller_cart', function($scope,services,dataCart,toastr) {

        $scope.data = dataCart;
   

      $scope.delete_prod = function(cod_prod) {

        user_active = services.post('cart', 'delete_cart_data', {'token': localStorage.getItem('token'),'prod':cod_prod}).then(function(data) {
                               
            $scope.data = data;
          
          });

        toastr.error('Producto borrado de tu carrito');

      };
        
        
      $scope.add_prod = function(cod_prod) {

         
         services.post('cart', 'update_cantidad',{'token':localStorage.getItem('token'),'prod': cod_prod}).then(function(data) {
      
          $scope.data = data;
          
        });

      };

      $scope.del_prod = function(cod_prod) {

         
        services.post('cart', 'update_cantidad_menos',{'token':localStorage.getItem('token'),'prod': cod_prod}).then(function(data) {
    
         $scope.data = data;
         
       });

     };


      $scope.Total = function() {

          let precio_total = 0;

          for (row in $scope.data) {
            precio_total += ($scope.data[row].precio) * ($scope.data[row].cantidad) ;
          }

          return precio_total;
      }; 

      
        
  
});// end_controller