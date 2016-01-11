'use strict';

System.register([], function (_export, _context) {
  var HeroDetail;
  return {
    setters: [],
    execute: function () {
      _export('HeroDetail', HeroDetail = ng.core.Component({
        selector: 'my-hero-detail',
        template: '<div *ngIf="hero">\n  <h2>{{hero.name}} details!</h2>\n  <div><label>id: </label>{{hero.id}}</div>\n  <div>\n  <label>name: </label>\n  <div><input [(ngModel)]="hero.name" placeholder="name"></div>\n  </div>\n  </div>\n  '
      }).Class({
        constructor: function constructor() {
          this.hero = {};
        }
      }));

      _export('HeroDetail', HeroDetail);
    }
  };
});
//# sourceMappingURL=hero-detail.component.js.map
