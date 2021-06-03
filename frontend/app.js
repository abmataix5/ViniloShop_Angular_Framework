var viniloshop = angular.module('viniloshop', ['ngRoute','ui.bootstrap','toastr']);

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
                        }
                    } 
                }) .when('/shop/:id_prod' , {
                    templateUrl: "frontend/module/shop/view/view_shopDetails.html",
                    controller: "controller_shopDetails",
                     resolve: {
                        producto: function(services, $route) {
                            
                             return services.post('shop', 'details', {'id': $route.current.params.id_prod,'token':localStorage.getItem('token')}) 
                        } 
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
                         
                                if (response == 'OK') {
                              toastr.success('Cuenta activada');
                                }else {
                               console.log("Erroor");
                                }// end_else
                                location.href = "#/login";
                            }, function(error) {
                                console.log(error);
                            });// end_services
                        }// end_activateUser
                    }// end_resolve
                }) .when("/login/recover/:token", {
                    templateUrl: "frontend/module/login/view/recover_form.html",
                    controller: "controller_recoverForm",
                    resolve: {
                        checkToken: function(services, $route) {

                           localStorage.setItem('IDUser', $route.current.params.token);
                           return services.post('login', 'checkTokenRecover', {'token': $route.current.params.token});
                       
                        }// end_checkToken
                    }// end_resolve
                })  .when("/cart", {
                    templateUrl: "frontend/module/cart/view/cart.html",
                    controller: "controller_cart",
                   resolve: {
                        dataCart: function(services) {
                    
                            return services.post('cart','select_cart_data',{token: localStorage.getItem('token')});
                        }
                    }  
                })

           
    }]);



    viniloshop.run(function($rootScope,services_logIn,toastr) {
       
        services_logIn.printMenu();
    
       
        
        $rootScope.closeSessionClick = function () {
          
            localStorage.removeItem('token');
            services_logIn.printMenu();
            toastr.error("Cerrando sesion...." ,'Log Out');
            location.href = "#/home";
        }

            
   
    
       
    


      });