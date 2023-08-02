const swiper = new Swiper('.swiper', {
	direction: 'horizontal',
	loop: true,
	autoplay: {
		delay: 5000,
	},
});

const swiperPortfolio = new Swiper('.swiper_portfolio', {
	effect: 'fade',
	loop: true,
	autoplay: {
		delay: 5000,
	},
	fadeEffect: {
		crossFade: true,
	},
	navigation: {
		nextEl: '.swiper-button-next',
		prevEl: '.swiper-button-prev',
	},
	speed: 2000,
});

const menu = document.querySelector('.navigation');

window.addEventListener('scroll', () => {
	if (window.scrollY > 50) {
		menu.classList.add('fixed');
	} else {
		menu.classList.remove('fixed');
	}
});

$("a[href='#to_nav']").on('click', function (event) {
	$([document.documentElement, document.body]).animate(
		{
			scrollTop: $('#homepage').offset().top,
		},
		500
	);
});
$("a[href='#contacts']").on('click', function (event) {
	$([document.documentElement, document.body]).animate(
		{
			scrollTop: $('form').offset().top,
		},
		500
	);
});
$("a[href='#services']").on('click', function (event) {
	$([document.documentElement, document.body]).animate(
		{
			scrollTop: $('#services').offset().top,
		},
		500
	);
});

const loadPosts = document.querySelector('.load_posts');
const postsAdded = document.querySelector('.post-hidden');
loadPosts.addEventListener('click', () => {
	postsAdded.classList.toggle('show');
	loadPosts.style.display = 'none';
});
