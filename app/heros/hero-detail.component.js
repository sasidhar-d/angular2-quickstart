import {HeroService} from './hero.service.js';

let HeroDetailComponent = ng.core
.Component({
  selector: 'my-hero-detail',
  templateUrl: './build/heros/hero-detail.template.html',
  providers: [HeroService,ng.router.RouteParams,ng.router.Router]
}).Class({
  constructor: [HeroService,ng.router.Router,ng.router.RouteParams,function(_service,_router,_routeParams) {
    this._service = _service;
    this._routeParams = _routeParams;
    this._router = _router;
  }],
  ngOnInit: function(){
    let id = this._routeParams.get('id');
    this.hero = this._service.getHero(id);
  }
});

export {HeroDetailComponent};
