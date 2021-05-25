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


  

 







$(document).ready(function() {
   
    logOutClick() ;
});
