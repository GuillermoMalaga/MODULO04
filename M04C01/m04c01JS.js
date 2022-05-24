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
