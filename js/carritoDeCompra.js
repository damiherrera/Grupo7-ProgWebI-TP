const usuarioLogueado = localStorage.getItem("userLoggedIn");
const linkProcederAlPago = document.getElementById("proceder-pago");
const carritoEnUso = JSON.parse(localStorage.getItem("carrito"));
const carritoContainer = document.querySelector(".carrito-content");
const totalElement = document.querySelector(".carrito-resumen");
const botonEliminar = document.querySelector("#eliminar-curso");
let total = 0;




if (carrito.length === 0) {
    carritoContainer.classList.add("vacio");
    carritoContainer.innerHTML = `
    <p>El carrito está vacío</p>
    <a href="../index.html#cursos-destacados" class="btn-volver">Ver Cursos Destacados</a>`;
} else {
    carritoContainer.classList.remove("vacio");
    carritoContainer.classList.add("carrito-content");
    carritoContainer.innerHTML = "";

    carrito.forEach(curso => {
        const itemHTML = `
        <div class="curso-carrito">
            <div class="carrito-box">
                <img src="${curso.imagen}" alt="${curso.nombreCurso}">
                <div class="curso-detalle">
                    <h3>${curso.nombreCurso}</h3>
                    <p>Cantidad de horas: ${curso.duracion}</p>
                    <p>Modalidad: ${curso.modalidad}</p>
                    <p>Precio: USD ${curso.precio}</p>
                    <button class="eliminar-curso" id="eliminar-curso" data-id="${curso.idCurso}">Eliminar</button>
                </div>
            </div>
        </div>`;
        carritoContainer.innerHTML += itemHTML;
    });



    function sumarCursos(cursos) {
        cursos.forEach(curso => {
            total += curso.precio;
            sessionStorage.setItem("totalCarrito", total);
        });
    }



    sumarCursos(carrito);
    mostratTotal(carrito);


    const botonesEliminar = document.querySelectorAll(".eliminar-curso");
    botonesEliminar.forEach(boton => {
        boton.addEventListener("click", function (event) {
            event.preventDefault(); // Prevenir el comportamiento predeterminado

            const id = boton.getAttribute("data-id");
            console.log("ID del curso a eliminar:", id);

            eliminarCurso(id);
            console.log("Carrito después de la eliminación:", JSON.parse(localStorage.getItem("carrito")));

            this.closest('.curso-carrito').remove(); // Eliminamos el curso visualmente

            const carritoActualizado = JSON.parse(localStorage.getItem("carrito")) || [];
            if (carritoActualizado.length === 0) {
                verificarSiElCarritoEstaVacio(carritoActualizado);
            } else {
                mostratTotal();
            }

            const numeroCarrito = document.querySelector(".numero");
            numeroCarrito.textContent = carritoActualizado.length;

        });
    });
}


function eliminarCurso(id) {

    const carritoEnStorage = JSON.parse(localStorage.getItem("carrito")) || [];
    const carritoActualizado = carritoEnStorage.filter(curso => curso.idCurso !== parseInt(id));

    localStorage.setItem("carrito", JSON.stringify(carritoActualizado));

    restarCursoEliminado(carritoActualizado);

}


function mostratTotal() {
    totalElement.innerHTML = "";
    totalElement.innerHTML =
        `<p class="carrito-vacio-font">Total: USD ${total}</p>
     <a href="../vistas/comprar-curso.html" id="proceder-pago"><button class="btn-comprar" id="proceder-pago">Proceder al Pago</button></a>`;


}

function restarCursoEliminado(cursos) {
    total = 0;
    sumarCursos(cursos);
    sessionStorage.setItem("totalCarrito", total);
}

function verificarSiElCarritoEstaVacio(carrito) {
    console.log("verificar carrito se esta ejecutando");
    if (carrito.length === 0) {
        totalElement.style.display = "none";
        carritoContainer.classList.add("vacio");
        carritoContainer.innerHTML = "";
        carritoContainer.innerHTML = `
        <p>El carrito está vacío</p>
        <a href="../index.html#cursos-destacados" class="btn-volver">Ver Cursos Destacados</a>`;
        
    }
}