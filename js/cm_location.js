// Ensure CM Namespace
if (typeof(game) == 'undefined') game = {};

game.location = (function(window, document, $, undefined){
	// Private

	var examine = function(selector) {
		var listed = c_location[selector.toLowerCase()];
		console.group(selector);
		for(var i = 0, len = listed.length, description; i < len; i++) {
				console.group(listed[i]['title']);
					if(selector === "Exits") {
						description = (listed[i].enabled) ? listed[i].desc.enabled : listed[i].desc.disabled;
					} else {
						description = listed[i].desc;
					}
					console.log(description);
				console.groupEnd();
		}
		console.groupEnd();
	};

	var loc_list = {
		day0: {
			home_living_room: {
				title: 'Home - Living Room',
				exits: [
					{
						enabled: false,
						title: 'Subway',
						desc: {
							disabled: "You're late for work, but you can't leave without washing up. You're going to need your  metrocard and keys before you leave, too. ",
							enabled: "You'd better get to the subway - your boss will kill you if you're late again."
						}
				},
				{
					enabled: true,
					title: 'Bathroom',
					desc: {
						enabled: "You haven't cleaned it in weeks."
					}
				}
			],
				items: [
					{
						title: 'house keys',
						canGrab: true,
						weight: 1,
						owned: false,
						desc: "Your house keys. It'd be a bad idea to leave without them.",
						use: function(){
							console.log('used!');
						}
					}
				],
				mobs: false
			}
		}
	};
	var c_location = loc_list['day'+game.progress.day]['home_living_room'];

	// Public
	return {
		current_location: c_location['title'],

		look: function() {
			examine('Items');
			game.location.exits();
		},

		exits: function() {
			examine('Exits');
		}
	};





})(window, document, jQuery);