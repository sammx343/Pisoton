Candy.Preloader = function(game) {
	this.background = null;
	this.preloadBar = null;
    this.ready = false;
};
Candy.Preloader.prototype = {
    preload: function () {

        var liScale = 0.4;

        this.game.stage.backgroundColor = '#FFFFFF';//'#99FF55';   //#B4D9E7

        //Adiciona el fondo de la precarga, necesario
        this.game.add.sprite(0, 0, 'background');
        this.preloadBar = this.add.sprite(0, (462 / 2) - 70, 'preloaderBar');
        this.load.setPreloadSprite(this.preloadBar);

        //Imagenes de las escenas
        this.load.image('main', 'assets/FondoEscenas/fEscena1.png');  //1.png
        this.load.image('intro', 'assets/FondoEscenas/2.png');
        this.load.image('loading', 'assets/FondoEscenas/3.png');
        this.load.image('sceneOne', 'assets/FondoEscenas/4.png');
        this.load.image('reward', 'assets/FondoEscenas/5.png');
        this.load.image('sceneTwo', 'assets/FondoEscenas/6.png');
        this.load.image('sceneThree', 'assets/FondoEscenas/7.png');
        this.load.image('puzzle', 'assets/FondoEscenas/8.png');
        this.load.image('end', 'assets/FondoEscenas/9.png');

        //Precarga Iconos
        this.load.spritesheet('BotonSiguiente', 'assets/Escena3/EmmaCome.png', 474, 566, 73);

        //Intro
        this.game.load.image('HugoEmma', 'assets/intro1/HugoEmma.png');
        this.game.load.image('Arbustos', 'assets/intro1/Arbustos.png');
        this.game.load.image('hoja', 'assets/intro1/hoja.png');
        this.game.load.image('banderines', 'assets/intro1/banderines.png');        
		this.load.spritesheet('BotonPortada', 'assets/intro1/BOTON_SIGUIENTE_res.png', 190 * liScale, 190 * liScale);  //////////

        //Precarga objetos escena1
        this.load.image('Escenario1', 'assets/Escena1/ESC_1_BG_00000.png');
        this.load.spritesheet('button-audio', 'img/button-audio.png', 111, 96);

        this.load.spritesheet('recompensa1', 'assets/Escena1/recompensa1.png', 246, 192, 2);
        this.load.spritesheet('recompensa2', 'assets/Escena1/recompensa2.png', 205, 202, 2);
        this.load.spritesheet('recompensa3', 'assets/Escena1/recompensa3.png', 224, 201, 2);

        //escena1 objetos
        this.load.spritesheet('cogin', 'assets/Escena1/Cogin.png', 258, 290);
        this.load.spritesheet('Armario', 'assets/Escena1/AnimaArmario.png', 439, 338, 50);
        this.load.spritesheet('Ventana', 'assets/Escena1/Ventana.png', 919, 1048, 11);
        this.load.spritesheet('Lampara', 'assets/Escena1/Lampara.png', 364, 602, 3);
        this.load.spritesheet('Pelota', 'assets/Escena1/Pelota.png', 182, 182, 27);

       

        //Precarga objetos escena2
        this.load.image('Escenario2', 'assets/Escena2/ESC_2_BG_00000.png');
        this.load.spritesheet('Barril', 'assets/Escena2/Barril.png', 174, 215, 28);
        this.load.spritesheet('Pez', 'assets/Escena2/AnimaPez.png', 165, 222, 91);
        this.load.spritesheet('Puerta', 'assets/Escena2/Puerta.png', 358, 394, 11);
        this.load.spritesheet('Flor', 'assets/Escena2/Flor.png', 187, 304, 31);
        this.load.spritesheet('Maceta1', 'assets/Escena2/Maceta1.png', 206, 368, 19);
        this.load.spritesheet('Maceta2', 'assets/Escena2/Maceta2.png', 203, 372, 19);
        this.load.spritesheet('Pastel', 'assets/Escena2/Pastel.png', 522, 525, 31);
        this.load.spritesheet('Zanahoria', 'assets/Escena2/Zanahoria.png', 122, 161, 21);
        this.load.spritesheet('Gusano', 'assets/Escena2/AnimaGusano.png', 184, 265, 80);        
        this.load.spritesheet('Ventana2', 'assets/Escena2/Ventana2.png', 305, 154, 31);
        this.load.image('TierraZana', 'assets/Escena2/TierraZana.png');
        
        //Precarga objetos escena3
        this.load.image('Escenario3', 'assets/Escena3/Escena3.png');
        this.load.spritesheet('Jarra', 'assets/Escena3/AnimaJarra.png', 277, 275, 5);
        this.load.spritesheet('Emma', 'assets/Escena3/EmmaCome.png', 474, 566, 73);
        this.load.spritesheet('Ugo', 'assets/Escena3/UgoBebe.png', 241, 214.5555555555556, 73);
        this.load.image('platoMesa', 'assets/Escena3/platoMesa.png');
        this.load.image('salerosMesa', 'assets/Escena3/salerosMesa.png');

        //Boton continuar
        this.load.spritesheet('button-continue', 'assets/iconos/BOTON_SIGUIENTE_res.png', 358, 133);

        this.load.text('font-ttf', 'fonts/comicbook.ttf');
        this.load.text('font-svg', 'fonts/comicbook.svg');
        this.load.text('font-ttf', 'fonts/comicbook.ttf');
        this.load.text('font-woff', 'fonts/comicbook.woff');

        // Assets de Rompecabezas
        this.load.image('bg_dark', 'assets/images/bg_dark.png');
        this.load.image('interiorTitle', 'assets/images/interior_title.png');
        this.load.image('base', 'assets/images/base.png');
        this.load.image('basecolor', 'assets/images/basecolor.png');
        this.load.image('welldone', 'assets/images/welldone.png');
        this.load.spritesheet('jigsawWin_anim', 'assets/images/jigsawWin_anim.png', 292, 292);
        this.load.image('gameNum', 'assets/images/game_num.png');
        this.load.image('title', 'assets/images/title.png');

        //Precarga Imagenes rompecabezas
        for (var i = 1; i <= 15; i++) {
            this.imageNamePuzzle = i.toString() + 'ROMPECABEZA';
            this.load.image(this.imageNamePuzzle, 'assets/rompecabezas/' + this.imageNamePuzzle + '.png');
        }

        this.load.image('Rompecabezas', 'assets/rompecabezas/Rompecabezas.png');
        this.load.image('FondoRompecabezas', 'assets/rompecabezas/FondoRompecabezas.png');
        this.load.audio('musicaFondo', ['assets/audio/musicaFondo.ogg']);

        // --------------------------- End Scene
        /* Carga Imagenes Recompensa 1 */
        this.rootName = 'final-';
        this.fileNumberMask = '0000';
        this.fileExtension = '.png';

        for (var i = 1; i <= 239; i++) {
            this.fileNumber = this.fileNumberMask.substring(0, this.fileNumberMask.length - i.toString().length);
            this.fileNumber += i.toString();
            this.imageName = this.rootName + this.fileNumber;
            this.imageName_ = "recompensa1-" + this.rootName + this.fileNumber;
            this.load.image(this.imageName_, 'assets/Escena1/Recompensa1/' + this.imageName + "_res" + this.fileExtension);
        }
        this.load.audio('audioRecompensa1', ['assets/Escena1/Recompensa1/Ugo1.ogg']);
        /* Fin Carga Imagenes Recompensa 1 */

         /* Carga Imagenes Recompensa 2 */
        this.rootName = 'juego2_fraseugo2';
        this.fileNumberMask = '0000';
        this.fileExtension = '.png';

        for (var i = 1; i <= 231; i++) {
            this.fileNumber = this.fileNumberMask.substring(0, this.fileNumberMask.length - i.toString().length);
            this.fileNumber += i.toString();
            this.imageName = this.rootName + this.fileNumber;
            this.imageName_ = "recompensa2-" + this.rootName + this.fileNumber;
            this.load.image(this.imageName_, 'assets/Escena1/Recompensa2/' + this.imageName + "_res" + this.fileExtension);
        }
        this.load.audio('audioRecompensa2', ['assets/Escena1/Recompensa2/Ugo2.ogg']);
        /* Fin Carga Imagenes Recompensa 2 */

         /* Carga Imagenes Recompensa 3 */
        this.rootName = 'final-';
        this.fileNumberMask = '0000';
        this.fileExtension = '.png';

        for (var i = 1; i <= 218; i++) {
            this.fileNumber = this.fileNumberMask.substring(0, this.fileNumberMask.length - i.toString().length);
            this.fileNumber += i.toString();
            this.imageName = this.rootName + this.fileNumber;
            this.imageName_ = "recompensa3-" + this.rootName + this.fileNumber;
            this.load.image(this.imageName_, 'assets/Escena1/Recompensa3/' + this.imageName + "_res" + this.fileExtension);
        }
        this.load.audio('audioRecompensa3', ['assets/Escena1/Recompensa3/Ugo3.ogg']);
        /* Fin Carga Imagenes Recompensa 3 */

        /* Escena final */
        this.rootName = 'Juego2_IntentoBueno';
        this.fileNumberMask = '0000';
        this.fileExtension = '.png';

        for (var i = 1; i <= 234; i++) {
            this.fileNumber = this.fileNumberMask.substring(0, this.fileNumberMask.length - i.toString().length);
            this.fileNumber += i.toString();
            this.imageName = this.rootName + this.fileNumber;
            this.imageName_ = "final-" + this.rootName + this.fileNumber;
            this.load.image(this.imageName_, 'assets/Final/' + this.imageName + "_res" + this.fileExtension);
        }
        this.load.audio('audioEscenafinal', ['assets/Final/IntentoBueno.ogg']);
        /* Fin Escena final */

        // Loading Images
        this.rootName = 'Juego_2_intro';
        this.fileNumberMask = '0000';
        this.fileExtension = '.png';

        //debugger;
        for (var i = 1; i <= 520; i++) {
            this.fileNumber = this.fileNumberMask.substring(0, this.fileNumberMask.length - i.toString().length);
            this.fileNumber += i.toString();
            this.imageName = this.rootName + this.fileNumber;
            this.load.image(this.imageName, 'assets/Intro/' + this.imageName + "_res" + this.fileExtension);
        }

        // Loading background
        this.load.image('introBG', 'assets/Intro/BG_INTRO.png');

        // Loading Audio
        this.load.audio('introDialog', 'assets/Intro/Intro.ogg');


	},
	create: function() {
        //this.preloadBar.cropEnabled = false;
        this.game.state.start('Main');
        //this.game.state.start('SceneThree');
	}
};