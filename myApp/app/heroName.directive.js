import {Directive,ElementRef,Renderer,Input} from 'angular2/core';

var HeroName = ng.core.Directive({
  selector: '[heroName]'
});

HeroName = ng.core.Class({
  constructor: [ElementRef,Renderer,function(el,renderer){
    renderer.setElementStyle(el,'backgroundColor','yellow');
  }]
})(HeroName);

export {HeroName}
