// ================= VARIABLES =================
let formulario = document.getElementById("validacionformulario");
let usuario = document.getElementById("usuario");
let password = document.getElementById("password");

let mensajeUsuario = document.getElementById("mensaje");
let mensajePassword = document.getElementById("mensajePassword");
let mensajeFinal = document.getElementById("mensajeFinal");
let contadorPassword = document.getElementById("contadorpassword");

let intentosFallidos = 0;
const MAX_INTENTOS = 3;
const BLOQUEO_TIEMPO = 30000;
let bloqueado = false;



usuario.addEventListener("input", function () {

    let valor = this.value;

    if (/[^a-zA-Z0-9._-]/.test(valor) || valor.length < 3) {
        this.style.border = "2px solid red";
        mensajeUsuario.textContent = "Usuario incorrecto (mínimo 3 caracteres, sin símbolos raros)";
        mensajeUsuario.style.color = "red";
    } else {
        this.style.border = "2px solid green";
        mensajeUsuario.textContent = "Usuario válido";
        mensajeUsuario.style.color = "green";
    }

    // Limpia caracteres inválidos
    this.value = valor.replace(/[^a-zA-Z0-9._-]/g, '');
});



password.addEventListener("input", function () {

    let valor = this.value;

    // 🔹 Contador en tiempo real
    contadorPassword.textContent = "Caracteres: " + valor.length;

    let error = validarPassword(valor);

    if (error !== "") {
        this.style.border = "2px solid red";
        mensajePassword.textContent = error;
        mensajePassword.style.color = "red";
    } else {
        this.style.border = "2px solid green";
        mensajePassword.textContent = "Contraseña válida y segura";
        mensajePassword.style.color = "green";
    }
});



function validarPassword(valor) {

    if (valor.length < 10) {
        return "Debe tener al menos 10 caracteres";
    }
    if (!/[A-Z]/.test(valor)) {
        return "Debe tener al menos una mayúscula";
    }
    if (!/[a-z]/.test(valor)) {
        return "Debe tener al menos una minúscula";
    }
    if (!/[0-9]/.test(valor)) {
        return "Debe tener al menos un número";
    }
    if (!/[!@#$%^&*()_\-+=.,]/.test(valor)) {
        return "Debe tener al menos un carácter especial";
    }

    return "";
}



function validarUsuarioFinal(valor) {

    let regex = /^[a-zA-Z0-9._-]{3,}$/;

    return regex.test(valor);
}



formulario.addEventListener("submit", function (event) {

    event.preventDefault();

    if (bloqueado) return;

    let usuarioValor = usuario.value;
    let passwordValor = password.value;

    let usuarioValido = validarUsuarioFinal(usuarioValor);
    let passwordError = validarPassword(passwordValor);

    if (usuarioValido && passwordError === "") {

        mensajeFinal.textContent = "Formulario enviado correctamente";
        mensajeFinal.style.color = "green";

        formulario.reset();
        contadorPassword.textContent = "Caracteres: 0";

        intentosFallidos = 0;

    } else {

        intentosFallidos++;

        mensajeFinal.textContent = "Datos incorrectos. Intento " + intentosFallidos + " de 3.";
        mensajeFinal.style.color = "red";

        if (!usuarioValido) {
            mensajeUsuario.textContent = "Usuario inválido al enviar.";
            mensajeUsuario.style.color = "red";
        }

        if (intentosFallidos >= MAX_INTENTOS) {
            bloquearFormulario();
        }
    }
});


function bloquearFormulario() {

    bloqueado = true;

    usuario.disabled = true;
    password.disabled = true;

    mensajeFinal.textContent = "Demasiados intentos fallidos. Bloqueado por 30 segundos.";
    mensajeFinal.style.color = "red";

    setTimeout(() => {
        usuario.disabled = false;
        password.disabled = false;
        intentosFallidos = 0;
        bloqueado = false;

        mensajeFinal.textContent = "Formulario habilitado nuevamente.";
        mensajeFinal.style.color = "green";

    }, BLOQUEO_TIEMPO);
}

// password.addEventListener("input", function (text) {
//     contadorpassword.textContent = `Caracteres: ${this.value.length}`;
//     let valor = this.value;
    

//     if (valor.length <10) {  
//         this.style.border = "2px solid red";
//         mensajePassword.textContent = "contraseña invalida, debe tener al menos 10 caracteres";
//         mensajePassword.style.color = "red";
//     } 
   
//     else {
//         this.style.border = "2px solid green";
//         mensajePassword.textContent = "Contraseña válida";
//         mensajePassword.style.color = "green";
//     }
    

   
//     });




// let usuario = document.getElementById("usuario");

// usuario.addEventListener("input", function(){
//         this.value = this.value.toLowerCase();
//         this.value = this.value.replace(/[^a-z]/g, "")
//         this.border = "2px solid"
//         if(this.value == ""){
//             this.style.borderColor = "red"
//              this.nextElementSibling && (this.nextElementSibling.textContent = 'Nombre inválido');
//     this.nextElementSibling && (this.nextElementSibling.style.color = 'red');

//         }else{
//             this.style.borderColor = "green"
//             this.nextElementSibling && (this.nextElementSibling.textContent = 'Nombre válido');
//     this.nextElementSibling && (this.nextElementSibling.style.color = 'green');
//         }
//  }
// );

//     if(evento.keyCode === 8) {
//         evento.preventDefault()
//         this.value += "borrando"
//     }
// })