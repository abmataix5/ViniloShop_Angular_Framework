viniloshop.controller('controller_shopDetails', function($scope,services,producto,toastr) {

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
       
   console.log(cod_prod);

   if(localStorage.getItem('token')){

    /* Insertar codigo producto, cantidad y IDUSer en la tabla cart */
    
   /*  services.post('shop', 'get_user_from_token', {'token': user_active,'cod_fav':cod_prod})  */

   }else{
       toastr.error('Inicia sesion para poder comprar nuestros productos');
   }
};

});