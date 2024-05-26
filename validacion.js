//Haz tú validación en javascript acá
const validarFormulario = (event) => {
    event.preventDefault(); // Evitamos que el formulario se envíe automáticamente
    
    const nombreUsuario = document.getElementById('usuario');
    const direccionEmail = document.getElementById('email');
    
    if (nombreUsuario.value === '') {
        alert('Por favor, ingresa tu nombre de usuario.');
        nombreUsuario.focus(); // Colocamos el foco en el campo de nombre de usuario
        return false;
    }
    
    if (direccionEmail.value === '') {
        alert('Por favor, ingresa tu correo electrónico.');
        direccionEmail.focus(); // Colocamos el foco en el campo de correo electrónico
        return false;
    }
    
    // Si todo está bien, devuelve true para permitir el envío del formulario
    return true;
};


  