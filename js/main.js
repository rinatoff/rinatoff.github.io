$(document).ready(function(){
	$('.feedback_slider').slick({
	  infinite: true,
	  slidesToShow: 1,
	  slidesToScroll: 1,
	  arrows: true,
	  prevArrow:'<i class="fa fa-chevron-left feedback_slider__arrows arrow_prev"></i>',
	  nextArrow:'<i class="fa fa-chevron-right feedback_slider__arrows arrow_next"></i>',
	})
});