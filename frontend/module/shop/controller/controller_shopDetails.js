viniloshop.controller('controller_shopDetails', function($scope,services,producto,toastr,services_cart) {

    $scope.data = producto;

    $scope.back_shop = function() {
       
        location.href = "#/shop";
    };


    $scope.click_fav = function(cod_prod) {

    
        if(localStorage.getItem('token')){
        
        var user_active = localStorage.getItem('token');
        

        user_active = services.post('shop', 'get_user_from_token', {'token': user_active,'cod_fav':cod_prod}) 

        user_active.then(function(data) {
                    

            if(data == 'like'){
            
                document.getElementById("fav-" + cod_prod) ? document.getElementById("fav-" + cod_prod).className = "fas fa-heart unlike" : null;
            }else{

                document.getElementById("fav-" + cod_prod) ? document.getElementById("fav-" + cod_prod).className = "far fa-heart like" : null;
            }
            
        });

     

        }else{
            toastr.error('Inicia sesion para los  favoritos');
            location.href = "#/login";
        }
 
  
   };

   $scope.buy_product = function(cod_prod) {


    if(localStorage.getItem('token')){

                /* Insertar codigo producto, cantidad y IDUSer en la tabla cart */

                var existe_carrito = services.post('cart', 'select_prod_user',{'token':localStorage.getItem('token'),'prod': cod_prod}); 
                
                existe_carrito.then(function(data) {

                /* Si no existe aun, insert en tabla cart */ /* Si ya existe UPDATE cantidad + 1 */

                    if(data.length == 0){

                        var insert_product = services.post('cart', 'insert_product',{'token':localStorage.getItem('token'),'prod': cod_prod});  

                        insert_product.then(function(data) {
                                        
        
                        
                            if(data == 'true'){
                                toastr.success('Producto anadido a tu carrito');
                            }else{
                                toastr.error('Problemas con el stock de este producto');
                            }
                            
                        });

                        /* Contar productos carrito */
                        services_cart.count_product_user();

                    }else{
                        var update_cantidad = services.post('cart', 'update_cantidad',{'token':localStorage.getItem('token'),'prod': cod_prod}); 
                        toastr.success('Has anadido otro producto del mismo tipo a tu carrito'); 

                      /* Contar productos carrito */
                        services_cart.count_product_user();
                    }
                
            });

        

    }else{
        toastr.error('Inicia sesion para poder comprar nuestros productos');
    }
};

});