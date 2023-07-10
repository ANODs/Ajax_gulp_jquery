'use strict';

//title animation waveform ıllılı.ı
function animateTitle() {
    let vaweform = ['ıllılı.ı','llıll.ıl','...lılı.','...ılı..','..ıllı..'];
    let counter = 0;
    let interval = setInterval(() => {
      document.title = 'KANKIMUSIC ' + vaweform[counter];
      counter = (counter + 1) % vaweform.length;
    }, 100);
  }
  animateTitle();

let elements = [
  {
    'type':'MIXING',
    'name':'mixing',
    'japanese':'タチ',
    'tags':['fast','rich','quality'],
    'img':'assets/images/tati.png',
    'price':'9.99'
  },
  {
    'type':'VOICETAGGING',
    'name':'tati',
    'japanese':'タチ',
    'tags':['juicy','penetrating','rough'],
    'img':'assets/images/tati.png',
    'price':'9.99'
  },
  {
    'type':'VOICETAGGING',
    'name':'kate',
    'japanese':'ケイト',
    'tags':['Brittle', 'thin' , 'breathy'],
    'img':'assets/images/kate.png',
    'price':'9.99'
  },
  {
    'type':'VOICETAGGING',
    'name':'why',
    'japanese':'ワイ',
    'tags':['Wobbly', 'strident' , 'ringing'],
    'img':'assets/images/why.png',
    'price':'9.99'
  },
  {
    'type':'VOICETAGGING',
    'name':'honey',
    'japanese':'ハニー',
    'tags':['Smoky' , 'flat' , 'husky'],
    'img':'assets/images/honey.png',
    'price':'9.99'
  },
  {
    'type':'VOICETAGGING',
    'name':'zouxa',
    'japanese':'ズーサ',
    'tags':['Singsong', 'straight', 'tight'],
    'img':'assets/images/zouxa.png',
    'price':'9.99'
  },
  {
    'type':'VOICETAGGING',
    'name':'tati2',
    'japanese':'タチ',
    'tags':['juicy','penetrating','rough'],
    'img':'assets/images/tati.png',
    'price':'9.99'
  },
  {
    'type':'VOICETAGGING',
    'name':'kate2',
    'japanese':'ケイト',
    'tags':['Brittle', 'thin' , 'breathy'],
    'img':'assets/images/kate.png',
    'price':'9.99'
  },
  {
    'type':'VOICETAGGING',
    'name':'why2',
    'japanese':'ワイ',
    'tags':['Wobbly', 'strident' , 'ringing'],
    'img':'assets/images/why.png',
    'price':'9.99'
  },
  {
    'type':'VOICETAGGING',
    'name':'honey2',
    'japanese':'ハニー',
    'tags':['Smoky' , 'flat' , 'husky'],
    'img':'assets/images/honey.png',
    'price':'9.99'
  },
  {
    'type':'VOICETAGGING',
    'name':'zouxa2',
    'japanese':'ズーサ',
    'tags':['Singsong', 'straight', 'tight'],
    'img':'assets/images/zouxa.png',
    'price':'9.99'
  }
]

function createElementType(type, name){
  let element = document.createElement(type.toUpperCase());
  element.className = name;
  return element;
}

function appendChilds(parent, ...nodes){
  if(nodes != undefined || nodes != [])
    nodes.forEach(node => {
      parent.appendChild(node)
    })
}

function isDescendant(parent, child) {
  let node = child.parentNode;
  while (node != null) {
      if (node == parent) {
          return true;
      }
      node = node.parentNode;
  }
  return false;
}

function abs(x) {
  return x < 0 ? -x : x;
}

function test(item,...other) {if(item!='undefined')console.log(item);else console.log('undefined'," "); other.forEach((elem)=>{if(elem!='undefined')console.log(elem);else console.log('undefined')})};

window.onload = function() {
    function da(){document.querySelector("#swiper2 > swiper-slide.mainContent.swiper-slide-visible.swiper-slide-active > spline-viewer").shadowRoot.querySelector("#logo").style = 'opacity:0'}
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
    on: {
        slideChange: function () {
            const index_currentSlide = this.realIndex;
            const currentSlide = this.slides[index_currentSlide]
            console.log(currentSlide)
        },
    },
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
    
    document.body.addEventListener("contextmenu", (e) => {e.preventDefault()});

    da();}
