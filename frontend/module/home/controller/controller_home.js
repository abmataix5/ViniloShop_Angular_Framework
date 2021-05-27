
viniloshop.controller('controller_home', function($scope,services,carrousel,categorias,more_groups,services_logIn) {

 /*    console.log("dentro vinilo.controller"); */

    let count = 3;

    $scope.slides = carrousel;  
    $scope.categorias = categorias;
    $scope.more_groups = more_groups.slice(0,count);



    angular.element(document).ready(function() {


         /* Owl carrousel */
  
      $('.owl-carousel').owlCarousel({
        loop:true,
        margin:10,
        nav:false,
        dots:false,
        autoplay:true,
        autoplayTimeout:3000,
        autoplayHoverPause:true,
        responsive:{
          0:{
            items:1
          },
          600:{
            items:3
          },
          1000:{
            items:3
          }
        }
    
       })  


  
  });


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









