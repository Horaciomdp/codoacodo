const nombre = document.getElementById("name")
const email = document.getElementById("email")
const celular = document.getElementById("celular")
const form = document.getElementById("form")
const parrafo = document.getElementById("warnings")

form.addEventListener("submit", e=>{
    e.preventDefault()
    let warnings = ""
    let entrar = false
    let regexEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,4})+$/
    parrafo.innerHTML = ""
    if(nombre.value.length <6){
        warnings += `El nombre no es valido <br>`
        entrar = true
    };
    if(!regexEmail.test(email.value)){
        warnings += `El email no es valido <br>`
        entrar = true
    };
    if(celular.value.length < 8){
        warnings += `numero no valido <br>`
        entrar = true
    };

    if(entrar){
        parrafo.innerHTML = warnings
    }else{
        parrafo.innerHTML = "Enviado"
    };
})