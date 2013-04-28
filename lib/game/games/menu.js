ig.module('game.games.menu')
.requires('impact.game',
	'impact.font'
)
.defines(function() {

	MenuGame = ig.Game.extend({

		font: new ig.Font('media/04b03.font.png'),

		init: function() {
			ig.input.bind(ig.KEY.MOUSE1, 'action');

			//this.loadLevel(LevelTitle);

			var verb = ig.ua.mobile ? 'tap' : 'click mouse';
			this.instructions = verb + ' to start';
		},

		update: function() {
			this.parent();

			if(ig.input.pressed('action')) {
				//ig.system.setGame(PlayGame);
			}
		},

		draw: function() {
			this.parent();
			this.font.draw('this supposed to be game menu', ig.system.width / 2, ig.system.height / 2 -10, ig.Font.ALIGN.CENTER);
			this.font.draw('lets skip this and press [Enter]', ig.system.width / 2, ig.system.height / 2 , ig.Font.ALIGN.CENTER);
		}
	});
});


