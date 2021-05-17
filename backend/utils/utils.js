function ajaxPromise(sUrl, sType, sTData, sData = undefined) {
    return new Promise((resolve, reject) => {
        $.ajax({
            url: sUrl,
            type: sType,
            dataType: sTData,
            data: sData
        }).done((data) => {
            resolve(data);
        }).fail((jqXHR, textStatus, errorThrow) => {
            reject(jqXHR.responseText);
        });
    });
}

function removeItemFromArr ( arr, item ) {
 
    var i = arr.indexOf( item );

    if ( i !== -1 ) {
     
        arr.splice( i, 1 );
    }
}

console.log("aqmigabe");
function amigable(url) {
    var link="";
    url = url.replace("?", "");
    url = url.split("&");
    cont = 0;
    for (var i=0;i<url.length;i++) {
    	cont++;
        var aux = url[i].split("=");
        if (cont == 2) {
        	link +=  "/"+aux[1]+"/";	
        }else{
        	link +=  "/"+aux[1];
        }
    }
    return "http://localhost/Vinilo_framework" + link;
}

function loadMenu() {

    if(localStorage.getItem('token') != null){
    var token = localStorage.getItem('token');

    console.log(token);
   
       ////////// return user //////////////////
       
       ajaxPromise(amigable("?module=login&function=get_user_log")  , 'POST', 'JSON', { token: token,})
       
  
       .then(function(data) {
    
           console.log( data);
           

           if (data[0].activate === 'true') {
           /*  console.log("activate"); */
            localStorage.setItem('user',data[0].username );   
            /* Quitamos la opcion login ya que ya se ha logueado */
        
                $('#icon_login').remove();
        
            /* Añadimos icono perfil avatar */
             $('<li></li>').attr({}).html('<div class="div2" style = "background : url('+data[0].avatar+') "></div> <p>'+data[0].username+' </p> ').appendTo('#menu_bar_login');
             
          

   
   
           }else if (data[0].activate === 'false') {
            localStorage.removeItem('token');
            console.log("dentro tipo false");

            window.alert("Recuerda activar tu cuenta desde el correro que le hemos mandado"); 
           }

       });
    }else{

        console.log("Nadie loged");
        /* Quitamos acceso al control del Stock, ya que no hay nadie logueado */
        $('#stock_li').remove();
    }
  }
  

 

 function logOutClick() {

    $(document).on('click', '.div2', function() {
        logOut();
    });
}

function logOut() {

    console.log("K.O user");
    localStorage.removeItem('token');
    localStorage.removeItem('user');
    window.location.href = "index.php?page=controller_home&op=list";
    $('.div2').remove();
}



$(document).ready(function() {
    loadMenu();
    logOutClick() ;
});
