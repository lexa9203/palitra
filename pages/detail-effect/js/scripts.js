import { EFFECTS } from '../constants/effects.js';
const effectPath = window.location.search.slice(1);
const [findedEffect] = EFFECTS.filter(el => el.link === effectPath);

if (!effectPath) {
	window.location.replace('../catalog-effects/index.html');
}

//TODO: страница не найденного эфекта
if (!findedEffect) {
	document.body.textContent = 'Эффект не найден';
}

const title = document.querySelector('.title');
const navEffect = document.querySelector('.nav_effect');
const effectPrice = document.querySelector('.effect_about_price > span');
const effectAbout = document.querySelector('.effect_about_text');
const stepEffect = document.querySelector('#step-template').content;
const similarEffect = document.querySelector('#similar-effect-template').content;
const stepsWrap = document.querySelector('.steps__wrapper');
const steps = document.querySelector('.steps');
const videoTitle = document.querySelector('.video_title');
const videoWrap = document.querySelector('.video');
const video = document.querySelector('iframe');
const similarEffectsWrap = document.querySelector('.similar_effects');
const swiperWrapper = document.querySelector('.swiper-wrapper');
const similar = document.querySelector('.similar');
const divider = document.querySelector('.divider');

title.textContent = findedEffect.title;
navEffect.textContent = findedEffect.title;
effectPrice.textContent = findedEffect.value;
effectAbout.textContent = findedEffect.info;
videoTitle.textContent = findedEffect.title;
video.src = findedEffect.video;

if (!findedEffect.video) {
	videoWrap.style.display = 'none';
}

if (!findedEffect.steps.length) {
	steps.style.display = 'none';
}

document.title = `${findedEffect.title} эффект декоративной штукатурки Decorazza`;

findedEffect.img.forEach(el => {
	const slider = document.createElement('div');
	slider.style.userSelect = 'none';
	slider.classList.add('swiper-slide');
	const img = document.createElement('img');
	img.src = el.src;
	img.alt = el.alt;
	slider.appendChild(img);
	swiperWrapper.appendChild(slider);
});

function renderSteps(steps) {
	steps.forEach((step, index) => {
		const stepWrapper = stepEffect.querySelector('div');
		const clonedStep = stepWrapper.cloneNode(true);
		clonedStep.children[0].textContent = index + 1;
		clonedStep.children[1].children[0].textContent = step.title;
		clonedStep.children[1].children[1].textContent = step.instruction;
		if (step.consumption) {
			clonedStep.children[1].children[2].children[0].textContent = step.consumption;
		} else {
			clonedStep.children[1].children[2].style.display = 'none';
		}
		clonedStep.children[1].children[3].children[0].src = step.img;
		clonedStep.children[1].children[3].children[0].alt = step.materialName;
		clonedStep.children[1].children[3].children[1].textContent = step.materialName;

		if (!step.time) {
			clonedStep.children[2].children[1].style.display = 'none';
		}
		if (!step.toolsName) {
			clonedStep.children[2].children[0].style.display = 'none';
		}

		clonedStep.children[2].children[1].children[1].children[1].textContent = step.time;
		clonedStep.children[2].children[0].children[1].textContent = step.toolsName;

		step.tools.forEach(tool => {
			const img = document.createElement('img');
			img.src = tool.img;
			img.alt = tool.alt;

			clonedStep.children[2].children[0].children[0].appendChild(img);
		});

		stepsWrap.appendChild(clonedStep);
	});
}

renderSteps(findedEffect.steps);

function renderSimilarEffects(similars) {
	similars.forEach(el => {
		const similarEffectsWrapper = similarEffect.querySelector('div');
		const clonedSimilarEffect = similarEffectsWrapper.cloneNode(true);
		clonedSimilarEffect.children[0].children[0].alt = el.title;
		clonedSimilarEffect.children[0].children[1].alt = el.title;
		clonedSimilarEffect.children[0].children[0].src = el.img_prev;
		clonedSimilarEffect.children[0].children[1].src = el.img_main;
		clonedSimilarEffect.children[1].children[0].children[0].textContent = el.title;
		clonedSimilarEffect.children[1].children[0].children[1].children[1].textContent = el.value;
		if (window.outerWidth > 500) {
			clonedSimilarEffect.children[1].children[1].children[0].textContent =
				el.info.split(' ').length > 40 && el.info.length > 160
					? el.info.split(' ').slice(0, 40).join(' ') + '...'
					: el.info;
		} else {
			clonedSimilarEffect.children[1].children[1].children[0].textContent =
				el.info.split(' ').length > 16 && el.info.length > 100
					? el.info.split(' ').slice(0, 16).join(' ') + '...'
					: el.info;
		}
		if (el.link) {
			clonedSimilarEffect.children[1].children[1].children[1].href += el.link;
		} else {
			clonedSimilarEffect.children[1].children[1].children[1].href = '#';
		}
		clonedSimilarEffect.children[0].addEventListener('mouseenter', () => {
			clonedSimilarEffect.children[0].children[0].style.visibility = 'hidden';
			clonedSimilarEffect.children[0].children[1].style.visibility = 'visible';
			clonedSimilarEffect.children[0].children[0].style.opacity = '0';
			clonedSimilarEffect.children[0].children[1].style.opacity = '1';
		});

		clonedSimilarEffect.children[0].addEventListener('mouseleave', () => {
			clonedSimilarEffect.children[0].children[0].style.visibility = 'visible';
			clonedSimilarEffect.children[0].children[1].style.visibility = 'hidden';
			clonedSimilarEffect.children[0].children[0].style.opacity = '1';
			clonedSimilarEffect.children[0].children[1].style.opacity = '0';
		});

		similarEffectsWrap.appendChild(clonedSimilarEffect);
	});
}
if (findedEffect.similars.length) {
	renderSimilarEffects(findedEffect.similars);
} else {
	similar.style.display = 'none';
	divider.style.display = 'none';
}

const swiper = new Swiper('.swiper', {
	loop: true,
	navigation: {
		nextEl: '.swiper-button-next',
		prevEl: '.swiper-button-prev',
	},
	autoplay: {
		delay: 5000,
	},
});
