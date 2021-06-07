"use strict";

var openModalButton = document.querySelector('.open-button');
openModalButton.addEventListener('click', openModalWindow);
var closeModalButton = document.querySelector('.close-button');
closeModalButton.addEventListener('click', closeModalWindow);
var modalMessage = document.querySelector('.modal-message');

function openModalWindow() {
  modalMessage.classList.add('visibility-on');
  contaiberBox.classList.add('overlay');
}

function closeModalWindow() {
  modalMessage.classList.remove('visibility-on');
  contaiberBox.classList.remove('overlay');
}