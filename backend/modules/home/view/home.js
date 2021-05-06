
/* Function carousel, later call them -> document ready */

  function carousel_owl(){
console.log("olaa");
         $.ajax({ 
      type: 'GET', 
      url: amigable("?module=home&function=owl_carrousel"),
      async:false, 
      dataType: 'json',
      
      success: function (data) { 
        console.log(data);
          for (var i = 0; i < 7; i++) {
            
              $('#caorusel').append(
              
                          '<img id="carousel_shop"  src="http://localhost/Vinilo_framework/'+data[i].ruta+'">'
                          
                    
              )
           }
      },
  
    }); 
      
 

     

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

   }
  

   /* Function categories */
   
////////////////////////////////////////////
    function categories(){

  
    ajaxPromise(amigable("?module=home&function=categories")  , 'POST', 'JSON', {})
       
  
    .then(function(data2) {
 
      console.log(data2);
      
      
      var element = "";
      for (let index = 0; index < data2.length; index++) {
    
        element = element +'<div class="col-lg-4 col-md-6 col-sm-6 text-center banner-agile-flowers">  <img  src="http://localhost/Vinilo_framework/'+data2[index].ruta+'" class="img-thumbnail" alt="">  <div class="banner-right-icon">  <button id="salto_shop" class="'+data2[index].categoria+'">'+data2[index].categoria+'</button> </div>   </div>';
    
      }
      $('#categories').html(element);
     
              
    });

   
          
    }


    /* Click contador morevisited */
    
    $(document).on('click','#salto_shop',function () {

      var id = this.getAttribute('class');;

      ajaxPromise(amigable("?module=home&function=morevisited")  , 'POST', 'JSON', {id : id})
       
  
      .then(function(data) {
   
        console.log(data);
                 
      });
     /*  console.log(id + "estamos");  */
   
        
      
       });

/* Salto al shop */

    $(document).on('click','#carousel_shop',function () {


      
      setTimeout('window.location.href = amigable("?module=shop&function=list_shop") ',1000);
      
        
      
       });

       /* Salto al shop */

    $(document).on('click','#salto_more',function () {


      
      setTimeout('window.location.href = amigable("?module=shop&function=list_shop") ',1000);
      
        
      
       });

       
/* Salto al shop */

    $(document).on('click','#salto_shop',function () {


      var categoria = this.getAttribute('class');
      
      console.log(categoria);
      
      localStorage.setItem('categoria',JSON.stringify(categoria));
      
      setTimeout('window.location.href = amigable("?module=shop&function=list_shop") ',1000);
      
        
      
       });

   
    
    function more_groups(){

     var  limit = 3;
     ajaxPromise(amigable("?module=home&function=more_groups")  , 'POST', 'JSON', {limit : limit})
       
  
     .then(function(data2) {
  
      console.log(data2);
      
      
      var element = "";
      for (let index = 0; index < data2.length; index++) {
    
        element = element +'<div class="col-lg-4 col-md-6 col-sm-6 text-center banner-agile-flowers">  <img  src="http://localhost/Vinilo_framework/'+data2[index].img_grupo+'" class="img-thumbnail" alt="">  <div class="banner-right-icon">  <button id="salto_more" class="'+data2[index].nombre_grupo+'">'+data2[index].nombre_grupo+'</button> </div>   </div>';
    
      }
      $('#grupos_scroll').html(element);
                
     });
   
     

      $(document).on('click','#loadmore',function () {


     limit = limit + 3;
        
     ajaxPromise(amigable("?module=home&function=more_groups")  , 'POST', 'JSON', {limit : limit})
       
  
     .then(function(data2) {
  
      console.log(data2);
      
      
      var element = "";
      for (let index = 0; index < data2.length; index++) {
    
        element = element +'<div class="col-lg-4 col-md-6 col-sm-6 text-center banner-agile-flowers">  <img  src="http://localhost/Vinilo_framework/'+data2[index].img_grupo+'" class="img-thumbnail" alt="">  <div class="banner-right-icon">  <button id="salto_more" class="'+data2[index].nombre_grupo+'">'+data2[index].nombre_grupo+'</button> </div>   </div>';
    
      }
      $('#grupos_scroll').html(element);
                
     });
        
         });
     
    }


    
    
$(document).ready(function () {   
  carousel_owl();
  categories();
  more_groups();

    });