var viniloshop = angular.module('viniloshop', ['ngRoute','ui.bootstrap']);
//////c
/* console.log(viniloshop); */
viniloshop.config(['$routeProvider', '$locationProvider',
    function ($routeProvider, $locationProvider) {
        $routeProvider
                .when("/home", {
                    templateUrl: "frontend/module/home/view/view_home.html", 
                    controller: "controller_home",
                    resolve: {
                        carrousel: function (services) {

                            return services.get('home','owl_carrousel');  
                        },
                        categorias: function (services) {
                            return services.get('home','categories');
                        },
                        more_groups: function (services) {
                            return services.get('home','more_groups');
                        }
                    }// end_resolve
                }).when("/contact", {
                    templateUrl: "frontend/module/contact/view/view_contact.html", 
                    controller: "controller_contact"
                }) .when("/shop", {
                    templateUrl: "frontend/module/shop/view/view_shop.html", 
                    controller: "controller_shop",
                    resolve: {
                        grupos: function (services) {
                            return services.get('shop', 'grupos_disponibles');
                        } ,
                        all_stock: function (services) {
                            return services.get('shop', 'maps_data');
                        }/* ,
                        favs: function(services) {
                            return services.post('shop', 'sendFavs', {JWT: localStorage.token});
                        },
                        cart: function(services) {
                            return services.post('cart', 'selectCart', {JWT: localStorage.token});
                        }  */
                    } 
                }) .when('/shop/:id_prod' , {
                    templateUrl: "frontend/module/shop/view/view_shopDetails.html",
                    controller: "controller_shopDetails",
                     resolve: {
                        producto: function(services, $route) {
                            console.log($route.current.params.id_prod);
                             return services.post('shop', 'details', {'id': $route.current.params.id_prod}) 
                        } /* ,
                        favs: function(services) {
                            return services.post('shop', 'sendFavs', {JWT: localStorage.token});
                        },
                        cart: function(services) {
                            return services.post('cart', 'selectCart', {JWT: localStorage.token});
                        }  */
                    }
                }).when("/login", {
                    templateUrl: "frontend/module/login/view/login.html",
                    controller: "controller_login"
                }).when("/register", {
                    templateUrl : "frontend/module/login/view/register.html",
                    controller: "controller_register"
                }).when("/recover", {
                    templateUrl: "frontend/module/login/view/recover.html",
                    controller: "controller_recover"
                }).when("/login/activate/:token", {
                    resolve: {
                        activateUser: function(services, $route) {
                            services.put('login', 'active_user', {'token': $route.current.params.token})
                            .then(function(response) {
                                console.log(response);
                                if (response == 'OK') {
                              Window.alert('Cuenta activada');
                                }else {
                               console.log("Erroor");
                                }// end_else
                                location.href = "#/login";
                            }, function(error) {
                                console.log(error);
                            });// end_services
                        }// end_activateUser
                    }// end_resolve
                })/* .when("/login/recover/:token", {
                    templateUrl: "frontend/module/login/view/view_recoverForm.html",
                    controller: "controller_recoverForm",
                    resolve: {
                        checkToken: function(services, $route, toastr) {
                            services.post('login', 'checkTokenRecover', {'token': $route.current.params.token})
                            .then(function(response) {
                                if (response == 'fail') {
                                    toastr.error("The current token is invalid." ,'Error');
                                    location.href = "#/home";
                                }// end_if
                            }, function(error) {
                                console.log(error);
                            });
                        }// end_checkToken
                    }// end_resolve
                }) *//* .when("/profile", {
                    templateUrl: "frontend/module/profile/view/view_profile.html",
                    controller: "controller_profile",
                    resolve: {
                        userData: function (services) {
                            return services.post('profile', 'sendData', {JWT: localStorage.token});
                        }, userPurchases: function(services) {
                            return services.post('profile', 'showPurchases', {JWT: localStorage.token});
                        }, userFavs: function(services) {
                            return services.post('profile', 'sendUserFavs', {JWT: localStorage.token});
                        }// end_userFavs
                    }// end_resolve
                }).when("/cart", {
                    templateUrl: "frontend/module/cart/view/view_cart.html",
                    controller: "controller_cart",
                    resolve: {
                        dataCart: function(services) {
                            return services.post('cart', 'loadDataCart', {JWT: localStorage.token});
                        }
                    }
                }).when("/admin", {
                    templateUrl: "frontend/module/crud/view/view_crud.html",
                    controller: "controller_crud",
                    resolve: {
                        dataCrud: function(services) {
                            return services.post('crud', 'listCars');
                        }
                    }
                }).when("/admin/addCar", {
                    templateUrl: "frontend/module/crud/view/view_crud_addCar.html",
                    controller: "controller_crud_addCar"
                }).otherwise("/home", {
                    templateUrl: "frontend/module/home/view/view_home.html", 
                    controller: "controller_home"
                });     */
    }]);
