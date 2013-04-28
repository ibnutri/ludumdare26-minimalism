ig.module('game.games.play')
.requires('impact.game',
	'impact.font',
	'game.levels.test'
)
.defines(function() {

	PlayGame = ig.Game.extend({

		font: new ig.Font('media/04b03.font.png'),

		init: function() {
			ig.input.bind(ig.KEY.ENTER, 'enter');

			this.loadLevel(LevelTest);

			var verb = ig.ua.mobile ? 'tap' : 'click mouse';
			this.instructions = verb + ' to start';
		},

		update: function() {
			this.parent();

			if(ig.input.pressed('enter')) {
				ig.system.setGame(PlayGame);
			}
		},

		draw: function() {
			this.parent();
			this.font.draw('This is playing scene', ig.system.width / 2, ig.system.height / 2 -10, ig.Font.ALIGN.CENTER);
		}
	});
});


