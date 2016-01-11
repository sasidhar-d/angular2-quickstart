'use strict';

System.register(['angular2/core'], function (_export, _context) {
  var Directive, ElementRef, Renderer, Input, HeroName;
  return {
    setters: [function (_angular2Core) {
      Directive = _angular2Core.Directive;
      ElementRef = _angular2Core.ElementRef;
      Renderer = _angular2Core.Renderer;
      Input = _angular2Core.Input;
    }],
    execute: function () {
      _export('HeroName', HeroName = ng.core.Directive({
        selector: '[heroName]'
      }));

      _export('HeroName', HeroName = ng.core.Class({
        constructor: [ElementRef, Renderer, function (el, renderer) {
          renderer.setElementStyle(el, 'backgroundColor', 'yellow');
        }]
      })(HeroName));

      _export('HeroName', HeroName);
    }
  };
});
//# sourceMappingURL=heroName.directive.js.map
