const usuarioLogueado = localStorage.getItem("userLoggedIn");
const linkProcederAlPago = document.getElementById("proceder-pago");
const carrito = JSON.parse(localStorage.getItem("carrito")) || [];
const carritoContainer = document.querySelector(".carrito-content");
const totalElement = document.querySelector(".carrito-resumen");
const botonEliminar = document.querySelector("#eliminar-curso");
let total = 0;

// Verificamos si el carrito está vacío
if (carrito.length === 0) {
    carritoContainer.classList.add("vacio");
    carritoContainer.innerHTML = `
    <p>El carrito está vacío</p>
    <a href="../index.html#cursos-destacados" class="btn-volver">Ver Cursos Destacados</a>`;
} else {
    carritoContainer.classList.remove("vacio");
    carritoContainer.classList.add("carrito-content");
    carritoContainer.innerHTML = "";

    // Generamos el HTML para mostrar los cursos en el carrito
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

    // Actualizamos el total del carrito
    actualizarTotal(carrito);

    // Añadimos los eventos de eliminación a los botones
    const botonesEliminar = document.querySelectorAll(".eliminar-curso");
    botonesEliminar.forEach(boton => {
        boton.addEventListener("click", function (event) {
            event.preventDefault(); // Prevenir el comportamiento predeterminado

            const id = boton.getAttribute("data-id");
            console.log("ID del curso a eliminar:", id);

            eliminarCurso(id, carrito);
            console.log("Carrito después de la eliminación:", JSON.parse(localStorage.getItem("carrito")));

            this.closest('.curso-carrito').remove(); // Eliminamos el curso visualmente
            actualizarTotal(carrito);
        });
    });
}

if(botonEliminar){
botonEliminar.forEach(botonEliminar => {
    boton.addEventListener("click", function (event) {
        event.preventDefault(); // Prevenir el comportamiento predeterminado

        const id = boton.getAttribute("data-id");

        // Eliminar el curso
        eliminarCurso(id);

        // Eliminar el curso visualmente
        this.closest('.curso-carrito').remove();

        // Actualizar el total
        const carritoActualizado = JSON.parse(localStorage.getItem("carrito")) || [];
        console.log("Carrito actualizado:", carritoActualizado);
        actualizarTotal(carritoActualizado);
    });
});
}



function eliminarCurso(id) {
    // Obtener el carrito desde localStorage
    const carritoEnStorage = JSON.parse(localStorage.getItem("carrito")) || [];

    console.log("Carrito antes de eliminar:", carritoEnStorage);

    // Filtrar el carrito para eliminar el curso con el id correspondiente
    const carritoActualizado = carritoEnStorage.filter(curso => curso.idCurso !== parseInt(id));

    console.log("Carrito después de eliminar:", carritoActualizado);

    // Actualizar el carrito en localStorage
    localStorage.setItem("carrito", JSON.stringify(carritoActualizado));

    console.log("Carrito actualizado:", JSON.parse(localStorage.getItem("carrito")));

    total =0;

    console.log("Total:", total);

    restarCursoEliminado(carritoActualizado);
    console.log("Actualizar total:", actualizarTotal(carritoActualizado));

}

function restarCursoEliminado(cursos) {
    cursos.forEach(curso => {
        total -= curso.precio;
        console.log("Precio:", curso.precio);
    });

   /* if (totalElement) {
        totalElement.textContent = `Total: USD ${total}`;
        sessionStorage.setItem("totalCarrito", total);
    }*/

    console.log("Total despues de eliminar:", total);
}


function actualizarTotal(cursos) {
   
    cursos.forEach(curso => {
        total += curso.precio;
        console.log("Precio:", curso.precio);
    });

    

    /*if (totalElement) {
        totalElement.textContent = `Total: USD ${total}`;
        sessionStorage.setItem("totalCarrito", total);
    }*/

    totalElement.innerHTML ="";
    totalElement.innerHTML= 
    `<p>Total: USD ${total}</p>
     <a href="../vistas/comprar-curso.html" id="proceder-pago"><button class="btn-comprar" id="proceder-pago">Proceder al Pago</button></a>`;

    console.log("Total:", total);
    
}

/*
if (usuarioLogueado) {
    linkProcederAlPago.addEventListener("click", function (e) {
        // Se permite la navegación solo si el usuario está logueado
        window.location.href = linkProcederAlPago.getAttribute("href");
        console.log("usuario logueado" + usuarioLogueado);

    });
} else {
    linkProcederAlPago.addEventListener("click", function (e) {
        e.preventDefault();
        console.log("Usuario no logueado, redirigiendo a registro");
        window.location.href = "../vistas/registrarse.html";
    });
}*/