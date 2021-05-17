viniloshop.controller('controller_shopDetails', function($scope,services,producto) {

    $scope.data = producto;

    console.log($scope.data = producto); 



    $scope.back_shop = function() {
       
        location.href = "#/shop";
    };
});