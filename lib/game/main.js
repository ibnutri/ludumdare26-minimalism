ig.module(
	'game.main'
)
.requires(
	'impact.game',
	'impact.font',
	'game.games.menu'
)
.defines(function(){

MyGame = ig.Game.extend({

	// Load a font
	font: new ig.Font( 'media/04b03.font.png' ),


	init: function() {
		// Initialize your game here; bind keys etc.
		ig.input.bind(ig.KEY.ENTER, 'enter');
	},

	update: function() {
		// Update all entities and backgroundMaps
		this.parent();
		if(ig.input.pressed('enter')){
			ig.system.setGame(MenuGame);
		}
		// Add your own, additional update code here
	},

	draw: function() {
		// Draw all entities and backgroundMaps
		this.parent();


		// Add your own drawing code here
		var x = ig.system.width/2,
			y = ig.system.height/2;

		this.font.draw( 'This supposed to be main menu', x, y-10, ig.Font.ALIGN.CENTER );
		this.font.draw( 'It Works! Now try to press [Enter]', x, y, ig.Font.ALIGN.CENTER );
	}
});


// Start the Game with 60fps, a resolution of 320x240, scaled
// up by a factor of 2
ig.main( '#canvas', MyGame, 60, 320, 240, 2 );

});
