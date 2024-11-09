document.getElementById("registrarse").addEventListener("click", function(){

    const nombre = document.querySelector("#nombre input").value.trim();
    const email = document.querySelector("#email input").value.trim();
    const password = document.querySelector("#password input").value.trim();

    if (nombre === ""){
        alert ("Porfavor llena todos los campos,este campo no puede eestar vacio")
    } else if (email === ""){
        alert("Oshee, esto no puede estar vacio");
    } else if (!email.includes ("@")){
        alert ("correo no valido")
    } else if  (password ===""){
        alert ("verifica tu contraseña")
    } else if (password.lenth > 8 ){
        alert ("Tu contraseña no es segura")
    } else{
        alert ("Registro completo" + nombre + "!")
    }
    



}); 