$(window).on('scroll', function(){
    var valueScroll = $(this).scrollTop();
    var imgParallax = $('.wrapper-parallax .img-container-parallax');
    if (imgParallax[0] && imgParallax.offset().top - valueScroll < $(window).height()) {
        imgParallax.css({
            'transform': 'translateY('+ valueScroll/4 + 'px)'
        });
    }})