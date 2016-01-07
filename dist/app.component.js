"use strict";

var _hero = require("./hero.js");

(function (app) {

  var HEROES = [new _hero.Hero(11, "Mr. Nice"), new _hero.Hero(12, "Narco"), new _hero.Hero(13, "Bombasto"), new _hero.Hero(14, "Celeritas"), new _hero.Hero(15, "Magneta"), new _hero.Hero(16, "RubberMan"), new _hero.Hero(17, "Dynama"), new _hero.Hero(18, "Dr IQ"), new _hero.Hero(19, "Magma"), new _hero.Hero(20, "Tornado")];

  app.AppComponent = ng.core.Component({
    selector: 'my-app',
    template: "<h1>{{title}}</h1>\n      <h2>My Heroes</h2>\n      <ul class=\"heroes\">\n          <li *ngFor=\"#hero of heroes\" [class.selected]=\"hero === selectedHero\" (click)=\"onSelect(hero)\">\n            <span class=\"badge\">{{hero.id}}</span> {{hero.name}}\n          </li>\n      </ul>\n      <div *ngIf=\"selectedHero\">\n        <h2>{{selectedHero.name}} details!</h2>\n        <div><label>id: </label>{{selectedHero.id}}</div>\n        <div>\n        \t\t<label>name: </label>\n        \t\t<div><input [(ngModel)]=\"selectedHero.name\" placeholder=\"name\"></div>\n        </div>\n      </div>\n      ",
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

  });
})(window.app || (window.app = {}));