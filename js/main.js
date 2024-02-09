(function ($) {
    "use strict";

    // Spinner
    var spinner = function () {
        setTimeout(function () {
            if ($('#spinner').length > 0) {
                $('#spinner').removeClass('show');
            }
        }, 1);
    };
    spinner(0);


    // Fixed Navbar
    $(window).scroll(function () {
        if ($(window).width() < 992) {
            if ($(this).scrollTop() > 55) {
                $('.fixed-top').addClass('shadow');
            } else {
                $('.fixed-top').removeClass('shadow');
            }
        } else {
            if ($(this).scrollTop() > 55) {
                $('.fixed-top').addClass('shadow').css('top', -55);
            } else {
                $('.fixed-top').removeClass('shadow').css('top', 0);
            }
        } 
    });
    
        /*------------------
        Background Set
    --------------------*/
    $('.set-bg').each(function () {
        var bg = $(this).data('setbg');
        $(this).css('background-image', 'url(' + bg + ')');
    });
   // Back to top button
   $(window).scroll(function () {
    if ($(this).scrollTop() > 300) {
        $('.back-to-top').fadeIn('slow');
    } else {
        $('.back-to-top').fadeOut('slow');
    }
    });
    $('.back-to-top').click(function () {
        $('html, body').animate({scrollTop: 0}, 1500, 'easeInOutExpo');
        return false;
    });


    // Testimonial carousel
    $(".testimonial-carousel").owlCarousel({
        autoplay: true,
        smartSpeed: 2000,
        center: false,
        dots: true,
        loop: true,
        margin: 25,
        nav : true,
        navText : [
            '<i class="bi bi-arrow-left"></i>',
            '<i class="bi bi-arrow-right"></i>'
        ],
        responsiveClass: true,
        responsive: {
            0:{
                items:1
            },
            576:{
                items:1
            },
            768:{
                items:1
            },
            992:{
                items:2
            },
            1200:{
                items:2
            }
        }
    });
    //  carousel
    $(".product-carousel").owlCarousel({
        autoplay: true,
        smartSpeed: 2000,
        center: false,
        dots: true,
        loop: true,
        margin: 25,
        nav : true,
        navText : [
            '<i class="bi bi-arrow-left"></i>',
            '<i class="bi bi-arrow-right"></i>'
        ],
        responsiveClass: true,
        responsive: {
            0:{
                items:1
            },
            576:{
                items:1
            },
            768:{
                items:2
            },
            992:{
                items:3
            },
            1200:{
                items:4
            }
        }
    });

    $(".related-product-carousel").owlCarousel({
        autoplay: true,
        smartSpeed: 1500,
        center: false,
        dots: true,
        loop: true,
        margin: 25,
        nav : true,
        navText : [
            '<i class="bi bi-arrow-left"></i>',
            '<i class="bi bi-arrow-right"></i>'
        ],
        responsiveClass: true,
        responsive: {
            0:{
                items:1
            },
            576:{
                items:1
            },
            768:{
                items:2
            },
            992:{
                items:2
            },
            1200:{
                items:3
            }
        }
    });


    $(".brands-carousel").owlCarousel({
        autoplay: true,
        smartSpeed: 1600,
        center: false,
        dots: true,
        loop: true,
        margin: 15,
        nav : true,
        navText : [
            '<i class="bi bi-arrow-left bi-size"></i>',
            '<i class="bi bi-arrow-right bi-size"></i>'
        ],
        responsiveClass: true,
        responsive: {
            0:{
                items:3
            },
            576:{
                items:4
            },
            768:{
                items:5
            },
            992:{
                items:6
            },
            1200:{
                items:7
            }
        }
    });

    function showAddTOCart(){
        $('.add-to-element').addClass('w-75');
        $('.add-to-container').removeClass('center');
        $('.add-to-container').addClass('show-center');
        $('.add-to-text').removeClass('d-none');
        $('.add-to-text').addClass('add-to-visible'); 
    }

    function hideAddTOCart(){


        $('.add-to-element').removeClass('w-75');
        $('.add-to-container').removeClass('show-center');
        $('.add-to-container').addClass('center');
        $('.add-to-text').removeClass('add-to-visible');
        $('.add-to-text').addClass('d-none'); 
    }

    function showQuickView(){
         
        $('.quick-view-element').addClass('w-75');
        $('.quick-view-container').removeClass('center');
        $('.quick-view-container').addClass('show-center');
        $('.quick-view-text').removeClass('d-none');
        $('.quick-view-text').addClass('add-to-visible');
    }
    function hideQuickView(){

        $('.quick-view-element').removeClass('w-75');
        $('.quick-view-container').removeClass('show-center');
        $('.quick-view-container').addClass('center');
        $('.quick-view-text').removeClass('add-to-visible');
        $('.quick-view-text').addClass('d-none');
       
    }
    // Modal Video
    $(document).ready(function () {
      

        
    });



    // Product Quantity
    $('.quantity button').on('click', function () {
        var button = $(this);
        var oldValue = button.parent().parent().find('input').val();
        if (button.hasClass('btn-plus')) {
            var newVal = parseFloat(oldValue) + 1;
        } else {
            if (oldValue > 0) {
                var newVal = parseFloat(oldValue) - 1;
            } else {
                newVal = 0;
            }
        }
        button.parent().parent().find('input').val(newVal);
    });

})(jQuery);

