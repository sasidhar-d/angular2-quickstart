'use strict';

System.register(['./hero.js', './hero-detail.component.js'], function (_export, _context) {
  var Hero, HeroDetail, HEROES, AppComponent;
  return {
    setters: [function (_heroJs) {
      Hero = _heroJs.Hero;
    }, function (_heroDetailComponentJs) {
      HeroDetail = _heroDetailComponentJs.HeroDetail;
    }],
    execute: function () {
      HEROES = [new Hero(11, "Mr. Nice"), new Hero(12, "Narco"), new Hero(13, "Bombasto"), new Hero(14, "Celeritas"), new Hero(15, "Magneta"), new Hero(16, "RubberMan"), new Hero(17, "Dynama"), new Hero(18, "Dr IQ"), new Hero(19, "Magma"), new Hero(20, "Tornado")];

      _export('AppComponent', AppComponent = ng.core.Class({
        constructor: function constructor() {
          this.title = 'Tour of Heroes';
          this.selectedHero = {};
          this.heroes = HEROES;

          this.onSelect = function (hero) {
            this.selectedHero = hero;
          };
        }
      }));

      _export('AppComponent', AppComponent = ng.core.Component({
        selector: 'my-app',
        templateUrl: './dest/app.template.html',
        styleUrls: ['./dest/app.css']
      })(AppComponent));

      _export('AppComponent', AppComponent);
    }
  };
});
//# sourceMappingURL=app.component.js.map
