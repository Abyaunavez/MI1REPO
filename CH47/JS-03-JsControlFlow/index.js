/* El flujo de javascript es el proceso en el cual se van interpretando las lineas de tu codigo, y ese flujo se pñuede interrumpir, se puede pausar y ejecutar en un solo hilo o linea*/

console.log(1);
console.log(2);
console.log(3);

const jsFlow = () =>{
    console.log (4);
}
//invocando
jsFlow();

/* if y el son ejecutables que modigfican el flujo de control de java script*/
//al crear dos popsibles bloques de codigo ejecutable en el lemguaje natural

const  validadEdad =(edad) =>{
    if (edad >= 18){
        alert ("bbva te presta mil pesos");
    } else{
        alert ("bbva necesitas tener 18 años")
    }
}

//* javascript utiliza estructuras de control de flojo para hacer tu codigo eficiente y fledxible
