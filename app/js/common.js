$(function() {

	// ВЫравнивание блоков по высоте
	//$(".service-item h4").equalHeights(); 

	//Слайдер главный
	$(".sl-head").slick({
		arrows: true,
	});

	/*слайдер пиццы, салатов и напитков*/
	$(".sl-second").slick({
		arrows: true,
		slidesToShow: 3,
		dots: true,
		responsive: [
		{
			breakpoint: 1200,
			settings: {
				slidesToShow: 2
			}
		},
		{
			breakpoint: 780,
			settings: {
				slidesToShow: 1
			}
		}
		]
	});	


	//плавный скрол в хроме
	try {
		$.browserSelector();
		if($("html").hasClass("chrome")) {
			$.smoothScroll();
		}
	} catch(err) {
	};


});
