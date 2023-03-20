const btn = document.querySelector('#spinner-form');
const menuMobile = document.querySelector('#menu');
btn.addEventListener('click', e => {
	menuMobile.classList.toggle('active');
});
