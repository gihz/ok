function moveGirl() {
    // Adicione aqui a lógica para mover a garotinha
}

function changeClothes() {
    var girl = document.querySelector('.girl');
    if (girl.classList.contains('girl-1')) {
        girl.classList.remove('girl-1');
        girl.classList.add('girl-2');
    } else {
        girl.classList.remove('girl-2');
        girl.classList.add('girl-1');
    }
}