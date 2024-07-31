(function($) {

	"use strict";

	var heights = function() {
		$('.tc-fullheight').css('height', $(window).height());
		$(window).resize(function(){
			$('.tc-fullheight').css('height', $(window).height());
		});

		$('.tc-fullheight_2').css('height', $(window).height() / 2);
		$(window).resize(function(){
			$('.tc-fullheight_2').css('height', $(window).height() / 2);
		});

		$('.tc-fullheight_3').css('height', $(window).height() / 3);
		$(window).resize(function(){
			$('.tc-fullheight_3').css('height', $(window).height() / 3);
		});

	};
	heights();

   var burgerMenu = function() {

		$('.js-tc-nav-toggle').on('click', function(event){
			event.preventDefault();
			var $this = $(this);

			if ($('body').hasClass('offcanvas')) {
				$this.removeClass('active');
				$('body').removeClass('offcanvas');	
			} else {
				$this.addClass('active');
				$('body').addClass('offcanvas');	
			}
		});
	};
	burgerMenu();

	var mobileMenuOutsideClick = function() {

		$(document).click(function (e) {
	    var container = $("#tc-left-panel, .js-tc-nav-toggle");
	    if (!container.is(e.target) && container.has(e.target).length === 0) {

	    	if ( $('body').hasClass('offcanvas') ) {

    			$('body').removeClass('offcanvas');
    			$('.js-tc-nav-toggle').removeClass('active');
			
	    	}
	    	
	    }
		});

		$(window).scroll(function(){
			if ( $('body').hasClass('offcanvas') ) {

    			$('body').removeClass('offcanvas');
    			$('.js-tc-nav-toggle').removeClass('active');
			
	    	}
		});

	};
	mobileMenuOutsideClick();

	var contentWayPoint = function() {
		var i = 0;
		$('.f-tc-animate').waypoint( function( direction ) {

			if( direction === 'down' && !$(this.element).hasClass('f-tc-animated') ) {
				
				i++;

				$(this.element).addClass('item-animate');
				setTimeout(function(){

					$('body .f-tc-animate.item-animate').each(function(k){
						var el = $(this);
						setTimeout( function () {
							var effect = el.data('animate-effect');
							if ( effect === 'fadeIn') {
								el.addClass('fadeIn f-tc-animated');
							} else if ( effect === 'fadeInLeft') {
								el.addClass('fadeInLeft f-tc-animated');
							} else if ( effect === 'fadeInRight') {
								el.addClass('fadeInRight f-tc-animated');
							} else {
								el.addClass('fadeInUp f-tc-animated');
							}
							el.removeClass('item-animate');
						},  k * 50, 'easeInOutExpo' );
					});
					
				}, 100);
				
			}

		} , { offset: '95%' } );
	};
	contentWayPoint();

})(jQuery);

