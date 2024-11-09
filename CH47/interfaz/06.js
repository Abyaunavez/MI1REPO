//Javascript tiene la capacidad de ser sincrono y asincrono,
//siendo la parte asincrona la que se encarga de administrar los flujos de control
//como los request
//estas opciones o operaciones asincronas permiten que el programa siga ejecutando..
//tareas mientras espera que la operacion actual se complete,JS es asincrono y p..
//utilizar funciones predefinidas como setTimeout, promesas y async/await
//ejemplo de una funcion sincrona


/*function procesoSincrono(){
    console.log("inicia el proceso sincrono");
    for(let i=0; i< 1e9 ; i++){}
    console.log("fin del proceso sincrono");
//{}
console.log("Este punto es antes de la función");
procesoSincrono();
console.log("despues de la función sincrona");

//ASINCRONO
//setTimeout(code function, delay)
function procesoAsincrono
console.log("inicia el proceso asincrono");

setTimeout(()=>{
    console.log("aqui termina el proceso asincrono");
},5000);

}*/

function procesoAsincrono(){
    console.log("Inicia el proceso asincrono");
    
    setTimeout(()=>{
        console.log("aqui termina el proceso asincrono");
    },9000);
}
console.log("antes de la funcion asincrona");
procesoAsincrono();
console.log("despues de la funcion asincrona");


const url ="https://pokeapi.co/api/v2/pokemon/ditto";
fetch(url,{
    method: 'GET'
    }).then((response)=>{
         return response.json();
    }).then((data)=>{
        console.log(data);
        localStorage.setItem("nombrePokemon", data.name);
    }).catch((error)=>{
        console.error("ups no se que paso");
    });
     console.log("Despues del fetch");

     function peleaPokemon() {
        const miPrimerPokemon = localStorage.getItem("nombrePokemon");
        console.log("primerContricante:" + miPrimerPokemon );
     }
 
     peleaPokemon();
    


/*console.log("antes del fetch");
fetch(url,{
method: 'GET'
}).then((response)=>{
    console.log(response.data.name);
    return response.json();
}).catch((error)=>{
    console.error("ups no se que paso");
});
 console.log("Despues del fetch")*/



/*const url = "https://pokeapi.co/api/v2/pokemon/Bulbasaur";
console.log("antes del fetch");
fetch(url,{
method: 'GET'
}).then((response)=>{
    console.log(response.data.name);
}).catch((error)=>{
    console.error("ups no se que paso");
});
 console.log("Despues del fetch")*/