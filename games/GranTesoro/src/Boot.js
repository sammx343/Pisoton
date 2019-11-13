var Candy = {};
Candy.Boot = function(game){};
Candy.Boot.prototype = {
    preload: function () {
        //Carga la imagen de fondo
        this.load.image("background", "img/BG_res.jpg");

        //Carga la barra de progreso
        this.load.image('preloaderBar', 'img/INTERFACE_BARRA_DE_MADERA_new.png');  //nueva imagen

	},
    create: function ()
    {
        // ************** Establece las propiedades de pantalla del juego ***********

        this.game.input.maxPointers = 1;
		// this.game.stage.disablePauseScreen = true;
        this.scale.scaleMode = Phaser.ScaleManager.SHOW_ALL;
        this.scale.pageAlignHorizontally = true;
        this.scale.pageAlignVertically = true;
		//this.game.stage.disableVisibilityChange = true;
		//this.game.stage.scale.forcePortrait = false;
		
		// 
		this.game.stage.scale.forceLandscape = true;
		
		this.game.stage.scale.pageAlignHorizontally = true;
		//this.scale.setScreenSize(true);
        Phaser.ScaleManager.prototype.setScreenSize = Phaser.ScaleManager.prototype.updateLayout;

        //Inicia Preloader.js
		this.game.state.start('Preloader');
		
	}
};