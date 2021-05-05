
/* Funcion ajaxforsearch */
  function ajaxForSearch(durl,offset,checks,id) {
    var url=durl
    var offset =offset;
    var checks =checks;
    var id= id;
    console.log(id);
    
    console.log(checks);

    ajaxPromise(url, 'POST', 'JSON', {data:offset,checks:checks,id:id,})
       
   
    .then(function(data_shop) {
     
        console.log(data_shop);

        /* Entra aquú cuando hay más de un producto*/
 
        if(data_shop.length > 1){
          $('#container_shop').empty();
        
          var element ="";
          for(var i=0; i < data_shop.length; i++){
  
             element = element +' <div id="cuadro"><img class="imga1" id="'+data_shop[i].cod_producto+'" src="http://localhost/Vinilo_framework/'+data_shop[i].ruta+'">  <br><i id="'+data_shop[i].cod_producto+'" class="heart fa fa-heart-o"></i><a class="btn_compra">Comprar</a></div>';
  
        
           
          }  
          $('#container_shop').html(element);  
 
          /* Botones favorito y compra */
 
                 $('.btn_compra').on('click', function (e) {
                     console.log("ie makina");
                     check_token();
                 });
 
                 button_fav();
       
     /* Entra aquí cuando no hay ningun producto  */
 
         }else if(data_shop.length < 1) {
            $('#container_shop').empty();
             var no_existe  = "";
             no_existe = '<h4 >No tenemos ningun producto disponible con esas caracterisiticas</h4>'
             $('#container_shop').html(no_existe);   
         }else if(data_shop.length === 1){
            $('#container_shop').empty();
            $('#pages').empty();
         
            var details = "";
       
    
     
       
            details = '<div id="details">'+
            '        <table border="2px"> '+
                         ' <tr>'+
                             '<td rowspan="8"><img  class ="img_details" src="http://localhost/Vinilo_framework/'+data_shop[0].img_grupo+'"></td>'+
                             '<td>Codigo del producto</td>'+
                             '<td>'+data_shop[0].cod_producto+'</td>'+
                         '</tr>'+
     
                         '<tr>'+
                             '<td>Codigo del grupo</td>'+
                             '<td>'+data_shop[0].cod_grupo+'</td>'+
                         '</tr>'+
     
                         '<tr>'+
                             '<td>Fecha estreno</td>'+
                             '<td>'+data_shop[0].fecha_estreno+'</td>'+
                         '</tr>'+
     
                         '<tr>'+
                         '<td>Nombre del grupo</td>'+
                         '<td>'+data_shop[0].nombre_grupo+'</td>'+
                         '</tr>'+
     
                         '<tr>'+
                         '<td>Nombre del disco</td>'+
                         '<td>'+data_shop[0].nombre_disco+'</td>'+
                         '</tr>'+
     
                         '<tr>'+
                         '<td>Estilo musical</td>'+
                         '<td>'+data_shop[0].estilo_musical+'</td>'+
                         '</tr>'+
     
                         '<tr>'+
                         '<td>Codigo de compra</td>'+
                         '<td>'+data_shop[0].cod_compra+'</td>'+
     
                         '<tr>'+
                         '<td>Precio</td>'+
                         '<td>'+data_shop[0].precio+'</td>'+
                     '</tr>'+
                     '<tr><td><button id="volver_shop">Volver</button><a class="btn_compra">Comprar</a></td></tr>'
                     
                 '</table>'
     
                 
            '</div>'
            
            $('#details').html(details);
        
         }
 
         /* Details */
         else{
        
          var element ="";
            for(var i=0; i < data_shop.length; i++){
    
             element = element +' <img class="imga1" id="'+data_shop[i].cod_producto+'" src="http://localhost/Vinilo_framework/'+data_shop[i].ruta+'">';
          
             
            }  
            $('#container_shop').html(element);   
           
        }
              
    });

}

/* Click details */

    $(document).on('click','.imga1',function () {

       /* Añadimos elemento details */
        $('<div></div>').attr({'id': 'details', }).appendTo('#shop_div');

        var id = this.getAttribute('id');
        var offset = "";
        var checks = "";
        console.log(id);
        $('#pages').empty();
     

           /*  ajaxForSearch("index.php?module=shop&function=details&id=" + id); */
            ajaxForSearch(amigable("?module=shop&function=details"), offset,checks,id);
   
    
    });



/* Boton para volver al shop desde el details */

        $(document).on('click','#volver_shop',function () {

            /* Eliminamos elemento details */
            $('#details').remove();

            /* Pagination */
            var offset = 0;
            pagination(); 
    
            $('#details').empty();
                
            ajaxForSearch(amigable("?module=shop&function=all_data_shop"), offset);
            
        
        });

/* Saltos */

function salto_categorias(){

       var offset = 0;
       if (document.getElementById('container_shop')) {
       console.log("dennnnnnnnnnntro");
           var drop= JSON.parse(localStorage.getItem('categoria'));
           var val = localStorage.getItem('val');
           var catego = localStorage.getItem('search_catego');
           var estilo = localStorage.getItem('search_estilo');
           console.log(drop);
           console.log(val);
           console.log(catego);
           console.log(estilo);
          

           if ((drop===null)&&(drop===val)&&(catego===null)&&(estilo===null)){
               console.log("del menú");
               ajaxForSearch(amigable("?module=shop&function=all_data_shop"), offset);
               

           } /* if(drop!= null && drop.length > 1){

                console.log("de categorias");
                ajaxForSearch("module/shop/controller/controller_shop.php?op=op_categoria&categoria=" + drop);

            }if((val!= null && val.length > 1)&&(catego!= null && catego.length > 1)&&(estilo != "false" )){

                console.log("de search all campos");
                ajaxForSearch("module/shop/controller/controller_shop.php?op=op_buscar&val=" + val + '&catego=' + catego + '&estilo=' + estilo);

            }if((catego!= null && catego.length > 1)&&(val== "")&&(estilo == "false")){

                console.log("de search catego only");
                ajaxForSearch("module/shop/controller/controller_shop.php?op=op_buscar_catego&catego=" + catego);

            }if((val!= null && val.length > 1)&&(estilo === "0" )&&(catego==="0")){

                console.log("de search auto");
                ajaxForSearch("module/shop/controller/controller_shop.php?op=op_buscar_auto&val=" + val);

            }if((catego!= null)&&(estilo != "false" )&&(val == "" )){

                ajaxForSearch("module/shop/controller/controller_shop.php?op=op_buscar_catego_estilo&catego="+ catego + '&estilo=' + estilo);

            }if((val!= null && val.length > 1)&&(catego!= null)&&(estilo === "false" )){

                console.log("de search auto+6catego");
                      ajaxForSearch("module/shop/controller/controller_shop.php?op=op_catego_auto&catego="+ catego + '&val=' + val);

            }  */


       }
        localStorage.removeItem("categoria"); 
       localStorage.removeItem("val");
       localStorage.removeItem("search_catego");
       localStorage.removeItem("search_estilo");
 
}








  /* Funciónes que pinta los filtros de nombre de grupo, depende de BBDD */

  function pintar_grupos_disponibles(){
      

    ajaxPromise(amigable("?module=shop&function=grupos_disponibles")  , 'GET', 'JSON', {})
       
  
    .then(function(data_filtros) {
      /*   console.log(data_filtros); */
        console.log("ola filtrets");
      
      
        var element = "";
        for (let index = 0; index < data_filtros.length; index++) {
      
          element = element +'<li>'+
          '<li class="check_grupo" id ="'+data_filtros[index].cod_grupo+'">'+
          '<span class="span" >-'+data_filtros[index].nombre_grupo+'</span>'+
           '</li>';
      
        }
        $('#filtros').html(element);
     
     
              
    });


        
  }


/* Hla filtro */

function filtros(){

  var checks = "";
  var count1 = 0, count2 = 0,count3 = 0, count4 = 0,count5 = 0, count6 = 0, count7 = 0, count8 = 0, count9 = 0,count10=0,count11=0,count12=0;
  

  //////////////////////////////////////////// POR ESTILO MUSICAL /////////////////////////////////////////////////////////////////////////
  $('#check_rock').click(function () {
    console.log("Debug Check1");
        if(checks === ""){
    
            checks = "estilo_musical = 'Rock'";
            count1=count1+1;

        }else if(count1 == 1){
            checks = checks.replace(" AND estilo_musical = 'Rock'", "");
            checks = checks.replace("estilo_musical = 'Rock'", "");
            count1=0;
            }else{
                checks = checks + " AND estilo_musical = 'Rock'";
                count1=count1+1;
        }
    });

    $('#check_pop').click(function () {
        console.log("Debug Check2");
        if(checks === ""){
            checks = "estilo_musical = 'Pop'";
            count2=count2+1;

        }else if(count2 == 1){
            checks = checks.replace("  AND estilo_musical = 'Pop'", "");
            checks = checks.replace("estilo_musical = 'Pop'", "");
            count2=0;
            }else{
                checks = checks + " AND estilo_musical = 'Pop'";
                count2=count2+1;
        }
    });
    $('#check_electronica').click(function () {
        console.log("Debug Check2");
        if(checks === ""){
            checks = "estilo_musical = 'Electronica'";
            count3=count3+1;

        }else if(count3 == 1){
            checks = checks.replace(" AND estilo_musical = 'Electronica'", "");
            checks = checks.replace("estilo_musical = 'Electronica'", "");
            count3=0;
            }else{
                checks = checks + " AND estilo_musical = 'Electronica'";
                count3=count3+1;
        }
    });

    $('#check_clasica').click(function () {
        console.log("Debug Check2");
        if(checks === ""){
            checks = "estilo_musical = 'Clasica'";
            count4=count4+1;

        }else if(count4 == 1){
            checks = checks.replace(" AND estilo_musical = 'Clasica'", "");
            checks = checks.replace("estilo_musical = 'Clasica'", "");
            count4=0;
            }else{
                checks = checks + " AND estilo_musical = 'Clasica'";
                count4=count4+1;
        }
    });
    $('#check_rap').click(function () {
        console.log("Debug Check2");
        if(checks === ""){
            checks = "estilo_musical = 'Rap'";
            count5=count5+1;

        }else if(count5 == 1){
            checks = checks.replace(" AND estilo_musical = 'Rap'", "");
            checks = checks.replace("estilo_musical = 'Rap'", "");
            count5=0;
            }else{
                checks = checks + " AND estilo_musical = 'Rap'";
                count5=count5+1;
        }
    });


  /////////////////////////////////POR Categoria/////////////////////////////

  $('#check_disco').click(function () {
    console.log("Debug Check2");
    if(checks === ""){
        checks = "categoria = 'Disco'";
        count6=count6+1;

    }else if(count6 == 1){
        checks = checks.replace(" AND categoria = 'Disco'", "");
        checks = checks.replace("categoria = 'Disco'", "");
        count6=0;
        }else{
            checks = checks + " AND categoria = 'Disco'";
            count6=count6+1;
    }
});
$('#check_vinilo').click(function () {
    console.log("Debug Check2");
    if(checks === ""){
        checks = "categoria = 'Vinilo'";
        count7=count7+1;

    }else if(count7 == 1){
        checks = checks.replace(" AND categoria = 'Vinilo'", "");
        checks = checks.replace("categoria = 'Vinilo'", "");
        count7=0;
        }else{
            checks = checks + " AND categoria = 'Vinilo'";
            count7=count7+1;
    }
});

 

  $('#check_camiseta').click(function () {
    console.log("Debug Check2");
    if(checks === ""){
        checks = "categoria = 'Camiseta'";
        count8=count8+1;

    }else if(count8 == 1){
        checks = checks.replace(" AND categoria = 'Camiseta'", "");
        checks = checks.replace("categoria = 'Camiseta'", "");
        count8=0;
        }else{
            checks = checks + " AND categoria = 'Camiseta'";
            count8=count8+1;
    }
});

$('#check_poster').click(function () {
    console.log("Debug Check2");
    if(checks === ""){
        checks = "categoria = 'Poster'";
        count9=count9+1;

    }else if(count9 == 1){
        checks = checks.replace(" AND categoria = 'Poster'", "");
        checks = checks.replace("categoria = 'Poster'", "");
        count9=0;
        }else{
            checks = checks + " AND categoria = 'Poster'";
            count9=count9+1;
    }
});

/* Check precio */

$('#check_barato').click(function () {
    console.log("Debug Check2");
    if(checks === ""){
        checks = "precio < 50";
        count10=count10+1;

    }else if(count10 == 1){
        checks = checks.replace(" AND precio < 50", "");
        checks = checks.replace("precio < 50", "");
        count10=0;
        }else{
            checks = checks + " AND precio < 50";
            count10=count10+1;
    }
});

$('#check_medio').click(function () {
    console.log("Debug Check2");
    if(checks === ""){
        checks = "precio BETWEEN 50 AND 100";
        count11=count11+1;

    }else if(count11 == 1){
        checks = checks.replace(" AND precio BETWEEN 50 AND 100", "");
        checks = checks.replace("precio BETWEEN 50 AND 100", "");
        count11=0;
        }else{
            checks = checks + " AND precio BETWEEN 50 AND 100";
            count11=count11+1;
    }
});

$('#check_caro').click(function () {
    console.log("Debug Check2");
    if(checks === ""){
        checks = "precio > 100";
        count12=count12+1;

    }else if(count12 == 1){
        checks = checks.replace(" AND precio > 100", "");
        checks = checks.replace("precio > 100", "");
        count12=0;
        }else{
            checks = checks + " AND precio > 100";
            count12=count12+1;
    }
});


//////////////////////////////Boton para filtrar///////////////////////
  $('#filtrar_check').click(function () {
      let offset = 0;
  console.log("Debug enviar");
  if(checks === ""){
      console.log("olaasas");
      $('#container_shop').empty();
      ajaxForSearch(amigable("?module=shop&function=all_data_shop"), offset);

  }else{
      $('#container_shop').empty();
      ajaxForSearch(amigable("?module=shop&function=checks"), offset,checks);
  }
  });

}



$('#check_precio').click(function () {
    console.log("ola");
    var drop = $("#barato").val();
    var drop2=$("#medio").val();
    var auto=$("#top").val();
console.log(drop);
});




  /* carga src api */

  function api_maps() {

    if (document.getElementById('mapshop') != null) {  
        
      var script = document.createElement('script');
      script.src = "https://maps.googleapis.com/maps/api/js?key=" + "AIzaSyDGZQiAiNiB8a3IicipOMsvpb0tIMab2aM";
      script.async;
      script.defer;
      document.getElementsByTagName('script')[0].parentNode.appendChild(script);
      
    }   
  }


  /* Carregar maps */

 function map_shop(){

    $(document).on('click','.mapdetails',function () {


        $('<div></div>').attr({'id': 'mapshop', }).appendTo('#cargar_maps');
        $('#all_maps').empty();
        $('.side-bar').empty();
        api_maps();
        console.log("holamaps");

        ajaxPromise( amigable("?module=shop&function=maps_data"), 'GET', 'JSON', {})
       
        
        .then(function(data_map) {
  
            console.log("tamo maps");
            console.log(data_map);
                var markers = [];
 
             function initialize() {
 
             
 
                    var map = new google.maps.Map(document.getElementById('mapshop'), {
                        zoom: 2,
                        center: new google.maps.LatLng(	40.4636688, 	-3.7492199),
                        mapTypeId: google.maps.MapTypeId.ROADMAP
                    });
                
                    var infowindow = new google.maps.InfoWindow();
    
                    for (var i = 0  ; i < data_map.length; i++) {
                    console.log(data_map.latitud);
    
                        var newMarker = new google.maps.Marker({
                            position: new google.maps.LatLng(data_map[i].latitud, data_map[i].longitud),
                            map: map,
                            title: data_map[i].destino
                        });
    
                        google.maps.event.addListener(newMarker, 'click', (function (newMarker, i) {
                            return function () {
                                var infomap = '<div><p>'+data_map[i].categoria+'</p><br>Precio : '+data_map[i].precio+'<br><img src="'+data_map[i].ruta+'"></div>'
                                // infowindow.setContent( data_map[i].destino);
                                infowindow.setContent(infomap);
                                infowindow.open(map, newMarker);
                            
                            }
                        })(newMarker, i));
    
                        markers.push(newMarker);
                    }
            }
 
 
          initialize();
     
              
        });

     
    
    });
    }


function pagination(){

    ajaxPromise(amigable("?module=shop&function=pagination")  , 'GET', 'JSON', {})
       
    
    .then(function(data_filtros) {
  
        var total_products = data_filtros.length;
        console.log(total_products);

        let pages = (total_products / 12);
        
        /* Añadimos esto para que no se pierda ningun producto*/
            if(pages %2 != 0){
                pages = pages +1;
            }
            console.log(pages + 'num_paginas');
         /* Añadimos esto para que no se pierda ningun producto*/
    

            $("#pages").bootpag({
                total: pages,
                page: 1,
                maxVisible: pages,
                next: '-->',
                prev: '<--'
            }).on("page", function (e, num) {
                let offset = 12 * (num - 1);
                ajaxForSearch(amigable("?module=shop&function=all_data_shop"), offset);
                });
     
              
    });
    



}


function api_books(){

    

    $('<div></div>').attr({'id': 'load_Api', }).appendTo('#api_div');

    limit = 5;

    ajaxPromise('https://www.googleapis.com/books/v1/volumes?q=rollingsotnes'  , 'GET', 'JSON', {})
       
  
    .then(function(data) {
  
        var DatosJson = JSON.parse(JSON.stringify(data));
        DatosJson.items.length = limit;
       console.log(DatosJson.items.length);


        for (i = 0; i < DatosJson.items.length; i++) {
            var ElementDiv = document.createElement('div');
            ElementDiv.innerHTML ='<div class="imgapi">  <img  src="'+ data['items'][i]['volumeInfo']['imageLinks']['thumbnail'] +'" class="img-thumbnail" alt=""> '+
            ' <div class="banner-right-icon">  <a href="https://www.casadellibro.com/?campaignid=847763403&adgroupid=45890883271&feeditemid=&targetid=kwd-339552290086&matchtype=e&network=g&device=c&devicemodel=&ifmobile%3A%5Bmobile%5D=&ifnotmobile%3A%5Bnotmobile%5D=%5Bnotmobile%5D&ifsearch%3A%5Bsearch%5D=%5Bsearch%5D&ifcontent%3A%5Bdisplay%5D=&creative=418682255226&keyword=casa+del+libro.&placement=&target=&adposition=&gclid=Cj0KCQiA4feBBhC9ARIsABp_nbVTJdvWl7kwwvk1ZWgv5KtYGRmDFkQ_jm3eFOofdWmXArVAn8SMmQYaAgp1EALw_wcB&q=rollingstones" id="salto_shop" class="api">'+ DatosJson.items[i].volumeInfo.title +'</a> </div>   </div>';
           
           
            document.getElementById("load_Api").appendChild(ElementDiv); 
            
        }
              
    });

}



function check_token_fav(){

   var token = localStorage.getItem('token');
   console.log(token);
   var user = localStorage.getItem('user');
   console.log(user);
   
   if(token == null){
    setTimeout(' window.location.href = amigable("?module=login&function=list_login")',1000);
   }else{
       console.log("Sesión iniciada puede dar fav y carrito");

       ajaxPromise('module/shop/controller/controller_shop.php?&op=insert_like'  , 'POST', 'JSON', { "cod_producto": localStorage.getItem('click_id') ,"username": user  }).then(function(data) {
         
       });
   }
 
}



function button_fav(){

    $('.heart').on('click', function (e) {
        var id = this.getAttribute('id');
        localStorage.setItem('click_id',id);
        check_token_fav();
        $(this).css('color', 'red'); 
    
        if($(this).children("i").hasClass("heart")){///si está en favoritos, borralo
            console.log("olasas");
        }

    });
}

/* Document ready con funciones anteriores */



$(document).ready(function(){
   
   salto_categorias();//migrado
   filtros();//migrado
   pintar_grupos_disponibles();//migrado
   map_shop(); //migrado
   pagination(); //migrado
   api_books();//migrado
 
});















 