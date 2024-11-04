const cursosOfrecidos = {
    cursos: [
        {
            idCurso: 101,
            nombreCurso: "Curso Bases de Datos",
            precio: 90,
            moneda: "USD",
            duracion: "30 horas",
            modalidad: "Virtual",
            imagen: "../img/BasesDeDatosjpeg.jpeg",
            descripcion: "Este curso introductorio te proporcionará los conocimientos esenciales para comprender el funcionamiento de las bases de datos. Aprenderás sobre los conceptos clave como modelado de datos, diseño de esquemas, y la implementación de bases de datos relacionales utilizando SQL. A lo largo del curso, desarrollarás las habilidades para crear, gestionar y optimizar bases de datos, asegurando la integridad y seguridad de la información. Ideal para principiantes que desean adentrarse en el mundo de la gestión de datos y desarrollar soluciones eficientes para entornos empresariales.",
            requisitos: "Conocimientos básicos de informática y manejo de computadoras. Familiaridad con conceptos generales de programación (no indispensable pero recomendado). Habilidad para comprender lógica matemática básica",
            introTemaUno: "Introducción a las bases de datos - Conceptos Básicos",
            introTemaDos: "Diagrama Entidad - Relación",
            introTemaTres: "Modelo Relacional",
            unidadDosTemaUno: "Modelado de Datos",
            unidadDosTemaDos: "Leguaje SQL",
            unidadDosTemaTres: "Integridad de Datos",
            unidadTresTemaUno: "Normalización de Bases de Datos",
            unidadTresTemaDos: "Consultas avanzadas en SQL",
            unidadTresTemaTres: "Gestión de Transacciones",
            nombreDocente: "Ing. Martín López Pereyra",
            fotoDocente: "../img/docente-bases-de-datos.jpeg",
            bioDocente: "El Ingeniero Martín López Pereyra es un experto en bases de datos y sistemas de información con más de 15 años de experiencia. Se graduó como Ingeniero en Sistemas de Información de la Universidad Tecnológica Nacional (UTN) en Argentina y cuenta con una Maestría en Ciencias de la Computación por la Universidad Nacional de La Plata (UNLP). Martín ha trabajado en grandes empresas de tecnología y consultoría, liderando proyectos de infraestructura de bases de datos y optimización de sistemas. Su enfoque se centra en la gestión eficiente de datos y el diseño de soluciones escalables, utilizando tecnologías como SQL, PostgreSQL, Oracle y NoSQL. También es un entusiasta de la seguridad de bases de datos y la recuperación de desastres. Como docente, ha impartido clases y seminarios en varias universidades y academias tecnológicas de Argentina. Sus clases destacan por ser altamente prácticas, con un enfoque en resolver problemas reales a través de la implementación y gestión de bases de datos eficientes.",
        },
        {
            idCurso: 102,
            nombreCurso: "Curso de Diseño Web",
            precio: 50,
            moneda: "USD",
            duracion: "20 horas",
            modalidad: "Virtual",
            imagen: "../img/disenio-web.jpg",
            descripcion: "Este curso te brindará los conocimientos esenciales para diseñar y desarrollar sitios web atractivos y funcionales. Aprenderás sobre los principios del diseño web, la creación de interfaces de usuario, y la implementación de páginas web interactivas utilizando HTML, CSS y JavaScript. Durante el curso, desarrollarás habilidades para diseñar layouts responsivos, optimizar la experiencia del usuario, y mejorar la accesibilidad de los sitios web. Ideal para principiantes que desean adentrarse en el mundo del diseño web y la creación de contenidos digitales.",
            requisitos: "Conocimientos básicos de informática y manejo de computadoras. Familiaridad con conceptos generales de diseño y creatividad. Habilidad para comprender lógica matemática básica",
            introTemaUno: "Introducción al Diseño Web - Principios Básicos",
            introTemaDos: "Diseño de Interfaces de Usuario",
            introTemaTres: "Creación de Contenidos Web",
            unidadDosTemaUno: "HTML y Estructura de Páginas Web",
            unidadDosTemaDos: "Estilos CSS y Diseño Responsivo",
            unidadDosTemaTres: "Interactividad con JavaScript",
            unidadTresTemaUno: "Optimización de Sitios Web",
            unidadTresTemaDos: "Accesibilidad y Usabilidad",
            unidadTresTemaTres: "Desarrollo de Proyecto Final",
            nombreDocente: "Lic. Sofía Rodríguez García",
            fotoDocente: "../img/docente_diseño_web.jpeg",
            bioDocente: "La Licenciada Sofía Rodríguez García es una diseñadora web y especialista en experiencia de usuario (UX) con más de 10 años de experiencia en la industria digital. Se graduó como Licenciada en Diseño de Comunicación Visual de la Universidad de Buenos Aires (UBA) en Argentina y cuenta con una certificación en Diseño de Interacción por la Universidad de Stanford. Sofía ha trabajado en agencias de diseño y marketing digital, colaborando en proyectos de diseño web, branding y estrategias de contenido para empresas de diversos sectores. Su enfoque se centra en la creación de interfaces intuitivas y atractivas, que generen una experiencia positiva para los usuarios. Como docente, ha impartido cursos y talleres de diseño web en instituciones educativas y centros de formación profesional. Sus clases se caracterizan por combinar teoría y práctica, fomentando la creatividad y la innovación en el diseño de sitios web.",
        },
        {
            idCurso: 103,
            nombreCurso: "Curso de JavaScript",
            precio: 80,
            moneda: "USD",
            duracion: "30 horas",
            modalidad: "Virtual",
            imagen: "../img/JavaScript.jpg",
            descripcion: "Este curso avanzado te permitirá dominar el lenguaje de programación JavaScript y sus aplicaciones en el desarrollo web. Aprenderás sobre los conceptos fundamentales de JavaScript, la manipulación del DOM, y la creación de aplicaciones interactivas utilizando frameworks modernos como React y Angular. Durante el curso, desarrollarás habilidades para programar en JavaScript, resolver problemas complejos, y optimizar el rendimiento de las aplicaciones web. Ideal para desarrolladores y programadores que desean profundizar en el mundo de JavaScript y las tecnologías web.",
            requisitos: "Conocimientos básicos de programación y lógica de programación. Familiaridad con HTML, CSS y conceptos de diseño web. Habilidad para comprender lógica matemática avanzada",
            introTemaUno: "Introducción a JavaScript - Conceptos Básicos",
            introTemaDos: "Estructuras de Control y Funciones",
            introTemaTres: "Programación Orientada a Objetos",
            unidadDosTemaUno: "Manipulación del DOM",
            unidadDosTemaDos: "Eventos y Formularios",
            unidadDosTemaTres: "Frameworks y Librerías de JavaScript",
            unidadTresTemaUno: "Desarrollo de Aplicaciones Web",
            unidadTresTemaDos: "Optimización de Código",
            unidadTresTemaTres: "Proyecto Final",
            nombreDocente: "Lic. Ana María Fernández",
            fotoDocente: "../img/docente-javascript.jpeg",
            bioDocente: "La Licenciada Ana María Fernández es una desarrolladora web y experta en JavaScript con más de 12 años de experiencia en el desarrollo de aplicaciones web y móviles. Se graduó como Licenciada en Sistemas de Información de la Universidad Nacional de Córdoba (UNC) en Argentina y cuenta con una certificación en Desarrollo Web Full Stack por la Universidad de Harvard. Ana María ha trabajado en startups y empresas de tecnología, liderando equipos de desarrollo y diseñando soluciones innovadoras para entornos digitales. Su enfoque se centra en la programación funcional y la arquitectura de aplicaciones web, utilizando tecnologías como React, Node.js y MongoDB. Como docente, ha impartido cursos y workshops de JavaScript en instituciones educativas y centros de formación tecnológica. Sus clases se caracterizan por ser dinámicas y participativas, fomentando la colaboración y el aprendizaje práctico en el desarrollo de aplicaciones web.",

        },
        {
            idCurso: 104,
            nombreCurso: "Curso de Java",
            precio: 80,
            moneda: "USD",
            duracion: "60 horas",
            modalidad: "Presencial",
            imagen: "../img/java.jpg",
            descripcion: "Este curso avanzado te permitirá dominar el lenguaje de programación Java y sus aplicaciones en el desarrollo de software. Aprenderás sobre los conceptos fundamentales de Java, la programación orientada a objetos, y la creación de aplicaciones de escritorio y web. Durante el curso, desarrollarás habilidades para programar en Java, diseñar soluciones escalables, y optimizar el rendimiento de las aplicaciones. Ideal para desarrolladores y programadores que desean profundizar en el mundo de Java y las tecnologías de desarrollo de software.",
            requisitos: "Conocimientos básicos de programación y lógica de programación. Familiaridad con conceptos de diseño de software y arquitectura de sistemas. Habilidad para comprender lógica matemática avanzada",
            introTemaUno: "Introducción a Java - Conceptos Básicos",
            introTemaDos: "Programación Orientada a Objetos",
            introTemaTres: "Estructuras de Datos",
            unidadDosTemaUno: "Interfaces Gráficas de Usuario",
            unidadDosTemaDos: "Desarrollo de Aplicaciones Web con Java",
            unidadDosTemaTres: "Persistencia de Datos",
            unidadTresTemaUno: "Diseño de Software con Java",
            unidadTresTemaDos: "Optimización de Código y Rendimiento",
            unidadTresTemaTres: "Proyecto Final",
            nombreDocente: "Ing. Diego Ramirez",
            fotoDocente: "../img/docente-java.jpeg",
            bioDocente: "El Ingeniero Diego Ramirez es un desarrollador de software y experto en Java con más de 20 años de experiencia en el desarrollo de aplicaciones empresariales y sistemas informáticos. Se graduó como Ingeniero en Sistemas de Información de la Universidad Nacional de Rosario (UNR) en Argentina y cuenta con una Maestría en Ingeniería de Software por la Universidad Politécnica de Madrid. Diego ha trabajado en empresas de tecnología y consultoría, liderando proyectos de desarrollo de software y diseño de arquitecturas empresariales. Su enfoque se centra en la programación modular y la integración de sistemas, utilizando tecnologías como Java EE, Spring y Hibernate. Como docente, ha impartido clases y seminarios de Java en universidades y centros de formación tecnológica. Sus clases se destacan por su enfoque práctico y su orientación a resolver problemas reales a través del desarrollo de software y la arquitectura de sistemas.",
        },
        {
            idCurso: 105,
            nombreCurso: "Curso de Python",
            precio: 100,
            moneda: "USD",
            duracion: "40 horas",
            modalidad: "Virtual",
            imagen: "../img/python.jpg",
            descripcion: "Este curso avanzado te permitirá dominar el lenguaje de programación Python y sus aplicaciones en el desarrollo de software y análisis de datos. Aprenderás sobre los conceptos fundamentales de Python, la programación orientada a objetos, y la creación de aplicaciones de escritorio y web. Durante el curso, desarrollarás habilidades para programar en Python, diseñar soluciones escalables, y aplicar técnicas de análisis de datos. Ideal para desarrolladores y analistas que desean profundizar en el mundo de Python y las tecnologías de desarrollo de software.",
            requisitos: "Conocimientos básicos de programación y lógica de programación. Familiaridad con conceptos de diseño de software y arquitectura de sistemas. Habilidad para comprender lógica matemática avanzada",
            introTemaUno: "Introducción a Python - Conceptos Básicos",
            introTemaDos: "Programación Orientada a Objetos",
            introTemaTres: "Estructuras de Datos",
            unidadDosTemaUno: "Desarrollo de Aplicaciones con Python",
            unidadDosTemaDos: "Análisis de Datos con Pandas",
            unidadDosTemaTres: "Visualización de Datos con Matplotlib",
            unidadTresTemaUno: "Machine Learning con Python",
            unidadTresTemaDos: "Desarrollo Web con Django",
            unidadTresTemaTres: "Proyecto Final",
            nombreDocente: "Ing. Javier Mendoza",
            fotoDocente: "../img/docente-python.jpeg",
            bioDocente: "El Ingeniero Javier Mendoza es un desarrollador de software y experto en Python con más de 15 años de experiencia en el desarrollo de aplicaciones y análisis de datos. Se graduó como Ingeniero en Sistemas de Información de la Universidad Nacional de Córdoba (UNC) en Argentina y cuenta con una Maestría en Ciencia de Datos por la Universidad de Stanford. Javier ha trabajado en empresas de tecnología y startups, liderando proyectos de desarrollo de software y análisis de datos para empresas de diversos sectores. Su enfoque se centra en la programación orientada a objetos y el análisis de datos, utilizando tecnologías como NumPy, SciPy y TensorFlow. Como docente, ha impartido cursos y talleres de Python en instituciones educativas y centros de formación tecnológica. Sus clases se caracterizan por su enfoque práctico y su orientación a resolver problemas reales a través del desarrollo de software y análisis de datos.",
        },
        {
            idCurso: 106,
            nombreCurso: "Curso de React",
            precio: 60,
            moneda: "USD",
            duracion: "40 horas",
            modalidad: "Presencial",
            imagen: "../img/react.jpg",
            descripcion: "Este curso avanzado te permitirá dominar el framework de JavaScript React y sus aplicaciones en el desarrollo de aplicaciones web interactivas. Aprenderás sobre los conceptos fundamentales de React, la creación de componentes reutilizables, y la implementación de interfaces de usuario dinámicas. Durante el curso, desarrollarás habilidades para programar en React, diseñar soluciones escalables, y optimizar el rendimiento de las aplicaciones web. Ideal para desarrolladores y programadores que desean profundizar en el mundo de React y las tecnologías web.",
            requisitos: "Conocimientos avanzados de programación y lógica de programación. Familiaridad con HTML, CSS y JavaScript. Habilidad para comprender lógica matemática avanzada",
            introTemaUn: "Introducción a React - Conceptos Básicos",
            introTemaDos: "Componentes y Props",
            introTemaTres: "Estado y Ciclo de Vida",
            unidadDosTemaUno: "Eventos y Formularios",
            unidadDosTemaDos: "Hooks y Context API",
            unidadDosTemaTres: "Routing y Navegación",
            unidadTresTemaUno: "Gestión de Estado con Redux",
            unidadTresTemaDos: "Testing y Depuración",
            unidadTresTemaTres: "Proyecto Final",
            nombreDocente: "Ing. Carla Torres",
            fotoDocente: "../img/docente-react.jpeg",
            bioDocente: "La Ingeniera Carla Torres es una desarrolladora web y experta en React con más de 10 años de experiencia en el desarrollo de aplicaciones web y móviles. Se graduó como Ingeniera en Sistemas de Información de la Universidad Nacional de La Plata (UNLP) en Argentina y cuenta con una certificación en Desarrollo Frontend por la Universidad de California. Carla ha trabajado en agencias de diseño y startups, colaborando en proyectos de desarrollo web, diseño de interfaces y estrategias de contenido para empresas de diversos sectores. Su enfoque se centra en la creación de interfaces dinámicas y atractivas, que generen una experiencia positiva para los usuarios. Como docente, ha impartido cursos y talleres de React en instituciones educativas y centros de formación tecnológica. Sus clases se caracterizan por combinar teoría y práctica, fomentando la creatividad y la innovación en el desarrollo de aplicaciones web.",

        }
    ]
}

localStorage.setItem("cursosOfrecidos", JSON.stringify(cursosOfrecidos));


const modal = document.getElementById("modal");
const span = document.getElementsByClassName("cerrar")[0];
const botonComprar = document.getElementsByClassName("boton-comprarParaMi");
const botonInscribirse = document.getElementsByClassName("boton-inscripcion-empresa");

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
                    id="boton-comprar"></a>`;

    } else if (curso.modalidad === "Presencial") {
        botonContainer.innerHTML = `
        <a href="../vistas/inscripcion-empresa.html"><input class="boton-inscripcion-empresa" type="button"
                    value="Inscribirse" id="inscripcion-empresa"></a>`;
    }

}

document.addEventListener('DOMContentLoaded', function () {
    const modal = document.getElementById("modal");
    const span = document.getElementsByClassName("cerrar")[0];
    const botonComprar = document.getElementById("boton-comprar");
    const botonInscribirse = document.getElementById("inscripcion-empresa");
    

    // Definir la URL de redirección
    let redireccionURL = "";

    function mostrarModal(mensaje) {
        const mensajeCurso = document.getElementById("mensaje-curso");
        mensajeCurso.innerHTML = mensaje;
        modal.style.display = "block";
    }

    function manejarAccionCurso(event, urlRedireccion) {
        event.preventDefault(); // Prevenir la redirección
        const url = new URL(location.href);
        const idCurso = parseInt(url.searchParams.get("idCurso"));
        const curso = obtenerCursoPorId(idCurso);

        const mensaje = `¡Estás a un paso de finalizar! <br> Vas a adquirir el ${curso.nombreCurso}, por el valor de USD ${curso.precio}.-`;
        mostrarModal(mensaje);

        // Guardar la URL de redirección
        redireccionURL = urlRedireccion;
    }

    function redirigir() {
        if (redireccionURL) {
            window.location.href = redireccionURL;
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
        botonComprar.addEventListener("click", function (event) {
            manejarAccionCurso(event, botonComprar.href);
        });
    }

    if (botonInscribirse) {
        botonInscribirse.addEventListener("click", function (event) {
            manejarAccionCurso(event, botonInscribirse.href);
        }
        );
    }
});










