// egistro.js
const formRegistro = document.getElementById("formRegistro"); // Cambia el ID según tu HTML
const nombreInput = document.getElementById("nombre");
const emailInput = document.getElementById("email");
const passwordInput = document.getElementById("password");

formRegistro.addEventListener("submit", function(event) {
    event.preventDefault();

    const nombre = nombreInput.value;
    const email = emailInput.value;
    const password = passwordInput.value;

    // Guardar los datos del usuario en localStorage
    localStorage.setItem("usuario", JSON.stringify({
        nombre: nombre,
        email: email,
        password: password
    }));

    // Redirigir a la página de inicio de sesión después del registro
    window.location.href = "../vistas/inicioSesion.html";
});