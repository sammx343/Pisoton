var Candy = {};
Candy.Boot = function(game){};
Candy.Boot.prototype = {
    preload: function () {
        //Carga la imagen de fondo
        this.load.image("background", "assets/loading/backgroundLoader.png");

        //Carga icono de personajes
        //this.load.image('preloaderIcon', 'assets/loading/iconLoading.gif');
        this.load.image('preloaderIconBruno_1', 'assets/loading/BRUNO1.png');
        this.load.image('preloaderIconEma_2', 'assets/loading/EMA2.png');
        this.load.image('preloaderIconHugo_3', 'assets/loading/HUGO3.png');
        this.load.image('preloaderIconLucas_4', 'assets/loading/LUCAS4.png');

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