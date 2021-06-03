viniloshop.factory('services_logInSocial', ['services', 'services_localStorage', 'services_logIn',function(services, toastr, services_logIn) {
    let service = {initialize: initialize, socialLogIn: socialLogIn};
    return service;


    function initialize() {
        var firebaseConfig = {
            apiKey: "AIzaSyAHXxF6wSxy7_SFuNkuc4Ulw6AtvFK3cls",
            authDomain: "ViniloShop.firebaseapp.com",
            databaseURL: "https://viniloshop.firebaseio.com",
            projectId: "viniloshop",
            storageBucket: "",
            messagingSenderId: "326216469824"
          };
          // Initialize Firebase
          firebase.initializeApp(firebaseConfig);
    }// end_initialize


    function socialLogIn(User_info) {
        services.post('login', 'social_login', {data: User_info})
        .then(function(response) {
            
           var token2 = response.split(" ");
            var token = token2[0].replace(/['"]+/g,'');  
            console.log(token);
            services_logIn.redirectLogIn(token); 
           
        }, function(error) {
            console.log(error);
        });
    }// end_socialLogIn
}]);// end_services_logInSocial

viniloshop.factory('services_Google', ['services_logInSocial', function(services_logInSocial) {
    let service = {logIn: logIn};
    return service;

    function logIn() {

      
         
        let provider = new firebase.auth.GoogleAuthProvider();
    /*     provider.addScope('email'); */
        let authService = firebase.auth();

        authService.signInWithPopup(provider)
        .then(function(result) {
            var User_info = [("GOOGLE" + result.user.uid), result.user.email, result.user.displayName, result.user.photoURL];
            console.log(User_info);
            services_logInSocial.socialLogIn( User_info);
        }).catch(function(error) {
            console.log(error);
        });
        authService.signOut()
      
    }// end_logIn
}]);// end_services_Google

viniloshop.factory('services_GitHub', ['services_logInSocial', function(services_logInSocial) {
    let service = {logIn: logIn};
    return service;

    function logIn() {

       
        let provider = new firebase.auth.GithubAuthProvider();
/*         provider.addScope('email'); */
        let authService = firebase.auth();

        authService.signInWithPopup(provider)
        .then(function(result) {
            let User_info = [("GITHUB" + result.user.uid), result.user.email, result.user.displayName, result.user.photoURL];
            console.log(User_info);
             services_logInSocial.socialLogIn(User_info); 
        }).catch(function(error) {
            console.log(error);
        });

        authService.signOut()
    }// end_logIn

  
}]); 