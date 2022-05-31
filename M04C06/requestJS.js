//crear una url
var url1 = new URL("https://www.google.cl/search?q=animales");
console.log(url1);

var url2 = new URL("search","https://www.google.cl/");
url2.searchParams.append("q","animales");
console.log(url2);

//----------------------------
console.log("--------------------------------------------");

var url3 = new URL("search","https://www.google.cl/");
url3.searchParams.append("q","ñandú");
console.log(url3);

//construir la url para losprimeros 100 datos del lospokemones 
//de la pokea

var url4 = new URL("pokemon","https://pokeapi.co/api/v2/");
url4.searchParams.append("limit","100");
url4.searchParams.append("offset","0");
console.log(url4);
console.log("//-----------------------------------------------------------//")
//has 
console.log(url4.searchParams.get("limit"));
console.log(url4.searchParams.has("offset"));
console.log(url4.searchParams.has("name"));