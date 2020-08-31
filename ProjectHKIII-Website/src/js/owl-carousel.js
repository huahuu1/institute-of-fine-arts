$(document).ready(function(){
    $('.slider-main').owlCarousel({
        margin:10,
        loop:true,
        responsiveClass:true,
        dots:false,
        autoplay:false,
        lazyLoad: true,
        nav:true,
        navText: ["<i class='fa fa-chevron-left prev-next-button'></i>","<i class='fa fa-chevron-right prev-next-button'></i>"],
        responsive:{
            0:{
                items:1,
            }
        }
    });

    $('.slider-supplier').owlCarousel({
        margin:10,
        loop:true,
        responsiveClass:true,
        dots:false,
        autoplay:true,
        nav:true,
        navText: ["<i class='fa fa-chevron-left prev-next-button'></i>","<i class='fa fa-chevron-right prev-next-button'></i>"],
        responsive:{
            0:{
                items:1
            },
            770:{
                items: 3
            },
            850: {
                items: 4
            },
            1200: {
                items: 5
            }
        }
    });

    $('.slider-part').owlCarousel({
        margin:10,
        loop:true,
        responsiveClass:true,
        dots:false,
        autoplay:true,
        nav:true,
        navText: ["<i class='fa fa-chevron-left prev-next-button'></i>","<i class='fa fa-chevron-right prev-next-button'></i>"],
        responsive:{
            0:{
                items:1
            },
            770:{
                items: 3
            },
            850: {
                items: 4
            },
            1200: {
                items: 6
            }
        }
    });
});
