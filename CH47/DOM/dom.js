// cuando  buscamos modificss un valor de un imput html generalmente utilizamos}
//const inputOne = document.getElementById("inputText").value;


//const otroElemento = inputOne.getElementById("")

// la estructura de como interwctuamos con el dom en JS es la si8guente: 
//1.palabra reservada: document
//2. utilizamos el metodo/Api -> getElementById()
//3. ultilizamos el atributo del elemento que en este caso, conocemos previamente que es un input 
//por este conocimiento previo value.

document.getElementById("registrarse").addEventListener("click", function () {
    const nombre = document.querySelector("#nombre input").value.trim();
   
    const password = document.querySelector("#password input").value.trim();
    if (nombre === "") {
        alert("Por favor ingresa tu nombre, este campo no puede quedar vacio");
    } else if (email === "") {
        alert("Oshe, esto no puede estar vacío");
    } else if (!email.includes("@")) {
        alert("Correo no aceptado");
    } else if (password === "") {
        alert ("Contraseña incorrecta")
    } else if (password.length <8)
        alert ("Contraseña no segura");
        else{
            alert("Registro completo" + nombre + "!");
        }
});