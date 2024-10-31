const usuarioLogueado = localStorage.getItem("userLoggedIn");
const linkProcederAlPago = document.getElementById("proceder-pago");



if (usuarioLogueado) {
    linkProcederAlPago.addEventListener("click", function(e) {
        // Se permite la navegación solo si el usuario está logueado
        window.location.href = linkProcederAlPago.getAttribute("href");
       console.log( "usuario logueado" + usuarioLogueado);
       
    });
} else {
    linkProcederAlPago.addEventListener("click", function(e) {
        e.preventDefault();
        console.log("Usuario no logueado, redirigiendo a registro");
        window.location.href = "../vistas/registrarse.html"; 
    });
}