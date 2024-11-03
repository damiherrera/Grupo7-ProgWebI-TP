displayCursoInscripcion();
assignDeleteButtonEvent();

//funciones copiadas de detalle-curso.js para hacer la vinculacion
function getCursosOfrecidos() {
    const cursosOfrecidos = localStorage.getItem("cursosOfrecidos");
    return JSON.parse(cursosOfrecidos);
}

function obtenerCursoPorId(idCurso) {
    const cursosOfrecidos = getCursosOfrecidos();
    return cursosOfrecidos.cursos.find(curso => curso.idCurso === idCurso);
}

function displayCursoInscripcion(){
    const url = new URL(location.href);
    const idCurso = parseInt(url.searchParams.get("idCurso"));
    const curso = obtenerCursoPorId(idCurso);

    if (curso) {
        const titulo = document.querySelector(".titulos")
        titulo.innerHTML = `
            <h1>${curso.nombreCurso}</h1>
            <h3>INSCRIPCION</h3>
            <p>Complete los campos con los datos requeridos</p>
        `
    }
}

//tldr; Asigna el evento a todos los botones de borrado que haya, esta como onclick() en el html
function assignDeleteButtonEvent(){
    let deletionButtons = document.querySelectorAll(".js-delete-row");

    //por cada instancia del boton delete que recorra le agrega como evento la funcion para borrar la fila
    deletionButtons.forEach(button => {
        button.addEventListener("click", deleteInfoRow)});
}

// "event: objeto del evento que el navegador pasa automáticamente a la función cuando se ejecuta."
function deleteInfoRow(event) {
    //event.target: el elemento que activó el evento
    let deleteButton = event.target;

    // .closest(): selecciona al elemento mas cercano que le indiques,
    // deleteButton.closest('.form-row') selecciona al contenedor form-row mas cercano al boton
    let row = deleteButton.closest('.form-row');
    let inputField = '.form-row__input'
    let hasRequired = row.querySelector("[required]") !== null;

    //Condicion por si la fila no tiene campos required, proceda a eliminarlos.
    //en el caso que quede una que 'limpie' sus cada uno de sus campos input
    if (!hasRequired) {
        // remueve la fila indicada en row
        row.remove();
    } else {
        clearInput(row, inputField);
    }
}

// Limpia el campo input del contenedor al que pertenezca
function clearInput(parentContainer, inputField){
    //selecciona a todos los campos input y limpia el contenido de cada uno
    parentContainer.querySelectorAll(inputField).forEach(input => {
        input.value = '';
    });
}

