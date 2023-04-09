const btn = document.querySelector('.burger-menu_button');
const closeBtnMenu = document.querySelector('.burger-close-btn');
const menuMobile = document.querySelector('.burger-menu');
const menuBody = document.querySelector('.burger-menu_nav');
const body = document.querySelector('body');
const links = document.querySelectorAll('.burger-menu_link');
const overlay = document.querySelector('.burger-menu_overlay');

btn.addEventListener('click', e => {
	e.preventDefault();
	toggleMenu();
});

closeBtnMenu.addEventListener('click', e => {
	e.preventDefault();
	toggleMenu();
});

links.forEach(link =>
	link.addEventListener('click', e => {
		toggleMenu();
	})
);

overlay.addEventListener('click', e => {
	toggleMenu();
});

function toggleMenu() {
	menuMobile.classList.toggle('burger-menu_active');

	if (menuMobile.classList.contains('burger-menu_active')) {
		body.style.overflow = 'hidden';
		btn.style.display = 'none';
		closeBtnMenu.style.display = 'block';
	} else {
		body.style.overflow = 'visible';
		btn.style.display = 'block';
		closeBtnMenu.style.display = 'none';
	}
}
