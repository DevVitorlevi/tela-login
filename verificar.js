const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/
const form = document.getElementById('form')
const inputs = [...document.querySelectorAll('.inputs')]
const required = [...document.querySelectorAll('.p-required')]
//Ações
document.addEventListener('keydown', ev => {
    if (ev.key === 'Enter') {
        impedirEnvio(evt)
    }
})
form.addEventListener('submit', impedirEnvio)

inputs[0].addEventListener('input', ValidarEmail)

inputs[1].addEventListener('input', ValidarSenha)

function impedirEnvio(evt) {
    evt.preventDefault()
    ValidarEmail()
    ValidarSenha()
}

function Casoerror(indice) {
    inputs[indice].style.border = '2px solid #EB3942'
    required[indice].style.display = 'block'
}
function Noterror(indice) {
    inputs[indice].style.border = ''
    required[indice].style.display = 'none'
}

function ValidarEmail() {
    if (emailRegex.test(inputs[0].value)) {//Verificando se o E-mail é Válido)
        Noterror(0)
    } else {
        Casoerror(0)
    }
}
function ValidarSenha() {
    if (inputs[1].value.length < 4 || inputs[1].value.length > 60) {
        Casoerror(1)
    } else {
        Noterror(1)
    }
}
