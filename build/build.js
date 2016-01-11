(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.AppComponent = undefined;

var _hero = require("./hero.js");

var HEROES = [new _hero.Hero(11, "Mr. Nice"), new _hero.Hero(12, "Narco"), new _hero.Hero(13, "Bombasto"), new _hero.Hero(14, "Celeritas"), new _hero.Hero(15, "Magneta"), new _hero.Hero(16, "RubberMan"), new _hero.Hero(17, "Dynama"), new _hero.Hero(18, "Dr IQ"), new _hero.Hero(19, "Magma"), new _hero.Hero(20, "Tornado")];

// console.log('Line 14');

var AppComponent = exports.AppComponent = ng.core.Component({
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

});

},{"./hero.js":3}],2:[function(require,module,exports){
'use strict';

var _appComponent = require('./app.component.js');

ng.platform.browser.bootstrap(_appComponent.AppComponent);

},{"./app.component.js":1}],3:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
	value: true
});

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Hero = exports.Hero = function Hero(id, name) {
	_classCallCheck(this, Hero);

	this.id = id;
	this.name = name;
};

},{}]},{},[2])


//# sourceMappingURL=build.js.map
