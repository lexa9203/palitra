import { EFFECTS } from '../constants/effects.js'


const headerFilters = document.querySelectorAll("[data-name='spoiler-title']");
const filterBtn = document.querySelector('.filter-btn');
const filtersMenu = document.querySelector('.filter-group-mobile');
const closeBtn = document.querySelector('.close-btn');
const resetBtn = document.querySelector('.reset-filter-btn');
const effectTemplate = document.querySelector('#effect-template').content;
const effectsWrap = document.querySelector('.effects');
const filters = document.querySelectorAll('.filter');

function renderEffects(effects) {
	effectsWrap.textContent = '';
	effects.forEach(el => {
		const effect = effectTemplate.querySelector('div');
		const clonedEffect = effect.cloneNode(true);
		// console.log(clonedEffect.children[1].children[1].children[1].children[0].href)
		clonedEffect.children[0].children[0].alt = el.title;
		clonedEffect.children[0].children[1].alt = el.title;
		clonedEffect.children[0].children[0].src = el.img_prev;
		clonedEffect.children[0].children[1].src = el.img_main;
		clonedEffect.children[1].children[0].children[0].textContent = el.title;
		clonedEffect.children[1].children[0].children[1].children[1].textContent = el.value;
        clonedEffect.children[1].children[1].children[0].textContent = el.info.split(' ').length > 20 && el.info.length > 100 ? el.info.split(' ').slice(0,20).join(' ') + '...' : el.info;
		// clonedEffect.children[1].children[1].children[1].children[0].href = 'https://www.freecodecamp.org/learn'

        clonedEffect.children[0].addEventListener('mouseenter', () => {
            clonedEffect.children[0].children[0].style.visibility = 'hidden'
            clonedEffect.children[0].children[1].style.visibility = 'visible' 
            clonedEffect.children[0].children[0].style.opacity = '0' 
            clonedEffect.children[0].children[1].style.opacity = '1' 
        })
        
        clonedEffect.children[0].addEventListener('mouseleave', () => {
            clonedEffect.children[0].children[0].style.visibility = 'visible'
            clonedEffect.children[0].children[1].style.visibility = 'hidden' 
            clonedEffect.children[0].children[0].style.opacity = '1' 
            clonedEffect.children[0].children[1].style.opacity = '0' 
        })
		effectsWrap.appendChild(clonedEffect);
	});
}

renderEffects(EFFECTS);
pagination();

function headerClick() {
	this.nextElementSibling.classList.toggle('spoiler-body');
	const arrow = this.querySelectorAll('.arrow');
	arrow[0].classList.toggle('rotate');
}

headerFilters.forEach(function (item) {
	item.addEventListener('click', headerClick);
});

filterBtn.addEventListener('click', () => {
	filtersMenu.classList.add('filter-group-mobile-active');
	document.body.style.overflow = 'hidden';
});

resetBtn.addEventListener('click', () => {
	renderEffects(EFFECTS);
	resetBtn.style.display = 'none';
	filters.forEach(el => {
		el.classList.remove('selected');
	});
	pagination();
});

closeBtn.addEventListener('click', () => {
	filtersMenu.classList.remove('filter-group-mobile-active');
	document.body.style.overflow = 'visible';
});

filters.forEach(el => {
	el.addEventListener('click', () => {
		filters.forEach(el => el.classList.remove('selected'));
		el.classList.add('selected');
		const currentFilter = el.dataset.filter;
		const currentFilterValue = el.dataset.value;
		filter(currentFilter, currentFilterValue, el);
		filtersMenu.classList.remove('filter-group-mobile-active');
		document.body.style.overflow = 'visible';
		resetBtn.style.display = 'inline';
	});
});

function filter(filter, value) {
	let filteredEffects = EFFECTS;
	if (value && value !== 'all') {
		filteredEffects = EFFECTS.filter(item => {
			return item[filter]?.includes(value);
		});
	}
	if (value === 'all') {
		filteredEffects = EFFECTS.filter(item => {
			return item.hasOwnProperty(filter);
		});
	}

	renderEffects(filteredEffects);
	
	pagination();
	
}

function pagination() {
	const items = $('.effect');
	const numItems = items.length;
	const perPage = 26;

	items.slice(perPage).hide();
	
		$('#pagination-container').pagination({
			items: numItems,
			itemsOnPage: perPage,
			prevText: '&laquo;',
			nextText: '&raquo;',
			onPageClick: function (pageNumber) {
				const showFrom = perPage * (pageNumber - 1);
				const showTo = showFrom + perPage;
				items.hide().slice(showFrom, showTo).show();
			},
		});
	
	
	
}

