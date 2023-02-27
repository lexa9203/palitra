const filters = document.querySelectorAll('.filter');
const products = document.querySelectorAll('.product');
const headerFilters = document.querySelectorAll("[data-name='spoiler-title']");

function filter(category, items) {
	items.forEach(item => {
		const isItemFiltered = !item.classList.contains(category);
		const isShowAll = category.toLowerCase() === 'all';
		if (isItemFiltered && !isShowAll) {
			item.classList.add('hide');
		} else {
			item.classList.remove('hide');
		}
	});
}

function headerClick() {
	this.nextElementSibling.classList.toggle('spoiler-body');
	const arrow = this.querySelectorAll('.arrow');
	arrow[0].classList.toggle('rotate');
}

filters.forEach(el => {
	el.addEventListener('click', () => {
		const currentCategory = el.dataset.filter;
		filter(currentCategory, products);
	});
});

headerFilters.forEach(function (item) {
	item.addEventListener('click', headerClick);
});

$("a[href='#to_nav']").on('click', function (event) {
	$([document.documentElement, document.body]).animate(
		{
			scrollTop: $('.page-template-default').offset().top,
		},
		500
	);
});
