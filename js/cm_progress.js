// Ensure CM Namespace
if (typeof(game) == 'undefined') game = {};

game.progress = (function(window, document, $, undefined){
  // Private

  // Public
  return {
	points: 0,

	pointsPerSecond: 1,

	updatePoints: function(diff) {
		game.progress.points += diff;
	},

	cashOwned: 0,

	day: 0
  };





})(window, document, jQuery);