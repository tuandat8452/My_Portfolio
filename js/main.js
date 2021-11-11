new WOW().init();
$(document).ready(function() {
    // $('body').scrollspy({target: '.navbar'});
    $(window).scroll(function() {
        if(this.scrollY > 30) {
            $('.header').addClass("scrolled");
            
        } else {
            $('.header').removeClass("scrolled");
        }
        if(this.scrollY >600) {
            $('.to-top').addClass('show');
        } else {
            $('.to-top').removeClass('show');
        }
    })
    
    $('ul li a').click(function() {
        $(this).addClass('active').siblings().removeClass('active');
    })

    $('.owl-carousel').owlCarousel({
        loop: true,
        margin: 30,
        nav: true,
        dots:true,
        responsive: {
            0: {
                items: 1,
                nav:false,
            },
            600: {
                items: 1,
                nav:false,
            },
            1000: {
                items: 1
            }
        }
    })

    // Typed js
    var typed = new Typed('.typing', {
        strings: ["Tuấn Đạt", "a Developer"],
        loop: true,
        typeSpeed: 100,
        backSpeed: 30,
    });
});




