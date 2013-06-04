// Ensure CM Namespace
if (typeof(game) == 'undefined') game = {};

game.parser = (function(window, document, $, undefined){
  // Private
  var $doc = $(document), $parser = $doc.find('#parser');

  function parserHandler(e) {
    if(e.keyCode === 13) {
      processParser();
    }
  }

  function processParser() {
    
  }
  // Public
  return {
    init: function(){
      console.log($parser);
      $parser.on('keypress', parserHandler);
    }

  };





})(window, document, jQuery);