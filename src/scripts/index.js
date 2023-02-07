//title animation waveform ıllılı.ı
function animateTitle() {
    let vaweform = ['ıllılı.ı','llıll.ıl','...lılı.','...ılı..','..ıllı..'];
    let counter = 0;
    let interval = setInterval(() => {
      document.title = 'KANKI MUSIC ' + vaweform[counter];
      counter = (counter + 1) % vaweform.length;
    }, 100);
  }
  animateTitle();

let elements = [{
    'type':'voicetag',
    'name':'tati',
    'japanese':'タチ',
    'tags':['juicy','penetrating','rough'],
    'img':'assets/images/tati.png',
    'price':'9.99'
  },
  {
    'type':'voicetag',
    'name':'kate',
    'japanese':'ケイト',
    'tags':['Brittle', 'thin' , 'breathy'],
    'img':'assets/images/kate.png',
    'price':'9.99'
  },
  {
    'type':'voicetag',
    'name':'why',
    'japanese':'ワイ',
    'tags':['Wobbly', 'strident' , 'ringing'],
    'img':'assets/images/why.png',
    'price':'9.99'
  },
  {
    'type':'voicetag',
    'name':'honey',
    'japanese':'ハニー',
    'tags':['Smoky' , 'flat' , 'husky'],
    'img':'assets/images/honey.png',
    'price':'9.99'
  },
  {
    'type':'voicetag',
    'name':'zouxa',
    'japanese':'ズーサ',
    'tags':['Singsong', 'matter-of-fact', 'tight'],
    'img':'assets/images/zouxa.png',
    'price':'9.99'
  }
]

function createElementType(type, name){
  let element = document.createElement(type.toUpperCase());
  element.className = name;
  return element;
}

class Slider {
  constructor(parentSelector,elements){
    this.elementsRaw = elements
    this.createSlider()
    this.renderElement(parentSelector)
  }

  createSlider(){
    this.slider = createElementType('div','slider');

    this.sliderHeader = createElementType('div','sliderHeader');
    this.sliderHeader.appendChild(createElementType('div','filter'))
    this.sliderHeader.appendChild(createElementType('div','query'))

    this.sliderBody = createElementType('div','sliderBody');
    this.sliderBody.appendChild(createElementType('div','arrows'))
    this.elementsWrapper = createElementType('div','elementsWrapper')
    this.sliderBody.appendChild(elementsWrapper)
    this.sliderBody.appendChild(createElementType('div','scrollbar'))

    this.slider.appendChild(this.sliderHeader)
    this.slider.appendChild(this.sliderBody)
  }

  renderElement(element){
    this.elementsWrapper.appendChild(new Element(element))
  }

  renderSliderElement(parentSelector){
    this.parent = document.body.querySelector(parentSelector)
    console.log(this.slider)
    this.parent.appendChild(this.slider);
  }

  init(){
    
  }
}

class Element {
  constructor(element){
    this.element = element
    this.type = element.type
    this.name = element.name
    this.price = element.price
    this.wrapper = createElementType('div','elementWrapper')
    this.wrapper.setAttribute('data-type',this.type)
    this.createElement()
    this.init()
  }
  createElement(){
    if(this.type === 'voicetag') {
      this.topCard = createElementType('div','top')
      this.bottomPrice = createElementType('div','bottom')
      this.image = createElementType('img','preview')
      this.image.src = this.element.img;


    }

    this.wrapper.appendChild()
  }
  init(){
    return this.wrapper;
  }
}

document.addEventListener("DOMContentLoaded", () => {
  let mainSlider = new Slider('.sliderWrapper',elements);
});