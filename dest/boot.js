'use strict';

System.register(['./app.component.js'], function (_export, _context) {
  var AppComponent;
  return {
    setters: [function (_appComponentJs) {
      AppComponent = _appComponentJs.AppComponent;
    }],
    execute: function () {
      console.log('Content');
      console.log('top');
      ng.platform.browser.bootstrap(AppComponent);
      console.log('Here');
    }
  };
});