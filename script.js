const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/
const form = document.getElementById('form')
const inputs = document.querySelectorAll('.required')
const spans = document.querySelectorAll('.span-required')

function CasoError(indice){
    inputs[indice].style.border= '2px solid #e63636'
    spans[indice].style.display='block'
}
function NotError(indice){
    inputs[indice].style.border= ''
    spans[indice].style.display='none'
}

inputs[0].addEventListener('input',ValidarEmail)
inputs[1].addEventListener('input',ValidarSenha)

function ValidarEmail(){
    if(emailRegex.test(inputs[0].length)){
        CasoError(0)
    }else{
        NotError(0)
    }
}

