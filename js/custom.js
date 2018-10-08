(function($) {

// Init Wow
    
wow = new WOW({
    animateClass: 'animated',
    offset: 100
    });
wow.init();

$(".navbar-collapse a").on('click', function() {
$(".navbar-collapse.collapse").removeClass('show');
});

// Navigation Scroll
    
$('.navbar-nav li a').bind('click', function(event) {
    $('.navbar-nav li.nav-item').removeClass('active');
    $(this).closest('li').addClass('active');
    var $anchor = $(this);
    var nav = $($anchor.attr('href'));
    
    if (nav.length) {
        $('html, body').stop().animate({
        scrollTop: $($anchor.attr('href')).offset().top
        }, 1500, 'easeInOutExpo');

        event.preventDefault();
    }
});

//jQuery Collapse Navbar on Scroll
    
    $(window).scroll(function() {
    if ($(".navbar-light").offset().top > 50) {
          $(".fixed-top").addClass("top-nav-collapse");
        } else {
          $(".fixed-top").removeClass("top-nav-collapse");
        }
    });

})(jQuery);