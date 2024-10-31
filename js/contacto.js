const  form = document.getElementById("contact-us");
form.addEventListener('submit', validadFormulario);


const nombre= document.getElementById("name");
const apellido = document.getElementById("lastname");
const telefono = document.getElementById("tel");
const mail = document.getElementById("email");
const consulta = document.getElementById("consulta");
const contador = document.getElementById("contador");





function validadFormulario (e){
 document.getElementById("error-name").textContent = "";
    document.getElementById("error-lastname").textContent = "";
    document.getElementById("error-email").textContent = "";
    document.getElementById("error-tel").textContent = "";
    document.getElementById("error-consulta").textContent = "";

    // Validación de campos
    if (!nombre.value) {
 
        const errorName = document.getElementById("error-name");
       
        errorName.textContent ="Nombre no puede estar vacio.";
        return false;
    }
    if(!apellido.value) {
        
        const errorLastName = document.getElementById("error-lastname");
   
        errorLastName.textContent =  "Apellido no puede estar vacio";
        return false;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(mail.value)) {
        const errorEmail = document.getElementById("error-email");
     
        errorEmail.textContent =  "El formato del correo electrónico no es válido. Debe ser algo como usuario@dominio.com";
        return false;
    }

    const phoneRegex = /^\d{4}-\d{4}$|^\d{8}$/; // Formato: 1234-5678 o 12345678
    if (telefono.value && !phoneRegex.test(telefono.value)) {
        const errorTelefono = document.getElementById("error-tel");
      
        errorTelefono.textContent= "El teléfono debe tener el formato correcto (8 dígitos, opcionalmente con guion)."
            return false;
    }

    if (consulta.value.length > 1000) {

        const errorTextarea = document.getElementById("error-consulta");
       
        errorTextarea.textContent= "La consulta no puede exceder los 1000 caracteres";
        
        return false;
    }

    return true; // Si todo es válido
}




form.addEventListener('submit', (event=>{
    event.preventDefault();

    if(validadFormulario()){
        const data = {
            nombre: nombre.value,
            apellido: apellido.value,
            telefono: telefono.value,
            email:mail.value,
            mensaje:consulta.value
        };
        console.log(data);
        alert("Consulta enviada");
        form.reset(); 
        window.location.href = "../index.html";
      
    
    }
   

}));


consulta.addEventListener ('input' , function (e) {
  
    const longitudMax = consulta.getAttribute("maxlength")
    const longitudAct = consulta.value.length;
    contador.innerHTML = `${longitudAct}/${longitudMax}`

});




