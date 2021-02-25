const idInput = document.getElementById('idInput')
const colorInput = document.getElementById('style-box')
const btn = document.createElement('BUTTON')
btn.classList.add('clear-button')

body = document.getElementsByTagName('body')

document.body.appendChild(btn)
btn.innerText = 'CLEAR'

function setCard() {
    const card = document.getElementById(idInput.value);
    card.style.color = colorInput.value;

}


btn.addEventListener('click', clear)

function clear(){

    const card = document.getElementById(idInput.value);

    card.style.color = ''  
    return
}



// btn.innerHTML = 'clear'

// const idInput = document.getElementById('idInput');
// const colorInput = document.getElementById('colorInput');

// function setCard() {
//   const card = document.getElementById(idInput.value);
//   card.style.color = colorInput.value;
// }