var palabra = "Hola que tal";
if(palabra[0]=="a" || palabra[0]=="A"){
    console.log("Ok");
}else{
    console.log("No");
}
//ES6
let palabraMay=palabra.toUpperCase();
console.log(palabraMay);

if(palabra.toUpperCase().startsWith("A")){
    console.log("Ok");
}else{
    console.log("No");
}

//convierte en mayusculas la palabra original
palabra = palabra.toUpperCase();
//this hace referencia a valores o funciones dentro del mismo objeto
function ejecutar(){
    console.log("fuera");
}

var objeto={
    ejecutar:function(){
        console.log("dentro");
    },
    comprobar:function(){
        this.ejecutar();
    }
}

objeto.comprobar();

//---------------------------------------funcioes flecha
//funcion tradicional
function escribir(texto){
    console.log(texto);
}
//funcion flecha
var f=texto=>console.log(texto);

f("hola");

function saludar(){
    console.log("hola como estas");
}
saludar();

f=()=> console.log("hola cxomo estas");

//ejemplo4

function mostrarPersona(nombre,apellido){
    console.log(nombre+":"+apellido);
}

let m=(n,a)=>console.log(n+":"+a);
m("alejandra","ruiz");

//construccion de una funcion flecha

//(par1,par2,....)=>{intrucion1,instrucion2}