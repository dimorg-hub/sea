$('.reviews__list').slick({
	infinite: true,
	slidesToShow: 2,
	centerMode: true,
	slidesToScroll: 1,
	dots: true,
	responsive: [
		{
			breakpoint: 768,
			settings: {
				slidesToShow: 1,
				slidesToScroll: 1,
				infinite: true,
				centerMode: false,
				dots: true
			}
		}
	]

});
$('.rooms__slider--list').slick({
	slidesToShow: 1,
	slidesToScroll: 1
});


$(".header__link, .footer__link").on("click", function (ten) {
	ten.preventDefault();
	var id = $(this).attr('href'),
		top = $(id).offset().top;
	top -= 0;
	$('body,html').animate({ scrollTop: top }, 1300);
});


$('.deal__exit, .header__btn, .deal__btn').on('click', function () {
	$('.deal').toggleClass('active');
});

$('.let-reviews__exit, .let-reviews__btn, .reviews__btn').on('click', function () {
	$('.let-reviews').toggleClass('active');
});