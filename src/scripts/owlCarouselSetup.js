$('document').ready(function() {
    $('.owl-carousel').owlCarousel({
        loop: true,
        margin: 10,
        nav: true,
        dots: true,
        responsive:{
            0:{
                items:1
            },
            320:{
                items:2
            },
            640:{
                items:3
            },
            768:{
                items:4
            },
            1000:{
                items:6
            }
        }
    })
})