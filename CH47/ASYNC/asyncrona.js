const failed = true;
//new es el constructor 
const myPromise = new Promise((resolve, reject) => { 
    if(failed)
        reject('promesa fallida');
    else
        resolve('¡promesa resuelta amigo!')
});

function success(result){
 // console.log(result);
}

function onFailed(error){
  //console.log(error);
}

myPromise.then((result) => success(result))
.catch((error) => onFailed(error));

//ASYNC/AWAIT 
//FUNCIONES DUMMY O MOCK (funciones que son usadas para hacer pruebas de simulacion que no tienen data real)
function dummyFetch(){
    return new Promise((resolve)=>{
        setTimeout(()=>{
            resolve("datosDummys");
        },6000)
    })
}

// desde el uso de la palabra reservada Async  estas declarando que la funcion es asincrona y por lo tanto retorna una promesa
// dentro de una funcion asyncrona se utiliza un const para crear ( se cre uan variable constante poara colocar un awat para despues colocar la funcion asincrona )
async function functionAsync(){
    try{
    const data = await dummyFetch(); // aqui "esperamos" a que la promesa se resuelva.
    console.log (data);// aqui esperamos que nos imprima data
    } catch (err){
        console.error("error de Dummy"+err);

    }

}

functionAsync();