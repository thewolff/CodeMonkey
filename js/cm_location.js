// Ensure CM Namespace
if (typeof(game) == 'undefined') game = {};

game.location = (function(window, document, $, undefined){
	// Private


	var loc_list = {
		day0: {
			home_living_room: {
				title: 'Home - Living Room',
				exits: [
					{
						enabled: false,
						title: 'Subway',
						desc: {
							disabled: "It might help to have your metrocard and keys, too.You're late for work, but you can't leave without washing up. It might help to have your metrocard and keys, too.",
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
				grabbables: [
					{
						name: 'house keys',
						weight: 1,
						owned: false,
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
			console.log('you looked!');
		},

		exits: function() {
			console.group('Exits');
			var listed_exits = c_location.exits;
			for(var i = 0, len = listed_exits.length, description, tmp_exit_arr = [], tmp_exit = {}; i < len; i++){
				console.group(listed_exits[i]['title']);
				description = (listed_exits[i].enabled) ? listed_exits[i].desc.enabled : listed_exits[i].desc.disabled;
				console.log('%c%s', "color:#00CC00; background:black; font-size: 14pt", description);
				console.groupEnd();
				tmp_exit = {
					title: listed_exits[i]['title'],
					description: description
				}
				tmp_exit_arr.push(tmp_exit);
			}
			console.groupEnd();
			return {"Current Exits": tmp_exit_arr};
		}
	};





})(window, document, jQuery);