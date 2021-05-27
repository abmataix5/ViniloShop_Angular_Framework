viniloshop.controller('controller_shop', function($scope,services,grupos,all_stock) {

    console.log(grupos);

    var filtros = [];
    var filtros_catego = [];
   
    $scope.grupos = grupos;
    $scope.totalItems = all_stock.length;
    $scope.currentPage = 1;
    $scope.itemsPerPage = 12;


    $scope.showDetails = function(id_prod) {
        console.log(id_prod);
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
    
            producto_filtrado = services.post('shop', 'checks', {'checks': filtros,'checks_2': filtros_catego}) 

            /* Para poder sacar los datos en un array normal */

            producto_filtrado.then(function(data) {
                       
                $scope.stock = data.slice((($scope.currentPage - 1) * $scope.itemsPerPage), ($scope.currentPage * $scope.itemsPerPage));;
                all_stock = data;
                $scope.totalItems = data.length; 
           
            });
    };

      /* END FILTROS  */

    $scope.pageChanged = function() {
        $scope.stock = all_stock.slice((($scope.currentPage - 1) * $scope.itemsPerPage), ($scope.currentPage * $scope.itemsPerPage));
    };// end_PageChanged



    /* Si hay algun flitro activo por el salto de home al shop entra aqui */

  if(localStorage.getItem('categoria')){


     
        var catego=  localStorage.getItem('categoria')
        catego = services.post('shop', 'por_categoria', {'data': catego}) 
        console.log(catego);
        

        catego.then(function(data) {
                       console.log(data)
            $scope.stock = data.slice((($scope.currentPage - 1) * $scope.itemsPerPage), ($scope.currentPage * $scope.itemsPerPage));;
            all_stock = data;
            $scope.totalItems = data.length; 
       
        });

        localStorage.removeItem('categoria');
        
    }else{
        $scope.stock = all_stock.slice((($scope.currentPage - 1) * $scope.itemsPerPage), (($scope.currentPage) * $scope.itemsPerPage));
    }



    /* FAVORITOS */

    $scope.click_fav = function(cod_prod) {
    console.log(cod_prod);

    if(localStorage.getItem('token')){
      console.log("Logued");

      var user_active = localStorage.getItem('token');
      console.log(user);
    }else{
        location.href = "#/login";
    }
 
};

   

});