import { PRODUCTS } from '../constants/products.js';

const allCatalog = document.querySelector('.all-catalog');
const filters = document.querySelectorAll('.filter');
const productsWrap = document.querySelector('.products');
const productTemplate = document.querySelector('#product-template').content;
const headerFilters = document.querySelectorAll("[data-name='spoiler-title']");
const filterBtn = document.querySelector('.filter-btn');
const filtersMenu = document.querySelector('.filter-group-mobile');
const closeBtn = document.querySelector('.close-btn');
const resetBtn = document.querySelector('.reset-filter-btn');

const currentPage = window.location.hash.split('-')[1];

if (currentPage) {
	$(function () {
		$('#pagination-container').pagination('selectPage', currentPage);
	});
}

function renderProducts(products) {
	productsWrap.textContent = '';
	products.forEach(el => {
		const product = productTemplate.querySelector('div');
		const clonedProduct = product.cloneNode(true);
		clonedProduct.children[0].alt = el.name;
		clonedProduct.children[1].querySelector('.product_detail-btn').href += el.link;
		clonedProduct.children[0].src = el.img;
		clonedProduct.children[1].children[0].textContent = el.name;
		clonedProduct.children[1].children[1].querySelector('.price').textContent = el.price;
		productsWrap.appendChild(clonedProduct);
	});
}
renderProducts(PRODUCTS);
pagination();
allCatalog.addEventListener('click', () => {
	renderProducts(PRODUCTS);
});

function headerClick() {
	this.nextElementSibling.classList.toggle('spoiler-body');
	const arrow = this.querySelectorAll('.arrow');
	arrow[0].classList.toggle('rotate');
}

headerFilters.forEach(function (item) {
	item.addEventListener('click', headerClick);
});

$("a[href='#to_nav']").on('click', function (event) {
	event.preventDefault();
	$([document.documentElement, document.body]).animate(
		{
			scrollTop: $('.page-template-default').offset().top,
		},
		500
	);
});

function filter(filter, value) {
	let filteredProducts = PRODUCTS;
	if (value && value !== 'all') {
		filteredProducts = PRODUCTS.filter(item => {
			return item[filter]?.includes(value);
		});
	}
	if (value === 'all') {
		filteredProducts = PRODUCTS.filter(item => {
			return item.hasOwnProperty(filter);
		});
	}
	renderProducts(filteredProducts);
	pagination();
}

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

resetBtn.addEventListener('click', () => {
	renderProducts(PRODUCTS);
	resetBtn.style.display = 'none';
	filters.forEach(el => {
		el.classList.remove('selected');
	});
	pagination();
});

filterBtn.addEventListener('click', () => {
	filtersMenu.classList.add('filter-group-mobile-active');
	document.body.style.overflow = 'hidden';
});

closeBtn.addEventListener('click', () => {
	filtersMenu.classList.remove('filter-group-mobile-active');
	document.body.style.overflow = 'visible';
});

function pagination() {
	const items = $('.list-wrapper .list-item');
	const numItems = items.length;
	const perPage = 18;

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
