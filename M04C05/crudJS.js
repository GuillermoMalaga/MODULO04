//variables
var botonAgregar=document.querySelector("#btAgregar");
var formulario=document.querySelector("#formulario");

var urlBase = "https://reqres.in/api/users";
var contenedor = document.querySelector("#contenedor");
//-------------------------------------------------------
//Eventos

botonAgregar.addEventListener("click",function(e){
    let estado = formulario.style.visibility;
    if(estado=="hidden"){
        formulario.style="visibility:visible";
    }else{
        formulario.style="visibility:hidden";
    }
});
//------------------------------------
//-----Funciones API

async function cargarUsuarios(){
    let respuesta = await fetch(urlBase+"?page=1");
    let usuarios = [];
    if(respuesta.ok){
        let datos = await respuesta.json();
        //console.log(datos);
        usuarios.push(...datos.data);
    }
    respuesta = await fetch(urlBase+"?page=2");
    if(respuesta.ok){
        let datos = await respuesta.json();
        //console.log(datos);
        usuarios.push(...datos.data);
    }
    console.log(usuarios);
}
cargarUsuarios();