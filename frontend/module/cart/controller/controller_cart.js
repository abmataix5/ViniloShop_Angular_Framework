
viniloshop.controller('controller_cart', function($scope,services,dataCart,toastr,services_cart) {

        $scope.data = dataCart;


      $scope.delete_prod = function(cod_prod) {

        user_active = services.post('cart', 'delete_cart_data', {'token': localStorage.getItem('token'),'prod':cod_prod}).then(function(data) {
                               
            $scope.data = data;
          
          });

          toastr.error('Producto borrado de tu carrito');

           /* Contar productos carrito */
           services_cart.count_product_user();
      };
        
        
      $scope.add_prod = function(cod_prod) {

         
         services.post('cart', 'update_cantidad',{'token':localStorage.getItem('token'),'prod': cod_prod}).then(function(data) {
      
          $scope.data = data;
          
        });

           /* Contar productos carrito */
        services_cart.count_product_user();
        
      };

      $scope.del_prod = function(cod_prod) {

         
        services.post('cart', 'update_cantidad_menos',{'token':localStorage.getItem('token'),'prod': cod_prod}).then(function(data) {
    
         $scope.data = data;
         
       });

           /* Contar productos carrito */
          services_cart.count_product_user();
     };


      $scope.Total = function() {

          let precio_total = 0;

          for (row in $scope.data) {
            precio_total += ($scope.data[row].precio) * ($scope.data[row].cantidad) ;
          }

          return precio_total;
      }; 


      $scope.check_out = function() {

        /* Hay un trigger, que luego de cada compra actualiza el stock de cada producto*/

        services.post('cart', 'check_out',{'token':localStorage.getItem('token')}).then(function(data) {
    
         toastr.success('Compra realizada con exito');
          
        });

   
      }; 
      
        
  
});// end_controller