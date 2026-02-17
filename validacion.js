let usuario = document.getElementById("usuario");

usuario.addEventListener("input", function(){
        this.value = this.value.toLowerCase();
        this.value = this.value.replace(/[^a-z]/g, "")
        this.border = "2px solid"
        if(this.value == ""){
            this.style.borderColor = "red"
             this.nextElementSibling && (this.nextElementSibling.textContent = 'Nombre inválido');
    this.nextElementSibling && (this.nextElementSibling.style.color = 'red');

        }else{
            this.style.borderColor = "green"
            this.nextElementSibling && (this.nextElementSibling.textContent = 'Nombre válido');
    this.nextElementSibling && (this.nextElementSibling.style.color = 'green');
        }
 }
);

//     if(evento.keyCode === 8) {
//         evento.preventDefault()
//         this.value += "borrando"
//     }
// })