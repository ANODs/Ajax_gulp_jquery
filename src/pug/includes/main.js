window.onload = function() {da()};
    function da(){document.querySelector("#swiper2 > swiper-slide.mainContent.swiper-slide-active > spline-viewer").shadowRoot.querySelector("#logo").style = 'opacity:0'}
    const swiperE1 = document.querySelector('#swiper1')
    Object.assign(swiperE1, {
    slidesPerView: 1,
    breakpoints: {
    0: {
    loop: false,
    direction: 'vertical',
    slidesPerView: 4,
    spaceBetween: 0,
    },
    640: {
    loop: false,
    direction: 'vertical',
    slidesPerView: 4,
    spaceBetween: 10,
    },
    768: {
    loop: false,
    direction: 'vertical',
    slidesPerView: 4,
    spaceBetween: 10,
    },
    1024: {
    loop: false,
    direction: 'horizontal',
    slidesPerView: 4,
    spaceBetween: 10,
    },
    1440: {
    loop: false,
    direction: 'horizontal',
    slidesPerView: 5,
    spaceBetween: 15,
    },
    },
    });
    swiperE1.initialize();
    let swiperE2 = document.querySelector('#swiper2')
    Object.assign(swiperE2, {
    slidesPerView: 1,
    breakpoints: {
    0: {
    touchMove: false,
    accessibility: false,
    swipe: false,
    draggable: false,
    direction: 'horizontal',
    slidesPerView: 1,
    spaceBetween: 0,
    },
    640: {
    touchMove: false,
    accessibility: false,
    swipe: false,
    draggable: false,
    swipe: false,
    draggable: false,
    direction: 'horizontal',
    slidesPerView: 1,
    },
    768: {
    touchMove: false,
    accessibility: false,
    swipe: false,
    draggable: false,
    swipe: false,
    draggable: false,
    direction: 'horizontal',
    slidesPerView: 1,
    },
    1024: {
    touchMove: false,
    accessibility: false,
    swipe: false,
    draggable: false,
    direction: 'vertical',
    slidesPerView: 1,
    },
    1440: {
    touchMove: false,
    accessibility: false,
    swipe: false,
    draggable: false,
    direction: 'vertical',
    slidesPerView: 1,
    },
    },
    });
    swiperE2.initialize();
    const swiperE3 = document.querySelector('#swiper3')
    Object.assign(swiperE3, {
    slidesPerView: 1,
    breakpoints: {
    0: {
    direction: 'vertical',
    slidesPerView: 1,
    spaceBetween: 0,
    },
    640: {
    direction: 'vertical',
    slidesPerView: 1,
    },
    768: {
    direction: 'vertical',
    slidesPerView: 1,
    },
    1024: {
    direction: 'horizontal',
    slidesPerView: 1,
    },
    1440: {
    direction: 'horizontal',
    slidesPerView: 1,
    },
    },
    });
    swiperE3.initialize();
    document.body.addEventListener("contextmenu", (e) => {e.preventDefault()});


                    