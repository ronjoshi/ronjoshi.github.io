function random(num2, num1) {

	var x = Math.floor(Math.random() * num2);
	x += 1;

	if(num1 && num1 > 1) {

		x += num1 - 1;

	}

	return x;
}	/* Returns a random value ex. (1, 5) returns value from 1 to 5 */


var Map = {

	lvl: function(n, r) {
		var randm;
		var level;
		if(n != 'tutorial') {
			level = Map.levels()["level" + n];
			 randm = random(level.length) - 1;
		} else {
			level = Map.levels().tutorial;
			if(r) {
				randm = r - 1;
			} else {
				randm = 0;
			}
		}
		console.log('map number ' + randm + 1);
		return level[randm];
	},


	levels: function() {

		var maps = {

			tutorial: [

				{
					startPos: [1, 2],
					bumpers: [[2, 2, 'right', 2]],
					delay: 6000,
					portals: [],
					endPos: [4, 2, 2]
				},

				{
					startPos: [1, 2],
					bumpers: [[2, 2, 'left', 2]],
					delay: 6000,
					portals: [],
					endPos: [2, 2, 2]
				},

				{
					startPos: [3, 2],
					bumpers: [[2, 2, 'right', 2]],
					delay: 6000,
					portals: [],
					endPos: [2, 2, 2]
				},

				{
					startPos: [1, 1],
					bumpers: [[1, 2, 'left', 2], [3, 2, 'right', 2]],
					delay: 3000,
					portals: [],
					endPos: [1, 3, 2]
				}

			],

			level1: [

				{
					startPos: [1, 1],
					bumpers: [[1, 2, 'left', 2], [3, 2, 'right', 2]],
					delay: 1500,
					portals: [],
					endPos: [1, 3, 2]
				},

				{
					startPos: [1, 2],
					bumpers: [[2, 2, 'right', 2], [1, 2, 'left', 1]],
					delay: 1500,
					portals: [],
					endPos: [1, 1, 2]
				},

				{
					startPos: [3, 1],
					bumpers: [[1, 2, 'right', 2], [3, 2, 'right', 2]],
					delay: 1500,
					portals: [],
					endPos: [1, 3, 2]
				},

				{
					startPos: [1, 3],
					bumpers: [[3, 1, 'right', 1], [1, 1, 'left', 2]],
					delay: 1500,
					portals: [],
					endPos: [1, 1, 1]
				},

				{
					startPos: [1, 2],
					bumpers: [[2, 3, 'right', 3], [1, 3, 'left', 1]],
					delay: 1500,
					portals: [],
					endPos: [1, 1, 3]
				},

				{
					startPos: [4, 2],
					bumpers: [[3, 2, 'left', 3], [3, 3, 'right', 1]],
					delay: 1500,
					portals: [],
					endPos: [4, 3, 3]
				},

				{
					startPos: [4, 1],
					bumpers: [[3, 1, 'left', 3], [3, 3, 'right', 2]],
					delay: 1500,
					portals: [],
					endPos: [4, 3, 3]
				},

				{
					startPos: [1, 3],
					bumpers: [[3, 2, 'right', 2], [1, 2, 'right', 2]],
					delay: 1500,
					portals: [],
					endPos: [3, 1, 2]
				},

				{
					startPos: [1, 2],
					bumpers: [[2, 3, 'right', 3], [1, 3, 'left', 1]],
					delay: 1500,
					portals: [],
					endPos: [1, 1, 3]
				},

				{
					startPos: [1, 3],
					bumpers: [[3, 2, 'right', 2], [2, 2, 'left', 1]],
					delay: 1500,
					portals: [],
					endPos: [1, 2, 2]
				},

				{
					startPos: [4, 3],
					bumpers: [[3, 3, 'right', 3], [3, 1, 'left', 2]],
					delay: 1500,
					portals: [],
					endPos: [4, 1, 3]
				},

				{
					startPos: [2, 2],
					bumpers: [[2, 2, 'right', 2], [2, 3, 'left', 1]],
					delay: 1500,
					portals: [],
					endPos: [2, 3, 2]
				},

				{
					startPos: [1, 1],
					bumpers: [[1, 3, 'left', 3], [3, 3, 'left', 2]],
					delay: 1500,
					portals: [],
					endPos: [3, 3, 1]
				},

				{
					startPos: [3, 1],
					bumpers: [[1, 1, 'right', 3], [3, 1, 'right', 2]],
					delay: 1500,
					portals: [],
					endPos: [1, 3, 1]
				},

				{
					startPos: [3, 1],
					bumpers: [[1, 1, 'right', 3], [3, 1, 'left', 2]],
					delay: 1500,
					portals: [],
					endPos: [3, 3, 3]
				}

			],

			level2: [

				{
					startPos: [1, 3],
					bumpers: [[3, 2, 'right', 2], [1, 2, 'left', 2], [3, 3, 'right', 0, false]],
					delay: 2000,
					portals: [],
					endPos: [1, 1, 2]
				},

				{
					startPos: [1, 1],
					bumpers: [[1, 2, 'left', 2], [3, 2, 'right', 2], [1, 3, 'left', 0, false]],
					delay: 2000,
					portals: [],
					endPos: [1, 3, 2]
				},

				{
					startPos: [2, 2],
					bumpers: [[1, 2, 'right', 3], [1, 3, 'right', 1], [2, 3, 'left', 0, false]],
					delay: 2000,
					portals: [],
					endPos: [4, 3, 1]
				},

				{
					startPos: [1, 3],
					bumpers: [[3, 3, 'right', 3], [1, 3, 'right', 2], [2, 2, 'left', 0, false]],
					delay: 2000,
					portals: [],
					endPos: [3, 1, 1]
				},

				{
					startPos: [4, 1],
					bumpers: [[2, 1, 'left', 2], [2, 3, 'left', 2], [3, 2, 'right', 0, false]],
					delay: 2000,
					portals: [],
					endPos: [2, 3, 2]
				},

				{
					startPos: [3, 2],
					bumpers: [[2, 2, 'left', 2], [1, 2, 'right', 1], [3, 3, 'left', 0, false]],
					delay: 2000,
					portals: [],
					endPos: [3, 1, 2]
				},

				{
					startPos: [3, 3],
					bumpers: [[3, 1, 'left', 3], [1, 1, 'left', 2], [1, 2, 'right', 0, false]],
					delay: 2000,
					portals: [],
					endPos: [1, 1, 1]
				},

				{
					startPos: [4, 3],
					bumpers: [[2, 3, 'right', 2], [2, 1, 'left', 2], [1, 1, 'left', 1]],
					delay: 2000,
					portals: [],
					endPos: [1, 1, 1]
				},

				{
					startPos: [2, 3],
					bumpers: [[3, 3, 'left', 1], [3, 1, 'left', 2], [1, 1, 'right', 2]],
					delay: 2000,
					portals: [],
					endPos: [3, 1, 3]
				},

				{
					startPos: [1, 1],
					bumpers: [[1, 2, 'left', 2], [2, 2, 'right', 1], [2, 1, 'left', 1]],
					delay: 2000,
					portals: [],
					endPos: [4, 1, 2]
				},

				{
					startPos: [3, 1],
					bumpers: [[1, 2, 'right', 2], [3, 2, 'left', 2], [3, 3, 'left', 1]],
					delay: 2000,
					portals: [],
					endPos: [2, 3, 1]
				},

				{
					startPos: [1, 3],
					bumpers: [[3, 2, 'right', 2], [1, 2, 'right', 2], [1, 3, 'left', 1]],
					delay: 2000,
					portals: [],
					endPos: [2, 3, 3]
				},

				{
					startPos: [3, 2],
					bumpers: [[2, 2, 'right', 3], [3, 2, 'left', 1], [3, 3, 'right', 2]],
					delay: 2000,
					portals: [],
					endPos: [4, 3, 3]
				},

				{
					startPos: [1, 2],
					bumpers: [[2, 2, 'right', 2], [1, 2, 'right', 1], [1, 3, 'left', 1]],
					delay: 2000,
					portals: [],
					endPos: [2, 3, 3]
				},

				{
					startPos: [3, 1],
					bumpers: [[1, 2, 'right', 2], [3, 2, 'left', 2], [3, 3, 'left', 1]],
					delay: 2000,
					portals: [],
					endPos: [2, 3, 1]
				}

			],

			level3: [

				{
					startPos: [1, 4],
					bumpers: [[4, 3, 'right', 3], [2, 3, 'right', 2], [2, 4, 'left', 1]],
					delay: 2000,
					portals: [],
					endPos: [2, 4, 3]
				},

				{
					startPos: [4, 3],
					bumpers: [[3, 3, 'right', 3], [3, 1, 'left', 2], [1, 1, 'right', 2]],
					delay: 2000,
					portals: [],
					endPos: [3, 1, 4]
				},

				{
					startPos: [4, 2],
					bumpers: [[2, 2, 'right', 2], [2, 1, 'right', 1], [3, 1, 'left', 1]],
					delay: 2000,
					portals: [],
					endPos: [3, 3, 4]
				},

				{
					startPos: [3, 3],
					bumpers: [[3, 3, 'right', 2], [4, 3, 'right', 1], [4, 1, 'left', 2]],
					delay: 2000,
					portals: [],
					endPos: [4, 1, 4]
				},

				{
					startPos: [3, 2],
					bumpers: [[2, 1, 'right', 4], [4, 1, 'left', 2], [4, 4, 'right', 3]],
					delay: 2000,
					portals: [],
					endPos: [4, 4, 4]
				},

				{
					startPos: [4, 3],
					bumpers: [[2, 3, 'right', 2], [2, 1, 'right', 2], [4, 1, 'left', 2]],
					delay: 2000,
					portals: [],
					endPos: [3, 4, 4]
				},

				{
					startPos: [3, 4],
					bumpers: [[4, 1, 'left', 4], [2, 1, 'right', 2], [2, 3, 'right', 2]],
					delay: 2000,
					portals: [],
					endPos: [4, 3, 2]
				},

				{
					startPos: [2, 3],
					bumpers: [[2, 3, 'left', 3], [2, 1, 'left', 2], [1, 1, 'right', 1]],
					delay: 2000,
					portals: [],
					endPos: [3, 1, 4]
				},

				{
					startPos: [2, 1],
					bumpers: [[2, 1, 'right', 3], [2, 3, 'left', 2], [3, 3, 'left', 1]],
					delay: 2000,
					portals: [],
					endPos: [3, 3, 2]
				},

				{
					startPos: [1, 2],
					bumpers: [[2, 3, 'left', 3], [3, 3, 'left', 1], [3, 4, 'right', 1]],
					delay: 2000,
					portals: [],
					endPos: [4, 4, 3]
				},

				{
					startPos: [1, 4],
					bumpers: [[4, 3, 'right', 3], [2, 3, 'right', 2], [2, 4, 'right', 1]],
					delay: 2000,
					portals: [],
					endPos: [4, 4, 2]
				},

				{
					startPos: [4, 2],
					bumpers: [[2, 2, 'left', 2], [2, 4, 'right', 2], [1, 4, 'left', 1]],
					delay: 2000,
					portals: [],
					endPos: [1, 1, 4]
				},

				{
					startPos: [1, 2],
					bumpers: [[2, 2, 'right', 2], [1, 2, 'right', 1], [1, 4, 'left', 2]],
					delay: 2000,
					portals: [],
					endPos: [2, 4, 4]
				},

				{
					startPos: [2, 3],
					bumpers: [[1, 3, 'left', 4], [1, 1, 'right', 2], [3, 1, 'right', 2]],
					delay: 2000,
					portals: [],
					endPos: [1, 3, 1]
				},

				{
					startPos: [1, 3],
					bumpers: [[3, 3, 'left', 3], [4, 3, 'right', 1], [4, 1, 'left', 2]],
					delay: 2000,
					portals: [],
					endPos: [4, 1, 4]
				},

			],

			level4: [

				{
					startPos: [2, 4],
					bumpers: [[2, 4, 'left', 3], [2, 2, 'right', 2], [4, 2, 'left', 2], [1, 2, 'right', 0, false]],
					delay: 2500,
					portals: [],
					endPos: [3, 4, 3]
				},

				{
					startPos: [3, 4],
					bumpers: [[4, 3, 'left', 2], [2, 3, 'left', 2], [2, 1, 'right', 2], [1, 2, 'left', 0, false]],
					delay: 2500,
					portals: [],
					endPos: [2, 1, 3]
				},

				{
					startPos: [3, 2],
					bumpers: [[2, 3, 'right', 2], [4, 3, 'right', 2], [4, 1, 'left', 2], [1, 3, 'left', 0, false]],
					delay: 2500,
					portals: [],
					endPos: [4, 1, 4]
				},

				{
					startPos: [3, 1],
					bumpers: [[1, 3, 'right', 2], [3, 3, 'left', 2], [3, 4, 'right', 1], [4, 3, 'left', 0, false]],
					delay: 2500,
					portals: [],
					endPos: [4, 4, 3]
				},

				{
					startPos: [4, 3],
					bumpers: [[3, 3, 'right', 3], [3, 1, 'left', 2], [1, 1, 'right', 2], [2, 2, 'left', 0, false]],
					delay: 2500,
					portals: [],
					endPos: [3, 1, 4]
				},

				{
					startPos: [4, 2],
					bumpers: [[3, 2, 'right', 3], [3, 1, 'right', 1], [4, 1, 'left', 1], [3, 3, 'right', 0, false]],
					delay: 2500,
					portals: [],
					endPos: [3, 4, 4]
				},

				{
					startPos: [4, 1],
					bumpers: [[3, 1, 'left', 3], [3, 3, 'left', 2], [4, 3, 'right', 1], [2, 2, 'left', 0, false]],
					delay: 2500,
					portals: [],
					endPos: [1, 4, 3]
				},

				{
					startPos: [1, 1],
					bumpers: [[1, 3, 'left', 3], [3, 3, 'right', 2], [3, 1, 'right', 2], [2, 2, 'right', 0, false]],
					delay: 2500,
					portals: [],
					endPos: [2, 1, 2]
				},

				{
					startPos: [1, 1],
					bumpers: [[1, 3, 'left', 3], [3, 3, 'right', 2], [3, 2, 'left', 1], [2, 2, 'right', 1]],
					delay: 2500,
					portals: [],
					endPos: [3, 2, 3]
				},

				{
					startPos: [1, 2],
					bumpers: [[2, 3, 'left', 3], [3, 3, 'right', 1], [3, 1, 'right', 2], [4, 1, 'left', 1]],
					delay: 2500,
					portals: [],
					endPos: [3, 4, 4]
				},

				{
					startPos: [1, 3],
					bumpers: [[3, 3, 'right', 3], [2, 3, 'left', 1], [2, 1, 'left', 2], [1, 1, 'right', 1]],
					delay: 2500,
					portals: [],
					endPos: [3, 1, 4]
				},

				{
					startPos: [1, 4],
					bumpers: [[4, 3, 'right', 3], [2, 3, 'right', 2], [2, 4, 'left', 1], [3, 4, 'right', 1]],
					delay: 2500,
					portals: [],
					endPos: [1, 3, 4]
				},

				{
					startPos: [2, 1],
					bumpers: [[2, 1, 'right', 3], [2, 3, 'left', 2], [4, 3, 'right', 2], [4, 2, 'right', 1]],
					delay: 2500,
					portals: [],
					endPos: [2, 2, 1]
				},

				{
					startPos: [2, 2],
					bumpers: [[3, 2, 'left', 2], [3, 1, 'left', 1], [2, 1, 'right', 1], [2, 4, 'right', 3]],
					delay: 2500,
					portals: [],
					endPos: [4, 4, 2]
				},

				{
					startPos: [2, 3],
					bumpers: [[3, 3, 'left', 2], [3, 1, 'left', 2], [1, 1, 'right', 2], [1, 4, 'left', 3]],
					delay: 2500,
					portals: [],
					endPos: [2, 4, 4]
				}

			],

			level5: [

				{
					startPos: [1, 1],
					bumpers: [[1, 3, 'left', 3], [3, 3, 'left', 2], [3, 4, 'right', 1], [2, 4, 'left', 1]],
					delay: 2000,
					portals: [],
					endPos: [1, 2, 4]
				},

				{
					startPos: [1, 2],
					bumpers: [[2, 2, 'right', 2], [1, 2, 'left', 1], [1, 1, 'right', 1], [4, 1, 'right', 3]],
					delay: 2000,
					portals: [],
					endPos: [1, 4]
				},

				{
					startPos: [1, 3],
					bumpers: [[3, 3, 'right', 3], [1, 3, 'left', 2], [1, 1, 'right', 2], [4, 1, 'right', 3]],
					delay: 2000,
					portals: [],
					endPos: [1, 4, 1]
				},

				{
					startPos: [1, 4],
					bumpers: [[4, 3, 'right', 3], [2, 3, 'right', 2], [2, 4, 'left', 1], [4, 4, 'left', 2]],
					delay: 2000,
					portals: [],
					endPos: [3, 4, 1]
				},

				{
					startPos: [2, 1],
					bumpers: [[3, 1, 'right', 2], [3, 3, 'left', 2], [4, 3, 'right', 1], [4, 2, 'left', 1]],
					delay: 2000,
					portals: [],
					endPos: [4, 2, 4]
				},

				{
					startPos: [2, 2],
					bumpers: [[2, 2, 'right', 3], [2, 3, 'left', 1], [3, 3, 'right', 1], [3, 1, 'left', 2]],
					delay: 2000,
					portals: [],
					endPos: [4, 1, 3]
				},

				{
					startPos: [2, 3],
					bumpers: [[3, 3, 'right', 2], [3, 4, 'right', 1], [1, 4, 'left', 2], [1, 1, 'left', 3]],
					delay: 2000,
					portals: [],
					endPos: [4, 1, 1]
				},

				{
					startPos: [2, 4],
					bumpers: [[3, 4, 'left', 2], [3, 2, 'left', 2], [2, 2, 'right', 1], [2, 4, 'right', 2]],
					delay: 2000,
					portals: [],
					endPos: [4, 4, 2]
				},

				{
					startPos: [3, 4],
					bumpers: [[4, 2, 'left', 3], [2, 2, 'right', 2], [2, 4, 'right', 2], [1, 4, 'left', 1]],
					delay: 2000,
					portals: [],
					endPos: [1, 1, 4]
				},

				{
					startPos: [3, 3],
					bumpers: [[3, 2, 'right', 3], [4, 2, 'left', 1], [4, 4, 'right', 2], [2, 4, 'right', 2]],
					delay: 2000,
					portals: [],
					endPos: [3, 2, 1]
				},

				{
					startPos: [3, 2],
					bumpers: [[2, 2, 'left', 3], [1, 2, 'right', 1], [1, 4, 'left', 2], [3, 4, 'left', 2]],
					delay: 2000,
					portals: [],
					endPos: [3, 3, 1]
				},

				{
					startPos: [3, 1],
					bumpers: [[1, 2, 'right', 3], [4, 2, 'left', 3], [4, 3, 'right', 1], [3, 3, 'right', 1]],
					delay: 2000,
					portals: [],
					endPos: [3, 3, 1]
				},

				{
					startPos: [4, 4],
					bumpers: [[3, 4, 'right', 3], [3, 2, 'left', 2], [1, 2, 'right', 2], [1, 3, 'left', 1]],
					delay: 2000,
					portals: [],
					endPos: [2, 3, 4]
				},

				{
					startPos: [4, 3],
					bumpers: [[3, 3, 'right', 3], [3, 1, 'right', 2], [4, 1, 'left', 1], [4, 3, 'left', 2]],
					delay: 2000,
					portals: [],
					endPos: [2, 3, 1]
				},

				{
					startPos: [4, 2],
					bumpers: [[3, 2, 'left', 3], [3, 4, 'right', 2], [1, 4, 'left', 2], [1, 1, 'left', 4]],
					delay: 2000,
					portals: [],
					endPos: [4, 1, 1]
				}

			],

			level6: [

				{
					startPos: [1, 1],
					bumpers: [[1, 3, 'left', 3], [4, 3, 'left', 3], [4, 5, 'left', 2], [5, 5, 'right', 1]],
					delay: 2200,
					portals: [],
					endPos: [1, 5, 5]
				},

				{
					startPos: [1, 2],
					bumpers: [[2, 3, 'left', 3], [4, 3, 'left', 2], [4, 4, 'right', 1], [2, 4, 'right', 2]],
					delay: 2200,
					portals: [],
					endPos: [3, 2, 2]
				},

				{
					startPos: [1, 3],
					bumpers: [[3, 3, 'right', 3], [2, 3, 'right', 1], [2, 4, 'right', 1], [1, 4, 'left', 1]],
					delay: 2200,
					portals: [],
					endPos: [1, 1, 4]
				},

				{
					startPos: [1, 4],
					bumpers: [[4, 2, 'left', 2], [5, 2, 'right', 1], [5, 1, 'left', 1], [3, 1, 'left', 2]],
					delay: 2200,
					portals: [],
					endPos: [1, 3, 1]
				},

				{
					startPos: [1, 5],
					bumpers: [[5, 3, 'right', 3], [3, 3, 'left', 2], [3, 1, 'left', 2], [2, 1, 'right', 1]],
					delay: 2200,
					portals: [],
					endPos: [3, 2, 5]
				},

				{
					startPos: [2, 2],
					bumpers: [[4, 2, 'right', 2], [4, 3, 'left', 1], [5, 3, 'left', 1], [5, 4, 'left', 1]],
					delay: 2200,
					portals: [],
					endPos: [2, 4, 1]
				},

				{
					startPos: [2, 1],
					bumpers: [[4, 1, 'right', 2], [4, 3, 'left', 2], [5, 3, 'left', 1], [5, 5, 'right', 2]],
					delay: 2200,
					portals: [],
					endPos: [4, 5, 5]
				},

				{
					startPos: [2, 3],
					bumpers: [[4, 3, 'right', 2], [4, 4, 'right', 1], [3, 4, 'right', 1], [3, 5, 'right', 1]],
					delay: 2200,
					portals: [],
					endPos: [4, 5, 3]
				},

				{
					startPos: [2, 4],
					bumpers: [[3, 4, 'left', 3], [3, 2, 'left', 2], [2, 2, 'right', 1], [2, 5, 'left', 3]],
					delay: 2200,
					portals: [],
					endPos: [2, 5, 4]
				},

				{
					startPos: [2, 5],
					bumpers: [[4, 5, 'left', 2], [4, 2, 'left', 3], [2, 2, 'right', 2], [2, 4, 'left', 2]],
					delay: 2200,
					portals: [],
					endPos: [2, 4, 4]
				},

				{
					startPos: [3, 5],
					bumpers: [[5, 2, 'left', 4], [3, 2, 'left', 2], [3, 1, 'left', 1], [2, 1, 'left', 1]],
					delay: 2200,
					portals: [],
					endPos: [1, 2, 1]
				},

				{
					startPos: [3, 4],
					bumpers: [[4, 3, 'right', 3], [5, 3, 'left', 1], [5, 5, 'right', 2], [2, 5, 'right', 4]],
					delay: 2200,
					portals: [],
					endPos: [3, 2, 1]
				},

				{
					startPos: [3, 3],
					bumpers: [[3, 3, 'right', 3], [5, 3, 'right', 2], [5, 1, 'left', 2], [2, 1, 'right', 4]],
					delay: 2200,
					portals: [],
					endPos: [3, 2, 5]
				},

				{
					startPos: [4, 4],
					bumpers: [[3, 4, 'left', 3], [3, 5, 'right', 1], [2, 5, 'left', 1], [2, 2, 'left', 3]],
					delay: 2200,
					portals: [],
					endPos: [4, 2, 2]
				},

				{
					startPos: [4, 3],
					bumpers: [[3, 3, 'right', 3], [3, 1, 'left', 2], [1, 1, 'right', 2], [1, 5, 'right', 4]],
					delay: 2200,
					portals: [],
					endPos: [4, 5, 1]
				}

			],

			level7: [

				{
					startPos: [1, 1],
					bumpers: [[1, 3, 'left', 3], [4, 3, 'left', 3], [4, 5, 'right', 2], [2, 5, 'left', 2], [5, 3, 'left', 0, false]],
					delay: 2500,
					portals: [],
					endPos: [1, 2, 5]
				},

				{
					startPos: [1, 2],
					bumpers: [[2, 3, 'left', 3], [4, 3, 'right', 2], [4, 1, 'left', 2], [1, 1, 'right', 3], [3, 2, 'left', 0, false]],
					delay: 2500,
					portals: [],
					endPos: [3, 1, 5]
				},

				{
					startPos: [1, 3],
					bumpers: [[3, 3, 'right', 3], [1, 3, 'right', 2], [1, 5, 'left', 2], [4, 5, 'right', 3], [1, 2, 'left', 0, false]],
					delay: 2500,
					portals: [],
					endPos: [1, 4, 5]
				},

				{
					startPos: [1, 4],
					bumpers: [[4, 3, 'right', 3], [2, 3, 'left', 2], [2, 2, 'left', 1], [1, 2, 'right', 1], [3, 2, 'left', 0, false]],
					delay: 2500,
					portals: [],
					endPos: [3, 1, 4]
				},

				{
					startPos: [1, 5],
					bumpers: [[5, 3, 'right', 3], [2, 3, 'left', 3], [2, 2, 'right', 1], [4, 2, 'right', 2], [3, 1, 'right', 0, false]],
					delay: 2500,
					portals: [],
					endPos: [1, 4, 2]
				},

				{
					startPos: [2, 1],
					bumpers: [[3, 1, 'right', 3], [3, 4, 'left', 3], [5, 4, 'right', 2], [5, 2, 'left', 2], [2, 3, 'left', 0, false]],
					delay: 2500,
					portals: [],
					endPos: [4, 2, 5]
				},

				{
					startPos: [2, 2],
					bumpers: [[3, 2, 'left', 3], [3, 1, 'left', 1], [2, 1, 'right', 1], [2, 2, 'right', 1], [2, 3, 'right', 0, false]],
					delay: 2500,
					portals: [],
					endPos: [4, 2, 2]
				},

				{
					startPos: [2, 3],
					bumpers: [[4, 3, 'left', 2], [4, 1, 'left', 2], [2, 1, 'right', 2], [2, 4, 'right', 3], [3, 5, 'right', 0, false]],
					delay: 2500,
					portals: [],
					endPos: [4, 4, 2]
				},

				{
					startPos: [2, 4],
					bumpers: [[3, 4, 'left', 3], [3, 1, 'left', 3], [2, 1, 'right', 1], [2, 4, 'right', 3], [4, 2, 'left', 0, false]],
					delay: 2500,
					portals: [],
					endPos: [4, 4, 2]
				},

				{
					startPos: [2, 5],
					bumpers: [[3, 5, 'left', 3], [3, 2, 'right', 3], [5, 2, 'left', 2], [5, 4, 'right', 2], [4, 1, 'right', 0, false]],
					delay: 2500,
					portals: [],
					endPos: [4, 4, 5]
				},

				{
					startPos: [3, 3],
					bumpers: [[3, 3, 'left', 3], [2, 3, 'right', 1], [2, 5, 'left', 2], [4, 5, 'right', 2], [4, 2, 'left', 3]],
					delay: 2500,
					portals: [],
					endPos: [4, 2, 4]
				},

				{
					startPos: [3, 2],
					bumpers: [[2, 3, 'left', 3], [1, 3, 'left', 1], [1, 1, 'right', 2], [5, 1, 'left', 4], [5, 4, 'right', 3]],
					delay: 2500,
					portals: [],
					endPos: [4, 4, 5]
				},

				{
					startPos: [4, 4],
					bumpers: [[4, 4, 'right', 4], [4, 1, 'left', 3], [2, 1, 'right', 2], [2, 5, 'left', 4], [5, 5, 'right', 3]],
					delay: 2500,
					portals: [],
					endPos: [1, 5, 5]
				},

				{
					startPos: [4, 3],
					bumpers: [[4, 3, 'right', 4], [4, 1, 'left', 2], [2, 1, 'right', 2], [2, 4, 'left', 3], [5, 4, 'right', 3]],
					delay: 2500,
					portals: [],
					endPos: [1, 5, 4]
				},

				{
					startPos: [4, 2],
					bumpers: [[4, 2, 'left', 4], [4, 4, 'left', 2], [5, 4, 'right', 1], [5, 1, 'left', 3], [2, 1, 'right', 3]],
					delay: 2500,
					portals: [],
					endPos: [3, 2, 5]
				}

			],

			level8: [

				{
					startPos: [1, 1],
					bumpers: [[1, 3, 'left', 3], [4, 3, 'right', 3], [4, 1, 'right', 2], [5, 1, 'left', 1], [5, 5, 'right', 4]],
					delay: 2500,
					portals: [],
					endPos: [4, 5, 5]
				},

				{
					startPos: [1, 2],
					bumpers: [[2, 3, 'right', 3], [1, 3, 'right', 1], [1, 5, 'left', 2], [4, 5, 'right', 3], [4, 2, 'left', 3]],
					delay: 2500,
					portals: [],
					endPos: [4, 2, 5]
				},

				{
					startPos: [1, 3],
					bumpers: [[3, 3, 'left', 3], [5, 3, 'right', 2], [5, 1, 'left', 2], [1, 1, 'right', 4], [1, 3, 'right', 2]],
					delay: 2500,
					portals: [],
					endPos: [4, 3, 1]
				},

				{
					startPos: [1, 4],
					bumpers: [[4, 3, 'right', 3], [2, 3, 'right', 2], [2, 4, 'left', 1], [5, 4, 'right', 3], [5, 2, 'left', 2]],
					delay: 2500,
					portals: [],
					endPos: [4, 2, 5]
				},

				{
					startPos: [1, 4],
					bumpers: [[4, 5, 'right', 5], [2, 5, 'left', 2], [2, 3, 'left', 2], [1, 3, 'right', 1], [1, 4, 'left', 1]],
					delay: 2500,
					portals: [],
					endPos: [2, 4, 5]
				},

				{
					startPos: [1, 5],
					bumpers: [[5, 5, 'right', 5], [3, 5, 'left', 2], [3, 2, 'left', 3], [1, 2, 'left', 2], [1, 1, 'right', 1]],
					delay: 2500,
					portals: [],
					endPos: [2, 1, 5]
				},

				{
					startPos: [2, 1],
					bumpers: [[3, 1, 'right', 3], [3, 3, 'left', 2], [5, 3, 'left', 2], [5, 5, 'right', 2], [2, 5, 'left', 3]],
					delay: 2500,
					portals: [],
					endPos: [1, 2, 5]
				},

				{
					startPos: [2, 2],
					bumpers: [[4, 2, 'right', 2], [4, 4, 'left', 2], [5, 4, 'left', 1], [5, 5, 'right', 1], [4, 5, 'right', 1]],
					delay: 2500,
					portals: [],
					endPos: [3, 4, 1]
				},

				{
					startPos: [2, 3],
					bumpers: [[4, 3, 'left', 2], [4, 2, 'left', 1], [2, 2, 'right', 2], [2, 4, 'left', 2], [5, 4, 'right', 3]],
					delay: 2500,
					portals: [],
					endPos: [1, 5, 4]
				},

				{
					startPos: [2, 4],
					bumpers: [[4, 4, 'left', 2], [4, 2, 'left', 2], [2, 2, 'right', 2], [2, 5, 'left', 3], [5, 5, 'right', 3]],
					delay: 2500,
					portals: [],
					endPos: [1, 5, 5]
				},

				{
					startPos: [2, 5],
					bumpers: [[4, 5, 'left', 2], [4, 2, 'left', 3], [2, 2, 'right', 2], [2, 4, 'left', 2], [5, 4, 'left', 3]],
					delay: 2500,
					portals: [],
					endPos: [3, 5, 2]
				},

				{
					startPos: [3, 5],
					bumpers: [[5, 3, 'left', 3], [3, 3, 'left', 2], [3, 2, 'right', 1], [5, 2, 'right', 2], [5, 1, 'left', 1]],
					delay: 2500,
					portals: [],
					endPos: [4, 1, 5]
				},

				{
					startPos: [3, 4],
					bumpers: [[4, 3, 'right', 3], [5, 3, 'left', 1], [5, 4, 'right', 1], [3, 4, 'right', 2], [3, 5, 'left', 1]],
					delay: 2500,
					portals: [],
					endPos: [2, 5, 3]
				},

				{
					startPos: [3, 2],
					bumpers: [[2, 3, 'right', 3], [5, 3, 'right', 3], [5, 1, 'left', 2], [3, 1, 'right', 2], [3, 5, 'left', 4]],
					delay: 2500,
					portals: [],
					endPos: [2, 5, 3]
				},

				{
					startPos: [4, 1],
					bumpers: [[4, 1, 'left', 4], [4, 3, 'right', 2], [2, 3, 'right', 2], [2, 4, 'left', 1], [5, 4, 'right', 3]],
					delay: 2500,
					portals: [],
					endPos: [1, 5, 4]
				}

			],

			level9: [

				{
					startPos: [4, 5],
					bumpers: [[4, 5, 'right', 4], [4, 3, 'right', 2], [5, 3, 'left', 1], [5, 4, 'right', 1], [2, 4, 'right', 3]],
					delay: 2800,
					portals: [],
					endPos: [3, 2, 2]
				},

				{
					startPos: [4, 4],
					bumpers: [[3, 4, 'right', 3], [3, 2, 'left', 2], [2, 2, 'right', 1], [2, 3, 'left', 1], [4, 3, 'right', 2]],
					delay: 2800,
					portals: [],
					endPos: [1, 4, 3]
				},

				{
					startPos: [4, 3],
					bumpers: [[3, 3, 'left', 3], [3, 5, 'left', 2], [5, 5, 'right', 2], [5, 2, 'left', 3], [2, 2, 'left', 3]],
					delay: 2800,
					portals: [],
					endPos: [1, 2, 2]
				},

				{
					startPos: [4, 2],
					bumpers: [[4, 2, 'right', 4], [4, 1, 'left', 1], [2, 1, 'right', 2], [2, 4, 'left', 3], [5, 4, 'right', 3]],
					delay: 2800,
					portals: [],
					endPos: [1, 5, 4]
				},

				{
					startPos: [4, 1],
					bumpers: [[4, 1, 'left', 4], [4, 3, 'right', 2], [2, 3, 'right', 2], [2, 4, 'left', 1], [5, 4, 'right', 3]],
					delay: 2800,
					portals: [],
					endPos: [1, 5, 4]
				},

				{
					startPos: [3, 2],
					bumpers: [[2, 4, 'right', 2], [4, 4, 'left', 2], [4, 5, 'left', 1], [5, 5, 'right', 1], [5, 1, 'left', 4]],
					delay: 2800,
					portals: [],
					endPos: [4, 1, 5]
				},

				{
					startPos: [3, 3],
					bumpers: [[3, 3, 'right', 3], [5, 3, 'left', 2], [5, 4, 'right', 1], [2, 4, 'right', 3], [2, 5, 'left', 1]],
					delay: 2800,
					portals: [],
					endPos: [2, 5, 4]
				},

				{
					startPos: [3, 4],
					bumpers: [[4, 4, 'right', 2], [5, 4, 'left', 1], [5, 5, 'right', 1], [2, 5, 'left', 3], [2, 2, 'right', 3]],
					delay: 2800,
					portals: [],
					endPos: [2, 2, 4]
				},

				{
					startPos: [3, 4],
					bumpers: [[4, 4, 'right', 2], [5, 4, 'right', 1], [5, 2, 'left', 2], [2, 2, 'right', 3], [2, 4, 'right', 2]],
					delay: 2800,
					portals: [],
					endPos: [4, 4, 2]
				},

				{
					startPos: [3, 5],
					bumpers: [[5, 2, 'left', 4], [3, 2, 'left', 2], [3, 1, 'left', 1], [2, 1, 'right', 1], [2, 4, 'left', 3]],
					delay: 2800,
					portals: [],
					endPos: [2, 4, 3]
				},

				{
					startPos: [2, 3],
					bumpers: [[3, 3, 'left', 3], [3, 1, 'left', 2], [2, 1, 'right', 1], [2, 3, 'right', 2], [1, 3, 'right', 1]],
					delay: 2800,
					portals: [],
					endPos: [3, 1, 3]
				},

				{
					startPos: [2, 2],
					bumpers: [[4, 2, 'left', 2], [4, 1, 'left', 1], [2, 1, 'right', 2], [2, 4, 'left', 3], [5, 4, 'left', 3]],
					delay: 2800,
					portals: [],
					endPos: [3, 5, 2]
				},

				{
					startPos: [1, 5],
					bumpers: [[5, 3, 'right', 3], [3, 3, 'right', 2], [3, 4, 'left', 1], [5, 4, 'left', 2], [5, 5, 'right', 1]],
					delay: 2800,
					portals: [],
					endPos: [4, 5, 5]
				},

				{
					startPos: [2, 4],
					bumpers: [[4, 4, 'left', 2], [4, 2, 'left', 2], [3, 2, 'right', 1], [3, 4, 'right', 2], [2, 4, 'left', 2]],
					delay: 2800,
					portals: [],
					endPos: [1, 2, 4]
				},

				{
					startPos: [2, 5],
					bumpers: [[4, 5, 'left', 2], [4, 3, 'left', 2], [3, 3, 'right', 1], [3, 5, 'right', 2], [2, 5, 'right', 1]],
					delay: 2800,
					portals: [],
					endPos: [3, 2, 1]
				}

			],

			level10: [

				{
					startPos: [1, 1],
					bumpers: [[1, 3, 'left', 3], [4, 3, 'right', 3], [4, 2, 'right', 1], [6, 2, 'left', 2], [6, 5, 'right', 3]],
					delay: 2500,
					portals: [],
					endPos: [4, 5, 6]
				},

				{
					startPos: [1, 2],
					bumpers: [[2, 3, 'left', 3], [5, 3, 'left', 3], [5, 5, 'right', 2], [3, 5, 'left', 2], [3, 2, 'left', 3]],
					delay: 2500,
					portals: [],
					endPos: [4, 2, 3]
				},

				{
					startPos: [1, 3],
					bumpers: [[3, 3, 'left', 3], [5, 3, 'right', 2], [5, 1, 'left', 2], [2, 1, 'right', 3], [2, 4, 'left', 3]],
					delay: 2500,
					portals: [],
					endPos: [2, 4, 5]
				},

				{
					startPos: [1, 4],
					bumpers: [[4, 3, 'right', 3], [2, 3, 'right', 2], [2, 5, 'left', 2], [3, 5, 'left', 1], [3, 6, 'left', 1]],
					delay: 2500,
					portals: [],
					endPos: [2, 6, 4]
				},

				{
					startPos: [1, 5],
					bumpers: [[5, 3, 'right', 3], [3, 3, 'left', 2], [3, 1, 'left', 2], [2, 1, 'right', 1], [2, 4, 'left', 3]],
					delay: 2500,
					portals: [],
					endPos: [2, 4, 5]
				},

				{
					startPos: [1, 6],
					bumpers: [[6, 4, 'right', 4], [4, 4, 'right', 2], [4, 5, 'right', 1], [2, 5, 'left', 2], [2, 2, 'left', 3]],
					delay: 2500,
					portals: [],
					endPos: [4, 2, 2]
				},

				{
					startPos: [2, 1],
					bumpers: [[4, 1, 'right', 3], [4, 2, 'left', 1], [5, 2, 'left', 1], [5, 3, 'right', 1], [4, 3, 'right', 1]],
					delay: 2500,
					portals: [],
					endPos: [3, 4, 4]
				},

				{
					startPos: [2, 2],
					bumpers: [[3, 2, 'right', 4], [3, 5, 'left', 3], [5, 5, 'left', 2], [5, 6, 'right', 1], [2, 6, 'left', 3]],
					delay: 2500,
					portals: [],
					endPos: [1, 2, 6]
				},

				{
					startPos: [2, 3],
					bumpers: [[4, 3, 'right', 3], [4, 5, 'right', 2], [2, 5, 'left', 2], [2, 2, 'right', 3], [6, 2, 'left', 4]],
					delay: 2500,
					portals: [],
					endPos: [3, 6, 5]
				},

				{
					startPos: [2, 4],
					bumpers: [[4, 4, 'left', 3], [4, 2, 'left', 2], [2, 2, 'right', 2], [2, 5, 'left', 3], [6, 5, 'right', 4]],
					delay: 2500,
					portals: [],
					endPos: [1, 6, 5]
				},

				{
					startPos: [2, 5],
					bumpers: [[5, 5, 'left', 2], [5, 3, 'left', 2], [3, 3, 'right', 2], [3, 5, 'right', 2], [1, 5, 'left', 2]],
					delay: 2500,
					portals: [],
					endPos: [1, 1, 5]
				},

				{
					startPos: [2, 6],
					bumpers: [[5, 6, 'left', 2], [5, 3, 'left', 3], [4, 3, 'right', 1], [4, 5, 'left', 2], [6, 5, 'right', 2]],
					delay: 2500,
					portals: [],
					endPos: [1, 6, 5]
				},

				{
					startPos: [3, 6],
					bumpers: [[6, 3, 'left', 4], [5, 3, 'right', 1], [5, 6, 'right', 3], [4, 6, 'left', 1], [4, 2, 'left', 4]],
					delay: 2500,
					portals: [],
					endPos: [4, 2, 4]
				},

				{
					startPos: [3, 5],
					bumpers: [[5, 4, 'right', 3], [6, 4, 'left', 1], [6, 5, 'right', 1], [4, 5, 'left', 2], [4, 3, 'left', 2]],
					delay: 2500,
					portals: [],
					endPos: [4, 3, 4]
				},

				{
					startPos: [3, 4],
					bumpers: [[4, 4, 'left', 3], [3, 4, 'right', 1], [3, 5, 'left', 1], [6, 5, 'right', 3], [6, 3, 'left', 2]],
					delay: 2500,
					portals: [],
					endPos: [4, 3, 6]
				}

			],

			level11: [

				{
					startPos: [1, 1],
					bumpers: [[1, 3, 'left', 3], [5, 3, 'left', 4], [5, 4, 'right', 1], [2, 4, 'left', 3], [2, 2, 'left', 2], [4, 2, 'left', 0, false]],
					delay: 2800,
					portals: [],
					endPos: [4, 2, 2]
				},

				{
					startPos: [1, 2],
					bumpers: [[2, 4, 'left', 4], [5, 4, 'right', 3], [5, 2, 'right', 2], [6, 2, 'left', 1], [6, 6, 'right', 4], [4, 5, 'left', 0, false]],
					delay: 2800,
					portals: [],
					endPos: [4, 6, 6]
				},

				{
					startPos: [1, 3],
					bumpers: [[3, 4, 'left', 4], [5, 4, 'right', 2], [5, 1, 'left', 3], [1, 1, 'right', 4], [1, 6, 'left', 5], [5, 5, 'right', 0, false]],
					delay: 2800,
					portals: [],
					endPos: [2, 6, 6]
				},

				{
					startPos: [1, 4],
					bumpers: [[4, 3, 'right', 3], [2, 3, 'right', 2], [2, 5, 'left', 2], [5, 5, 'right', 3], [5, 2, 'right', 3], [1, 3, 'right', 0, false]],
					delay: 2800,
					portals: [],
					endPos: [2, 2, 2]
				},

				{
					startPos: [1, 5],
					bumpers: [[5, 3, 'right', 3], [3, 3, 'left', 2], [3, 1, 'left', 2], [2, 1, 'right', 1], [2, 5, 'left', 4], [4, 4, 'left', 0, false]],
					delay: 2800,
					portals: [],
					endPos: [2, 5, 5]
				},

				{
					startPos: [1, 6],
					bumpers: [[6, 3, 'right', 3], [4, 3, 'right', 2], [4, 5, 'left', 2], [5, 5, 'right', 1], [5, 1, 'left', 4], [2, 3, 'right', 0, false]],
					delay: 2800,
					portals: [],
					endPos: [4, 1, 5]
				},

				{
					startPos: [2, 1],
					bumpers: [[4, 1, 'right', 3], [4, 3, 'left', 2], [6, 3, 'left', 2], [6, 5, 'right', 2], [3, 5, 'left', 3], [3, 3, 'left', 2]],
					delay: 2800,
					portals: [],
					endPos: [4, 3, 3]
				},

				{
					startPos: [2, 2],
					bumpers: [[5, 2, 'right', 2], [5, 5, 'left', 3], [6, 5, 'right', 1], [6, 3, 'left', 2], [3, 3, 'right', 3], [3, 5, 'right', 2]],
					delay: 2800,
					portals: [],
					endPos: [4, 5, 3]
				},

				{
					startPos: [2, 3],
					bumpers: [[4, 3, 'left', 3], [4, 1, 'left', 2], [2, 1, 'right', 2], [2, 4, 'right', 3], [1, 4, 'left', 1], [1, 2, 'right', 2]],
					delay: 2800,
					portals: [],
					endPos: [2, 2, 6]
				},

				{
					startPos: [2, 4],
					bumpers: [[5, 4, 'left', 3], [5, 2, 'right', 2], [6, 2, 'left', 1], [6, 6, 'right', 4], [4, 5, 'left', 2], [4, 1, 'left', 5]],
					delay: 2800,
					portals: [],
					endPos: [4, 1, 4]
				},

				{
					startPos: [2, 5],
					bumpers: [[5, 5, 'left', 2], [5, 3, 'left', 2], [4, 3, 'right', 1], [4, 5, 'right', 3], [2, 5, 'left', 2], [2, 2, 'right', 4]],
					delay: 2800,
					portals: [],
					endPos: [2, 2, 5]
				},

				{
					startPos: [3, 6],
					bumpers: [[6, 4, 'left', 3], [4, 4, 'right', 2], [4, 6, 'right', 2], [2, 6, 'left', 2], [2, 3, 'right', 3], [6, 3, 'right', 4]],
					delay: 2800,
					portals: [],
					endPos: [1, 6, 3]
				},

				{
					startPos: [3, 5],
					bumpers: [[5, 4, 'right', 3], [6, 4, 'left', 1], [6, 5, 'right', 1], [4, 5, 'left', 2], [4, 2, 'right', 3], [6, 2, 'right', 2]],
					delay: 2800,
					portals: [],
					endPos: [1, 6, 2]
				},

				{
					startPos: [3, 4],
					bumpers: [[4, 3, 'right', 4], [6, 3, 'left', 2], [6, 5, 'right', 2], [5, 5, 'left', 1], [5, 2, 'left', 3], [2, 2, 'right', 3]],
					delay: 2800,
					portals: [],
					endPos: [3, 2, 5]
				}

			],

			level12: [

				{
					startPos: [1, 1],
					bumpers: [[1, 3, 'left', 3], [4, 3, 'left', 3], [4, 5, 'right', 2], [2, 5, 'left', 2], [2, 2, 'right', 3], [6, 2, 'right', 4]],
					delay: 2800,
					portals: [],
					endPos: [1, 6, 2]
				},

				{
					startPos: [4, 5],
					bumpers: [[4, 5, 'left', 4], [4, 6, 'right', 1], [2, 6, 'left', 2], [2, 3, 'left', 3], [1, 3, 'right', 1], [1, 4, 'left', 1]],
					delay: 2800,
					portals: [],
					endPos: [2, 4, 6]
				},

				{
					startPos: [1, 2],
					bumpers: [[2, 4, 'left', 4], [4, 4, 'left', 2], [4, 5, 'right', 1], [3, 5, 'left', 1], [3, 2, 'left', 3], [1, 2, 'left', 2]],
					delay: 2800,
					portals: [],
					endPos: [1, 1, 2]
				},

				{
					startPos: [1, 3],
					bumpers: [[3, 4, 'right', 4], [1, 4, 'right', 2], [1, 6, 'left', 2], [5, 6, 'right', 4], [5, 3, 'left', 3], [4, 3, 'left', 1]],
					delay: 2800,
					portals: [],
					endPos: [1, 4, 3]
				},

				{
					startPos: [1, 4],
					bumpers: [[4, 3, 'right', 3], [2, 3, 'right', 2], [2, 5, 'left', 2], [5, 5, 'right', 3], [5, 2, 'right', 3], [6, 2, 'left', 1]],
					delay: 2800,
					portals: [],
					endPos: [3, 6, 5]
				},

				{
					startPos: [1, 5],
					bumpers: [[5, 4, 'right', 4], [3, 4, 'right', 2], [3, 5, 'left', 1], [6, 5, 'right', 3], [6, 2, 'left', 3], [2, 2, 'right', 4]],
					delay: 2800,
					portals: [],
					endPos: [3, 2, 5]
				},

				{
					startPos: [1, 6],
					bumpers: [[6, 3, 'right', 3], [4, 3, 'right', 2], [4, 5, 'left', 2], [5, 5, 'right', 1], [5, 2, 'left', 3], [2, 2, 'right', 3]],
					delay: 2800,
					portals: [],
					endPos: [3, 2, 5]
				},

				{
					startPos: [4, 6],
					bumpers: [[4, 6, 'right', 4], [4, 4, 'left', 2], [3, 4, 'right', 1], [3, 5, 'left', 1], [6, 5, 'right', 3], [6, 3, 'left', 2]],
					delay: 2800,
					portals: [],
					endPos: [4, 3, 6]
				},

				{
					startPos: [4, 5],
					bumpers: [[4, 5, 'right', 4], [4, 3, 'left', 2], [2, 3, 'left', 2], [2, 2, 'right', 1], [6, 2, 'left', 4], [6, 4, 'right', 2]],
					delay: 2800,
					portals: [],
					endPos: [4, 4, 6]
				},

				{
					startPos: [4, 4],
					bumpers: [[4, 4, 'right', 4], [4, 2, 'right', 2], [6, 2, 'left', 2], [6, 5, 'right', 3], [3, 5, 'right', 3], [3, 6, 'left', 1]],
					delay: 2800,
					portals: [],
					endPos: [2, 6, 4]
				},

				{
					startPos: [4, 3],
					bumpers: [[4, 3, 'right', 4], [4, 1, 'right', 2], [6, 1, 'left', 2], [6, 5, 'right', 4], [3, 5, 'right', 3], [3, 6, 'left', 1]],
					delay: 2800,
					portals: [],
					endPos: [2, 6, 4]
				},

				{
					startPos: [4, 2],
					bumpers: [[5, 2, 'left', 5], [5, 4, 'right', 2], [3, 4, 'right', 2], [3, 6, 'left', 2], [6, 6, 'right', 3], [6, 1, 'left', 5]],
					delay: 2800,
					portals: [],
					endPos: [4, 1, 6]
				},

				{
					startPos: [4, 1],
					bumpers: [[5, 1, 'left', 5], [5, 4, 'right', 3], [3, 4, 'right', 2], [3, 5, 'left', 1], [6, 5, 'right', 3], [6, 3, 'left', 2]],
					delay: 2800,
					portals: [],
					endPos: [4, 3, 6]
				},

				{
					startPos: [1, 6],
					bumpers: [[6, 3, 'right', 3], [3, 3, 'right', 3], [3, 5, 'left', 2], [5, 5, 'right', 2], [5, 2, 'left', 3], [2, 2, 'right', 3]],
					delay: 2800,
					portals: [],
					endPos: [3, 2, 5]
				},

				{
					startPos: [2, 2],
					bumpers: [[4, 2, 'right', 3], [4, 5, 'left', 3], [6, 5, 'right', 2], [6, 4, 'left', 1], [3, 4, 'right', 3], [3, 6, 'left', 2]],
					delay: 2800,
					portals: [],
					endPos: [2, 6, 4]
				}

			],

			level13: [

				{
					startPos: [1, 1],
					bumpers: [[1, 4, 'left', 4], [5, 4, 'left', 4], [5, 6, 'left', 2], [6, 6, 'right', 1], [6, 2, 'left', 4], [5, 3, 'left', 0, false]],
					delay: 3000,
					portals: [],
					endPos: [4, 2, 6]
				},

				{
					startPos: [1, 2],
					bumpers: [[2, 4, 'left', 4], [4, 4, 'right', 2], [4, 2, 'left', 2], [3, 2, 'right', 1], [3, 5, 'left', 3], [4, 1, 'left', 0, false]],
					delay: 3000,
					portals: [],
					endPos: [2, 5, 4]
				},

				{
					startPos: [1, 3],
					bumpers: [[3, 4, 'right', 4], [2, 4, 'right', 1], [2, 6, 'left', 2], [4, 6, 'right', 2], [4, 3, 'right', 3], [2, 3, 'right', 0, false]],
					delay: 3000,
					portals: [],
					endPos: [2, 3, 3]
				},

				{
					startPos: [1, 5],
					bumpers: [[5, 3, 'right', 3], [3, 3, 'right', 2], [3, 4, 'left', 1], [5, 4, 'left', 2], [5, 6, 'right', 2], [4, 5, 'left', 0, false]],
					delay: 3000,
					portals: [],
					endPos: [4, 6, 5]
				},

				{
					startPos: [1, 6],
					bumpers: [[6, 3, 'right', 3], [4, 3, 'right', 2], [4, 4, 'right', 1], [3, 4, 'left', 1], [3, 2, 'left', 2], [3, 5, 'right', 0, false]],
					delay: 3000,
					portals: [],
					endPos: [4, 2, 3]
				},

				{
					startPos: [1, 4],
					bumpers: [[4, 3, 'left', 3], [6, 3, 'right', 2], [6, 1, 'left', 2], [2, 1, 'right', 4], [2, 5, 'left', 4], [4, 4, 'left', 0, false]],
					delay: 3000,
					portals: [],
					endPos: [2, 5, 5]
				},

				{
					startPos: [2, 1],
					bumpers: [[5, 1, 'right', 2], [5, 4, 'right', 3], [4, 4, 'left', 1], [4, 2, 'left', 2], [3, 2, 'right', 1], [6, 3, 'right', 0, false]],
					delay: 3000,
					portals: [],
					endPos: [3, 3, 5]
				},

				{
					startPos: [2, 2],
					bumpers: [[5, 2, 'right', 2], [5, 4, 'right', 2], [4, 4, 'left', 1], [4, 1, 'left', 3], [3, 1, 'right', 1], [6, 3, 'right', 0, false]],
					delay: 3000,
					portals: [],
					endPos: [3, 3, 6]
				},

				{
					startPos: [4, 6],
					bumpers: [[3, 6, 'right', 3], [3, 4, 'right', 2], [5, 4, 'left', 2], [5, 5, 'right', 1], [4, 5, 'left', 1], [6, 4, 'right', 0, false]],
					delay: 3000,
					portals: [],
					endPos: [1, 4, 5]
				},

				{
					startPos: [4, 5],
					bumpers: [[4, 5, 'right', 4], [4, 3, 'right', 2], [6, 3, 'left', 2], [6, 4, 'right', 1], [2, 4, 'left', 4], [3, 2, 'left', 0, false]],
					delay: 3000,
					portals: [],
					endPos: [1, 2, 4]
				},

				{
					startPos: [4, 4],
					bumpers: [[4, 4, 'left', 4], [4, 5, 'right', 1], [2, 5, 'left', 2], [2, 2, 'right', 3], [5, 2, 'left', 3], [6, 3, 'left', 0, false]],
					delay: 3000,
					portals: [],
					endPos: [3, 5, 4]
				},

				{
					startPos: [4, 3],
					bumpers: [[3, 3, 'right', 3], [3, 1, 'right', 2], [5, 1, 'left', 2], [5, 5, 'right', 4], [3, 5, 'right', 2], [6, 4, 'right', 0, false]],
					delay: 3000,
					portals: [],
					endPos: [3, 3, 2]
				},

				{
					startPos: [4, 2],
					bumpers: [[5, 2, 'right', 5], [5, 1, 'left', 1], [3, 1, 'right', 2], [3, 4, 'right', 3], [1, 4, 'right', 2], [5, 4, 'left', 0, false]],
					delay: 3000,
					portals: [],
					endPos: [3, 1, 3]
				},

				{
					startPos: [4, 1],
					bumpers: [[3, 1, 'left', 3], [3, 4, 'right', 3], [2, 4, 'left', 1], [2, 2, 'right', 2], [5, 2, 'right', 3], [6, 2, 'right', 0, false]],
					delay: 3000,
					portals: [],
					endPos: [1, 5, 3]
				},

				{
					startPos: [2, 3],
					bumpers: [[5, 3, 'left', 2], [5, 1, 'left', 2], [4, 1, 'right', 1], [4, 5, 'right', 4], [3, 5, 'right', 1], [2, 4, 'right', 0, false]],
					delay: 3000,
					portals: [],
					endPos: [3, 3, 2]
				}

			],

			level14: [

				{
					startPos: [1, 2],
					bumpers: [[2, 3, 'left', 3], [4, 3, 'left', 2], [4, 5, 'right', 2], [3, 5, 'left', 1], [3, 2, 'right', 3], [6, 2, 'left', 3]],
					delay: 2800,
					portals: [],
					endPos: [3, 6, 5]
				},

				{
					startPos: [1, 1],
					bumpers: [[1, 4, 'left', 4], [4, 4, 'right', 3], [4, 3, 'right', 1], [6, 3, 'left', 2], [6, 5, 'right', 2], [5, 5, 'right', 1]],
					delay: 2800,
					portals: [],
					endPos: [3, 5, 2]
				},

				{
					startPos: [1, 3],
					bumpers: [[3, 3, 'right', 3], [1, 3, 'right', 2], [1, 5, 'left', 2], [4, 5, 'left', 3], [4, 6, 'right', 1], [2, 6, 'left', 2]],
					delay: 2800,
					portals: [],
					endPos: [1, 2, 6]
				},

				{
					startPos: [1, 4],
					bumpers: [[4, 3, 'right', 3], [2, 3, 'right', 2], [2, 5, 'left', 2], [5, 5, 'left', 3], [5, 6, 'right', 1], [3, 6, 'left', 2]],
					delay: 2800,
					portals: [],
					endPos: [1, 3, 6]
				},

				{
					startPos: [1, 5],
					bumpers: [[5, 3, 'right', 3], [3, 3, 'right', 2], [3, 4, 'left', 1], [6, 4, 'right', 3], [6, 2, 'left', 2], [2, 2, 'right', 4]],
					delay: 2800,
					portals: [],
					endPos: [3, 2, 5]
				},

				{
					startPos: [1, 6],
					bumpers: [[6, 3, 'right', 3], [4, 3, 'right', 2], [4, 4, 'left', 1], [5, 4, 'right', 1], [5, 2, 'left', 2], [3, 2, 'right', 2]],
					delay: 2800,
					portals: [],
					endPos: [3, 3, 5]
				},

				{
					startPos: [2, 2],
					bumpers: [[4, 2, 'left', 3], [4, 1, 'left', 1], [2, 1, 'right', 2], [2, 4, 'right', 3], [1, 4, 'right', 1], [1, 6, 'left', 2]],
					delay: 2800,
					portals: [],
					endPos: [2, 6, 6]
				},

				{
					startPos: [2, 3],
					bumpers: [[5, 3, 'right', 2], [5, 5, 'right', 2], [3, 5, 'right', 2], [3, 6, 'left', 1], [6, 6, 'right', 3], [6, 2, 'left', 4]],
					delay: 2800,
					portals: [],
					endPos: [4, 2, 6]
				},

				{
					startPos: [2, 4],
					bumpers: [[4, 4, 'left', 3], [4, 2, 'left', 2], [2, 2, 'right', 2], [2, 5, 'left', 3], [5, 5, 'left', 3], [5, 6, 'right', 1]],
					delay: 2800,
					portals: [],
					endPos: [4, 6, 5]
				},

				{
					startPos: [4, 1],
					bumpers: [[5, 1, 'left', 5], [5, 3, 'right', 2], [3, 3, 'right', 2], [3, 5, 'right', 2], [1, 5, 'right', 2], [1, 6, 'left', 1]],
					delay: 2800,
					portals: [],
					endPos: [2, 6, 6]
				},

				{
					startPos: [4, 2],
					bumpers: [[3, 2, 'left', 3], [3, 4, 'right', 2], [1, 4, 'right', 2], [1, 5, 'left', 1], [5, 5, 'right', 4], [5, 1, 'left', 4]],
					delay: 2800,
					portals: [],
					endPos: [4, 1, 5]
				},

				{
					startPos: [4, 3],
					bumpers: [[4, 3, 'right', 4], [4, 2, 'left', 1], [2, 2, 'right', 2], [2, 5, 'left', 3], [6, 5, 'right', 4], [6, 1, 'left', 4]],
					delay: 2800,
					portals: [],
					endPos: [4, 1, 6]
				},

				{
					startPos: [4, 1],
					bumpers: [[5, 1, 'left', 5], [5, 3, 'right', 2], [3, 3, 'right', 2], [3, 5, 'left', 2], [6, 5, 'right', 3], [6, 4, 'left', 1]],
					delay: 2800,
					portals: [],
					endPos: [4, 4, 6]
				},

				{
					startPos: [3, 4],
					bumpers: [[4, 5, 'left', 2], [2, 5, 'left', 2], [2, 3, 'left', 2], [1, 3, 'right', 1], [1, 6, 'left', 3], [5, 6, 'right', 4]],
					delay: 2800,
					portals: [],
					endPos: [1, 5, 6]
				},

				{
					startPos: [4, 6],
					bumpers: [[2, 6, 'right', 2], [2, 4, 'right', 2], [5, 4, 'right', 3], [5, 3, 'left', 1], [3, 3, 'right', 2], [3, 6, 'left', 3]],
					delay: 2800,
					portals: [],
					endPos: [2, 6, 4]
				}

			]
		};

		return maps;

	}
};
