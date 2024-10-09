const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/
const form = document.getElementById('form')
const inputs = document.querySelectorAll('.required')
const spans = document.querySelectorAll('.span-required')

document.addEventListener('keydown',(evt)=>{
    if(evt.key=='Enter'){
        impedirEnvio(evt)
    }
})
form.addEventListener('submit',impedirEnvio)
function impedirEnvio(ev){
    ev.preventDefault()//Impedir o Envio do Form
    ValidarEmail()
    ValidarSenha()
    
}
function CasoError(indice){
    inputs[indice].style.border= '1px solid #e63636'
    spans[indice].style.display='block'
}
function NotError(indice){
    inputs[indice].style.border= ''
    spans[indice].style.display='none'
}

inputs[0].addEventListener('input',ValidarEmail)
inputs[1].addEventListener('input',ValidarSenha)

function ValidarEmail(){
    if(emailRegex.test(inputs[0].value)){
        NotError(0)
    }
    else{
        CasoError(0)
    }
}
function ValidarSenha(){
    if((inputs[1].value.length<4 ||inputs[1].value.length>60 )){
        CasoError(1)
    }else{
        NotError(1)
    }
}
