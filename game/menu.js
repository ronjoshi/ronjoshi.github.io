var menu = {

    render: function(t) {
        var time = 0;

        if(!t) {
            background = new createjs.Shape();
            background.graphics.beginFill('#e58722').drawRect(0, 0, getWidth(100), getHeight(100)).endFill();
            background.x = 0;
            background.y = 0;
            stage.addChild(background);

            var txt = new createjs.Text("Bumper\nBouncer", getWidth(15) + "px Organo", "#0c40a4");
            txt.x = getWidth(50);
            txt.y = getHeight(40);
            txt.textAlign = 'center';
            txt.alpha = 0;
            stage.addChild(txt);
            createjs.Tween.get(txt)
                .to({scaleX: 0, scaleY: 0})
                .wait(1500)
                .to({scaleX: 1, scaleY: 1, alpha: 1}, 300, createjs.Ease.cubicOut)
                .wait(2000)
                .to({scaleX: 1, scaleY: 1, alpha: 1, y: getHeight(5)}, 300, createjs.Ease.cubicIn);
            stage.update();

            menu.options.trash.push(txt);

            createjs.Ticker.on("tick", stage);
            createjs.Ticker.setFPS(60);
            time = 4200;
        }
        var taime = (t) ? 0 : 2500;
        var c = new createjs.Text("Game\ndeveloped by\nRon Joshi", getWidth(10) + "px Organo", "#0c40a4");
        c.textAlign = 'center';
        c.x = getWidth(50);
        c.y = getHeight(80);
        stage.addChild(c);
        createjs.Tween.get(c)
            .to({scaleX: 0, scaleY: 0})
            .wait(taime)
            .to({scaleX: 1, scaleY: 1, alpha: 1}, 300, createjs.Ease.cubicOut)
        menu.options.trash.push(c);

        setTimeout(function() {
            menu.options.slideIn(time);
        }, time);

    },

    options: {

        list: [

            [1, "Play"], [2, "How to\nPlay"]

        ],

        trash: [],

        slideIn: function(k) {

            if(k == 0) {
                var txt = new createjs.Text("Bumper\nBouncer", getWidth(15) + "px Organo", "#0c40a4");
                txt.textAlign = 'center';
                txt.x = getWidth(50);
                txt.y = getHeight(5);
                stage.addChild(txt);
                menu.options.trash.push(txt);
            }

            var c = menu.options.list;

            for(var i = 0; i < c.length; i++) {

                var word = new createjs.Text(c[i][1], getWidth(10) + "px Organo", "#FFFFFF");
                word.textAlign = 'center';
                word.x = getWidth(50);
                word.y = getHeight(35) + (i * getHeight(20));
                menu.options.trash.push(word);

                var back = new createjs.Shape();
                back.graphics.beginFill("#955816").drawCircle(0, 0, getWidth(7));
                back.x = getWidth(10);
                back.y = word.y + getWidth(5);
                stage.addChild(back);
                menu.options.trash.push(back);

                var circ = new createjs.Shape();
                circ.graphics.beginFill("#6b3500").drawCircle(0, 0, getWidth(6));
                circ.x = getWidth(10);
                circ.y = word.y + getWidth(5);
                circ.name = i;
                stage.addChild(circ);
                menu.options.trash.push(circ);


                circ.on("mousedown", function(e) {

                    menu.clear();
                    if(e.target.name == 0) {
                        setTimeout(function() {
                            game.square.init();
                            make.level(1);
                        }, 500);
                    } else if(e.target.name == 1) {
                        setTimeout(function() {
                            game.square.init();
                            game.data.level = 'tutorial';
                            game.tutorial.part1();
                        }, 500);
                    }
                });

                var ball = new createjs.Shape();
                ball.graphics.beginFill("#FFFFFF").drawCircle(0, 0, getWidth(3.75));
                ball.x = getWidth(32.5);
                ball.y = getWidth(30);
                stage.addChild(ball);
                menu.options.trash.push(ball);

                createjs.Tween.get(ball, {loop: true})
                    .to({y: ball.y - getWidth(10)}, 300, createjs.Ease.getPowIn(2.5))
                    .to({y: ball.y}, 300, createjs.Ease.getPowOut(2.5));

                stage.addChild(word);
                createjs.Tween.get(word)
                    .to({scaleX: 0, scaleY: 0})
                    .to({scaleX: 1, scaleY: 1}, 300, createjs.Ease.quartIn);

                createjs.Tween.get(back)
                    .to({scaleX: 0, scaleY: 0})
                    .to({scaleX: 1, scaleY: 1}, 300, createjs.Ease.quartIn);

                createjs.Tween.get(circ)
                    .to({scaleX: 0, scaleY: 0})
                    .to({scaleX: 1, scaleY: 1}, 300, createjs.Ease.quartIn);
            }

        }

    },

    clear: function() {

        for(var i = 0; i < menu.options.trash.length; i++) {

            createjs.Tween.get(menu.options.trash[i])
                .to({alpha: 0}, 500);

            setTimeout(function() {
                stage.removeChild(menu.options.trash[i]);
            }, 500);

        }

        menu.options.trash = [];

    }

}
