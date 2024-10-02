const formInicioSesion = document.getElementById("form");   // seleciona por id y lo guarda en variable
const emailInput= document.getElementById("email")       // seleciona por id  y lo guarda en variable
const passwordInput = document.getElementById ("password");// seleciona por id y lo guarda en variable



formInicioSesion.addEventListener("submit", function(event) {  // evento a form inicio sesion. 
    event.preventDefault ();   // evita que se recargue la pagina

    const usuarioRegistrado = JSON.parse(localStorage.getItem("usuario")) ;
    const email = emailInput.value;
    const password = passwordInput.value;

    if (usuarioRegistrado) {
        if (email === usuarioRegistrado.email && password === usuarioRegistrado.password) {
            // Guardar estado de sesión iniciada
            localStorage.setItem("userLoggedIn", true);
            // Redirigir a la página principal (o cualquier otra página)
            window.location.href = "../index.html";
        } else {
            alert("Usuario o contraseña incorrectos");
        }
    } else {
        alert("No se encontró ningún usuario registrado");
    }
});