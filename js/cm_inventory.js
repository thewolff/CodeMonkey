// Ensure CM Namespace
if (typeof(game) == 'undefined') game = {};

game.inventory = (function(window, document, $, undefined){
  // Private
  var inv_items = [];

  function Inv_Item(attrs) {
    var that = this;
      _.each(attrs, function(v, k, l){
        that[k] = v;
      });

  }
  // Public
  return {
    youHave: inv_items,

    addToInv: function(attrs){
      var tmp_obj = new Inv_Item(attrs);
      game.events.notify('item_added', tmp_obj);
      inv_items.push(tmp_obj);
    },

    removeItem: function(name){
      for(var i =0, len = inv_items.length; i < len; i++){
        if(inv_items[i].name === name) {
          inv_items = inv_items.splice(i, 1);
          game.events.notify('item_removed', inv_items[i]);
          break;
        }
      }
      //console.log(_.indexOf(inv_items, ));
      //inv_items = _.without(inv_items, _.where(inv_items, {name:'foo'}) );
    }
  };





})(window, document, jQuery);