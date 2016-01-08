'use strict';

System.register(['./hero.js'], function (_export, _context) {
    var Hero;
    return {
        setters: [function (_heroJs) {
            Hero = _heroJs.Hero;
        }],
        execute: function () {
            app.HeroDetailComponent = ng.core.Component({
                selector: 'my-hero-detail',
                template: '<div *ngIf="hero">\n        <h2>{{hero.name}} details!</h2>\n        <div><label>id: </label>{{hero.id}}</div>\n        <div>\n        \t\t<label>name: </label>\n        \t\t<div><input [(ngModel)]="hero.name" placeholder="name"></div>\n        </div>\n      </div>\n      '
            }).Class({
                constructor: function constructor() {
                    this.hero = {};
                }
            });
        }
    };
});
//# sourceMappingURL=hero-detail.component.js.map
