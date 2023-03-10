'use strict';

let infoElements = [
    {
      'name':'FAQ',
      'items': ['all faq', 'mastering', 'mixing', 'payment', 'voice tags', 'terms of services', 'beats']
    },
    {
      'name':'ABOUT',
      'items': ['socials', 'actors', 'creators', 'partners', 'terms of services', 'about KANKI', 'become a part of team']
    }
  ];

class AdditioanlSlider{
    constructor(elements,parentSelector){

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

    this.slider.appendChild(this.arrows)
    this.slider.appendChild(this.sliderBody)

  }

  getTranslateX() {
    let style = window.getComputedStyle(this.elementsWrapper);
    let matrix = new WebKitCSSMatrix(style.transform);
    return matrix.m41
  }

  isStatic(){
    return (window.getComputedStyle(this.elementsWrapper).transition == 'all 0s ease 0s' || window.getComputedStyle(this.elementsWrapper).transition == '');
  }

  arrowTriggerRight(){
    this.arrowRight.addEventListener('click',()=>{
      if(this.isStatic()){
        if(this.getTranslateX()>-1440){
          let offset = ((this.getTranslateX()) - 1440)
          this.elementsWrapper.style.transform = 'translate('+ offset +'px)'
          this.elementsWrapper.style.transition = '.6s'
          setTimeout(()=>{this.elementsWrapper.style.transition = '0s'}, 600)
        }
      }
    })
  }

  arrowTriggerLeft(){
    this.arrowLeft.addEventListener('click',()=>{
      if(this.isStatic()){
        if(this.getTranslateX() < 0){
          let offset = ((this.getTranslateX()) + 1440)
          this.elementsWrapper.style.transform = 'translate('+ offset +'px)'
          this.elementsWrapper.style.transition = '.6s'
          setTimeout(()=>{this.elementsWrapper.style.transition = '0s'}, 600)
        }
      }
    })
  }

  renderElement(element){
    this.elementsWrapper.appendChild(new Element(element).init())
  }

  renderSliderElement(parentSelector){
    this.parent = document.body.querySelector(parentSelector)
    this.parent.appendChild(this.slider);
  }

  init(){
    this.elementsRaw.forEach(element => {
      this.renderElement(element)
    });

    this.filterElement.switchFilter(this.defaultFilter)
    this.filterElement.calcWidth()
    this.arrowTriggerRight()
    this.arrowTriggerLeft()
  }
}

