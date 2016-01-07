(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
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

},{"./hero.js":2}],2:[function(require,module,exports){
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

},{}]},{},[1])
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyaWZ5L25vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJhcHAvYXBwLmNvbXBvbmVudC5qcyIsImFwcC9oZXJvLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOzs7OztBQ0dBLENBQUMsVUFBUyxHQUFHLEVBQUU7O0FBRWIsTUFBSSxNQUFNLEdBQUcsQ0FBRSxVQUpULElBQUksQ0FJYyxFQUFFLEVBQUcsVUFBVSxDQUFDLEVBQ3hCLFVBTFYsSUFBSSxDQUtlLEVBQUUsRUFBRyxPQUFPLENBQUMsRUFDdEIsVUFOVixJQUFJLENBTWUsRUFBRSxFQUFHLFVBQVUsQ0FBQyxFQUN6QixVQVBWLElBQUksQ0FPZSxFQUFFLEVBQUcsV0FBVyxDQUFDLEVBQzFCLFVBUlYsSUFBSSxDQVFlLEVBQUUsRUFBRyxTQUFTLENBQUMsRUFDeEIsVUFUVixJQUFJLENBU2UsRUFBRSxFQUFHLFdBQVcsQ0FBQyxFQUMxQixVQVZWLElBQUksQ0FVZSxFQUFFLEVBQUcsUUFBUSxDQUFDLEVBQ3ZCLFVBWFYsSUFBSSxDQVdlLEVBQUUsRUFBRyxPQUFPLENBQUMsRUFDdEIsVUFaVixJQUFJLENBWWUsRUFBRSxFQUFHLE9BQU8sQ0FBQyxFQUN0QixVQWJWLElBQUksQ0FhZSxFQUFFLEVBQUcsU0FBUyxDQUFDLENBQUMsQ0FBQzs7QUFFMUMsS0FBRyxDQUFDLFlBQVksR0FBRyxFQUFFLENBQUMsSUFBSSxDQUN2QixTQUFTLENBQUM7QUFDVCxZQUFRLEVBQUUsUUFBUTtBQUNsQixZQUFRLCtsQkFlUDtBQUNELFVBQU0sRUFBQyx1akJBZVA7R0FDRCxDQUFDLENBQ0QsS0FBSyxDQUFDO0FBQ0wsZUFBVyxFQUFFLHVCQUFXO0FBQ3ZCLFVBQUksQ0FBQyxLQUFLLEdBQUcsZ0JBQWdCLENBQUM7QUFDOUIsVUFBSSxDQUFDLFlBQVksR0FBRyxFQUFFLENBQUM7QUFDdEIsVUFBSSxDQUFDLE1BQU0sR0FBRyxNQUFNLENBQUM7QUFDckIsVUFBSSxDQUFDLFFBQVEsR0FBRyxVQUFTLElBQUksRUFBRTtBQUM3QixZQUFJLENBQUMsWUFBWSxHQUFHLElBQUksQ0FBQztPQUMxQixDQUFBO0tBQ0Y7O0dBRUYsQ0FBQyxDQUFDO0NBQ04sQ0FBQSxDQUFFLE1BQU0sQ0FBQyxHQUFHLEtBQUssTUFBTSxDQUFDLEdBQUcsR0FBRyxFQUFFLENBQUEsQUFBQyxDQUFDLENBQUM7Ozs7Ozs7Ozs7O0lDOUR0QixJQUFJLFdBQUosSUFBSSxHQUNoQixTQURZLElBQUksQ0FDSCxFQUFFLEVBQUcsSUFBSSxFQUFFO3VCQURaLElBQUk7O0FBRWYsS0FBSSxDQUFDLEVBQUUsR0FBRyxFQUFFLENBQUM7QUFDYixLQUFJLENBQUMsSUFBSSxHQUFHLElBQUksQ0FBQztDQUNqQiIsImZpbGUiOiJnZW5lcmF0ZWQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlc0NvbnRlbnQiOlsiKGZ1bmN0aW9uIGUodCxuLHIpe2Z1bmN0aW9uIHMobyx1KXtpZighbltvXSl7aWYoIXRbb10pe3ZhciBhPXR5cGVvZiByZXF1aXJlPT1cImZ1bmN0aW9uXCImJnJlcXVpcmU7aWYoIXUmJmEpcmV0dXJuIGEobywhMCk7aWYoaSlyZXR1cm4gaShvLCEwKTt2YXIgZj1uZXcgRXJyb3IoXCJDYW5ub3QgZmluZCBtb2R1bGUgJ1wiK28rXCInXCIpO3Rocm93IGYuY29kZT1cIk1PRFVMRV9OT1RfRk9VTkRcIixmfXZhciBsPW5bb109e2V4cG9ydHM6e319O3Rbb11bMF0uY2FsbChsLmV4cG9ydHMsZnVuY3Rpb24oZSl7dmFyIG49dFtvXVsxXVtlXTtyZXR1cm4gcyhuP246ZSl9LGwsbC5leHBvcnRzLGUsdCxuLHIpfXJldHVybiBuW29dLmV4cG9ydHN9dmFyIGk9dHlwZW9mIHJlcXVpcmU9PVwiZnVuY3Rpb25cIiYmcmVxdWlyZTtmb3IodmFyIG89MDtvPHIubGVuZ3RoO28rKylzKHJbb10pO3JldHVybiBzfSkiLCJcbmltcG9ydCB7SGVyb30gZnJvbSBcIi4vaGVyby5qc1wiO1xuXG4oZnVuY3Rpb24oYXBwKSB7XG5cbiAgdmFyIEhFUk9FUyA9IFsgbmV3IEhlcm8oMTEgLCBcIk1yLiBOaWNlXCIpLFxuICAgICAgICAgICAgICAgICAgbmV3IEhlcm8oMTIgLCBcIk5hcmNvXCIpLFxuICAgICAgICAgICAgICAgICAgbmV3IEhlcm8oMTMgLCBcIkJvbWJhc3RvXCIpLFxuICAgICAgICAgICAgICAgICAgbmV3IEhlcm8oMTQgLCBcIkNlbGVyaXRhc1wiKSxcbiAgICAgICAgICAgICAgICAgIG5ldyBIZXJvKDE1ICwgXCJNYWduZXRhXCIpLFxuICAgICAgICAgICAgICAgICAgbmV3IEhlcm8oMTYgLCBcIlJ1YmJlck1hblwiKSxcbiAgICAgICAgICAgICAgICAgIG5ldyBIZXJvKDE3ICwgXCJEeW5hbWFcIiksXG4gICAgICAgICAgICAgICAgICBuZXcgSGVybygxOCAsIFwiRHIgSVFcIiksXG4gICAgICAgICAgICAgICAgICBuZXcgSGVybygxOSAsIFwiTWFnbWFcIiksXG4gICAgICAgICAgICAgICAgICBuZXcgSGVybygyMCAsIFwiVG9ybmFkb1wiKV07XG5cbiAgYXBwLkFwcENvbXBvbmVudCA9IG5nLmNvcmVcbiAgICAuQ29tcG9uZW50KHtcbiAgICAgIHNlbGVjdG9yOiAnbXktYXBwJyxcbiAgICAgIHRlbXBsYXRlOiBgPGgxPnt7dGl0bGV9fTwvaDE+XG4gICAgICA8aDI+TXkgSGVyb2VzPC9oMj5cbiAgICAgIDx1bCBjbGFzcz1cImhlcm9lc1wiPlxuICAgICAgICAgIDxsaSAqbmdGb3I9XCIjaGVybyBvZiBoZXJvZXNcIiBbY2xhc3Muc2VsZWN0ZWRdPVwiaGVybyA9PT0gc2VsZWN0ZWRIZXJvXCIgKGNsaWNrKT1cIm9uU2VsZWN0KGhlcm8pXCI+XG4gICAgICAgICAgICA8c3BhbiBjbGFzcz1cImJhZGdlXCI+e3toZXJvLmlkfX08L3NwYW4+IHt7aGVyby5uYW1lfX1cbiAgICAgICAgICA8L2xpPlxuICAgICAgPC91bD5cbiAgICAgIDxkaXYgKm5nSWY9XCJzZWxlY3RlZEhlcm9cIj5cbiAgICAgICAgPGgyPnt7c2VsZWN0ZWRIZXJvLm5hbWV9fSBkZXRhaWxzITwvaDI+XG4gICAgICAgIDxkaXY+PGxhYmVsPmlkOiA8L2xhYmVsPnt7c2VsZWN0ZWRIZXJvLmlkfX08L2Rpdj5cbiAgICAgICAgPGRpdj5cbiAgICAgICAgXHRcdDxsYWJlbD5uYW1lOiA8L2xhYmVsPlxuICAgICAgICBcdFx0PGRpdj48aW5wdXQgWyhuZ01vZGVsKV09XCJzZWxlY3RlZEhlcm8ubmFtZVwiIHBsYWNlaG9sZGVyPVwibmFtZVwiPjwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgICAgYCxcbiAgICAgIHN0eWxlczpbYFxuICAgICAgICAuaGVyb2VzIHtsaXN0LXN0eWxlLXR5cGU6IG5vbmU7IG1hcmdpbi1sZWZ0OiAxZW07IHBhZGRpbmc6IDA7IHdpZHRoOiAxMGVtO31cbiAgICAgIC5oZXJvZXMgbGkgeyBjdXJzb3I6IHBvaW50ZXI7IHBvc2l0aW9uOiByZWxhdGl2ZTsgbGVmdDogMDsgdHJhbnNpdGlvbjogYWxsIDAuMnMgZWFzZTsgfVxuICAgICAgLmhlcm9lcyBsaTpob3ZlciB7Y29sb3I6ICMzNjk7IGJhY2tncm91bmQtY29sb3I6ICNFRUU7IGxlZnQ6IC4yZW07fVxuICAgICAgLmhlcm9lcyAuYmFkZ2Uge1xuICAgICAgICBmb250LXNpemU6IHNtYWxsO1xuICAgICAgICBjb2xvcjogd2hpdGU7XG4gICAgICAgIHBhZGRpbmc6IDAuMWVtIDAuN2VtO1xuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMzY5O1xuICAgICAgICBsaW5lLWhlaWdodDogMWVtO1xuICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgICAgIGxlZnQ6IC0xcHg7XG4gICAgICAgIHRvcDogLTFweDtcbiAgICAgIH1cbiAgICAgIC5zZWxlY3RlZCB7IGJhY2tncm91bmQtY29sb3I6ICNFRUU7IGNvbG9yOiAjMzY5OyB9XG4gICAgYF1cbiAgICB9KVxuICAgIC5DbGFzcyh7XG4gICAgICBjb25zdHJ1Y3RvcjogZnVuY3Rpb24oKSB7XG4gICAgICBcdHRoaXMudGl0bGUgPSAnVG91ciBvZiBIZXJvZXMnO1xuICAgICAgXHR0aGlzLnNlbGVjdGVkSGVybyA9IHt9O1xuICAgICAgICB0aGlzLmhlcm9lcyA9IEhFUk9FUztcbiAgICAgICAgdGhpcy5vblNlbGVjdCA9IGZ1bmN0aW9uKGhlcm8pIHtcbiAgICAgICAgICB0aGlzLnNlbGVjdGVkSGVybyA9IGhlcm87XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgIH0pO1xufSkod2luZG93LmFwcCB8fCAod2luZG93LmFwcCA9IHt9KSk7IiwiXG5cdGV4cG9ydCBjbGFzcyBIZXJvIHtcblx0XHRjb25zdHJ1Y3RvciggaWQgLCBuYW1lKSB7XG5cdFx0XHR0aGlzLmlkID0gaWQ7XG5cdFx0XHR0aGlzLm5hbWUgPSBuYW1lO1xuXHRcdH1cblx0fVxuIl19
