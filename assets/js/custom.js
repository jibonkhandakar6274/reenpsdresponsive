
$(document).ready(function () {

    // sticky header Start
    $(window).scroll(function () {
        var scroll_window = $(this).scrollTop();

        if (scroll_window > 100) {
            $('.header-top').hide();
            $('.header-menu').addClass('header-menu-top');
           
        }
        else {
            $('.header-top').show();
            $('.header-menu').removeClass('header-menu-top');
            
        }

    });
    // sticky header End
    
    // menu link click Start
    $('.navbar-nav a[href^="#"]').click(function (e) {
        e.preventDefault();

        var target_menu = this.hash;
        $('html, body').animate({
            scrollTop: $(target_menu).offset().top - 60
        },1000);
    });
    // menu link click End 

    // search button Start
    $('.search-btn i').click(function () {
        $('.search-box').fadeToggle();
    });
    // search button End

    // go top btn Start
    $(window).scroll(function () {
        var targetScroll = $(this).scrollTop();

        if (targetScroll > 200) {
            $('.go-top').fadeIn();
        }
        else {
            $('.go-top').fadeOut();
        }
    });
    $('.go-top a').click(function () {
            $('html,body').animate({
                scrollTop: 0
            }, 1000); 
        });
   // go top btn End
    
    // get started button here
    $('.banner-content a[href^="#"]').click(function (e) {
        e.preventDefault();
        var target_btn = this.hash;

        $('html,body').animate({
            scrollTop : $(target_btn).offset().top - 180
        },1000);
    });
});