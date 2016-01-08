"use strict";

System.register([], function (_export, _context) {
	var Hero;

	function _classCallCheck(instance, Constructor) {
		if (!(instance instanceof Constructor)) {
			throw new TypeError("Cannot call a class as a function");
		}
	}

	return {
		setters: [],
		execute: function () {
			_export("Hero", Hero = function Hero(id, name) {
				_classCallCheck(this, Hero);

				this.id = id;
				this.name = name;
			});

			_export("Hero", Hero);
		}
	};
});