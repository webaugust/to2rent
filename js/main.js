$(document).ready(function(){
	$('.slider').slick({
		nextArrow: '<button class="slick-arrrow slick-prev"><img src="images/prev.svg" alt="prev arrow"></button>',
		prevArrow: '<button class="slick-arrrow slick-next"><img src="images/next.svg" alt="next arrow"></button>',
		fade:true,
		responsive:[
			{
				breakpoint: 441,
				settings: {
					arrows: false

				
				}
			}
		]
	});

});

$(document).ready(function() {

    $("[data-scroll]").on("click", function(event) {
        event.preventDefault();

        let elementId = $(this).data('scroll');
        let elementOffset = $(elementId).offset().top;
        
        $("html, body").animate({
            scrollTop: elementOffset
        }, 1000);
    });

});


 
$(function() {
	// при нажатии на кнопку scrollup
	$('.scrollup').click(function() {
	  // переместиться в верхнюю часть страницы
		$("html, body").animate({
			scrollTop: 0
		},1000);
		})
	})
	// при прокрутке окна (window)
	$(window).scroll(function() {
	// если пользователь прокрутил страницу более чем на 200px
	if ($(this).scrollTop() > 200) {
		// то сделать кнопку scrollup видимой
		$('.scrollup').fadeIn();
	}
	// иначе скрыть кнопку scrollup
	else {
		$('.scrollup').fadeOut();
	}
});





