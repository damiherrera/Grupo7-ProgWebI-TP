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






document.addEventListener("DOMContentLoaded", function() {
    const botonInicioSesion = document.getElementById("botonInicioSesion");
    const botonRegistro = document.getElementById("botonRegistro");
    const botonCerrarSesion = document.getElementById("botonCerrarSesion");
  
    const liBotenesResponsive = document.querySelectorAll(".li-botonMobile");
   

    const usuarioLogueado = JSON.parse(localStorage.getItem("usuarioLogueado"));
    const perfilButton = document.getElementById("buton-profile");
    const action_buttons =  document.getElementsByClassName("action-buttons")[0];
 

    //botones para cerrar y eliminar 
    const botonCerrarSesionResp = document.getElementById("cerrarSesion-resp");
    const botonEliminarUsuarioResp = document.getElementById("eliminar-resp");

    //console.log(document.getElementById("botonCerrarSesion"));
    // Función que actualiza el estado del usuario
    function actualizarEstadoUsuario() {
        
        console.log("usuariologueado", usuarioLogueado);

        // Seleccionar todos los botones "Agregar al carrito"
        const botonesAgregarACarrito = document.querySelectorAll('.boton-comprar');
        const linkVerDetalle = document.querySelectorAll(".ver-detalle");

        linkVerDetalle.forEach(boton => {
            boton.addEventListener("click", function(event) {
                event.preventDefault();
                window.location.href = boton.getAttribute("href");
            });
        });

        botonesAgregarACarrito.forEach(boton => {
            boton.addEventListener("click", function(event) {
                event.preventDefault(); // Prevenir el comportamiento predeterminado

                if (usuarioLogueado) {
                    window.location.href = "./vistas/carrito.html"; // Redirigir al carrito
                } else {
                    window.location.href = "./vistas/registrarse.html"; // Redirigir a registro
                }
            });
        });

        if (usuarioLogueado) {
            // Si está logueado, ocultar los botones de inicio y registro, mostrar cerrar sesión (escritorio)
            if (botonInicioSesion) botonInicioSesion.style.display = "none";
            if (botonRegistro) botonRegistro.style.display = "none";
            if (botonCerrarSesion) botonCerrarSesion.style.display = 'flex';
            if(botonEliminarUsuarioResp) botonEliminarUsuarioResp.style.display ="block";
            // Mostrar/ocultar botones para la versión responsive
            liBotenesResponsive.forEach(boton => {
                boton.style.display = 'none'; // Ocultar botones de inicio y registro responsive
            });
            //if (liBotonCerrarSesionResponsive) liBotonCerrarSesionResponsive.style.display = 'flex'; // Mostrar cerrar sesión responsive
            
        
            
           
             perfilButton.style.display = "block" ;
       
       
    
       const opcionCerrar = document.getElementById ("cerrarSesionSubmenu")
       const opcionEliminar = document.getElementById("eliminarUserSubmenu")
       const subMenu = document.getElementById("sub-menu");

   action_buttons.style.position ="relative"
        
      // Función para cerrar sesión
opcionCerrar.addEventListener("click", () => {
    cerrarSesion();
});

// Función para eliminar usuario
opcionEliminar.addEventListener("click", () => {
    eliminarUsuario();
});

// Mostrar submenú al pasar el ratón por encima del perfil
perfilButton.addEventListener("mouseenter", () => {
    subMenu.style.display = "block"; // Mostrar submenú
});

// Ocultar submenú cuando el ratón sale del área del submenú
subMenu.addEventListener("mouseleave", () => {
    subMenu.style.display = "none"; // Ocultar submenú
});

// Alternar visibilidad del submenú cuando se haga clic en el botón de perfil
perfilButton.addEventListener("click", (event) => {
    event.stopPropagation(); // Prevenir que el clic se propague al document
    if (subMenu.style.display === "block") {
        subMenu.style.display = "none"; // Ocultar submenú si está visible
    } else {
        subMenu.style.display = "block"; // Mostrar submenú si está oculto
    }
});

// Cerrar el submenú si se hace clic fuera de él o del perfilButton
document.addEventListener("click", (e) => {
    if (!action_buttons.contains(e.target) && !perfilButton.contains(e.target)) {
        subMenu.style.display = "none"; // Ocultar el submenú
    }
});

    //const actionButtonsMobile = document.querySelector(".action-buttons--mobile");
/*EVENTOS A LOS BOTONES RESPONSIVE ELIMINAR Y CERRAR SESION*/
      if(botonEliminarUsuarioResp){
        botonEliminarUsuarioResp.addEventListener("click", (event)=>{
            event.preventDefault();
            eliminarUsuario();

        })
       }
        
     
     
        if(botonCerrarSesionResp) {
            botonCerrarSesionResp.addEventListener("click", (event)=>{
                event.preventDefault();  // 
                cerrarSesion();
              
       
            })
        }
       
    /* FIN EVENTOS A LOS BOTONES RESPONSIVE ELIMINAR Y CERRAR SESION*/
      
   



        } else {
            // Si no está logueado, mostrar los botones de inicio y registro, ocultar cerrar sesión , eliminar y perfil
             botonInicioSesion.style.display = "flex";
             botonRegistro.style.display = "flex";
             botonCerrarSesionResp.style.display = 'none';
             botonEliminarUsuarioResp.style.display = "none";
             perfilButton.style.display = "none"
            // Mostrar/ocultar botones para la versión responsive
            liBotenesResponsive.forEach(boton => {
                boton.style.display = 'flex'; // Mostrar botones de inicio y registro responsive
            }); // Ocultar cerrar sesión responsive
           
        }
    }

    // Actualiza el estado de los botones cuando la página cargue
    actualizarEstadoUsuario();

    
        //function para cerrar sesion
        function cerrarSesion() {
            localStorage.removeItem("usuarioLogueado");
            window.location.reload();
            
        }

        //function eliminar usuario del todo
        function eliminarUsuario() {
    
            let usuarios = JSON.parse(localStorage.getItem("usuarios")) || {};
        
            // Obtengo el nombre del usuario logueado desde sessionStorage
            const usuarioLogueado = JSON.parse(localStorage.getItem("usuarioLogueado"));
        
            if (usuarioLogueado) {
                // Eliminar el usuario logueado del objeto de usuarios
                const nombreUsuario = usuarioLogueado.nombre;
        
                // Comprobar si el usuario existe en el objeto
                if (usuarios[nombreUsuario]) {
                    delete usuarios[nombreUsuario];  // Eliminar el usuario usando su nombre
        
                    // Guardar el objeto de usuarios actualizado en localStorage
                    localStorage.setItem("usuarios", JSON.stringify(usuarios));
        
                    // Eliminar el usuario logueado de sessionStorage
                    localStorage.removeItem("usuarioLogueado");
                    console.log("Usuario eliminado:", nombreUsuario);
                } else {
                    console.log("El usuario no existe.");
                }
            }
        
            // Recargar la página para reflejar los cambios
            window.location.reload();
         

        }
        

      


    

  
});

//Carrusel
const arrowLeft = document.querySelector(".arrow-left");
const arrowRight = document.querySelector(".arrow-right");
const slider = document.getElementById("slider");
const imagenes = document.querySelectorAll(".carrusel-item");

let operacion = 0;
let contador = 0;
let tamanioImagen = 100/imagenes.length;
function moverHaciaLaDerecha() {
    if(contador >= imagenes.length - 1){
        contador = 0; //Se reinicia el contador y me muestra la primera posicion
        operacion = 0;
        slider.style.transform = `translate(-${operacion}%)`;
        return;
    }
    contador++;
    operacion += tamanioImagen
    slider.style.transform = `translate(-${operacion}%)`
    slider.style.transition = "all ease.5s"
};

function moverHaciaLaIzquierda() {
    contador--;
    if(contador < 0){
        contador = imagenes.length - 1; //Me devuelve la ultima posicion
        operacion = tamanioImagen * (imagenes.length - 1); //Me devuelve la ultima posicion segun el tamaño del contenedor
        slider.style.transform = `translate(-${operacion}%)`;
        return;
    }
    operacion -= tamanioImagen;
    slider.style.transform = `translate(-${operacion}%)`
    slider.style.transition = "all ease.5s"
};

document.addEventListener("DOMContentLoaded", function() {
    const sliderContainer = document.querySelector(".slider-container");
    if(sliderContainer){
        setInterval (moverHaciaLaDerecha, 3000);
        arrowLeft.addEventListener("click", moverHaciaLaIzquierda);
        arrowRight.addEventListener("click", moverHaciaLaDerecha);
    }
})



//crear mi perfil en nav, con sesion  iniciada





      
   


       


