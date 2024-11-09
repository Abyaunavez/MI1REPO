/*let numero1 = parseFloat(document.getElementById("numero1").value);
let numero2 = parseFloat(document.getElementById("numero1").value);
let resultado;
function onInputOneChange(){
    let numero1 = parseFloat(document.getElementById("numero1").value);
    console.log(numero1);
}
function onInputTwoChange(){
    let numero2 = parseFloat(document.getElementById("numero1").value);
    console.log(numero2);
}*/

/*let resultado;
let numero1 = parseFloat(document.getElementById("numero1").value);
let numero2 = parseFloat(document.getElementById("numero2").value);
console.log("AQUI INICIA A EJECUTARSE JS:" + resultado, numero1, numero2);

function onInputOneChange(){
    let numero1 = parseFloat(document.getElementById("numero1").value);
    
    let numero2 = parseFloat(document.getElementById("numero2").value);
    console.log("AQUI PASO UN EVENTO DE INPUT" + numero1local, numero2local);
}
/*function onInputTwoChange(){
    let numero2 = parseFloat(document.getElementById("numero2").value);
    console.log(numero2);
}
function operacionMatematica(typoOperacion){
    console.log(typoOperacion)
    switch(typoOperacion){
        case "suma":
            console.log("este es el console.log del case suma:" + numero1, numero2);
            resultado = numero1 + numero2;
            console.log("este deberia ser el resultado:" + resultado);
            break;
        case "resta":
            console.log("este es el console.log del case resta:" + numero1, numero2);
            resultado = numero1 - numero2;
            console.log("este deberia ser el resultado:" + resultado);
            break;
        case "multi":
            console.log("este es el console.log del case multi:" + numero1, numero2);
            resultado = numero1 * numero2;
            console.log("este deberia ser el resultado:" + resultado);
            break;
            default:
                alert ("syntax error")
    }
    console.log(resultado);

}*/

/*let resultado;
let numero1 = parseFloat(document.getElementById("numero1").value);
let numero2 = parseFloat(document.getElementById("numero2").value);
console.log("AQUI INICIA A EJECUTARSE JS: "+ resultado, numero1,numero2);

/*function onInputOneChange(){
    let numero1Local = parseFloat(document.getElementById("numero1").value);
    let numero2Local  = parseFloat(document.getElementById("numero2").value);
    console.log("AQUI PASO UN EVENTO DE INPUT: "+  numero1Local,numero2Local);
}*/

/*function operacionMatematica(typoOperacion){
    
    let numero1 = parseFloat(document.getElementById("numero1").value);
    let numero2 = parseFloat(document.getElementById("numero2").value);
    console.log("AQUI PASO UN EVENTO DE CLICK Y ESTAS SON LAS VARIABLE GLOBALES: "+  numero1,numero2);
    console.log("AQUI PASO UN EVENTO DE CLICK Y ESTAS SON LAS VARIABLE LOCALES: "+  numero1Local,numero2Local);

    switch(typoOperacion){
        case "suma":
            resultado = numero1 + numero2;
            break;
        case "resta":
            resultado = numero1 - numero2;
            break;
        case "multi":
            resultado = numero1 * numero2;
            break;
        default:
             alert("syntax error");
    }
    console.log(resultado);
}*/
function operacionMatematica(typoOperacion){
    let numero1 = parseFloat(document.getElementById("numero1").value);
   let numero2 = parseFloat(document.getElementById("numero2").value);
   switch(typoOperacion){
   case "suma":
   resultado = numero1 + numero2;
   break;
   case "resta":
   resultado = numero1 - numero2;
   break;
   case "multi":
   resultado = numero1 * numero2;
   break;
   default:
   alert("syntax error");
    }
   console.log(resultado);
   document.getElementById("result").innerHTML = `Resultado: ${resultado}`; /*strings simples se declaran  = ",'
strings literals  = ` */
   }