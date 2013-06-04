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
    var input = $parser.val().split(' '), commands = game.parser.commands;
    if(input[0] !== '') {
      clearParser();
      console.log(input);
      console.log(commands);
      for(var i = 0, len = commands.length; i < len; i++) {
       // if(input[0] === ga)
       if(input[0] === commands[i]) {
        console.log(commands[i]);
       }
      }
    } else {
      error();
    }

  }

  function clearParser(){
    $parser.val('');
  }

  function error() {
    console.log("Type something, will ya? We're payinf for this stuff");
  }
  // Public
  return {
    init: function(){
      console.log($parser);
      $parser.on('keypress', parserHandler);
    },

    commands: ['console', 'exits', 'exit', 'get', 'help', 'look', 'use', 'talk']

  };





})(window, document, jQuery);