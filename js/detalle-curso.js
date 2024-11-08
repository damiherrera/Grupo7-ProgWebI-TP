const modal = document.getElementById("modal");
const span = document.getElementsByClassName("cerrar")[0];
const botonComprar = document.getElementsByClassName("boton-comprarParaMi");
const botonInscribirse = document.getElementsByClassName("boton-inscripcion-empresa");
const cerrarModalBtn = document.getElementById("cerrar-modal");


displayCurso();
displayCursosRelacionados();
mostrarBoton();

function getCursosOfrecidos() {
    const cursosOfrecidos = localStorage.getItem("cursosOfrecidos");
    return JSON.parse(cursosOfrecidos);
}

function displayCurso() {
    const url = new URL(location.href);
    const idCurso = parseInt(url.searchParams.get("idCurso"));
    const cursosOfrecidos = getCursosOfrecidos();
    const curso = cursosOfrecidos.cursos.find(curso => curso.idCurso === idCurso);
    if (curso) {
        const cursoSection = document.querySelector(".curso-section");

        cursoSection.innerHTML = `
        <img class="curso-detalle__foto" src= "${curso.imagen}" alt="">
            <div class="curso-detalle__descripcion">
                <h3>${curso.nombreCurso}</h3>
                <div class="curso-detalle-item">
                    <p><span>Valor:</span> ${curso.moneda} ${curso.precio}.-</p>
                </div>
                <div class="curso-detalle-item">
                    <p><span>Modalidad:</span> ${curso.modalidad}</p>
                </div>
                <div class="curso-detalle-item">
                    <p><span>Tiempo de dedicación necesario:</span> ${curso.duracion}</p>
                </div>
                <div class="curso-detalle-item">
                    <p><span>Descripción del curso:</span> ${curso.descripcion}</p>
                </div>
                <div class="curso-detalle-item">
                    <p><span>Requisitos previos:</span>
                        <li>
                            ${curso.requisitos}
                        </li>
                    </p>
                </div>
                <h3>CONTENIDOS POR CLASE</h3>
                <div class="caja-curso">
                    <details open>
                        <summary>Introducción</summary>
                        <div class="menu-content">
                            <div class="subopcion">
                                <i class="fas fa-play icon"></i>
                                <div class="texto">
                                    <span>${curso.introTemaUno}</span>
                                    <div class="duracion">
                                        <i class="fas fa-clock"></i>
                                        <span>1h 15m</span>
                                    </div>
                                </div>
                                <input type="checkbox">
                            </div>
                            <div class="subopcion">
                                <i class="fas fa-play icon"></i>
                                <div class="texto">
                                    <span>${curso.introTemaDos}</span>
                                    <div class="duracion">
                                        <i class="fas fa-clock"></i>
                                        <span>2h</span>
                                    </div>
                                </div>
                                <input type="checkbox">
                            </div>
                            <div class="subopcion">
                                <i class="fas fa-play icon"></i>
                                <div class="texto">
                                    <span>${curso.introTemaTres}</span>
                                    <div class="duracion">
                                        <i class="fas fa-clock"></i>
                                        <span>2h</span>
                                    </div>
                                </div>
                                <input type="checkbox">
                            </div>
                            <div class="subopcion">
                                <i class="fa fa-list"></i>
                                <div class="texto">
                                    <span>EXAMEN</span>
                                    <div class="duracion">
                                        <i class="fas fa-clock"></i>
                                        <span>1h</span>
                                    </div>
                                </div>
                                <input type="checkbox">
                            </div>
                        </div>
                    </details>

                    <!-- Unidad 2 -->
                    <details>
                        <summary>Unidad 2</summary>
                        <div class="menu-content">
                            <div class="subopcion">
                                <i class="fas fa-play icon"></i>
                                <div class="texto">
                                    <span>${curso.unidadDosTemaUno}</span>
                                    <div class="duracion">
                                        <i class="fas fa-clock"></i>
                                        <span>1h 30m</span>
                                    </div>
                                </div>
                                <input type="checkbox">
                            </div>
                            <div class="subopcion">
                                <i class="fas fa-play icon"></i>
                                <div class="texto">
                                    <span>${curso.unidadDosTemaDos}</span>
                                    <div class="duracion">
                                        <i class="fas fa-clock"></i>
                                        <span>2h</span>
                                    </div>
                                </div>
                                <input type="checkbox">
                            </div>
                            <div class="subopcion">
                                <i class="fas fa-play icon"></i>
                                <div class="texto">
                                    <span>${curso.unidadDosTemaTres}</span>
                                    <div class="duracion">
                                        <i class="fas fa-clock"></i>
                                        <span>2h</span>
                                    </div>
                                </div>
                                <input type="checkbox">
                            </div>
                            <div class="subopcion">
                                <i class="fa fa-list"></i>
                                <div class="texto">
                                    <span>EXAMEN</span>
                                    <div class="duracion">
                                        <i class="fas fa-clock"></i>
                                        <span>1h</span>
                                    </div>
                                </div>
                                <input type="checkbox">
                            </div>
                        </div>
                    </details>

                    <!-- Unidad 3 -->
                    <details>
                        <summary>Unidad 3</summary>
                        <div class="menu-content">
                            <div class="subopcion">
                                <i class="fas fa-play icon"></i>
                                <div class="texto">
                                    <span>${curso.unidadTresTemaUno}</span>
                                    <div class="duracion">
                                        <i class="fas fa-clock"></i>
                                        <span>1h</span>
                                    </div>
                                </div>
                                <input type="checkbox">
                            </div>
                            <div class="subopcion">
                                <i class="fas fa-play icon"></i>
                                <div class="texto">
                                    <span>${curso.unidadTresTemaDos}</span>
                                    <div class="duracion">
                                        <i class="fas fa-clock"></i>
                                        <span>1h 30m</span>
                                    </div>
                                </div>
                                <input type="checkbox">
                            </div>
                            <div class="subopcion">
                                <i class="fas fa-play icon"></i>
                                <div class="texto">
                                    <span>${curso.unidadTresTemaTres}</span>
                                    <div class="duracion">
                                        <i class="fas fa-clock"></i>
                                        <span>2h</span>
                                    </div>
                                </div>
                                <input type="checkbox">
                            </div>
                            <div class="subopcion">
                                <i class="fa fa-list"></i>
                                <div class="texto">
                                    <span>EXAMEN</span>
                                    <div class="duracion">
                                        <i class="fas fa-clock"></i>
                                        <span>1h</span>
                                    </div>
                                </div>
                                <input type="checkbox">
                            </div>
                        </div>
                    </details>
                </div>
            </div> `;
    }

    if (curso) {
        const docenteSection = document.querySelector(".docente-section");

        docenteSection.innerHTML = `
        <h3>DOCENTE</h3>
            <div class="docente-container">
                <img src="${curso.fotoDocente}" alt="Foto docente">
                <div class="docente-perfil">
                    <h4>${curso.nombreDocente}</h4>
                    <div class="rating">
                        <i class="fas fa-star"></i>
                        <i class="fas fa-star"></i>
                        <i class="fas fa-star"></i>
                        <i class="fas fa-star"></i>
                        <i class="far fa-star"></i>
                    </div>
                    <p>${curso.bioDocente}</p>
                </div>
            </div> `;
    }


}
//Se genera el array  para las 4 tarjetas de cursos relacionados
function generarCursosRelacionados() {
    const cursosOfrecidos = getCursosOfrecidos();
    const detalleCursos = cursosOfrecidos.cursos;
    const url = new URL(location.href);
    const idCurso = parseInt(url.searchParams.get("idCurso"));
    const cursosRelacionados = [];


    while (cursosRelacionados.length < 4) {
        const indiceAleatorio = Math.floor(Math.random() * detalleCursos.length);
        const cursoSeleccionado = detalleCursos[indiceAleatorio];
        if (cursoSeleccionado.idCurso !== idCurso && !cursosRelacionados.includes(cursoSeleccionado)) {
            cursosRelacionados.push(cursoSeleccionado);
        }
    }
    return cursosRelacionados;
}

//Se genera el HTML para las 4 tarjetas de cursos relacionados
function displayCursosRelacionados() {
    const cursosRelacionados = generarCursosRelacionados();
    const cursosRelacionadosSection = document.querySelector(".cursos-relacionados-section");
    cursosRelacionadosSection.innerHTML = "";
    cursosRelacionados.forEach((curso) => {
        const cursoCard = document.createElement("div");
        cursoCard.classList.add("cursos-destacados__container");

        if (curso.modalidad === 'Virtual') {
            cursoCard.innerHTML = `
            <img src="${curso.imagen}" alt="Curso 1">
                <span class="precio">USD ${curso.precio}</span>
                <span class="modalidad">${curso.modalidad}</span>
                <div class="cursos-destacados__info">
                    <div class="cursos-destacados__info-nombre">
                        <h3><span class="horas">${curso.duracion}</span>${curso.nombreCurso}</h3>
                        <a href="../vistas/detalle-curso.html?idCurso=${curso.idCurso}">Ver detalles</a>
                        <a href="../vistas/carrito.html"><input class="boton-comprar" type="button" value="Agregar al carrito" id="boton-comprar"></a>
                    </div>
                </div>`;
        cursosRelacionadosSection.appendChild(cursoCard);
        } else {
            cursoCard.innerHTML = `
            <img src="${curso.imagen}" alt="Curso 1">
                <span class="precio">USD ${curso.precio}</span>
                <span class="modalidad">${curso.modalidad}</span>
                <div class="cursos-destacados__info">
                    <div class="cursos-destacados__info-nombre">
                        <h3><span class="horas">${curso.duracion}</span>${curso.nombreCurso}</h3>
                        <a href="../vistas/detalle-curso.html?idCurso=${curso.idCurso}">Ver detalles</a>
                        <a href="../vistas/inscripcion-empresa.html?idCurso=${curso.idCurso}"><input class="boton-comprar" type="button" value="Inscribirse" id="boton-comprar"></a>
                    </div>
                </div>`;
        cursosRelacionadosSection.appendChild(cursoCard);
        }

        
    });
}

function obtenerCursoPorId(idCurso) {
    const cursosOfrecidos = getCursosOfrecidos();
    return cursosOfrecidos.cursos.find(curso => curso.idCurso === idCurso);
}

//se determina si se muestra boton comprar o boton inscribirse
function mostrarBoton() {
    const url = new URL(location.href);
    const idCurso = parseInt(url.searchParams.get("idCurso"));
    const curso = obtenerCursoPorId(idCurso);

    const botonContainer = document.querySelector(".botones-section");
    botonContainer.innerHTML = "";

    if (curso.modalidad === "Virtual") {
        botonContainer.innerHTML = `
        <a href="../vistas/carrito.html"><input class="boton-comprarParaMi" type="button" value="Comprar"
                    data-url="../vistas/carritovacio.html" id="boton-comprar"></a>`;

    } else if (curso.modalidad === "Presencial") {
        botonContainer.innerHTML = `
        <a href="../vistas/inscripcion-empresa.html"><input class="boton-inscripcion-empresa" type="button"
                    value="Inscribirse" data-url="../vistas/inscripcion-empresa.html?idCurso=${curso.idCurso}" id="inscripcion-empresa"></a>`;
    }


}


document.addEventListener('DOMContentLoaded', function () {
    const modal = document.getElementById("modal");
    const span = document.getElementsByClassName("cerrar")[0];
    const botonComprar = document.getElementById("boton-comprar");
    const botonInscribirse = document.getElementById("inscripcion-empresa");

    let redireccionURL = "";

    function mostrarModal(mensaje) {
        const mensajeCurso = document.getElementById("mensaje-curso");
        mensajeCurso.innerHTML = mensaje;
        modal.style.display = "block";
    }

    function manejarAccionCurso(event, urlRedireccion) {
        event.preventDefault(); 
        const url = new URL(location.href);
        const idCurso = parseInt(url.searchParams.get("idCurso"));
        const curso = obtenerCursoPorId(idCurso);

        if (curso) {
            const mensaje = `¡Estás a un paso de finalizar! <br> Vas a adquirir el ${curso.nombreCurso}, por el valor de USD ${curso.precio}.-`;
            mostrarModal(mensaje);

            redireccionURL = urlRedireccion;

            agregarAlCarrito(idCurso);
        } else {
            console.error("Curso no encontrado");
        }
        
    }

    function redirigir() {
        if (redireccionURL) {
            window.location.href = redireccionURL;
        } else {
            console.error("No se ha definido una URL de redirección");
        }
    }

    span.onclick = function () {
        modal.style.display = "none";
        redirigir();
    }

    window.onclick = function (event) {
        if (event.target === modal) {
            modal.style.display = "none";
            redirigir();
        }
    }

    if (botonComprar) {
        const urlRedireccion = botonComprar.getAttribute("data-url");
        botonComprar.addEventListener("click", function (event) {
            manejarAccionCurso(event, urlRedireccion);
        });
    }

    if (botonInscribirse) {
        const urlRedireccion = botonInscribirse.getAttribute("data-url");
        botonInscribirse.addEventListener("click", function (event) {
            manejarAccionCurso(event, urlRedireccion);
        });
    }
});



function agregarAlCarrito(idCurso)  {
    const cursosDisponbiles = JSON.parse(localStorage.getItem("cursosOfrecidos"));
    const carrito = JSON.parse(localStorage.getItem("carrito")) || [];

    const cursoSeleccionado = cursosDisponbiles.cursos.find(curso => curso.idCurso === idCurso);

    if(cursoSeleccionado && !carrito.some(curso => curso.idCurso === idCurso)){
        carrito.push(cursoSeleccionado);
        localStorage.setItem("carrito", JSON.stringify(carrito));
        alert("Curso agregado al carrito");
    } else {
        alert("Este curso ya está en tu carrito");
    }
}

