"use strict";

System.register(["./hero.js"], function (_export, _context) {
  var Hero, HEROES, AppComponent;
  return {
    setters: [function (_heroJs) {
      Hero = _heroJs.Hero;
    }],
    execute: function () {
      HEROES = [new Hero(11, "Mr. Nice"), new Hero(12, "Narco"), new Hero(13, "Bombasto"), new Hero(14, "Celeritas"), new Hero(15, "Magneta"), new Hero(16, "RubberMan"), new Hero(17, "Dynama"), new Hero(18, "Dr IQ"), new Hero(19, "Magma"), new Hero(20, "Tornado")];

      _export("AppComponent", AppComponent = ng.core.Component({
        selector: 'my-app',
        template: "<h1>{{title}}</h1>\n      <h2>My Heroes</h2>\n      <ul class=\"heroes\">\n          <li *ngFor=\"#hero of heroes\" [class.selected]=\"hero === selectedHero\" (click)=\"onSelect(hero)\">\n            <span class=\"badge\">{{hero.id}}</span> {{hero.name}}\n          </li>\n      </ul>\n      <div *ngIf=\"selectedHero\">\n        <h2>{{selectedHero.name}} details!</h2>\n        <div><label>id: </label>{{selectedHero.id}}</div>\n        <div>\n            <label>name: </label>\n            <div><input [(ngModel)]=\"selectedHero.name\" placeholder=\"name\"></div>\n        </div>\n      </div>\n      ",
        styles: ["\n        .heroes {list-style-type: none; margin-left: 1em; padding: 0; width: 10em;}\n      .heroes li { cursor: pointer; position: relative; left: 0; transition: all 0.2s ease; }\n      .heroes li:hover {color: #369; background-color: #EEE; left: .2em;}\n      .heroes .badge {\n        font-size: small;\n        color: white;\n        padding: 0.1em 0.7em;\n        background-color: #369;\n        line-height: 1em;\n        position: relative;\n        left: -1px;\n        top: -1px;\n      }\n      .selected { background-color: #EEE; color: #369; }\n    "]
      }).Class({
        constructor: function constructor() {
          this.title = 'Tour of Heroes';
          this.selectedHero = {};
          this.heroes = HEROES;

          this.onSelect = function (hero) {
            this.selectedHero = hero;
          };
        }
      }));

      _export("AppComponent", AppComponent);
    }
  };
});