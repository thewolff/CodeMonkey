_.mixin({
  'deepIndex': function (array, item) {
    var result = -1;
    _.some(array, function (value, index) {
    	console.log(value, index)
      if (_.isEqual(value, item)) {
        result = index;
        return true;
      }
    });
    return result;
  }
});

$(document).ready(function(){
	game.init();
});

