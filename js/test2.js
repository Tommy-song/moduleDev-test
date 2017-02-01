alert("2");

define(function(require, exports, module) {
	var ball = {
		smile : function() {
			alert("test2-ball.smile");
		}
	};

	exports.smile = ball.smile;
});