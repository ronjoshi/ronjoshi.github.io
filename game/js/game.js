var width, height, stage, game, background, mainSquare, clickable, wrongLvl, streakClickable, movement;
var movementArr = [];


	var make = {

		level: function(n, x, t) {
			movementArr.push(true);
			console.log(movementArr);
			game.clear.all();
			clickable = false;
			game.set.level(n, x, t);
			if(n == 1 && !t) {
				var txt = new createjs.Text("Level " + 1, getWidth(10) + "px PerfectPixel", "White");
				txt.x = getWidth(50);
				txt.y = getHeight(2.5);
				var strk = new createjs.Text("x" + 0, getWidth(10) + "px PerfectPixel", "#0c40a4");
				strk.textAlign = 'center';
                txt.textAlign = 'center';
				strk.x = getWidth(90);
				strk.y = getHeight(1);
				game.player.level = txt;
				game.player.streak = strk;
				stage.addChild(game.player.level);
				stage.addChild(game.player.streak);

				game.player.menu();

				var score = new createjs.Text("Score: 0", getWidth(10) + "px PerfectPixel", "White");
				score.textAlign = 'center';
				score.x = getWidth(50);
				score.y = getHeight(13);
                game.player.score = score;
				stage.addChild(game.player.score);
			}

			setTimeout(function(){game.squares.init();}, 1000);
			setTimeout(function(){game.circles.init();}, 2000);
			setTimeout(function(){game.bumpers.init();}, 3000);
			setTimeout(function(){game.portals.init();}, 4000);
		}

	};

/* Gets the relative width and height (in pixels) using percentages to reduce processing */

	function getWidth(percent) {
		return (percent / 100) * width;
	}	/* Returns the width in pixels, takes in percent as a value */

	function getHeight(percent) {
		return (percent / 100) * height;
	}	/* Returns the height in pixels, takes in percent as a value */

/*-------------------------------------------------------------------------------------- */


/* ------------------------------ Functions to help ease ----------------------------------- */





/*--------------------------- MAIN GAME REFERENCE VARIABLE ---------------------------------- */

	game = {

		dialog: {

			back: undefined,

			box: undefined,

			msg: undefined,

			slideIn: function(text, time, size, wai) {

				wai = getHeight(wai);

				game.dialog.box = new createjs.Shape();
				var shape = game.dialog.box;
				shape.graphics.beginFill('#6b3500').drawRect(0, 0, getWidth(85), getHeight(40));
				shape.goToPosX = getWidth(7.5);
				shape.x = shape.goOutX = -1000;
				shape.y = getHeight(30);
				shape.alpha = 0.3;
				stage.addChild(shape);

				game.dialog.back = new createjs.Shape();
				var back = game.dialog.back;
				back.graphics.beginFill('#955816').drawRect(0, 0, getWidth(78), getHeight(40) - getWidth(7));
				back.goToPosX = getWidth(7.5 + 3.5);
				back.x = back.goOutX = width + 1000;
				back.y = getHeight(30) + getWidth(3.5);
				back.alpha = 0.3;
				stage.addChild(back);

				game.dialog.msg = new createjs.Text(text, getWidth(size) + "px Organo", "#FFFFFF");
				var msg = game.dialog.msg;
				msg.x = getWidth(50);
				msg.textAlign = 'center';
				msg.alpha = 0;
				stage.addChild(msg);

				createjs.Tween.get(shape)
					.to({x: shape.goToPosX, alpha: 1}, 900, createjs.Ease.getElasticInOut(2, 5))
					.wait(time)
					.to({x: shape.goOutX, alpha: 0.3}, 900, createjs.Ease.getElasticInOut(2, 5));

				createjs.Tween.get(back)
					.to({x: back.goToPosX, alpha: 1}, 900, createjs.Ease.getElasticInOut(2, 5))
					.wait(time)
					.to({x: back.goOutX, alpha: 0.3}, 900, createjs.Ease.getElasticInOut(2, 5));

				createjs.Tween.get(msg)
					.to({y: wai, alpha: 1}, 900, createjs.Ease.quartIn)
					.wait(time)
					.to({y: 0, alpha: 0}, 900, createjs.Ease.quartIn);

				setTimeout(function() {
					stage.removeChild(msg);
					stage.removeChild(back);
					stage.removeChild(shape);
				}, 1800 + time);
				return time + 900;

			}

		},

		square: {

			leftBoxMargin: undefined,

			topBoxMargin: undefined,

			init: function() {

				var wdth = 60;

				var mainSquare = new createjs.Shape();

				mainSquare.graphics.beginFill('#955816').drawRoundRect(0, 0, getWidth(wdth), getWidth(wdth), getWidth(wdth) / 32).endFill();

				mainSquare.x = getWidth(100 - wdth) / 2;
				var y = getHeight((100 - (getWidth(wdth) / height * 100)) / 2);

				stage.addChild(mainSquare);

				createjs.Tween.get(mainSquare, {loop: false})
					.to({y: y}, 1000, createjs.Ease.bounceOut);

				createjs.Ticker.setFPS(60);
				createjs.Ticker.on("tick", stage);
				game.square.square = mainSquare;

				game.square.leftBoxMargin = (100 - wdth) / 2;
				game.square.topBoxMargin = ((height - getWidth(60)) / 2) / height * 100;

			}

		},

		circle: {

			circle: {},
			num: 0,

			init: function() {
				if(movementArr[movementArr.length - 1]) {
					var c = new createjs.Shape();
					var x = game.data.lvlMap.startPos[0];
					var num = (x - 1) * game.data.rows + game.data.lvlMap.startPos[1] - 1;
					var y = game.circles.list[num][0];
					c.graphics.beginFill("White").drawCircle(0, 0, y.radius).endFill();
					c.x = game.circles.list[num][0].x;
					c.yPos = game.circles.list[num][0].y;
					c.y = -50;
					stage.addChild(c);
                    c.cache(-y.radius, -y.radius, y.radius * 2, y.radius * 2);
					createjs.Tween.get(c)
						.to({y: c.yPos}, 1000, createjs.Ease.bounceOut);
					setTimeout(function() {stage.removeChild(game.circles.list[num][0]); stage.removeChild(game.circles.list[num][1]); game.circles.list[num] = [];}, 1000);

					game.circle.circle = c;
					game.circle.num++;
				}
			},

			bounce: function() {
				if(movementArr[movementArr.length - 1]) {
					clickable = false;
					streakClickable = false;

					var hits = [];
					var fullTime = 0;

					var bounceString = "";
					var asdf = game.data.lvlMap.bumpers.length;
					var timE = 0;

					var wait = 0;

					for(i = 0; i < asdf; i++) {

						var bmp = game.bumpers.list[i];
						game.bumpers.popIn(bmp);

						var bumper = game.data.lvlMap.bumpers[i];

						if(bumper[4] !== false) {
							var x = getWidth( game.square.leftBoxMargin + game.data.squareWidth / 2 + game.data.squareMargin + (game.data.squareWidth + game.data.squareMargin) * (bumper[0] - 1) );
							var y = getHeight(game.square.topBoxMargin) + getWidth( game.data.squareWidth / 2 + game.data.squareMargin + (game.data.squareWidth + game.data.squareMargin) * (bumper[1] - 1) );

							if(bumper[4] !== 0) {
								var time = bumper[3] * 200;
								hits.push([x, y, time]);
							}
						}

					}

					var end = game.data.lvlMap.endPos[1] + ((game.data.lvlMap.endPos[0] - 1) * game.data.rows) - 1;
					var ex = game.circles.list[end][0].x;
					var wai = game.circles.list[end][0].y;
					var taim = game.data.lvlMap.endPos[2] * 200;

					hits.push([ex, wai, taim]);

					bounceString = "var hits = " + JSON.stringify(hits) + ";" + " createjs.Tween.get(game.circle.circle)";

					for(i = 0; i < hits.length; i++) {

						bounceString += ".to({x: hits[" + i + "][0], y: hits[" + i + "][1]}, hits[" + i + "][2])";
						fullTime += hits[i][2];

					}

					bounceString += ";";

					setTimeout(function() {
						eval(bounceString);
					}, 200);

					return fullTime;
				}

			}

		},

		bumpers: {

			list: [],

			BumperCoords: function(bmp, offsetFix, radiusFix, lftBox, tpBox, w, m) {
				var coords = {};
				if(bmp[2] === 'left') {
					coords.x = lftBox + m + (w + m) * (bmp[0] - 1) + offsetFix + radiusFix / 2;
					coords.y = tpBox + m + (w + m) * (bmp[1] - 1) - offsetFix + radiusFix / 2;
					coords.rotation = 45;
				} else if(bmp[2] === 'right') {
					coords.x = lftBox + m + (w + m) * (bmp[0] - 1);
					coords.y = tpBox + (w + m) * (bmp[1]) - offsetFix;
					coords.rotation = -45;
				}
				return coords;
			},

			init: function() {
				if(movementArr[movementArr.length - 1]) {
					var level = game.data.lvlMap;
					var x = level.bumpers.length;
					var lenth = Math.sqrt(2 * (Math.pow(getWidth(game.data.squareWidth), 2)));
					var wdtih = getWidth(game.data.squareWidth) / 10;
					var offsetFix = Math.sqrt((Math.pow((getWidth(game.data.squareWidth) / 16), 2)) / 2);
					var radiusFix = Math.sqrt(2 * Math.pow(getWidth(game.data.borderRadius), 2));
					var lftBox = getWidth(game.square.leftBoxMargin);
					var tpBox = getHeight(game.square.topBoxMargin);
					var w = getWidth(game.data.squareWidth);
					var m = getWidth(game.data.squareMargin);
					var bmper;

					for(var i = 0; i < x; i++) {
						bmper = level.bumpers[i];
						var coords = new game.bumpers.BumperCoords(bmper, offsetFix, radiusFix, lftBox, tpBox, w, m);
						var bumper = new createjs.Shape();
						bumper.graphics.beginFill("#FFFFFF").drawRoundRect(0, 0, lenth - radiusFix, wdtih, wdtih / 2).endFill();
						bumper.rotation = coords.rotation;

						if(bmper[2] == 'left') {
							bumper.x = bumper.midX = coords.x + getWidth(game.data.squareWidth) / 2;
							bumper.y = bumper.midY = coords.y + getWidth(game.data.squareWidth) / 2;
						} else {
							bumper.x = bumper.midX = coords.x + getWidth(game.data.squareWidth) / 2;
							bumper.y = bumper.midY = coords.y - getWidth(game.data.squareWidth) / 2;
						}

						bumper.goToPosX = coords.x;
						bumper.goToPosY = coords.y;


						game.bumpers.list.push(bumper);

						game.bumpers.popInWait(bumper);
					}

				}

				if(game.data.level != 'tutorial' || game.tutorial.part == 4) {
					setTimeout(function() {game.circle.init();}, 400 + game.data.delay);
				} else {
					setTimeout(function() {game.circle.init();}, 400);
				}
			},

			popInWait: function(bumper, t) {
				if(movementArr[movementArr.length - 1]) {
					stage.addChild(bumper);
					clickable = false;

					if(t) {
						createjs.Tween.get(bumper)
							.to({scaleX: 0.01, scaleY: 0.01}, 0)
							.to({scaleX: 1, scaleY: 1, x: bumper.goToPosX, y: bumper.goToPosY}, 200)
							.wait(t)
							.to({scaleX: 0.01, scaleY: 0.01, x: bumper.midX, y: bumper.midY}, 200);

							setTimeout(function() {
								stage.removeChild(bumper);
							}, 400 + t);
					} else {
						createjs.Tween.get(bumper)
							.to({scaleX: 0.01, scaleY: 0.01}, 0)
							.to({scaleX: 1, scaleY: 1, x: bumper.goToPosX, y: bumper.goToPosY}, 200)
							.wait(game.data.delay)
							.to({scaleX: 0.01, scaleY: 0.01, x: bumper.midX, y: bumper.midY}, 200);

							setTimeout(function() {
								stage.removeChild(bumper);
								clickable = true;
								streakClickable = true;
							}, 600 + game.data.delay);
					}
				}
			},

			popIn: function(bumper) {
				if(movementArr[movementArr.length - 1]) {
					stage.addChild(bumper);

					createjs.Tween.get(bumper)
						.to({scaleX: 0.01, scaleY: 0.01}, 0)
						.to({scaleX: 1, scaleY: 1, x: bumper.goToPosX, y: bumper.goToPosY}, 200);
				}
			},

			popOut: function(bumper) {
				if(movementArr[movementArr.length - 1]) {
					stage.addChild(bumper);

					createjs.Tween.get(bumper)
						.to({scaleX: 0.01, scaleY: 0.01, x: bumper.midX, y: bumper.midY}, 200);

					setTimeout(function() {
						stage.removeChild(bumper);
					}, 400);
				}
			}

		},

		circles: {

			list: [],

			clicked: function(e) {
				if(clickable && movementArr[movementArr.length - 1]) {
					var x = e.target;
					var streak = game.streak.circles;
					var y;
					if(game.data.level != 'tutorial') {
						y = [x.name, x.x, x.y];
						stage.removeChild(x);
						x = new createjs.Shape();
						x.graphics.beginFill('#A2672E').drawCircle(0, 0, x.radius).endFill();
						x.name = y[0];
						x.x = y[1];
						x.y = y[2];
						stage.removeChild(y);
						stage.addChild(x);
					}

					streak.clicked.push(x.name);

					if(game.streak.chosen.name == 'side-bomb') {
						var c;
						var d;
						if(x.name <= game.data.rows){
							for(var i = 0; i < game.data.rows; i++) {
								if(!!game.circles.list[i][1]) {
									c = game.circles.list[i][1];
									y = [c.name, c.x, c.y];
									stage.removeChild(c);
									c = new createjs.Shape();
									c.graphics.clear().beginFill('#A2672E').drawCircle(0, 0, x.radius).endFill();
									c.name = y[0];
									c.x = y[1];
									c.x = y[2];
									streak.clicked.push(y[0]);
								}
							}
						} else if(x.name <= game.data.rows * 2) {
							for(var i = game.data.rows; i < game.data.rows * 2; i++) {
								if(!!game.circles.list[i][1]) {
									c = game.circles.list[i][1];
									y = [c.name, c.x, c.y];
									stage.removeChild(c);
									c = new createjs.Shape();
									c.graphics.clear().beginFill('#A2672E').drawCircle(0, 0, x.radius).endFill();
									c.name = y[0];
									c.x = y[1];
									c.x = y[2];
									streak.clicked.push(y[0]);
								}
							}
						} else if(x.name <= game.data.rows * 3) {
							for(var i = game.data.rows * 2; i < game.data.rows * 3; i++) {
								if(!!game.circles.list[i][1]) {
									c = game.circles.list[i][1];
									y = [c.name, c.x, c.y];
									stage.removeChild(c);
									c = new createjs.Shape();
									c.graphics.clear().beginFill('#A2672E').drawCircle(0, 0, x.radius).endFill();
									c.name = y[0];
									c.x = y[1];
									c.x = y[2];
									streak.clicked.push(y[0]);
								}
							}
						} else if(x.name <= game.data.rows * 4) {
							for(var i = game.data.rows * 3; i < game.data.rows * 4; i++) {
								if(!!game.circles.list[i][1]) {
									c = game.circles.list[i][1];
									y = [c.name, c.x, c.y];
									stage.removeChild(c);
									c = new createjs.Shape();
									c.graphics.clear().beginFill('#A2672E').drawCircle(0, 0, x.radius).endFill();
									c.name = y[0];
									c.x = y[1];
									c.x = y[2];
									streak.clicked.push(y[0]);
								}
							}
						}
					}

					if(streak.clicked.length >= streak.max) {
						game.streak.chosen = {
							name: '',
							number: 0,
							points: 0
						};
						game.streak.circles = {
							max: 1,
							clicked: []
						};

						var Row = game.data.lvlMap.endPos[0];
						var Num = game.data.lvlMap.endPos[1];

						var win = false;

						for(var i = 0; i < streak.clicked.length; i++) {
							if((Row - 1) * game.data.rows + Num === streak.clicked[i]) {
								win = true;
							}
						}

						var time;

						if(game.data.level == 'tutorial') {
							if(x.tutorial) {
								time = game.circle.bounce();
								setTimeout(function() {
									game.next(true);
									game.tutorial.part++;
								}, time + 500);
							}
							if(game.tutorial.part == 4) {
								time = game.circle.bounce();
								setTimeout(function() {
									if(win) {
										game.tutorial.dialog.text = "Great,\nyou got\nit right!\n";
									} else {
										game.tutorial.dialog.text = "Oh, you got\nit wrong.\nIt's okay.";
									}
									game.tutorial.dialog.tTime = 1000;
									game.next();
									game.tutorial.part++;
								}, time + 500);
							}
						} else {
							time = game.circle.bounce();
							setTimeout(function() {
								if(win) {
									game.next(true);
								} else {
									game.next(false);
								}
							}, time + 500);
						}

						streak.clicked = [];

					}
				}
			},

			CircInit: function(position, num, background, lftBox, tpBox, w, m, mainSqWidth, mainSqHeight) {

				var xPosition;
				var yPosition;
				var radius;

				if(background) {
					radius = getWidth(game.data.squareWidth) * 0.4;
					relRadius = game.data.squareWidth * 0.4;
				} else {
					radius = getWidth(game.data.squareWidth) * 0.35;
					relRadius = game.data.squareWidth * 0.35;
				}

				if(position === 'left') {

					xPosition = lftBox - getWidth(10);
					yPosition = tpBox + w / 2 + m + (m + w) * (num - 1);

				} else if (position === 'right') {

					xPosition = lftBox + mainSqWidth + getWidth(10);
					yPosition = tpBox + w / 2 + m + (m + w) * (num - 1);

				} else if (position === 'top') {

					xPosition = lftBox + w / 2 + m + (m + w) * (num - 1);
					yPosition = tpBox - getHeight(5);

				} else if (position === 'bottom') {

					xPosition = lftBox + w / 2 + m + (m + w) * (num - 1);
					yPosition = tpBox + mainSqHeight + getHeight(5);
				}



				return {

					x: xPosition,
					y: yPosition,
					radius: radius,
					relRadius: relRadius


				}

			},

			init: function() {
				var totalCircles = game.data.rows * 4;
				var rows = game.data.rows;
				var tpBox = getHeight(game.square.topBoxMargin);
				var lftBox = getWidth(game.square.leftBoxMargin);
				var w = getWidth(game.data.squareWidth);
				var m = getWidth(game.data.squareMargin);
				var mainSqHeight = getHeight(100 - game.square.topBoxMargin * 2);
				var mainSqWidth = getWidth(100 - game.square.leftBoxMargin * 2);

				if(movementArr[movementArr.length - 1]) {
					for(var c = 0; c < totalCircles; c++) {

						var backCircInfo;
						var circInfo;
						var back = new createjs.Shape();

						if(c < rows) {
							backCircInfo = new game.circles.CircInit('top', c + 1, true, lftBox, tpBox, w, m, mainSqWidth, mainSqHeight);
						} else if(c < (rows * 2)) {
							backCircInfo = new game.circles.CircInit('right', c + 1 - rows, true, lftBox, tpBox, w, m, mainSqWidth, mainSqHeight);
						} else if(c < (rows * 3)) {
							backCircInfo = new game.circles.CircInit('bottom', c + 1 - rows * 2, true, lftBox, tpBox, w, m, mainSqWidth, mainSqHeight);
						} else if(c < (rows * 4)) {
							backCircInfo = new game.circles.CircInit('left', c + 1 - rows * 3, true, lftBox, tpBox, w, m, mainSqWidth, mainSqHeight);
						}

						var x = backCircInfo.x;
						var y = backCircInfo.y;
						back.radius = backCircInfo.radius;
						back.relRadius = backCircInfo.relRadius;
						back.graphics.beginFill('#955816').drawCircle(0, 0, backCircInfo.radius).endFill();
						back.alpha = 0;
						back.x = x;
						back.y = y;
                        back.cache(-back.radius, -back.radius, back.radius * 2, back.radius * 2);

						var circle = new createjs.Shape();

							if(c < rows) {
								circInfo = new game.circles.CircInit('top', c + 1, false, lftBox, tpBox, w, m, mainSqWidth, mainSqHeight);
							} else if(c < (rows * 2)) {
								circInfo = new game.circles.CircInit('right', c + 1 - rows, false, lftBox, tpBox, w, m, mainSqWidth, mainSqHeight);
							} else if(c < (rows * 3)) {
								circInfo = new game.circles.CircInit('bottom', c + 1 - rows * 2, false, lftBox, tpBox, w, m, mainSqWidth, mainSqHeight);
							} else if(c < (rows * 4)) {
								circInfo = new game.circles.CircInit('left', c + 1 - rows * 3, false, lftBox, tpBox, w, m, mainSqWidth, mainSqHeight);
							}
							x = circInfo.x;
							y = circInfo.y;

						circle.graphics.beginFill('#6b3500').drawCircle(0, 0, circInfo.radius).endFill();
						circle.alpha = 0;
						circle.relRadius = backCircInfo.relRadius;
						circle.radius = circInfo.radius;
						circle.name = c + 1;
						circle.x = x;
						circle.y = y;
                        circle.cache(-circle.radius, -circle.radius, circle.radius * 2, circle.radius * 2);

						stage.addChild(back);
						stage.addChild(circle);

						createjs.Tween.get(back,{loop: false})
							.to({alpha: 1}, 1000, createjs.Ease.getPowOut(3));
						createjs.Tween.get(circle, {loop: false})
							.to({x: x, y: y, alpha: 1, ready: true}, 1000, createjs.Ease.getPowOut(3));

							circle.on("mousedown", game.circles.clicked);

						game.circles.list.push([back, circle]);
					}
				}
			}

		},

		squares: {

			list: [],

			init: function() {
				if(movementArr[movementArr.length - 1]) {
					var w = getWidth(game.data.squareWidth);
					var rad = getWidth(game.data.borderRadius);
					var r = game.data.rows;
					var wd = game.data.squareWidth;
					var sqMargin = game.data.squareMargin;
					var lftBox = getWidth(game.square.leftBoxMargin);
					var tpBox = getHeight(game.square.topBoxMargin);
					var squares = game.data.squares;
					for(var i = 0; i < squares; i++) {

						var square = new createjs.Shape();
						square.name = i + 1;
						square.graphics.beginFill('#6b3500').drawRoundRect(0, 0, w, w, rad).endFill();
						position = game.squares.squareCoords(i + 1, r, wd, sqMargin, lftBox, tpBox);
						square.x = position.x;
						var y = position.y;
						square.y = y + getWidth(wd) * 3;

						square.alpha = 0;
						stage.addChild(square);
                        square.cache(0, 0, w, w);

						createjs.Tween.get(square, {loop: false})
							.to({y: y, alpha: 1}, 1000, createjs.Ease.getPowOut(3));

						game.squares.list.push(square);
					}
				}

			},

			squareCoords: function(number, rows, width, margin, lftBox, tpBox) {

				wdth = getWidth(width);
				margin = getWidth(margin);

				var x = number % rows;

				if(x == 0) {x = rows;}

				var y = Math.floor((number - 1) / rows);

				var coords = {

					x: (wdth + margin) * (x - 1) + margin + lftBox,
					y: tpBox + margin + ((wdth + margin) * y)

				}

				return coords;


			}

		},

		portals: {

			list: [],

			init: function() {

			}

		},

		data: {

			squares: undefined,
			squareWidth: undefined,
			squareMargin: undefined,
			level: undefined,
			bumpers: undefined,
			hits: undefined,
			delay: undefined,
			portals: undefined,
			borderRadius: undefined

		},

		player: {

			score: undefined,

			scr: 0,

			tries: undefined,

			streak: undefined,

			level: undefined,

			levelUpdate: function(n, c) {
				console.log('update changed');
				game.player.level.text = "Level " + n;
				game.player.streak.text = "x" + c;
			},

			menu: function() {
				var home = new createjs.Shape();
				home.graphics.beginFill("White").drawRoundRect(0, 0, getWidth(15), getWidth(15), getWidth(3));
				home.x = home.y = getWidth(2);
				home.on("mousedown", function(e) {movementArr[movementArr.length - 1] = false; stage.removeChild(e.target, e.target.bars[0], e.target.bars[1], e.target.bars[2]); game.clear.menu();})
				home.bars = [];
				for(var i = 0; i < 3; i++) {
					home.bars.push(new createjs.Shape());
					home.bars[i].graphics.beginFill("Black").drawRoundRect(0, 0, getWidth(9), getWidth(2), getWidth(1));
					home.bars[i].x = getWidth(5);
					home.bars[i].y = getWidth(5 + (3 * i));
				}
				game.player.homeButton = home;
				stage.addChild(game.player.homeButton);
				stage.addChild(game.player.homeButton.bars[0]);
				stage.addChild(game.player.homeButton.bars[1]);
				stage.addChild(game.player.homeButton.bars[2]);
			}

		},

		streak: {

			addAnother: function() {
				if(game.streak.current >= 4) {
					if(game.streak.list.length == 4) {
						game.streak.delete();
					}
					if(game.streak.current > 7) {
						game.streak.current = 7;
					}
					game.streak.list.push([game.streak.current]);
					var b = new createjs.Shape();
					if(game.streak.current == 4) {
						b.graphics.beginFill("#186291");
					} else if(game.streak.current == 5) {
						b.graphics.beginFill("#266913");
					} else if(game.streak.current == 6) {
						b.graphics.beginFill("#ff0000");
					} else if(game.streak.current == 7) {
						b.graphics.beginFill("#000000");
					}
					b.graphics.drawRoundRect(0, 0, getWidth(20), getWidth(20), getWidth(1.25));
					b.y = getHeight(97 - (game.square.topBoxMargin / 2));
					game.streak.list[game.streak.list.length - 1].push(b);
					b.name = game.streak.list.length;
					var c = new createjs.Text("x" + game.streak.current, getWidth(10) + "px PerfectPixel", "White");
					c.textAlign = 'center';
					c.y = b.y + getHeight(1);
					c.x = 0;
					game.streak.list[game.streak.list.length - 1].push(c);
					stage.addChild(game.streak.list[game.streak.list.length - 1][1]);
					stage.addChild(game.streak.list[game.streak.list.length - 1][2]);
					b.on("mousedown", game.streak[game.streak.current]);
					game.streak.current = 1;
					game.streak.update();
				}
			},

			update: function() {
				for(var i = 0; i < game.streak.list.length; i++) {
					var r = ((width * (i + 1)) / (game.streak.list.length + 1)) - getWidth(10);
					createjs.Tween.get(game.streak.list[i][1])
						.to({x: r}, 500, createjs.Ease.quadOut);

					createjs.Tween.get(game.streak.list[i][2])
						.to({x: r + getWidth(10)}, 500, createjs.Ease.quadOut);
				}
			},

			current: 0,

			list: [],

			chosen: {
				number: 0,
				name: '',
				points: 0
			},

			circles: {
				max: 1,
				clicked: []
			},

			4: function(e) {
				if(streakClickable) {
					createjs.Tween.get(e.target)
						.to({x: getWidth(50), y: 0}, 500);
					createjs.Tween.get(game.streak.list[e.target.name - 1][2])
						.to({x: getWidth(50), y: 0}, 500);
					stage.removeChild(e.target);
					stage.removeChild(game.streak.list[e.target.name - 1][2]);
					game.streak.list.splice(e.target.name - 1, 1);
					game.streak.update();
					game.streak.chosen = {
						number: 4,
						name: '2-second-peek',
						points: 90
					}
					//Gives you 2 more seconds
					setTimeout(function() {
						for(var i = 0; i < game.bumpers.list.length; i++) {
							game.bumpers.popInWait(game.bumpers.list[i], 2000);
							setTimeout(function() {
								clickable = true;
							}, 2000)
						}
					}, 500);
				}
			},

			5: function(e) {
				if(streakClickable) {
					createjs.Tween.get(e.target)
						.to({x: getWidth(50), y: 0}, 500);
					createjs.Tween.get(game.streak.list[e.target.name - 1][2])
						.to({x: getWidth(50), y: 0}, 500);
					stage.removeChild(e.target);
					stage.removeChild(game.streak.list[e.target.name - 1][2]);
					game.streak.list.splice(e.target.name - 1, 1);
					game.streak.update();
					game.streak.chosen = {
						number: 5,
						name: 'extended-tries',
						points: 120
					}
					//extended tries
					setTimeout(function() {
						game.streak.circles.max = Math.floor(game.data.rows / 2) + 1;
					}, 500);
				}
			},

			6: function(e) {
				if(streakClickable) {
					createjs.Tween.get(e.target)
						.to({x: getWidth(50), y: 0}, 500);
					createjs.Tween.get(game.streak.list[e.target.name - 1][2])
						.to({x: getWidth(50), y: 0}, 500);
					stage.removeChild(e.target);
					stage.removeChild(game.streak.list[e.target.name - 1][2]);
					game.streak.list.splice(e.target.name - 1, 1);
					game.streak.update();
					game.streak.chosen = {
						number: 6,
						name: 'side-bomb',
						points: 180
					}
					//entire side bomb
				}
			},

			7: function(e) {
				if(streakClickable) {
					createjs.Tween.get(e.target)
						.to({x: getWidth(50), y: 0}, 500);
					createjs.Tween.get(game.streak.list[e.target.name - 1][2])
						.to({x: getWidth(50), y: 0}, 500);
					stage.removeChild(e.target);
					stage.removeChild(game.streak.list[e.target.name - 1][2]);
					game.streak.list.splice(e.target.name - 1, 1);
					game.streak.update();
					setTimeout(function() {
						game.next(true);
					}, 500);
					game.streak.chosen = {
						number: 7,
						name: 'level-skip',
						points: 200
					}
					//skip the level / get it right
				}
			}

		},

		next: function(b) {
			mvmnt = movementArr.length - 1;
			if(movementArr[mvmnt]) {
				console.log('part ' + game.tutorial.part);
				var time;

				if(game.data.level == 'tutorial') {
					if(game.tutorial.part == 4) {
						if(movementArr[mvmnt]) {
							var y = game.tutorial.dialog;
							time = game.dialog.slideIn(y.text, y.tTime, y.size, y.y);
							var taim = time;
							setTimeout(function() {
								time += game.dialog.slideIn(y.altText, y.time, y.size, y.y);
								setTimeout(function() {
									if(movementArr[mvmnt]) {
										game.tutorial.part5();
									}
								}, time);
							}, taim);
						}
					}
				}

				if(b) {
					game.streak.current++;
					if(game.data.level == 'tutorial') {
						if(game.tutorial.part != 4) {
							if(movementArr[mvmnt]) {
								var y = game.tutorial.dialog;
								time = game.dialog.slideIn(y.text, y.time, y.size, y.y);
								setTimeout(function() {
									if(movementArr[mvmnt]) {
										game.tutorial["part" + game.tutorial.part]();
									}
								}, time);
							}
						}
					} else {
						if(game.data.level != 20) {
							if(movementArr[mvmnt]) {
								time = game.dialog.slideIn('Good job!\nMove on to \nlevel ' + (game.data.level + 1), 900, 10, 40);
								setTimeout(function() {
									if(movementArr[mvmnt]) {
										game.player.levelUpdate(game.data.level + 1, game.streak.current);
										make.level(game.data.level + 1, undefined);
									}
								}, time);
							}
						} else {
							game.end(true);
						}
					}
				} else if(b === false){
					game.player.tries--;
					var wrongTries = game.player.tries;
					if(game.player.tries === 0) {
						game.end(false);
					} else {
						game.streak.addAnother();
						var tries;
						if(game.player.tries == 1) {
							tries = 'try.';
						} else {
							tries = 'tries.';
						}
						time = game.dialog.slideIn('Try again.\nYou have\n' + game.player.tries + ' more\n' + tries, 700, 11, 40);
						setTimeout(function() {
							if(movementArr[mvmnt]) {
								make.level(game.data.level, undefined, true);
								game.player.tries = wrongTries;
							}
						}, time);
					}
				}
				if(game.data.level != 'tutorial') {
					if(b) {
						game.player.scr += (game.data.level * (game.player.tries * 20)) + 50;
					}
					console.log(game.player.tries);
					console.log(game.streak.chosen.points);
					game.player.score.text = "Score: " + game.player.scr;
				}
			}
		},

		set: {

			level: function(level, n) {
				game.data = {};
				if(level != 'tutorial') {
					game.data = new game.set.levels["Level" + level]();
				} else {
					game.data = new game.set.levels['Tutorial'](n)
				}
			},

			levels: {

				Tutorial: function(n) {

					var squares = 9;
					var rows = Math.sqrt(squares);
					var squareWidth = 0.6 * 0.85 / rows * 100;
					var squareMargin = 0.6 * 0.15 / (rows + 1) * 100;
					var borderRadius = 0.6 * 0.85 / rows * 100 / 16;
					if(n) {
						var lvlMap = new Map.lvl('tutorial', n);
					} else {
						n = 1;
					}
					game.player.tries = 3;


					return {

						n: n,
						squares: squares,
						squareWidth: squareWidth,
						squareMargin: squareMargin,
						rows: rows,
						level: 'tutorial',
						lvlMap: lvlMap,
						start: lvlMap.startPos,
						bumpers: lvlMap.bumpers.length,
						hits: lvlMap.hits,
						delay: lvlMap.delay,
						bounceTime: lvlMap.spaces * 300,
						portals: lvlMap.portals,
						borderRadius: borderRadius
					};

				},

				Level1: function() {

					var squares = 9;
					var rows = Math.sqrt(squares);
					var squareWidth = 0.6 * 0.85 / rows * 100;
					var squareMargin = 0.6 * 0.15 / (rows + 1) * 100;
					var borderRadius = 0.6 * 0.85 / rows * 100 / 16;
					var lvlMap = new Map.lvl(1);
					game.player.tries = 3;


					return {

						squares: squares,
						squareWidth: squareWidth,
						squareMargin: squareMargin,
						rows: rows,
						level: 1,
						lvlMap: lvlMap,
						start: lvlMap.startPos,
						bumpers: lvlMap.bumpers.length,
						hits: lvlMap.hits,
						delay: lvlMap.delay,
						bounceTime: lvlMap.spaces * 300,
						portals: lvlMap.portals,
						borderRadius: borderRadius

					};

				},

				Level2: function() {

					var squares = 9;
					var rows = Math.sqrt(squares);
					var squareWidth = 0.6 * 0.85 / rows * 100;
					var squareMargin = 0.6 * 0.15 / (rows + 1) * 100;
					var borderRadius = 0.6 * 0.85 / rows * 100 / 16;
					var lvlMap = new Map.lvl(2);
					game.player.tries = 3;


					return {

						squares: squares,
						squareWidth: squareWidth,
						squareMargin: squareMargin,
						rows: rows,
						level: 2,
						lvlMap: lvlMap,
						start: lvlMap.startPos,
						bumpers: lvlMap.bumpers.length,
						hits: lvlMap.hits,
						delay: lvlMap.delay,
						bounceTime: lvlMap.spaces * 300,
						portals: lvlMap.portals,
						borderRadius: borderRadius

					};

				},

				Level3: function() {

					var squares = 16;
					var rows = Math.sqrt(squares);
					var squareWidth = 0.6 * 0.85 / rows * 100;
					var squareMargin = 0.6 * 0.15 / (rows + 1) * 100;
					var borderRadius = 0.6 * 0.85 / rows * 100 / 16;
					var lvlMap = new Map.lvl(3);
					game.player.tries = 3;


					return {

						squares: squares,
						squareWidth: squareWidth,
						squareMargin: squareMargin,
						rows: rows,
						level: 3,
						lvlMap: lvlMap,
						start: lvlMap.startPos,
						bumpers: lvlMap.bumpers.length,
						hits: lvlMap.hits,
						delay: lvlMap.delay,
						bounceTime: lvlMap.spaces * 300,
						portals: lvlMap.portals,
						borderRadius: borderRadius

					};

				},

				Level4: function() {

					var squares = 16;
					var rows = Math.sqrt(squares);
					var squareWidth = 0.6 * 0.85 / rows * 100;
					var squareMargin = 0.6 * 0.15 / (rows + 1) * 100;
					var borderRadius = 0.6 * 0.85 / rows * 100 / 16;
					var lvlMap = new Map.lvl(4);
					game.player.tries = 3;


					return {

						squares: squares,
						squareWidth: squareWidth,
						squareMargin: squareMargin,
						rows: rows,
						level: 4,
						lvlMap: lvlMap,
						start: lvlMap.startPos,
						bumpers: lvlMap.bumpers.length,
						hits: lvlMap.hits,
						delay: lvlMap.delay,
						bounceTime: lvlMap.spaces * 300,
						portals: lvlMap.portals,
						borderRadius: borderRadius

					};

				},

				Level5: function() {

					var squares = 16;
					var rows = Math.sqrt(squares);
					var squareWidth = 0.6 * 0.85 / rows * 100;
					var squareMargin = 0.6 * 0.15 / (rows + 1) * 100;
					var borderRadius = 0.6 * 0.85 / rows * 100 / 16;
					var lvlMap = new Map.lvl(5);
					game.player.tries = 3;


					return {

						squares: squares,
						squareWidth: squareWidth,
						squareMargin: squareMargin,
						rows: rows,
						level: 5,
						lvlMap: lvlMap,
						start: lvlMap.startPos,
						bumpers: lvlMap.bumpers.length,
						hits: lvlMap.hits,
						delay: lvlMap.delay,
						bounceTime: lvlMap.spaces * 300,
						portals: lvlMap.portals,
						borderRadius: borderRadius

					};

				},

				Level6: function() {

					var squares = 25;
					var rows = Math.sqrt(squares);
					var squareWidth = 0.6 * 0.85 / rows * 100;
					var squareMargin = 0.6 * 0.15 / (rows + 1) * 100;
					var borderRadius = 0.6 * 0.85 / rows * 100 / 16;
					var lvlMap = new Map.lvl(6);
					game.player.tries = 3;


					return {

						squares: squares,
						squareWidth: squareWidth,
						squareMargin: squareMargin,
						rows: rows,
						level: 6,
						lvlMap: lvlMap,
						start: lvlMap.startPos,
						bumpers: lvlMap.bumpers.length,
						hits: lvlMap.hits,
						delay: lvlMap.delay,
						bounceTime: lvlMap.spaces * 300,
						portals: lvlMap.portals,
						borderRadius: borderRadius

					};

				},

				Level7: function() {

					var squares = 25;
					var rows = Math.sqrt(squares);
					var squareWidth = 0.6 * 0.85 / rows * 100;
					var squareMargin = 0.6 * 0.15 / (rows + 1) * 100;
					var borderRadius = 0.6 * 0.85 / rows * 100 / 16;
					var lvlMap = new Map.lvl(7);
					game.player.tries = 3;


					return {

						squares: squares,
						squareWidth: squareWidth,
						squareMargin: squareMargin,
						rows: rows,
						level: 7,
						lvlMap: lvlMap,
						start: lvlMap.startPos,
						bumpers: lvlMap.bumpers.length,
						hits: lvlMap.hits,
						delay: lvlMap.delay,
						bounceTime: lvlMap.spaces * 300,
						portals: lvlMap.portals,
						borderRadius: borderRadius

					};

				},

				Level8: function() {

					var squares = 25;
					var rows = Math.sqrt(squares);
					var squareWidth = 0.6 * 0.85 / rows * 100;
					var squareMargin = 0.6 * 0.15 / (rows + 1) * 100;
					var borderRadius = 0.6 * 0.85 / rows * 100 / 16;
					var lvlMap = new Map.lvl(8);
					game.player.tries = 3;


					return {

						squares: squares,
						squareWidth: squareWidth,
						squareMargin: squareMargin,
						rows: rows,
						level: 8,
						lvlMap: lvlMap,
						start: lvlMap.startPos,
						bumpers: lvlMap.bumpers.length,
						hits: lvlMap.hits,
						delay: lvlMap.delay,
						bounceTime: lvlMap.spaces * 300,
						portals: lvlMap.portals,
						borderRadius: borderRadius

					};

				},

				Level9: function() {

					var squares = 25;
					var rows = Math.sqrt(squares);
					var squareWidth = 0.6 * 0.85 / rows * 100;
					var squareMargin = 0.6 * 0.15 / (rows + 1) * 100;
					var borderRadius = 0.6 * 0.85 / rows * 100 / 16;
					var lvlMap = new Map.lvl(9);
					game.player.tries = 3;


					return {

						squares: squares,
						squareWidth: squareWidth,
						squareMargin: squareMargin,
						rows: rows,
						level: 9,
						lvlMap: lvlMap,
						start: lvlMap.startPos,
						bumpers: lvlMap.bumpers.length,
						hits: lvlMap.hits,
						delay: lvlMap.delay,
						bounceTime: lvlMap.spaces * 300,
						portals: lvlMap.portals,
						borderRadius: borderRadius

					};

				},

				Level10: function() {

					var squares = 36;
					var rows = Math.sqrt(squares);
					var squareWidth = 0.6 * 0.85 / rows * 100;
					var squareMargin = 0.6 * 0.15 / (rows + 1) * 100;
					var borderRadius = 0.6 * 0.85 / rows * 100 / 16;
					var lvlMap = new Map.lvl(10);
					game.player.tries = 3;


					return {

						squares: squares,
						squareWidth: squareWidth,
						squareMargin: squareMargin,
						rows: rows,
						level: 10,
						lvlMap: lvlMap,
						start: lvlMap.startPos,
						bumpers: lvlMap.bumpers.length,
						hits: lvlMap.hits,
						delay: lvlMap.delay,
						bounceTime: lvlMap.spaces * 300,
						portals: lvlMap.portals,
						borderRadius: borderRadius

					};

				},

				Level11: function() {

					var squares = 36;
					var rows = Math.sqrt(squares);
					var squareWidth = 0.6 * 0.85 / rows * 100;
					var squareMargin = 0.6 * 0.15 / (rows + 1) * 100;
					var borderRadius = 0.6 * 0.85 / rows * 100 / 16;
					var lvlMap = new Map.lvl(11);
					game.player.tries = 3;


					return {

						squares: squares,
						squareWidth: squareWidth,
						squareMargin: squareMargin,
						rows: rows,
						level: 11,
						lvlMap: lvlMap,
						start: lvlMap.startPos,
						bumpers: lvlMap.bumpers.length,
						hits: lvlMap.hits,
						delay: lvlMap.delay,
						bounceTime: lvlMap.spaces * 300,
						portals: lvlMap.portals,
						borderRadius: borderRadius

					};

				},

				Level12: function() {

					var squares = 36;
					var rows = Math.sqrt(squares);
					var squareWidth = 0.6 * 0.85 / rows * 100;
					var squareMargin = 0.6 * 0.15 / (rows + 1) * 100;
					var borderRadius = 0.6 * 0.85 / rows * 100 / 16;
					var lvlMap = new Map.lvl(12);
					game.player.tries = 3;


					return {

						squares: squares,
						squareWidth: squareWidth,
						squareMargin: squareMargin,
						rows: rows,
						level: 12,
						lvlMap: lvlMap,
						start: lvlMap.startPos,
						bumpers: lvlMap.bumpers.length,
						hits: lvlMap.hits,
						delay: lvlMap.delay,
						bounceTime: lvlMap.spaces * 300,
						portals: lvlMap.portals,
						borderRadius: borderRadius

					};

				},

				Level13: function() {

					var squares = 36;
					var rows = Math.sqrt(squares);
					var squareWidth = 0.6 * 0.85 / rows * 100;
					var squareMargin = 0.6 * 0.15 / (rows + 1) * 100;
					var borderRadius = 0.6 * 0.85 / rows * 100 / 16;
					var lvlMap = new Map.lvl(13);
					game.player.tries = 3;


					return {

						squares: squares,
						squareWidth: squareWidth,
						squareMargin: squareMargin,
						rows: rows,
						level: 13,
						lvlMap: lvlMap,
						start: lvlMap.startPos,
						bumpers: lvlMap.bumpers.length,
						hits: lvlMap.hits,
						delay: lvlMap.delay,
						bounceTime: lvlMap.spaces * 300,
						portals: lvlMap.portals,
						borderRadius: borderRadius

					};

				},

				Level14: function() {

					var squares = 36;
					var rows = Math.sqrt(squares);
					var squareWidth = 0.6 * 0.85 / rows * 100;
					var squareMargin = 0.6 * 0.15 / (rows + 1) * 100;
					var borderRadius = 0.6 * 0.85 / rows * 100 / 16;
					var lvlMap = new Map.lvl(14);
					game.player.tries = 3;


					return {

						squares: squares,
						squareWidth: squareWidth,
						squareMargin: squareMargin,
						rows: rows,
						level: 14,
						lvlMap: lvlMap,
						start: lvlMap.startPos,
						bumpers: lvlMap.bumpers.length,
						hits: lvlMap.hits,
						delay: lvlMap.delay,
						bounceTime: lvlMap.spaces * 300,
						portals: lvlMap.portals,
						borderRadius: borderRadius

					};

				},

				Level15: function() {

					var squares = 36;
					var rows = Math.sqrt(squares);
					var squareWidth = 0.6 * 0.85 / rows * 100;
					var squareMargin = 0.6 * 0.15 / (rows + 1) * 100;
					var borderRadius = 0.6 * 0.85 / rows * 100 / 16;
					var lvlMap = new Map.lvl(15);
					game.player.tries = 3;


					return {

						squares: squares,
						squareWidth: squareWidth,
						squareMargin: squareMargin,
						rows: rows,
						level: 15,
						lvlMap: lvlMap,
						start: lvlMap.startPos,
						bumpers: lvlMap.bumpers.length,
						hits: lvlMap.hits,
						delay: lvlMap.delay,
						bounceTime: lvlMap.spaces * 300,
						portals: lvlMap.portals,
						borderRadius: borderRadius

					};

				},

				Level16: function() {

					var squares = 36;
					var rows = Math.sqrt(squares);
					var squareWidth = 0.6 * 0.85 / rows * 100;
					var squareMargin = 0.6 * 0.15 / (rows + 1) * 100;
					var borderRadius = 0.6 * 0.85 / rows * 100 / 16;
					var lvlMap = new Map.lvl(13);
					game.player.tries = 3;


					return {

						squares: squares,
						squareWidth: squareWidth,
						squareMargin: squareMargin,
						rows: rows,
						level: 16,
						lvlMap: lvlMap,
						start: lvlMap.startPos,
						bumpers: lvlMap.bumpers.length,
						hits: lvlMap.hits,
						delay: lvlMap.delay,
						bounceTime: lvlMap.spaces * 300,
						portals: lvlMap.portals,
						borderRadius: borderRadius

					};

				},

				Level17: function() {

					var squares = 36;
					var rows = Math.sqrt(squares);
					var squareWidth = 0.6 * 0.85 / rows * 100;
					var squareMargin = 0.6 * 0.15 / (rows + 1) * 100;
					var borderRadius = 0.6 * 0.85 / rows * 100 / 16;
					var lvlMap = new Map.lvl(14);
					game.player.tries = 3;


					return {

						squares: squares,
						squareWidth: squareWidth,
						squareMargin: squareMargin,
						rows: rows,
						level: 14,
						lvlMap: lvlMap,
						start: lvlMap.startPos,
						bumpers: lvlMap.bumpers.length,
						hits: lvlMap.hits,
						delay: lvlMap.delay,
						bounceTime: lvlMap.spaces * 300,
						portals: lvlMap.portals,
						borderRadius: borderRadius

					};

				},

				Level18: function() {

					var squares = 36;
					var rows = Math.sqrt(squares);
					var squareWidth = 0.6 * 0.85 / rows * 100;
					var squareMargin = 0.6 * 0.15 / (rows + 1) * 100;
					var borderRadius = 0.6 * 0.85 / rows * 100 / 16;
					var lvlMap = new Map.lvl(14);
					game.player.tries = 3;


					return {

						squares: squares,
						squareWidth: squareWidth,
						squareMargin: squareMargin,
						rows: rows,
						level: 18,
						lvlMap: lvlMap,
						start: lvlMap.startPos,
						bumpers: lvlMap.bumpers.length,
						hits: lvlMap.hits,
						delay: lvlMap.delay,
						bounceTime: lvlMap.spaces * 300,
						portals: lvlMap.portals,
						borderRadius: borderRadius

					};

				},

				Level19: function() {

					var squares = 36;
					var rows = Math.sqrt(squares);
					var squareWidth = 0.6 * 0.85 / rows * 100;
					var squareMargin = 0.6 * 0.15 / (rows + 1) * 100;
					var borderRadius = 0.6 * 0.85 / rows * 100 / 16;
					var lvlMap = new Map.lvl(15);
					game.player.tries = 3;


					return {

						squares: squares,
						squareWidth: squareWidth,
						squareMargin: squareMargin,
						rows: rows,
						level: 19,
						lvlMap: lvlMap,
						start: lvlMap.startPos,
						bumpers: lvlMap.bumpers.length,
						hits: lvlMap.hits,
						delay: lvlMap.delay,
						bounceTime: lvlMap.spaces * 300,
						portals: lvlMap.portals,
						borderRadius: borderRadius

					};

				},

				Level20: function() {

					var squares = 36;
					var rows = Math.sqrt(squares);
					var squareWidth = 0.6 * 0.85 / rows * 100;
					var squareMargin = 0.6 * 0.15 / (rows + 1) * 100;
					var borderRadius = 0.6 * 0.85 / rows * 100 / 16;
					var lvlMap = new Map.lvl(15);
					game.player.tries = 3;


					return {

						squares: squares,
						squareWidth: squareWidth,
						squareMargin: squareMargin,
						rows: rows,
						level: 20,
						lvlMap: lvlMap,
						start: lvlMap.startPos,
						bumpers: lvlMap.bumpers.length,
						hits: lvlMap.hits,
						delay: lvlMap.delay,
						bounceTime: lvlMap.spaces * 300,
						portals: lvlMap.portals,
						borderRadius: borderRadius

					};

				},

			}

		},

		clear: {

			it: function(str) {
				var nm;
				if(str == 'circles') {
					nm = game.circles.list.length;

					for(var i = 0; i < nm; i++) {
						if(game.circles.list[i] != false) {
							var shp = game.circles.list[i][0];
							createjs.Tween.get(shp)
								.to({scaleX: 0.01, scaleY: 0.01}, 300);
							setTimeout(function(){stage.removeChild(shp);}, 300);

							shp = game.circles.list[i][1];
							createjs.Tween.get(shp)
								.to({scaleX: 0.01, scaleY: 0.01, x: getWidth(50), y: height}, 300);
							setTimeout(function(){stage.removeChild(shp);}, 300);
						}
					}
					game.circles.list = [];
				} else if(str == 'squares') {
					nm = game.squares.list.length;
					for(var i = 0; i < nm; i++) {
						var shp = game.squares.list[i];
						createjs.Tween.get(shp)
							.to({scaleX: 0.01, scaleY: 0.01, x: getWidth(50), y: height}, 300);
						setTimeout(function(){stage.removeChild(shp);}, 300);
					}
					game.squares.list = [];
				} else if(str == 'bumpers') {
					nm = game.bumpers.list.length;
					for(var i = 0; i < nm; i++) {
						var shp = game.bumpers.list[i];
						stage.removeChild(shp);
					}
					game.bumpers.list = [];
				} else if(str == 'portals') {
					nm = game.portals.list.length;
					for(var i = 0; i < nm; i++) {
						var shp = game.portals.list[i];
						createjs.Tween.get(shp)
							.to({scaleX: 0.01, scaleY: 0.01, x: getWidth(50), y: height}, 300);
						setTimeout(function(){stage.removeChild(shp);}, 300);
					}
					game.portals.list = [];
				} else if(str == 'circle') {
					if(game.data.lvlMap && game.data.lvlMap.startPos) {
						createjs.Tween.get(game.circle.circle)
							.to({x: getWidth(50), y: 0}, 200);
						setTimeout(function() {
							stage.removeChild(game.circle.circle);
							game.circle.circle = {};
						}, 200)
					}
				} else if(str == 'streaks') {
					for(var i = 0; i < game.streak.list.length; i++) {
						stage.removeChild(game.streak.list[i][1]);
						stage.removeChild(game.streak.list[i][2]);
					}
					game.streak.list = [];
				}
			},

			all: function() {
				var time = game.clear.it('circle');
				setTimeout(function() {
					game.clear.it('squares');
					game.clear.it('circles');
					game.clear.it('bumpers');
					game.clear.it('portals');
				}, time)
			},

			menu: function() {
				game.clear.all();
				stage.removeChild(game.square.square, game.player.level, game.player.streak, game.player.score);
				game.square.square = game.player.level = game.player.streak = game.player.score = {};
				game.player.score
				stage.removeChild(game.player.homeButton);
				for(var i = 0; i < 3; i++) {
					stage.removeChild(game.player.homeButton.bars[i]);
				}
				game.player.homeButton = {};
				if(game.tutorial.txt) {
					console.log(stage.removeChild(game.tutorial.txt));
					game.tutorial.txt = undefined;
				}
				var x = game.tutorial.trash.length;
				for(var i = 0; i < x; i++) {
					stage.removeChild(game.tutorial.trash[i]);
				}
				game.tutorial.trash = [];
				menu.render(true);
				movementArr[movementArr.length - 1] = false;
				game.player.scr = 0;
				stage.removeChild(game.dialog.back);
				stage.removeChild(game.dialog.box);
				stage.removeChild(game.dialog.msg);
				game.dialog.back = game.dialog.box = game.dialog.msg = {};
			}
		},


		tutorial: {

			txt: undefined,

			dialog: {},

			part: 1,

			trash: [],

			part1: function() {
				game.player.menu();
				make.level('tutorial', 1);
				var mvmnt = movementArr.length - 1;
				game.tutorial.txt = new createjs.Text("Memorize\nthe bumper\nlocation.", getWidth(9) + "px Organo", "#FFFFFF");
				var txt = game.tutorial.txt;
				txt.textAlign = 'center';
				stage.addChild(txt);
				txt.x = getWidth(50);
				txt.y = getHeight(5);
				clickable = false;
				setTimeout(function() {
					if(movementArr[mvmnt]) {
						txt.text = "Watch\nthe path\nof the ball.";
						var line = new createjs.Shape();
						line.graphics.beginFill("White").drawRect(0, 0, getWidth(game.data.squareWidth) / 6, getWidth(game.data.squareWidth) / 10);
						game.tutorial.trash.push(line);
						stage.addChild(line);
						line.x = getWidth(game.square.leftBoxMargin + game.data.squareMargin * 2 + game.data.squareWidth * (17/12));
						line.y = getHeight(game.square.topBoxMargin) + getWidth(game.data.squareMargin);

						createjs.Tween.get(line)
							.to({scaleY: 17}, 1500)

						var line2 = new createjs.Shape();
						setTimeout(function() {
							if(movementArr[mvmnt]) {
								line2.graphics.beginFill("White").drawRect(0, 0, getWidth(game.data.squareWidth) / 10, getWidth(game.data.squareWidth) / 6);
								stage.addChild(line2);
								game.tutorial.trash.push(line2);
								line2.x = line.x + getWidth(game.data.squareWidth / 10);
								line2.y = getHeight(game.square.topBoxMargin) + getWidth(game.data.squareMargin * 2 + game.data.squareWidth * (17 / 12));

								createjs.Tween.get(line2)
									.to({scaleX: -17}, 1500);
							}
						}, 1500);

						setTimeout(function() {
							createjs.Tween.get(line)
								.to({alpha: 0}, 500);
							createjs.Tween.get(line2)
								.to({alpha: 0}, 500);
							stage.removeChild(line);
							stage.removeChild(line2);
						}, 4000);
					}
				}, 5000);
				setTimeout(function() {
					if(movementArr[mvmnt]) {
						clickable = true;
						txt.text = "Click the\nhighlighted\ncircle.";
						var x = game.circles.list[10][1];
						var crc = new createjs.Shape();
						crc.graphics.beginFill("#A2672E").drawCircle(0, 0, x.radius);
						crc.x = x.x;
						crc.y = x.y;
						crc.radius = x.radius;
						crc.on("mousedown", game.circles.clicked);
						crc.tutorial = true;
						stage.removeChild(game.circles.list[10][1]);
						game.circles.list[10][1] = crc;
						stage.addChild(crc);
						game.tutorial.dialog = {
							text: "The ball goes\nacross the\nbumper.\n\nTry another\none.",
							time: 4000,
							size: 9,
							y: 35
						};
					}
				}, 10000);
			},

			part2: function() {
				clickable = false;
				var txt = game.tutorial.txt;
				var line = new createjs.Shape();
				var line2 = new createjs.Shape();
				make.level('tutorial', 2);
				var mvmnt = movementArr.length - 1;
				txt.text = "Memorize\nthe bumper\nlocation.";
				setTimeout(function() {
					if(movementArr[mvmnt]) {
						txt.text = "Watch\nthe path\nof this ball.";
						line.graphics.beginFill("White").drawRect(0, 0, getWidth(game.data.squareWidth) / 6, getWidth(game.data.squareWidth) / 10);
						game.tutorial.trash.push(line);
						stage.addChild(line);
						line.x = getWidth(game.square.leftBoxMargin + game.data.squareMargin * 2 + game.data.squareWidth * (17/12));
						line.y = getHeight(game.square.topBoxMargin) + getWidth(game.data.squareMargin);

						createjs.Tween.get(line)
							.to({scaleY: 17}, 1500);

						setTimeout(function() {
							if(movementArr[mvmnt]) {
								line2.graphics.beginFill("White").drawRect(0, 0, getWidth(game.data.squareWidth) / 10, getWidth(game.data.squareWidth) / 6);
								game.tutorial.trash.push(line2);
								stage.addChild(line2);
								line2.x = line.x + getWidth(game.data.squareWidth / 10);
								line2.y = getHeight(game.square.topBoxMargin) + getWidth(game.data.squareMargin * 2 + game.data.squareWidth * (17 / 12));

								createjs.Tween.get(line2)
									.to({scaleX: 17}, 1500);
							}
						}, 1500);
					}
				}, 5000);

				setTimeout(function() {
					if(movementArr[mvmnt]) {
						clickable = true;
						stage.removeChild(line);
						stage.removeChild(line2);
						txt.text = "Click the\nhighlighted\ncircle.";

						var x = game.circles.list[4][1];
						var crc = new createjs.Shape();
						crc.graphics.beginFill("#A2672E").drawCircle(0, 0, x.radius);
						crc.x = x.x;
						crc.y = x.y;
						crc.radius = x.radius;
						crc.on("mousedown", game.circles.clicked);
						crc.tutorial = true;
						stage.removeChild(game.circles.list[4][1]);
						game.circles.list[4][1] = crc;
						stage.addChild(crc);
						game.tutorial.dialog = {
							text: "The ball\ncan come from\nbelow, too.\n\nTry another\none.",
							time: 3000,
							size: 9,
							y: 35
						};
					}
				}, 10000);
			},

			part3: function() {
				clickable = false;
				var txt = game.tutorial.txt;
				var line = new createjs.Shape();
				var line2 = new createjs.Shape();
				make.level('tutorial', 3);
				var mvmnt = movementArr.length - 1;
				txt.text = "Memorize\nthe bumper\nlocation.";
				setTimeout(function() {
					if(movementArr[mvmnt]) {
						txt.text = "Watch\nthe path\nof this ball.";
						line.graphics.beginFill("White").drawRect(0, 0, getWidth(game.data.squareWidth) / 6, getWidth(game.data.squareWidth) / 10);
						game.tutorial.trash.push(line);
						stage.addChild(line);
						line.x = getWidth(game.square.leftBoxMargin + game.data.squareMargin * 2 + game.data.squareWidth * (17/12));
						line.y = getHeight(100 - game.square.topBoxMargin);

						createjs.Tween.get(line)
							.to({scaleY: -17}, 1500)

						setTimeout(function() {
							line2.graphics.beginFill("White").drawRect(0, 0, getWidth(game.data.squareWidth) / 10, getWidth(game.data.squareWidth) / 6);
							game.tutorial.trash.push(line2);
							stage.addChild(line2);
							line2.x = line.x + getWidth(game.data.squareWidth / 10);
							line2.y = getHeight(game.square.topBoxMargin) + getWidth(game.data.squareMargin * 2 + game.data.squareWidth * 1.5);

							createjs.Tween.get(line2)
								.to({scaleX: 17}, 1500);
						}, 1500);
					}
				}, 5000);

				setTimeout(function() {
					if(movementArr[mvmnt]) {
						clickable = true;
						stage.removeChild(line);
						stage.removeChild(line2);
						txt.text = "Click the\nhighlighted\ncircle.";

						var x = game.circles.list[4][1];
						var crc = new createjs.Shape();
						crc.graphics.beginFill("#A2672E").drawCircle(0, 0, x.radius);
						crc.x = x.x;
						crc.y = x.y;
						crc.radius = x.radius;
						crc.on("mousedown", game.circles.clicked);
						crc.tutorial = true;
						stage.removeChild(game.circles.list[4][1]);
						game.circles.list[4][1] = crc;
						stage.addChild(crc);
						game.tutorial.dialog = {
							text: "The ball can\nbounce across\nmultiple\nbumpers.\nTry another\none.",
							time: 3000,
							size: 9,
							y: 35
						};
					}
				}, 10000);
			},

			part4: function() {
				var txt = game.tutorial.txt;
				make.level('tutorial', 4);
				var mvmnt = movementArr.length - 1;
				txt.text = "Memorize\nthe bumper\nlocations.";

				setTimeout(function() {
					txt.text = "Where do\nyou think it\nwill go?";
					game.tutorial.dialog = {
						text: "",
						altText: "Now for\nthe fun\npart.\n\nThe perks.",
						time: 3000,
						size: 10,
						y: 35
					};
				}, 6000);
			},

			part5: function() {
				game.clear.all();
				stage.removeChild(game.square.square);
				var strk = [];
				var strkTxt = [];
				var mvmnt = movementArr.length - 1;
				var txt = game.tutorial.txt;
				txt.text = "Your\nstreaks are the\ntimes you\nget the levels\nright in a row.";
				setTimeout(function() {
					if(movementArr[mvmnt]) {
						txt.text = "\nThis number is\nshown on the top\nright corner.";
						var x = new createjs.Text("x1", getWidth(10) + "px PerfectPixel", "#0c40a4");
						x.textAlign = 'center';
						x.x = getWidth(85);
						x.y = getHeight(1.5);
						x.alpha = 0;
						game.tutorial.trash.push(x);
						stage.addChild(x);
						createjs.Tween.get(x).to({alpha: 1}, 500);
						setTimeout(function() {
							stage.removeChild(x);
						}, 2500);
					}
				}, 4000);
				setTimeout(function() {
					if(movementArr[mvmnt]) {
						txt.text = "You get\nperks for\nevery 4th, 5th,\n6th and 7th\nstreak you get."
						var shp, tekst;
						var color = ["#186291", "#266913", "#ff0000", "#000000"];
						for(var i = 0; i < 4; i ++) {
							strk.push([new createjs.Shape(), new createjs.Text("x" + (i + 4), getWidth(10) + "px PerfectPixel", "White")]);
							shp = strk[i][0];
							shp.graphics.beginFill(color[i]).drawRoundRect(0, 0, getWidth(20), getWidth(20), getWidth(1.25));
							shp.x = getWidth(5);
							shp.y = getHeight(30) + (i * getHeight(18));
							tekst = strk[i][1];
							tekst.textAlign = 'center';
							tekst.x = shp.x + getWidth(10);
							tekst.y = shp.y + getWidth(2.5);
							game.tutorial.trash.push(shp);
							game.tutorial.trash.push(tekst);
							stage.addChild(shp);
							stage.addChild(tekst);
							createjs.Tween.get(shp).to({alpha: 0}).to({alpha: 1}, 500);
							createjs.Tween.get(tekst).to({alpha: 0}).to({alpha: 1}, 500);
						}
					}
				}, 6500);
				setTimeout(function() {
					if(movementArr[mvmnt]) {
						txt.text = 'This is\nwhat each\nperk does-';
						var teksht;
						var dt = ["Two-second peek\nat the bumpers", "More than\none tries", "Selects the\nentire side", "Skip the\nentire level"]
						for(var i = 0; i < 4; i++) {
							strkTxt.push(new createjs.Text(dt[i], getWidth(7.5) + "px PerfectPixel", "White"));
							teksht = strkTxt[i];
							teksht.textAlign = 'center';
							teksht.x = getWidth(60);
							teksht.y = strk[i][1].y;
							game.tutorial.trash.push(teksht);
							stage.addChild(teksht);
						}
					}
				}, 10000);
				setTimeout(function() {
					if(movementArr[mvmnt]) {
						for(var i = 0; i < 4; i++) {
							stage.removeChild(strk[i][0]);
							stage.removeChild(strk[i][1]);
							stage.removeChild(strkTxt[i]);
						}
						txt.text = "You can\nhave up to\na max of\n4 perks.";
						var txt2;
						var txt3;
						setTimeout(function() {
							if(movementArr[mvmnt]) {
								txt2 = new createjs.Text("Every time\nyou use a\nstreak, the streak\nwill reset\nback to 1.", getWidth(9) + "px Organo", "White");
								txt2.textAlign = 'center';
								txt2.x = txt.x;
								txt2.y = txt.y + getHeight(20);
								game.tutorial.trash.push(txt2);
								stage.addChild(txt2);
							}
						}, 3000);
						setTimeout(function() {
							if(movementArr[mvmnt]) {
								txt3 = new createjs.Text("When you get one\nwrong, your\nstreak will break.\nIf it's more\nthan 4, a perk\nwill be added.", getWidth(9) + "px Organo", "White");
								txt3.textAlign = 'center';
								txt3.x = txt.x;
								txt3.y = txt.y + getHeight(50);
								game.tutorial.trash.push(txt3);
								stage.addChild(txt3);
							}
						}, 8000);
						setTimeout(function() {
							if(movementArr[mvmnt]) {
								stage.removeChild(txt);
								console.log(stage.removeChild(txt2));
								stage.removeChild(txt3);
								game.dialog.slideIn("Bumper Bouncer\nis a memory\ngame. Memorize\nthe bumpers\nand predict the\nball's ending\nposition.", 6000, 8, 35);
								setTimeout(function() {
									if(movementArr[mvmnt]) {
										game.dialog.slideIn("You are now\nready to\nplay.\nHave fun!", 3000, 9, 40)
										setTimeout(function() {
											game.clear.menu();
										}, 5000);
									}
								}, 6500);
							}
						}, 13000);
					}
				}, 20000);
			}
		},

		end: function(t) {
			var time;
			var mvmnt = movementArr.length - 1;
			if(movementArr[mvmnt]) {
				if(t) {
					time = game.dialog.slideIn("Great Job!\n\nYou have\nbeaten the\nwhole game!", 4000, 9, 40);
					setTimeout(function() {
						if(movementArr[mvmnt]) {
							time += game.dialog.slideIn("This is\nworth taking\na screenshot.", 4000, 9, 40);
						}
					}, time);
				} else {
					if(movementArr[mvmnt]) {
						time = game.dialog.slideIn("Game\nOver", 2000, 20, 40);
					}
				}
				setTimeout(function() {
					if(movementArr[mvmnt]) {
						game.clear.menu();
					}
				}, time + 1000);
			}
		}

	};

/* ----------------------------------------------------------------------------------------- */


/* MAIN INITIALIZED FUNCTION -------------------------------------------------------------------------------- */

	function init() {

		/* Sets up the width and height of canvas element and makes it relative to the browser */

			var stageElement = document.getElementById('demoCanvas');
			console.log(window.innerWidth + " and " + window.innerHeight);
			height = window.innerHeight || e.clientHeight || g.clientHeight;
			width = height / 1.77;
			stageElement.style.left = ((window.innerWidth - width) / 2) + "px";
			stageElement.width = width;
			stageElement.height = height;

		/*-------------------------------------------------------------------------------------*/

		stage = new createjs.Stage("demoCanvas");
        stage2 = new createjs.Stage("demoCanvas");
 		createjs.Touch.enable(stage);
		stage.enableDOMEvents(true);
		stage.enableMouseOver(10);

		menu.render();
	}

/*---------------------------------------------------------------------------------------------------------- */
