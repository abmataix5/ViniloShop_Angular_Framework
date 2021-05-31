viniloshop.controller('controller_shopDetails', function($scope,services,producto) {

    $scope.data = producto;

    console.log($scope.data = producto); 



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
});