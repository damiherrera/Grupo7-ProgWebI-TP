displayCursoInscripcion();
assignDeleteButtonEvent();
openModalResumen();

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
    
    calcularMontoTotal();
}

//tldr; Asigna el evento a todos los botones de borrado que haya, esta como onclick() en el html
function assignDeleteButtonEvent(){
    let deletionButtons = document.querySelectorAll(".js-delete-row");

    //por cada instancia del boton delete que recorra le agrega como evento la funcion para borrar la fila
    deletionButtons.forEach(button => {
        button.addEventListener("click", deleteInfoRow)
    });

    calcularMontoTotal();
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

    calcularMontoTotal();
}

// Limpia el campo input del contenedor al que pertenezca
function clearInput(parentContainer, inputField){
    //selecciona a todos los campos input y limpia el contenido de cada uno
    parentContainer.querySelectorAll(inputField).forEach(input => {
        input.value = '';
    });
}

// Agrega una fila para completar datos
function addInfoRow() {
    let form = document.querySelector(".form");
    let newInfoRow = document.createElement("div");
    
    newInfoRow.classList.add("form-row");
    newInfoRow.innerHTML = `
        <input type="text" class="form-row__input" name="nombre" id="nombre" placeholder="Nombre">
        <input type="text" class="form-row__input" name="apellido" id="Apellido" placeholder="Apellido">
        <input type="text" class="form-row__input" name="dni" id="dni" placeholder="Documento">

        <button type="button" class="js-delete-row btn-round" alt="Boton eliminar fila"> - </button>`;

    //Inserta a newInfoRow antes/detras del div .form-row__add
    form.insertBefore(newInfoRow, form.querySelector(".form-row__add"));
    assignDeleteButtonEvent();
}

// Funcion temporal, tal vez cambiar cuando vea que hacer con las personas a registrar                          <<<<<===========!!!!!!!!!!
function calcularMontoTotal(){
    const url = new URL(location.href);
    const idCurso = parseInt(url.searchParams.get("idCurso"));
    const curso = obtenerCursoPorId(idCurso);
    const calcularMontoTotal = document.querySelector('.js-monto-total');
    const cantidadAnotados = document.querySelectorAll('.form-row').length;

    calcularMontoTotal.innerHTML = `
    <b>Monto total = ${curso.moneda} $${curso.precio*cantidadAnotados}</b>
    `
}

function closeModalResumen() {
    let modal = document.querySelector(".js-modal");
    let button = document.querySelector(".close");

    button.addEventListener("click", function(event) {
        modal.style.display = "none";
        document.body.style.overflow = 'auto';
    }); 
}

function openModalResumen() {
    const modal = document.querySelector(".js-modal"); 
    const button = document.querySelector(".js-end-form");
    const errorMessage = document.querySelector('.js-alert-text');

    button.addEventListener("click", function(event) {
        // Si todos los datos de campos son validos entonces procede al modal
        if (validateForm(errorMessage)) {
                modal.style.display = "flex";
                document.body.style.overflow = 'hidden';
                
                 // Borrar mensaje de error si es válido
                errorMessage.innerHTML = '';
                previewData();
                closeModalResumen();
        }
    });

    submitData();
}

//recibe como parametro el div donde vaya a poner los mensajes de error
function validateForm(errorMessage) {
    const rows = document.querySelectorAll('.form-row');
    let isValid = true;
    let errorMessages = new Set();

    //se verifica los campos nombre, apellido y dni de cada fila
    rows.forEach(row => {
        const nombre = row.querySelector('#nombre');
        const apellido = row.querySelector('#Apellido');
        const dni = row.querySelector('#dni');

        // verifica si hay campos nulos en la fila que este parada
        row.querySelectorAll('.form-row__input').forEach(input => {
            if (input.value === '') {
                input.classList.add('input-error');
                isValid = false;
                errorMessages.add('*Hay campos sin completar!');
            } else {
                input.classList.remove('input-error');
            }
        });

        // Verifica si el dni no tiene 8 caracteres || que no sea un numero
        if (dni.value.length !== 8 || !/^\d+$/.test(dni.value)) {
            dni.classList.add('input-error');
            isValid = false;
            errorMessages.add('*El Documento debe tener exactamente 8 números!');
        } else {
            dni.classList.remove('input-error');
        }


        // Verifica si el nombre no tiene letras
        if (!/^[a-zA-Z]+$/.test(nombre.value)) {
            nombre.classList.add('input-error');
            isValid = false;
            errorMessages.add('*El nombre solo debe contener letras!');
        } else {
            nombre.classList.remove('input-error');
        }


        // Verifica si el apellido no tiene letras
        if (!/^[a-zA-Z]+$/.test(apellido.value)) {
            apellido.classList.add('input-error');
            isValid = false;
            errorMessages.add('*El apellido solo debe contener letras!');
        } else {
            apellido.classList.remove('input-error');
        }
    });

    // 256. Limpia para evitar que se repitan cada vez que se llame a la funcion 
    // 257-259. Muestra mensajes únicos
    errorMessage.innerHTML = '';
    errorMessages.forEach(msg => {
        errorMessage.innerHTML += `<p>${msg}</p>`;
    });

    return isValid;
}

// Para ver las personas que estoy por anotar antes del submit
function previewData() {
    let filas = document.querySelectorAll('.form-row');
    let previewList = [];
    let previewInfo = document.querySelector('.added-info');
    previewInfo.innerHTML=``;

    filas.forEach((registro, index) => {
        let nombre = registro.querySelector('#nombre').value,
            apellido = registro.querySelector('#Apellido').value,
            dni = registro.querySelector('#dni').value;

        previewInfo.innerHTML += `
        <div class="added-info__registro">
            <h4> Registro N°${index + 1}</h4>
            <b>Nombre: ${nombre}</b>
            <b>Apellido: ${apellido}</b>
            <b>Documento: ${dni}</b>
        </div>    
        `

        //Agrego la persona al array temporal donde se muestran quienes estan por ser anotados
        previewList.push({ nombre, apellido, dni });
    });

    return previewList;
}

// le agrega los registros por anotar a la lista de anotados
function submitData() {
    const form = document.querySelector('.form');

    form.addEventListener('submit', function(event) {
        event.preventDefault();

        // Guardo la lista preview con los registros/personas por anotar 
        let listaUpdate = JSON.parse(localStorage.getItem('listaAnotados')) || [];
        previewData().forEach(registro => listaUpdate.push(registro));

        // Guardo en localstorage
        localStorage.setItem("listaAnotados", JSON.stringify(listaUpdate)); //de momento vuelco los registros en 'anotadosLista'

        // Verifico en consola
        console.log("Lista registros por agregar:", previewData());
        console.log("Lista actualizada:", listaUpdate);

        // Aquí podrías redirigir a otra página o limpiar el formulario
        
    });
}