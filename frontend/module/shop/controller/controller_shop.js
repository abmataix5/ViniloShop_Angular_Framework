viniloshop.controller('controller_shop', function($rootScope,$scope,services,grupos,toastr,services_cart) {

    cargar_data();
  

    var filtros = [];
    var filtros_catego = [];
    var all_stock;

    $rootScope.grupos = grupos;
    $scope.totalItems = all_stock.length;
    $scope.currentPage = 1;
    $scope.itemsPerPage = 12;



    function cargar_data(){

        all_stock = services.post('shop', 'data_stock',{'token': localStorage.getItem('token')}) 
       
        all_stock.then(function(data) {
                       
           all_stock = data;
         
      

            if(localStorage.getItem('categoria')){
   
                var catego=  localStorage.getItem('categoria');
                catego = services.post('shop', 'por_categoria', {'data': catego,'token': localStorage.getItem('token')}) 
               
                catego.then(function(data) {
                       
                    $scope.stock = data.slice((($scope.currentPage - 1) * $scope.itemsPerPage), ($scope.currentPage * $scope.itemsPerPage));;
                    all_stock = data;
                    $scope.totalItems = data.length; 
               
                });
        
                localStorage.removeItem('categoria');
                
            }else if(localStorage.search){

                var search=  localStorage.getItem('search');
                search = services.post('shop', 'search', {'data': search,'token': localStorage.getItem('token')}) 
               
                search.then(function(data) {
               
                    $scope.stock = data.slice((($scope.currentPage - 1) * $scope.itemsPerPage), ($scope.currentPage * $scope.itemsPerPage));;
                    all_stock = data;
                    $scope.totalItems = data.length; 
                      
                });

                localStorage.removeItem('search');
                
            }else{
               
                $scope.stock = all_stock.slice((($scope.currentPage - 1) * $scope.itemsPerPage), (($scope.currentPage) * $scope.itemsPerPage));
                $scope.totalItems = data.length; 
               
            }
        });
     
    }


    $scope.showDetails = function(id_prod) {
       
         location.href = "#/shop/" + id_prod; 

    };// end_showDetails


                            /* FILTROS  */

    $scope.filtro_rock = function(filtro) {
        

        if( filtros.includes( 'Rock' )  == true){
 
            removeItemFromArr( filtros, 'Rock' );

        }  else{
       
            filtros.push(filtro);
        
        }
        

    };

    $scope.filtro_pop = function(filtro) {
        

        if( filtros.includes( 'Pop' )  == true){
          
           
            removeItemFromArr( filtros, 'Pop' );
        
        }  else{
          
            filtros.push(filtro);
      
        }
        

    };

    $scope.filtro_elec = function(filtro) {
        

        if( filtros.includes( 'Electronica' )  == true){
       
            removeItemFromArr( filtros, 'Electronica' );
      
        }  else{
           
            filtros.push(filtro);
        
        }
        

    };

    $scope.filtro_clasica = function(filtro) {
        

        if( filtros.includes( 'Clasica' )  == true){
     
            removeItemFromArr( filtros, 'Clasica' );
        
        }  else{
        
            filtros.push(filtro);
         
        }
        

    };

    $scope.filtro_rap = function(filtro) {
        
        if( filtros.includes( 'Rap' )  == true){
        
            removeItemFromArr( filtros, 'Rap' );
          
        }  else{
         
            filtros.push(filtro);
        
        }   

    };

    /* Filtros por categoria */

    $scope.filtro_cami = function(filtro) {
        
        if( filtros_catego.includes( 'Camiseta' )  == true){
        
            removeItemFromArr( filtros_catego, 'Camiseta' );
          
        }  else{
         
            filtros_catego.push(filtro);
        
        }   

    };

    $scope.filtro_disco = function(filtro) {
        
        if( filtros_catego.includes( 'Disco' )  == true){
        
            removeItemFromArr( filtros_catego, 'Disco' );
          
        }  else{
         
            filtros_catego.push(filtro);
        
        }   

    };

    $scope.filtro_poster = function(filtro) {
        
        if( filtros_catego.includes( 'Poster' )  == true){
        
            removeItemFromArr( filtros_catego, 'Poster' );
          
        }  else{
         
            filtros_catego.push(filtro);
        
        }   

    };

 

    $scope.filtro_vinilo = function(filtro) {
        
        if( filtros_catego.includes( 'Vinilo' )  == true){
        
            removeItemFromArr( filtros_catego, 'Vinilo' );
          
        }  else{
         
            filtros_catego.push(filtro);
        
        }   

    };

    /* END CATEGO FILTERS */


    $scope.filtrar = function() {

            localStorage.filters = filtros;
            var producto_filtrado = "";
    
            producto_filtrado = services.post('shop', 'checks', {'checks': filtros,'checks_2': filtros_catego,'token': localStorage.getItem('token')}) 

     

            producto_filtrado.then(function(data) {
                     
                
                $scope.stock = data.slice((($scope.currentPage - 1) * $scope.itemsPerPage), ($scope.currentPage * $scope.itemsPerPage));
                all_stock = data;

                $scope.totalItems = data.length;  /* Para la paginacion */
           
            });
    };

      /* END FILTROS  */


    $scope.pageChanged = function() {
        $scope.stock = all_stock.slice((($scope.currentPage - 1) * $scope.itemsPerPage), ($scope.currentPage * $scope.itemsPerPage));
    };// end_PageChanged









    /* FAVORITOS */

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

/* Añadir a carrito */

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

                               /* Actualizar total pructos en el carrito */
                                 services_cart.count_product_user();

                        }else{
                            var update_cantidad = services.post('cart', 'update_cantidad',{'token':localStorage.getItem('token'),'prod': cod_prod}); 
                            toastr.success('Has anadido otro producto del mismo tipo a tu carrito'); 

                               /* Actualizar total pructos en el carrito */
                                 services_cart.count_product_user();
                        }
                    
                    });

             

         }else{
            toastr.error('Inicia sesion para poder comprar nuestros productos');
            location.href = "#/login";
        }
    };

   

});