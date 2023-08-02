import { PRODUCTS } from '../constants/products.js';

const productPath = window.location.search.slice(1);
const product = PRODUCTS.filter(el => el.link === productPath)[0];

const productAboutText = document.querySelector('.product_about_text');
const productAboutPrice = document.querySelector('.price');
const productImg = document.querySelector('.product_img img');
const navProduct = document.querySelector('.nav_product');
const title = document.querySelector('.title');
const swiperWrapper = document.querySelector('.swiper-wrapper');
const dignityWrapper = document.querySelector('.dignity-wrapper');
const toolsWrapper = document.querySelector('.tools-wrapper');
const effectTemplate = document.querySelector('#effect-template').content;
const toolTemplate = document.querySelector('#tool-template').content;
const effectsWrap = document.querySelector('.effects_wrapper');
const aditionalEffectsWrap = document.querySelector('.aditional-effects');
const video = document.querySelector('iframe');
const videoWrapper = document.querySelector('.video');
const buttonsWrapper = document.querySelector('.button_wrap');
const button = document.querySelector('.show_effects');
const hideButton = document.querySelector('.hide_effects');
const additionalInfo = document.querySelector('.additional_info');

document.title = product.name;
productAboutText.textContent = product.about;
productAboutPrice.textContent = product.price;
productImg.src = product.img;
productImg.alt = product.name;
navProduct.textContent = product.name;
title.textContent = product.name;
additionalInfo.innerHTML = product.additionalInfo;

product.imgEffects.forEach(el => {
	const wrapperEffects = document.createElement('div');
	const imgEffect = document.createElement('img');
	imgEffect.style.userSelect = 'none';
	wrapperEffects.classList.add('swiper-slide');
	imgEffect.src = el;
	imgEffect.alt = product.name;
	wrapperEffects.appendChild(imgEffect);
	swiperWrapper.appendChild(wrapperEffects);
});

product.dignity.forEach(el => {
	const dignity = document.createElement('li');
	dignity.textContent = el;
	dignityWrapper.appendChild(dignity);
});

if (product.effects.length > 4) {
	buttonsWrapper.style.display = 'flex';
	buttonsWrapper.style.justifyContent = 'center';
	button.addEventListener('click', () => {
		document.querySelector('.aditional-effects').classList.add('grid');
		hideButton.style.display = 'block';
		button.style.display = 'none';
	});
	hideButton.addEventListener('click', () => {
		document.querySelector('.aditional-effects').classList.remove('grid');
		button.style.display = 'block';
		hideButton.style.display = 'none';
	});
}

product.effects.forEach((el, index) => {
	const effect = effectTemplate.querySelector('div');
	const clonedEffect = effect.cloneNode(true);
	clonedEffect.children[0].children[0].src = el.img;
	clonedEffect.children[0].children[0].alt = el.title;
	clonedEffect.children[1].children[0].textContent = el.title;
	if (!el.link) {
		clonedEffect.children[1].children[1].children[0].style.display = 'none';
	} else {
		clonedEffect.children[1].children[1].children[0].href += el.link;
	}
	if (index > 3) {
		aditionalEffectsWrap.appendChild(clonedEffect);
	} else {
		effectsWrap.appendChild(clonedEffect);
	}
});

if (!product.video) {
	videoWrapper.style.display = 'none';
}

if (!product.effects.length) {
	document.querySelector('.effects_title').style.display = 'none';
	document.querySelector('.effects_divider').style.display = 'none';
}

if (!product.dignity.length) {
	document.querySelector('.dignity').style.display = 'none';
}

if (!product.tools.length) {
	document.querySelector('.tools_divider').style.display = 'none';
	document.querySelector('.tools_title').style.display = 'none';
	document.querySelector('.tools_slider').style.display = 'none';
}

video.src = product.video;

product.tools.forEach(el => {
	const tool = toolTemplate.querySelector('div');
	const clonedTool = tool.cloneNode(true);
	clonedTool.style.userSelect = 'none';
	clonedTool.children[0].children[0].src = el.img;
	clonedTool.children[0].children[0].alt = el.name;
	clonedTool.children[0].children[1].textContent = el.name;
	clonedTool.children[0].children[2].children[0].textContent = el.price;
	clonedTool.children[0].children[3].href += el.link;
	toolsWrapper.appendChild(clonedTool);
});

const swiper = new Swiper('.swiper_main', {
	loop: true,
	navigation: {
		nextEl: '.swiper-button-next_main',
		prevEl: '.swiper-button-prev_main',
	},
	nextButton: '#js-prev_main',
	prevButton: '#js-next_main',
	autoplay: {
		delay: 5000,
	},
});

const swiper1 = new Swiper('.swiper1', {
	slidesPerView: 1,
	spaceBetween: 0,
	navigation: {
		nextEl: '.swiper-button-next1',
		prevEl: '.swiper-button-prev1',
	},
	nextButton: '#js-prev1',
	prevButton: '#js-next1',
	breakpoints: {
		320: {
			slidesPerView: 1,
		},
		600: {
			slidesPerView: 2,
			spaceBetween: 10,
		},
		950: {
			slidesPerView: 3,
			spaceBetween: 16,
		},
		1170: {
			slidesPerView: 4,
			spaceBetween: 20,
		},
	},
});
