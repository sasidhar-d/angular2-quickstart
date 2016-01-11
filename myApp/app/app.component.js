import {Hero} from './hero.js';
// import {RouteConfig, ROUTER_DIRECTIVES} from 'router';
import {HeroDetail} from './hero-detail.component.js';
import {HeroName} from './heroName.directive.js'

var HEROES = [ new Hero(11 , "Mr. Nice"),
  new Hero(12 , "Narco"),
  new Hero(13 , "Bombasto"),
  new Hero(14 , "Celeritas"),
  new Hero(15 , "Magneta"),
  new Hero(16 , "RubberMan"),
  new Hero(17 , "Dynama"),
  new Hero(18 , "Dr IQ"),
  new Hero(19 , "Magma"),
  new Hero(20 , "Tornado")];

  var AppComponent = ng.core.Class({
    constructor: function() {
      this.title = 'Tour of Heroes';
      this.selectedHero = {};
      this.heroes = HEROES;
      this.onSelect = function(hero) {
        this.selectedHero = hero;
      }
    }
  });

  AppComponent = ng.core.Component({
    selector: 'my-app',
    templateUrl: './dest/app.template.html',
    styleUrls: ['./dest/app.css'],
    directives: [HeroName]
  })(AppComponent);

  // AppComponent = ng.router.RouteConfig([
  //   {path:'/heros' , name:'HeroDetail', component:HeroDetail}
  // ])(AppComponent);
export {AppComponent};
