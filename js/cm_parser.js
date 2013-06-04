// Ensure CM Namespace
if (typeof(game) == 'undefined') game = {};

game.parser = (function(window, document, $, undefined){
  // Private
  var $doc = $(document), $parser = $doc.find('#parser'), cmds = {
    console: function(){
      return 'Not meant for in game use. Could lead to unforseen consequences.';
    },
    exits: function(){
      return game.location.exits();
    },
    exit: function(){},
    get: function(){},
    help: function(){},
    look: function(){
      game.location.look();
    },
    use: function(){},
    say: function(){}
  };

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
        cmds[input[0]]();
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
      for(var key in cmds) {
        game.parser.commands.push(key);
      }
      console.log($parser);
      $parser.on('keypress', parserHandler);
    },

    commands: []

  };





})(window, document, jQuery);