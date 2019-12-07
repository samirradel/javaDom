var Porclases=document.getElementsByClassName("articulo");//documentos por clase q se llama articulo es un arreglo seleecionamos por clases
//console.log(Porclases); //muestra todos
//console.log(Porclases[1]);//ingres al primer articulo
var porEtiqueta=document.getElementsByTagName("div");// todos las etiquetas div me muestra muestra un arreglo
//console.log(porEtiqueta);
//console.log(porEtiqueta[2]);
// ahora pondremos texto... con inner
porEtiqueta[1].innerHTML=("cambiar texto");//sin console cambia en la pag.
//ingresar por id ...
var porID=document.getElementById("micaja");//element es singular y tambien lo es el id
porID.innerHTML=("cambiar texto de id ");
/*
//crear un elemento
var elemento=document.createElement("h2");
//crear un nodo de texto 
var contenido=document.createTextNode("este es nuestro subtitular");
elemento.appendChild(contenido);
elemento.setAttribute("align","center");
document.getElementById("subtitulo").appendChild(elemento);

var elem=document.createElement("li");
var contenido=document.createTextNode("nuevo contenido");
elem.appendChild(contenido);
var enID=document.getElementById("agregar");
enID.appendChild(elem);*/

var elemento=document.createElement("li");
var contenido=document.createTextNode("nuevo texto");
elemento.appendChild(contenido);
/*
//vamos agregar elemento al  ultimo 
var padre=document.getElementById("agregar");
padre.appendChild(elemento); */

/*
//vamos agregar en la segunda posicion elegimos la posicion q queramos ponerlo 
var padre =document.getElementsByTagName("li")[0].parentNode;
var segundoElemento=document.getElementsByTagName("li")[1];// se agrega en la segunda posicion
padre.insertBefore(elemento,segundoElemento);
*/
/*
//ingresando dentro de la ul la primera etique li
var primerElemento=document.getElementById("primero");
primerElemento.innerHTML=("nuevo texto q ingresa <i>samir</i>"); //ingrea y valida y da cambiios
//primerElemento.innerText("nuevo texto q ingresa <i>samir</i>");//vemos q el texto ingresa con etiqueta y todo 
*/
/*
var padre=document.getElementsByTagName("li")[0].parentNode;
var referencia=document.getElementsByTagName("li")[0];
padre.replaceChild(elemento,referencia);
*/
var padre=document.getElementsByTagName("li")[0].parentNode;
var referencia=document.getElementsByTagName("li")[0];
padre.removeChild(referencia);
// CODIGO DENTRO DEL BODY EN HTML    
            // eliminar
           /* var padre= document.getElementsByTagName("li")[0].parentNode;
                referencia=document.getElementsByTagName("li")[0];
            padre.removeChild(referencia);*/

