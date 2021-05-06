function valide_login(){
	if(document.formlogin.username.value.length === 0){
		document.getElementById('e_user').innerHTML = "Tienes que escribir el usuario";
		document.formlogin.username.focus();
		return 0;
	}
	document.getElementById('e_user').innerHTML = "";

	if(document.formlogin.password.value.length === 0){
		document.getElementById('e_password').innerHTML = "Tienes que escribir la contraseña";
		document.formlogin.password.focus();
		return 0;
	}
	document.getElementById('e_password').innerHTML = "";
}

function valide_register(){
	var mailp = /^[a-zA-Z0-9_\.\-]+@[a-zA-Z0-9\-]+\.[a-zA-Z0-9\-\.]+$/;
	
	if(document.formregister.username.value.length === 0){
		document.getElementById('e_userr').innerHTML = "Tienes que escribir el usuario";
		document.formregister.username.focus();
		return 0;
	}
	if(document.formregister.username.value.length <= 2){
		document.getElementById('e_userr').innerHTML = "El usuario tiene que tener más de 2 caracteres";
		document.formregister.username.focus();
		return 0;
	}
	document.getElementById('e_userr').innerHTML = "";

    if(document.formregister.email.value.length === 0){
		document.getElementById('e_mail').innerHTML = "Tienes que escribir el mail";
		document.formregister.email.focus();
		return 0;
	}
	if(!mailp.test(document.formregister.email.value)){
		document.getElementById('e_mail').innerHTML = "El formato del mail es invalido";
		document.formregister.email.focus();
		return 0;
	}
	document.getElementById('e_mail').innerHTML = "";

	

	if(document.formregister.password.value.length === 0){
		document.getElementById('e_passwordr').innerHTML = "Tienes que escribir la contraseña";
		document.formregister.password.focus();
		return 0;
	}
	if(document.formregister.password.value.length < 6){
		document.getElementById('e_passwordr').innerHTML = "La contraseña tiene que tener más de 6 caracteres";
		document.formregister.password.focus();
		return 0;
	}
	document.getElementById('e_passwordr').innerHTML = "";

	if(document.formregister.password2.value.length === 0){
		document.getElementById('e_rpasswordr').innerHTML = "Tienes que escribir la contraseña";
		document.formregister.password2.focus();
		return 0;
	}
	if(document.formregister.password2.value != document.formregister.password.value){
		document.getElementById('e_rpasswordr').innerHTML = "La contraseña tiene que ser la misma";
		document.formregister.password2.focus();
		return 0;
	}
	document.getElementById('e_rpasswordr').innerHTML = "";
}

function valide_psswd(){
	
	

	if(document.form_psswd.password.value.length === 0){
		document.getElementById('e_passwordr').innerHTML = "Tienes que escribir la contraseña";
		document.formregister.password.focus();
		return 0;
	}
	if(document.form_psswd.password.value.length < 6){
		document.getElementById('e_passwordr').innerHTML = "La contraseña tiene que tener más de 6 caracteres";
		document.formregister.password.focus();
		return 0;
	}
	document.getElementById('e_passwordr').innerHTML = "";

	if(document.form_psswd.password2.value.length === 0){
		document.getElementById('e_rpasswordr').innerHTML = "Tienes que escribir la contraseña";
		document.form_psswd.password2.focus();
		return 0;
	}
	if(document.form_psswd.password2.value != document.form_psswd.password.value){
		document.getElementById('e_rpasswordr').innerHTML = "La contraseña tiene que ser la misma";
		document.form_psswd.password2.focus();
		return 0;
	}
	document.getElementById('e_rpasswordr').innerHTML = "";
}

function logoutauto(){
	$.ajax({
		type : 'GET',
		url  : 'components/login/controller/controller-login.php?&op=logout',
	})
	.done(function() {
		localStorage.removeItem('user');
		localStorage.removeItem('avatar');
		localStorage.removeItem('type');
		localStorage.removeItem('email');
		setTimeout(' window.location.href = "index.php?page=controllerhome&op=list"; ',1000);
	})
}



function register_click(){

	$('#register_btn').on('click', function (e) {
      /*   window.alert("Texto a mostrar"); */
		e.preventDefault();
		if (valide_register() != 0) {
			console.log("dentro");
			/* var data = $(".formregister").serialize(); */
			let data = $(".formregister").serializeArray();
			console.log(data);
			ajaxPromise(amigable("?module=login&function=validate_register") , 'POST', 'JSON', {data:data})
       
  
            .then(function(data) {
				console.log(data);
                  if(data){


					window.alert("Le hemos enviado un correo asu cuenta para verificar su cuenta");
              

					setTimeout(' window.location.href = amigable("?module=login&function=list_login"); ',1000);
				  }
             
             });
		
		}
    });
}


function register_enter(){
	$("#register_btn").keypress(function(e) {
		console.log("yes");
        var code = (e.keyCode ? e.keyCode : e.which);
        if(code==13){
			e.preventDefault();
			if (valide_register() != 0) {
				console.log("dentro");
				var data = $(".formregister").serialize();
				$.ajax({
					type : 'POST',
					url  : 'module/login/controller/controller_login.php?&op=register&' + data,
					data : data,
					beforeSend: function(){	
						console.log(data);
						$("#error_register").fadeOut();
					},
					success: function(response){	
						console.log(response);					
						if(response==="ok"){
						/* lo mandamos al login para que inicie sesion */
							setTimeout(' window.location.href = "index.php?page=controller_login&op=login_list"; ',1000);
						}else if (response=="okay") {
							alert("Debes realizar login para completar tu compra");
							setTimeout(' window.location.href = window.location.href; ',1000);
						}else{
							$("#error_register").fadeIn(1000, function(){						
								$("#error_register").html('<div class="alert alert-danger"> <span class="glyphicon glyphicon-info-sign"></span> &nbsp; '+response+'</div>');
							});
						}
				  }
				});
			}
        }
    });
}


function login_click(){

	$('#login_btn').on('click', function (e) {

        console.log("ready full login");
		e.preventDefault();
		if(valide_login() != 0){

			let data = $(".formlogin").serializeArray();// pillem tots els datos del form de una
			console.log(data);	


			ajaxPromise(amigable("?module=login&function=manual_login") , 'POST', 'JSON', {data:data})
       
  
            .then(function(data) {
   
				console.log(data);

			
				if(data!="El usuario no existe"){
					console.log("tamo bien");
					localStorage.setItem("token", data);
			
					setTimeout(' window.location.href = amigable("?module=home&function=list_home"); ',1000);
				}else{
					console.log("Error en login token");
				}
             
             });

		}
    });
}

function user_passw(){


		$('#cnhg_user').on('click', function (e) {


	       let data = $(".form_c_user").serializeArray();// pillem tots els datos del form de una
	



		
				ajaxPromise(amigable("?module=login&function=send_email_change_passw") , 'POST', 'JSON', {data:data}).then(function(data) {
					
				
					console.log(data);
				

					if(data){


						window.alert("Le hemos enviado un correo a su cuenta para cambiar su contraseña");
					

					/* 	setTimeout(' window.location.href = amigable("?module=login&function=list_login"); ',1000); */
					}
				
				});

    });
}


function social_login(){

	var config = {
		apiKey: "AIzaSyAHXxF6wSxy7_SFuNkuc4Ulw6AtvFK3cls",
		authDomain: "ViniloShop.firebaseapp.com",
		databaseURL: "https://viniloshop.firebaseio.com",
		projectId: "viniloshop",
		storageBucket: "",
		messagingSenderId: "326216469824"
	  };
	 
	firebase.initializeApp(config);

	$('.googlelogin').on('click', function (e) {

			console.log("GOOGLE");

			var provider = new firebase.auth.GoogleAuthProvider();
			/* provider.addScope('email'); */

			var authService = firebase.auth();

			// manejador de eventos para loguearse

			authService.signInWithPopup(provider).then(function(result) {
					
					
						let User_info = [("GOOGLE" + result.user.uid), result.user.email, result.user.displayName, result.user.photoURL];
				
						user_social_login(User_info);
					})
					.catch(function(error) {
						console.log('Se ha encontrado un error:', error);
					});


		

 });



////////////////////////////////////////////////////////////
		$('.ghublogin').on('click', function (e) {

			console.log("GHUB");

			
			var provider = new firebase.auth.GithubAuthProvider();
			var authService = firebase.auth();

					authService.signInWithPopup(provider).then(function(result) {
					

						let User_info = [("GITHUB" + result.user.uid), result.user.email, result.user.displayName, result.user.photoURL];
						
							user_social_login(User_info);
					
					}).catch(function(error) {
					var errorCode = error.code;
					console.log(errorCode);
					var errorMessage = error.message;
					console.log(errorMessage);
					var email = error.email;
					console.log(email);
					var credential = error.credential;
					console.log(credential);
					});
			
					
			
			});

}


function user_social_login(User_info){
console.log(User_info); 

ajaxPromise(amigable("?module=login&function=social_login") , 'POST', 'JSON', {data:User_info}).then(function(data) {
					
				console.log(data);
				localStorage.setItem("token", data);
		 	setTimeout(' window.location.href = amigable("?module=home&function=list_home"); ',1000); 
});
}


$(document).ready(function(){

	register_click();
	register_enter();
	login_click();
	user_passw();
    social_login();
/* 	user_social_login(); */
});
