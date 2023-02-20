const menu = document.querySelector('.navigation');

window.addEventListener('scroll', () => {
	if (window.pageYOffset > 50) {
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
