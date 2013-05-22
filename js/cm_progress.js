// Ensure CM Namespace
if (typeof(CM) == 'undefined') CM = {};

CM.progress = (function(window, document, $, undefined){
  // Private

  // Public
  return {
	points: 0,

	pointsPerSecond: 1,

	updatePoints: function(diff) {
		CM.progress.points += diff;
	},

	cashOwned: 0,

	day: 0
  };





})(window, document, jQuery);