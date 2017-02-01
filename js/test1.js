alert("1");

define(function(require, exports, module) {
	var ball = {
		speake : function() {
			alert(456);
		}
	};

	ball.cry = function() {
		console.info("ball crying..");
	};

	exports.speake = ball.speake;

	exports.smile = require("test2.js").smile;

	exports.cry = ball.cry;

});