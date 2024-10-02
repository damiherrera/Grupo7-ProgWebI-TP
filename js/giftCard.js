document.addEventListener("DOMContentLoaded", function() {
    const usuarioLogueado = localStorage.getItem("userLoggedIn");
    const botonComprarGiftCard = document.getElementById("botonComprar-giftCard");
    const form = document.querySelector(".form__election"); // Selecciona el formulario

    botonComprarGiftCard.addEventListener("click", function(event) {
        // Prevenir el comportamiento por defecto del formulario
        event.preventDefault();

        // Verificar si el formulario es válido
        if (form.checkValidity()) {
            // Si el formulario es válido, redirigir según el estado de login
            if (usuarioLogueado) {
                // Si el usuario está logueado, redirigir a la página de pago de gift cards
                window.location.href = "../vistas/gift-card-pago.html";
            } else {
                // Si el usuario no está logueado, redirigir a la página de registro
                window.location.href = "../vistas/registrarse.html";
            }
        } else {
            // Si el formulario no es válido, mostrar los mensajes de error
            form.reportValidity(); // Esto mostrará los mensajes de error por defecto del navegador
        }
    });
});