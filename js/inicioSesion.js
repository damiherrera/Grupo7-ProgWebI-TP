// Seleccionamos los elementos del formulario
const formInicioSesion = document.getElementById("form");
const nameUserInput = document.getElementById("name");
const passwordInput = document.getElementById("password");

formInicioSesion.addEventListener("submit", function(event) {
    event.preventDefault();  // Prevenimos la recarga de la página

    // Obtenemos los valores de los inputs
    const nameUser = nameUserInput.value;
    const password = passwordInput.value;

    // Recuperamos los usuarios desde localStorage
    let usuarios = JSON.parse(localStorage.getItem("usuarios")) || [];
    let usuarioEncontrado = null;
    // console.log(usuarios)
   
    errorUserName.style.display = "none";
    errorPassword.style.display = "none";

    // Verificamos si se encontró el usuario
    if (usuarios[nameUser]) {
        if(usuarios[nameUser].password === password) {
            usuarioEncontrado = usuarios[nameUser];
            window.location.href = "../index.html"; 
            sessionStorage.setItem("usuarioLogueado", JSON.stringify(usuarioEncontrado)); // Redirigimos a la página principal
        } else {
            errorPassword.textContent = "contraseña incorrecta" ;
            errorPassword.style.display = "inline";
        } 
        } else {
            errorUserName.textContent = "usuario no encontrado";
            errorUserName.style.display = "inline";
        }});
   
           
           
    
  

//manejo errores, user o passaword no encontrada 
const errorUserName = document.getElementById("error-nameUser");
const errorPassword = document.getElementById("error-password");