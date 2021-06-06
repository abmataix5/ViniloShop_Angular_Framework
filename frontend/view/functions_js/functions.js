function removeItemFromArr ( arr, item ) {
 
    var i = arr.indexOf( item );

    if ( i !== -1 ) {
     
        arr.splice( i, 1 );
    }
}


function eliminarElemento(id){
	imagen = document.getElementById(id);	
	if (!imagen){
		alert("El elemento selecionado no existe");
	} else {
		padre = imagen.parentNode;
		padre.removeChild(imagen);
	}
}