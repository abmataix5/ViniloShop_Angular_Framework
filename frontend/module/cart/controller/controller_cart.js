
viniloshop.controller('controller_cart', function($scope,services,dataCart) {

  $scope.data = dataCart;
  /* Resolve per a que mos vingen els productes del tio loguejat */
  $scope.data = dataCart;



console.log(dataCart);


$scope.delete_prod = function(cod_prod) {

  console.log(cod_prod);

  user_active = services.post('cart', 'delete_cart_data', {'token': localStorage.getItem('token'),'prod':cod_prod}) 
console.log(user_active);
window.location.reload();
};// end_PageChanged
  
  
$scope.add_prod = function(cantidad) {

  cantidad = (cantidad + 2);

  console.log(cantidad );


};// end_PageChanged
  
  
});// end_controller