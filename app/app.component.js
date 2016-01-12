import {Hero,HeroService} from './heros/hero.service.js';
import {HeroDetailComponent} from './heros/hero-detail.component.js';

  var AppComponent = ng.core
  .Component({
    selector: 'my-app',
    templateUrl: 'build/heros/hero-list.template.html',
    styleUrls: ['build/heros/hero-list.style.css'],
    providers: [HeroService],
    directives: [ng.router.ROUTER_DIRECTIVES]
  })
  .Class({
    constructor: [HeroService,ng.router.Router,function(heroService,_router) {
      this.title = 'Heroes Navigation';
      this.selectedHero = {};
      this.heroes = heroService.getHeros();
      this._router = _router;
      this.onSelect = function(hero) {
        this.selectedHero = hero;
        console.log(hero);
        this._router.navigate('HeroDetail',{id: hero.id});
      }
    }]
  });
  AppComponent = ng.router.RouteConfig([
    {path:'heros/:id', name:'HeroDetail', component:HeroDetailComponent}
  ])(AppComponent)
export {AppComponent};
