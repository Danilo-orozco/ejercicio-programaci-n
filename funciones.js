/*

function sumar(numero1,numero2){
    return numero1 + numero2;

}
console.log(sumar(4 , 30));

//crear una funcion llamada saludar que recibe por
// parametro la variable nombre
// llamar la funcion con su nombre por parametro


function saludar (nombre){
    return "hola " + nombre + " como estas";
}
console.log( saludar("felipe"));
console.log( saludar("duvan"));
console.log( saludar("eduard"));
console.log( saludar("daniel"));

function calculararea(base , altura) {
    return (base * altura) / 2 ;
}
console.log(calculararea(10 , 5));
*/
// crear una funcion que me calcule el iva

function calculariva(precioproducto){
  return  (19 * precioproducto) / 100
}
let resultado = calculariva(500000)
console.log(resultado)

// escribe una funcion llamada esfindesemana() que tome un parametro dia (1 al 7 represente el lunes y asi hasta el 7 domingo) )


let dia =5
function esfindesemana (dia) {
if (dia == 6  || dia == 7){
    console.log("es fin de semana");

}
else{
    console.log("no es fin de semana");
}
}
esfindesemana (5)





