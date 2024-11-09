/* TIPOS DE DATOS Y VARIABLES
UNA VARIABLE: Es un espacio de memoria dentro de nuestro programa
TRES TIPOS DE 4FORMAS DE DECLARAR NUESTRAS VARIABLES:
VAR: tiene un alcance global
LET: tiene un alcance local
CONST: es una constante, esto quiere decir que no se puede modificar.

scope: alcance de mis variables
string: cadfena de texto
number: numero:
boolean: tur or false 08/1
undefined: no definido
null: no es un numero
nan: no es un numero */

/*let nombre; // de puede declarar nuestra variable
nombre = "Abby";// y despues inicializar la variable*/

let nombre = "abby"; //pero es mejor hacerlo en la misma linea de codigo
//nombre = "karen"
const apellido ="sanz" //con el cons no se puede, se debe hacer en la misma linea.
console.log (apellido);
console.log (nombre);





let telefono = null;



let direccion; //undefined

//* multiples variables
let num1 = 15;
let num2 = 18;
let num3 = 21;

//* Encasillamiento: se refieree a una conversion o cohersion automatica
//type of me permite saber el tipo de dato
//let precio = prompt("cual es tu rango de inversion");
console.log(typeof precio);

//objeto number 
let numero1 ="41";
let newNumber = Number(numero1);

console.log(typeof newNumber);

//conversion del tipode dato string a number
//parseInt
let cp = "54466";
let numcp = parseInt(cp); //tambien se puede usar parseFloat
console.log(typeof numcp);

//conversion de un numero a un string
let edad =28;
let edadString = edad.toString ();
console.log (edadString);

//cambio de un boolean a un string
/* ejemplo con toString()
let ine = true; //boolean
let ineString = ine.toString ();
console.log(ineString);*/

//ejemplo con String()
let ine = true;
let ineString = String(ine);
console.log (ineString);

console.log (edad * nombre);

