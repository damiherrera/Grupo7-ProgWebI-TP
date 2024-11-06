const modal = document.querySelector('.js-modal');

document.querySelectorAll('.js-resumen').forEach(button => {
    button.addEventListener('click', () => {
        const idCurso = button.id;
        displayCursoResumen(idCurso);
        modal.style.display = 'flex';
        document.body.style.overflow = 'hidden';
    });
});

document.querySelectorAll('.js-modal__close').forEach(button => {
    button.addEventListener('click', () => {
        modal.style.display = 'none';
        document.body.style.overflow = 'unset';
    });
});

function getCursosOfrecidos() {
    const cursosOfrecidos = localStorage.getItem("cursosOfrecidos");
    return JSON.parse(cursosOfrecidos);
}

function obtenerCursoPorId(idCurso) {
    const cursosOfrecidos = getCursosOfrecidos();
    idCurso = parseInt(idCurso);

    return cursosOfrecidos.cursos.find(curso => curso.idCurso === idCurso);
}

function displayCursoResumen(idCurso){
    const curso = obtenerCursoPorId(idCurso);
    const resumenContainer = document.querySelector('.js-modal__content-info');
    const resumen = curso.descripcion.substring(0, curso.descripcion.indexOf('.'));


    if (curso) {
        resumenContainer.innerHTML =`
        <h2>${curso.nombreCurso}</h2>
        <p>${resumen}.</p>
        <span>Si estas interesado puedes ir a detalle para ver mas informacion y conseguir este curso! </span>
        <a href="./detalle-curso.html?idCurso=${curso.idCurso}">
            <button type="button">Ver Detalle</button> 
        </a>
        `
    }
}