const formRegistro = document.getElementById("formRegistro");
const nombreInput = document.getElementById("nombre");
const emailInput = document.getElementById("email");
const passwordInput = document.getElementById("password");
const nodoErrorNombre = document.getElementsByClassName("mensaje_error_usuario")[0];
const nodoErrorEmail = document.getElementsByClassName("mensaje_error_email")[0];
const nodoErrorPassword = document.getElementsByClassName("mensaje_error_password")[0];

function validarFormulario(evento) {
    evento.preventDefault();
    nodoErrorNombre.innerText = "";
    nodoErrorEmail.innerText= "" ;
    nodoErrorPassword.innerText = "";

    if (nombreInput.value.length < 6) {
        nodoErrorNombre.innerText += "El usuario debe tener al menos 6 caracteres. ";
    }
    if (!validarQueElUsuarioNoExiste(nombreInput.value)) {
        nodoErrorNombre.innerText += "El usuario ya existe. ";
    }

    if (!validarEmail(emailInput)) {
        nodoErrorEmail.innerText += "Por favor, ingresa un email válido. ";
    }

    // 3 caracteres en la password
    if (!validarClave(passwordInput.value)) {
        nodoErrorPassword.innerText += "La clave debe tener 3 caracteres, 1 número y 2 letras. ";
    }

    // si no hay errores se registra el user
    if (nodoErrorNombre.innerText === "" && nodoErrorPassword.innerText==="" && nodoErrorEmail.innerText === "") {
        registrarUsuario();
    }
}

function registrarUsuario() {
    let usuariosRegistrados = {};
    const usuariosRegistradosJson = localStorage.getItem("usuarios");

    if (usuariosRegistradosJson) {
        // Parse para usuarios existentes
        usuariosRegistrados = JSON.parse(usuariosRegistradosJson);
    }

    // se agrega el user al obj.
    usuariosRegistrados[nombreInput.value] = {
        nombre: nombreInput.value,
        email: emailInput.value,
        password: passwordInput.value
    };

    // se guarda el update de usuarios 
    localStorage.setItem("usuarios", JSON.stringify(usuariosRegistrados));

    // Redirect to the login page after registration
    window.location.href = "../vistas/inicioSesion.html";
}

function validarQueElUsuarioNoExiste(nombre) {
    const usuariosRegistradosJson = localStorage.getItem("usuarios");
    if (!usuariosRegistradosJson) return true;

    const usuarios = JSON.parse(usuariosRegistradosJson);
    return !usuarios.hasOwnProperty(nombre);
}

function validarClave(clave) {
    if (!clave) return false;

    let letras = 0;
    let numeros = 0;

    for (let char of clave) {
        if (/[a-zA-Z]/.test(char)) {
            letras++;
        } else if (/[0-9]/.test(char)) {
            numeros++;
        }
    }

    return clave.length === 3 && letras === 2 && numeros === 1;
}

function validarEmail(emailInput) {
    const email = emailInput.value;
    const regex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    return regex.test(email);
}

formRegistro.addEventListener("submit", validarFormulario);