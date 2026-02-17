let usuario = document.getElementById("usuario");
let mensaje = document.getElementById("mensaje");
let password = document.getElementById("password");

usuario.addEventListener("input", function () {

    let valor = this.value;

    if (/[^a-zA-Z]/.test(valor)) {  //el test da un valor is true or false
        this.style.border = "2px solid red";
        mensaje.textContent = "Usuario incorrecto";
        mensaje.style.color = "red";
    } 
    else if (valor === "") {
        this.style.border = "2px solid red";
        mensaje.textContent = "Campo obligatorio";
        mensaje.style.color = "red";
    } 
    else {
        this.style.border = "2px solid green";
        mensaje.textContent = "Usuario válido";
        mensaje.style.color = "green";
    }

    this.value = valor.replace(/[^a-zA-Z]/g, '');
    

});
password.addEventListener("input", function () {

    let valor = this.value;

    if (valor.length <10) {  //el test da un valor is true or false
        this.style.border = "2px solid red";
        mensajePassword.textContent = "contraseña correcta";
        mensajePassword.style.color = "red";
    } 
   
    else {
        this.style.border = "2px solid green";
        mensajePassword.textContent = "Contraseña válida";
        mensajePassword.style.color = "green";
    }

   
    });




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