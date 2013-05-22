// Ensure CM Namespace
if (typeof(game) == 'undefined') game = {};

game.you = (function(window, document, $, undefined){
  // Private

  // Public
  return {
	hp: 100,

	shield: false,

	updateHP: function(val){
		game.you.hp += val;
	}
  };





})(window, document, jQuery);