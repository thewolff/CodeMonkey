// Ensure CM Namespace
if (typeof(game) == 'undefined') game = {};

game.events = (function(window, document, $, undefined){
  // Private
  var $doc = $(document);
  // Public
  return {
    notify: function(event_name, data_arr) {
      console.log(event_name, data_arr);
       $doc.trigger(event_name, [data_arr]);

    },

    subscribe: function(event_name, handler) {
       $doc.on(event_name, handler);
    },

    unsubscribe: function(event_name, handler) {
       $doc.off(event_name, handler);

    }

  };





})(window, document, jQuery);