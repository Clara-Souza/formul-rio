function mostrarSenha() {
    let campoSenha = document.querySelector("#passwordEmail")
    if(campoSenha.type == "password") {
        campoSenha.type = "text" 
        document.querySelector(".mostrar1").src = "assets/img/esconder.png"
    } else {
        campoSenha.type = "password"
        document.querySelector(".mostrar1").src = "assets/img/mostrar.png"
    }
    
    
};

function verSenha (){
    let senha = document.querySelector("#passwordEmail2")
    if(senha.type == "password"){
        senha.type = "text"
        document.querySelector(".mostrar2").src = "assets/img/esconder.png"
    }else {
        senha.type = "password"
        document.querySelector(".mostrar2").src = "assets/img/mostrar.png"

    }
};

function aparecerSenha(){
    let confirmarSenha = document.querySelector("#confirmPasswordEmail")
    if(confirmarSenha.type == "password"){
        confirmarSenha.type = "text"
        document.querySelector(".mostrar3").src = "assets/img/esconder.png"
    } else {
        confirmarSenha.type = "password";
        document.querySelector(".mostrar3").src = "assets/img/mostrar.png"
    }
};