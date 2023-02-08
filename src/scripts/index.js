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

class Slider {
  constructor(parentSelector,elements){
    this.elementsRaw = elements
    // this.filter = createElementType('div','filter')
    // this.query = createElementType('div','query')

    this.createSlider()
    this.renderSliderElement(parentSelector)
    this.elementsRaw.forEach(element => {
      this.renderElement(element)
    });
  }

  createSlider(){
    this.slider = createElementType('div','slider');

    this.sliderHeader = createElementType('div','sliderHeader');

    // this.queryImage = createElementType('img','maginifyingGlass')
    // this.queryImage.src = 'assets/images/SVG/maginifyingGlass.svg';
    // this.query.appendChild(this.queryImage)
    // this.sliderHeader.appendChild(this.filter)
    // this.sliderHeader.appendChild(this.query)

    this.sliderBody = createElementType('div','sliderBody');
    this.sliderBody.appendChild(createElementType('div','arrows'))
    this.elementsWrapper = createElementType('div','elementsWrapper')
    this.sliderBody.appendChild(this.elementsWrapper)
    this.sliderBody.appendChild(createElementType('div','scrollbar'))

    this.slider.appendChild(this.sliderHeader)
    this.slider.appendChild(this.sliderBody)
  }

  renderElement(element){
    this.elementsWrapper.appendChild(new Element(element).init())
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
    this.image = createElementType('img','preview'); this.image.src = this.element.img;
    this.name = createElementType('div','name'); this.name.innerHTML = element.name;
    this.price = createElementType('div','price'); this.price.innerHTML = element.price;
    this.wrapper = createElementType('div','elementWrapper')
    this.wrapper.setAttribute('data-type',this.type)
    this.createElement()
  }
  createElement(){
    if(this.type === 'voicetag') {
      this.topCard = createElementType('div','top')
      this.bottomPrice = createElementType('div','bottom')

      this.japanese = createElementType('div','japanese')
      this.japanese.innerHTML = this.element.japanese

      this.tags = createElementType('div','tags')
      this.element.tags.forEach(tag => {this.tags.innerHTML += tag + '<br>'})

      this.barcode = createElementType('div','barcode')

      appendChilds(this.topCard,this.image,this.name,this.japanese,this.tags)
      appendChilds(this.bottomPrice,this.price,this.barcode)

    }
    else if (this.type === 'mixing'){
      
    }

    appendChilds(this.wrapper,this.topCard,this.bottomPrice)

  }
  init(){
    return this.wrapper;
  }
}

class Filter {
  constructor(query = ''){
    (query && query != undefined) ? this.query = query : this.query = ''

    this.filterList = [
      'VOICETAGGING',
      'MIXING',
      'MASTERING',
      'BEATS',
      'CONSULTATION'
    ]

    this.filter = this.filterList[0]
    this.filterElement = createElementType('div','filter')
    this.filterElement.innerHTML = this.filter

    this.queryElement = createElementType('div','query')
    this.queryInput = createElementType('input','queryInput')
    this.queryImage = createElementType('img','maginifyingGlass')
    this.queryImage.src = 'assets/images/SVG/maginifyingGlass.svg';
    appendChilds(this.queryElement,this.queryImage,queryInput)
  }



}

document.addEventListener("DOMContentLoaded", () => {

  let mainSlider = new Slider('.sliderWrapper',elements);

});