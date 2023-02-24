'use strict';

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

class Slider {
  constructor(parentSelector,elements){
    this.elementsRaw = elements
    this.createSlider()
    this.renderSliderElement(parentSelector)
    this.init()
  }

  createSlider(){
    this.slider = createElementType('div','slider');

    this.sliderBody = createElementType('div','sliderBody');

    this.arrows = createElementType('div','arrows')
    this.arrowLeft = createElementType('div','left')
    this.arrowRight = createElementType('div','right')

    appendChilds(this.arrows, this.arrowLeft, this.arrowRight)

    this.elementsWrapper = createElementType('div','elementsWrapper')
    this.sliderBody.appendChild(this.elementsWrapper)
    this.sliderBody.appendChild(createElementType('div','scrollbar'))
    
    this.filterElement = new Filter('VOICETAGGING', this.elementsWrapper);
    this.sliderHeader = this.filterElement.init()

    this.slider.appendChild(this.sliderHeader)
    this.slider.appendChild(this.sliderBody)
    this.slider.appendChild(this.arrows)
  }

  filter(filter){
    this.filterElement.switchFilter(filter)
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
    this.elementsRaw.forEach(element => {
      this.renderElement(element)
    });
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
    if(this.type === 'VOICETAGGING') {
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
    else if (this.type === 'MIXING'){
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
    else if (this.type === 'MASTERING'){
      
    }
    else if (this.type === 'BEAT'){
      
    }
    else {
      //TODO undefiend type
    }

    appendChilds(this.wrapper,this.topCard,this.bottomPrice)

  }
  init(){
    return this.wrapper;
  }
}

class Filter {
  constructor(query = '', list){
    (query && query != undefined) ? this.query = query : this.query = ''

    this.list = list

    this.filterList = [
      'VOICETAGGING',
      'MIXING',
      'MASTERING',
      'BEATS',
      'CONSULTATION',
      'ALL'
    ]
    
    this.element = createElementType('div','sliderHeader')

    this.filter = this.query == '' ? this.query : this.filterList[0]

    this.filterElement = createElementType('div','filter')
    this.filterElement.innerHTML = this.filter

    this.queryElement = createElementType('div','query')
    this.queryInput = createElementType('input','queryInput')
    this.queryInput.setAttribute('placeholder','any keywords')
    this.queryImage = createElementType('img','maginifyingGlass')
    this.queryImage.src = 'assets/images/SVG/maginifyingGlass.svg';
    appendChilds(this.queryElement,this.queryInput,this.queryImage)
    appendChilds(this.element, this.filterElement,this.queryElement)
    this.magnifyingGlass()
    this.triggerInputByKeyboard()
  }

  calcWidth(){
    let all = this.list.childNodes.length
    let hidden = 0
    this.list.childNodes.forEach(element => {if(element.getAttribute('style') == 'display: none;') hidden++})
    console.log(all - hidden)
    this.list.style = 'width: '+ (all - hidden)*288 +"px;"
  }

  switchFilter(filter = 'VOICETAGGING') {
    this.list.querySelectorAll('.elementWrapper').forEach(element => {element.getAttribute('data-type') == filter ? element.style = 'display: auto' : element.style = 'display: none'})
  }

  filtertags(filter = ''){
    this.list.querySelectorAll('.elementWrapper').forEach(element => {
      if (element.innerHTML.toLowerCase().includes(filter.toLowerCase()))
        element.style = 'display: auto';
      else
        element.style = 'display: none';
    })
  }

  magnifyingGlass(){
    this.queryImage.addEventListener('click',()=>{
      if(this.queryInput.value == '' || this.queryInput.value === undefined)
        this.queryInput.focus()
      else 
        this.filtertags(this.queryInput.value)
    })
  }

  triggerInputByKeyboard(){
      this.queryInput.addEventListener('input',()=>{
        if(this.queryInput.value != ''){
          this.filtertags(this.queryInput.value)
          this.calcWidth()
        }
        else
        {
          console.log(this.filter)
          this.switchFilter(this.filter)
          this.calcWidth()
        }
      })
  }

  init(){
    return this.element
  }
}

document.addEventListener("DOMContentLoaded", () => {

  let mainSlider = new Slider('.sliderWrapper',elements);
  mainSlider.filter('VOICETAGGING')
});