
displayCursoInscripcion();

function getCursosOfrecidos() {
    const cursosOfrecidos = localStorage.getItem("cursosOfrecidos");
    return JSON.parse(cursosOfrecidos);
}

function displayCursoInscripcion(){
    const url = new URL(location.href);
    const idCurso = parseInt(url.searchParams.get("idCurso"));
    const cursosOfrecidos = getCursosOfrecidos();
    const curso = cursosOfrecidos.cursos.find(curso => curso.idCurso === idCurso);

    if (curso) {
        const titulo = document.querySelector(".titulos")
        titulo.innerHTML = `
                        <h1>${curso.nombreCurso}</h1>
                        <h3>INSCRIPCION</h3>
                        <p>Complete los campos con los datos requeridos</p>
        `
    }
}

