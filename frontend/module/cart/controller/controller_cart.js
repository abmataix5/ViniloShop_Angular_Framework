
viniloshop.controller('controller_cart', function($scope,services,dataCart,toastr,services_cart) {

        $scope.data = dataCart;
   console.log($scope.data);

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

        services.post('cart', 'comprobar_stock',{'token':localStorage.getItem('token'),'prod': cod_prod}).then(function(data) {
      
     

        if(data[0]['stock'] == data[0]['cantidad']){

          /* Funcion para eliminar elementos, le pasamos el cod_prodcuto, 
          cuando la cantidad que quiere el usuario es igual al maximo stock
          quitamos el boton de sumar productos */

              eliminarElemento(cod_prod);
      
        }
          
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

        services.post('cart', 'check_out',{'token':localStorage.getItem('token')}).then(function(data) {
    
         console.log(data);
         toastr.success('Compra realizada con exito');
          
        });

   
      }; 
      
        
  
});// end_controller