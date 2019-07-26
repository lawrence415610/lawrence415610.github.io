; (function () {

    var fullHeight = function () {
        $('.js-fullheight').css('height', $(window).height());
        $(window).resize(function () {
            $('.js-fullheight').css('height', $(window).height());
        });
    };

    $('#navigation').find('a').click(function(){
        //为了被chrome和firefox支持，所以要写html和body
        $("html, body").animate({scrollTop: $($(this).attr("href")).offset().top -20+ "px"}, 500);
        return false;
    });

    var navActive = function(section){
        $('#navigation').find('li').removeClass('active');
        $('#navigation').find('li').each(function(){
            $(this).find('a[data-nav="'+section+'"]').closest('li').addClass('active');
        });
    }

    var navigationSection = function() {
    var $section = $('section[data-section]');
    $section.waypoint(function(direction) {
        if (direction === 'down') {
            navActive($(this.element).data('section'));
        }
    }, {
        offset: '150px'
    });
    $section.waypoint(function(direction) {
        if (direction === 'up') {
            navActive($(this.element).data('section'));
        }
    }, {
        offset: function() { return -$(this.element).height() + 155; }
    });
};

	var addAnimation = function() {
		var i = 0;
		$('.animation').waypoint( function( direction ) {

			if( direction === 'down' && !$(this.element).hasClass('animated') ) {
				
				i++;

				$(this.element).addClass('item-animate');
				setTimeout(function(){

					$('body .animation.item-animate').each(function(k){
						var el = $(this);
						setTimeout( function () {
							var effect = el.data('animate');
							if ( effect === 'fadeIn') {
								el.addClass('fadeIn animated');
							} else if ( effect === 'fadeInLeft') {
								el.addClass('fadeInLeft animated');
							} else if ( effect === 'fadeInRight') {
								el.addClass('fadeInRight animated');
							} else {
								el.addClass('fadeInUp animated');
							}

							el.removeClass('item-animate');
						},  k * 200, 'easeInOutExpo' );
					});
					
				}, 100);
				
			}

		} , { offset: '85%' } );
	};




    

    $(function () {
        fullHeight();
        navigationSection();
        addAnimation();
    });



}());