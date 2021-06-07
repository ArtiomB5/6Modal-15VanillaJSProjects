let openModalButton = document.querySelector('.open-button');
openModalButton.addEventListener('click', openModalWindow);

let closeModalButton = document.querySelector('.close-button');
closeModalButton.addEventListener('click', closeModalWindow);

let modalMessage = document.querySelector('.modal-message');

function openModalWindow() {
    modalMessage.classList.add('visibility-on');
    contaiberBox.classList.add('overlay');
}

function closeModalWindow() {
    modalMessage.classList.remove('visibility-on');
    contaiberBox.classList.remove('overlay');
}