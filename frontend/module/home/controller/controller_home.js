
viniloshop.controller('controller_home', function($scope,services,carrousel,categorias,more_groups,services_logIn) {

 

    let count = 3;
    $scope.myInterval = 3000;
    $scope.noWrapSlides = false;
    $scope.active = 0;

    $scope.slides = carrousel;  
    $scope.categorias = categorias;
    $scope.more_groups = more_groups.slice(0,count);



    /*Function para cargar mas grupos  */

  $scope.load_more = function(){
    count=count+3;
    $scope.more_groups = more_groups.slice(0,count);    
    
    
  }

          /* Redirect shop por categoria */

  $scope.redirectShopCategorias = function(categoria) {

    localStorage.categoria = categoria;
    location.href = "#/shop";
}


    /* Redirect shop sin filtros*/

$scope.redirectShop = function() {
  
  location.href = "#/shop";
}
     





});// end_controller









