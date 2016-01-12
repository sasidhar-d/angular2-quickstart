(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.AppComponent = undefined;

var _heroService = require('./heros/hero.service.js');

var _heroDetailComponent = require('./heros/hero-detail.component.js');

var AppComponent = ng.core.Component({
  selector: 'my-app',
  templateUrl: 'build/heros/hero-list.template.html',
  styleUrls: ['build/heros/hero-list.style.css'],
  providers: [_heroService.HeroService],
  directives: [ng.router.ROUTER_DIRECTIVES]
}).Class({
  constructor: [_heroService.HeroService, ng.router.Router, function (heroService, _router) {
    this.title = 'Heroes Navigation';
    this.selectedHero = {};
    this.heroes = heroService.getHeros();
    this._router = _router;
    this.onSelect = function (hero) {
      this.selectedHero = hero;
      console.log(hero);
      this._router.navigate('HeroDetail', { id: hero.id });
    };
  }]
});
exports.AppComponent = AppComponent = ng.router.RouteConfig([{ path: 'heros/:id', name: 'HeroDetail', component: _heroDetailComponent.HeroDetailComponent }])(AppComponent);
exports.AppComponent = AppComponent;

},{"./heros/hero-detail.component.js":3,"./heros/hero.service.js":4}],2:[function(require,module,exports){
'use strict';

var _appComponent = require('./app.component.js');

ng.platform.browser.bootstrap(_appComponent.AppComponent, [ng.router.ROUTER_PROVIDERS]);

},{"./app.component.js":1}],3:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.HeroDetailComponent = undefined;

var _heroService = require('./hero.service.js');

var HeroDetailComponent = ng.core.Component({
  selector: 'my-hero-detail',
  templateUrl: './build/heros/hero-detail.template.html',
  providers: [_heroService.HeroService, ng.router.RouteParams, ng.router.Router]
}).Class({
  constructor: [_heroService.HeroService, ng.router.Router, ng.router.RouteParams, function (_service, _router, _routeParams) {
    this._service = _service;
    this._routeParams = _routeParams;
    this._router = _router;
  }],
  ngOnInit: function ngOnInit() {
    var id = this._routeParams.get('id');
    this.hero = this._service.getHero(id);
  }
});

exports.HeroDetailComponent = HeroDetailComponent;

},{"./hero.service.js":4}],4:[function(require,module,exports){
"use strict";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

Object.defineProperty(exports, "__esModule", {
  value: true
});

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Hero = exports.Hero = function Hero(id, name) {
  _classCallCheck(this, Hero);

  this.id = id;
  this.name = name;
};

var heros = [new Hero(11, "Mr. Nice"), new Hero(12, "Narco"), new Hero(13, "Bombasto"), new Hero(14, "Celeritas"), new Hero(15, "Magneta"), new Hero(16, "RubberMan"), new Hero(17, "Dynama"), new Hero(18, "Dr IQ"), new Hero(19, "Magma"), new Hero(20, "Tornado")];

var HeroService = exports.HeroService = function () {
  function HeroService() {
    _classCallCheck(this, HeroService);
  }

  _createClass(HeroService, [{
    key: "getHeros",
    value: function getHeros() {
      return heros;
    }
  }, {
    key: "getHero",
    value: function getHero(id) {
      return heros.filter(function (h) {
        return h.id === +id;
      })[0];
    }
  }]);

  return HeroService;
}();

},{}]},{},[2])


//# sourceMappingURL=build.js.map
