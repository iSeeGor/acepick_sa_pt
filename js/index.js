"use strict";

addEventListener('DOMContentLoaded', scriptsInit);

function scriptsInit() {
	modalInit();
}

function modalInit() {
	const modalContainer = document.querySelector('.modalContainer');

	if( ! modalContainer ) return;

	const body = document.body;
	const openModalButton = document.querySelector('[data-modal-target]');
	const modal = document.querySelector('#' + openModalButton.dataset.modalTarget);
	const closeModalButton = modal.querySelector('.modal__close-button');

	function showModal(e) {
		e.preventDefault();
	
		body.style.overflow = 'hidden';
		modalContainer.classList.add('active');
		modal.classList.add('active');
	}

	function closeModal(e) {
		e.preventDefault();
	
		body.style.overflow = '';
		modalContainer.classList.remove('active');
		modal.classList.remove('active');
	}

	openModalButton.addEventListener('click', showModal);
	closeModalButton.addEventListener('click', closeModal);
}