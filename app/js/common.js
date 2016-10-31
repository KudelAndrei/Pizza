$(function() {

	// ВЫравнивание блоков по высоте
	//$(".service-item h4").equalHeights(); 

	$(".toggle-mnu").click(function() {
		$(this).toggleClass("on");
		$(".mian-menu").slideToggle();
		return false;
	});

	//Слайдер главный
	$(".sl-head").slick({
		arrows: true,
		autoplay: true, //автоматический показ
		autoplaySpeed: 5000, //время которое будет показан слайд
		speed: 500, //время перехода слайда
		responsive: [
		{
			breakpoint: 860,
			settings: {
				arrows: false
			}
		}
		]
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
