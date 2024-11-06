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
    console.log(usuarios)
   
   
    // Verificamos si se encontró el usuario
    if (usuarios[nameUser] && usuarios[nameUser].password === password) {
        usuarioEncontrado = usuarios[nameUser];
        alert("¡Inicio de sesión exitoso!");
        console.log("Usuario encontrado:", usuarioEncontrado);
        window.location.href = "../index.html"; 
        localStorage.setItem("usuarioLogueado", JSON.stringify(usuarioEncontrado)); // Redirigimos a la página principal
    } else {
        alert("Error: Nombre de usuario o contraseña incorrectos.");
    }
});