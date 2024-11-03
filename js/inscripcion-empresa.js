
displayCursoInscripcion();

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

