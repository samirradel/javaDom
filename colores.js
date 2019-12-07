var encabezado= document.getElementById("encabezado");
/*encabezado.style.color=("red");
encabezado.style.background=("black");
encabezado.style.fontFamily=("40px");*/
encabezado.className=("titulo tituloGrande");// se agrega las dos funciones de estilo
// si quremos eliminar la funcion titulogrande
encabezado.className=encabezado.className.replace("tituloGrande",""); //con "" se reemplaza por nada