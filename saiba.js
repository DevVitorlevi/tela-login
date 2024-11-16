const button = document.getElementById('mais')
const apareceu = document.getElementById('escondido')

button.addEventListener('click', () => {
    apareceu.style.display = 'block'
})