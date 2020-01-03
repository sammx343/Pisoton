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
        this.preloadBar = this.add.sprite(0, (462 / 2) - 170, 'preloaderBar');
        this.load.setPreloadSprite(this.preloadBar);


        //Carga la barra de progreso
        this.load.image('BarraMadera1', 'img/INTERFACE_BARRA_DE_MADERA_res.PNG'); 

        //Imagenes de las escenas
        this.load.image('main', 'assets/FondoEscenas/fEscena1.PNG');  //1.png
        // this.load.image('intro', 'assets/FondoEscenas/2.png');
        // this.load.image('loading', 'assets/FondoEscenas/3.png');
        // this.load.image('sceneOne', 'assets/FondoEscenas/4.png');
        // this.load.image('reward', 'assets/FondoEscenas/5.png');
        // this.load.image('sceneTwo', 'assets/FondoEscenas/6.png');
        // this.load.image('sceneThree', 'assets/FondoEscenas/7.png');
        // this.load.image('puzzle', 'assets/FondoEscenas/8.png');
        // this.load.image('end', 'assets/FondoEscenas/9.png');

        //Precarga Iconos
        //this.load.spritesheet('BotonSiguiente', 'assets/Escena3/EmmaCome.png', 474, 566, 73);

        //Intro
        this.game.load.image('HugoEmma', 'assets/intro1/HugoEmma.PNG');
        this.game.load.image('Arbustos', 'assets/intro1/Arbustos.PNG');
        this.game.load.image('hoja', 'assets/intro1/hoja.PNG');
        this.game.load.image('banderines', 'assets/intro1/banderines.PNG');        
		this.load.spritesheet('BotonPortada', 'assets/intro1/BOTON_SIGUIENTE_res.PNG', 190 * liScale, 190 * liScale);  //////////

        //Precarga objetos escena1
        this.load.image('Escenario1', 'assets/Escena1/ESC_1_BG_00000.PNG');
        this.load.spritesheet('button-audio', 'img/button-audio.png', 111, 96);

        this.load.spritesheet('recompensa1', 'assets/Escena1/recompensa1.png', 246, 192, 2);
        this.load.spritesheet('recompensa2', 'assets/Escena1/recompensa2.png', 205, 202, 2);
        this.load.spritesheet('recompensa3', 'assets/Escena1/recompensa3.png', 224, 201, 2);

        //escena1 objetos
        this.load.spritesheet('cogin', 'assets/Escena1/Cogin.png', 576, 517, 64);
        this.load.spritesheet('Armario', 'assets/Escena1/AnimaArmario.png', 1216, 544, 64);
        this.load.spritesheet('Ventana', 'assets/Escena1/Ventana.png', 919, 1048, 11);
        this.load.spritesheet('Lampara', 'assets/Escena1/Lampara.png', 364, 602, 3);
        this.load.spritesheet('Pelota', 'assets/Escena1/Pelota.png', 1212, 538, 37);
        //1212x538

        //Precarga objetos escena2
        this.load.image('Escenario2', 'assets/Escena2/ESC_2_BG_00000.PNG');
        this.load.spritesheet('Barril', 'assets/Escena2/Barril.PNG', 174, 215, 28);
        this.load.spritesheet('Pez', 'assets/Escena2/AnimaPez.PNG', 165, 222, 91);
        //this.load.spritesheet('Puerta', 'assets/Escena2/-Puerta.png', 358, 394, 11);
        //this.load.spritesheet('Puerta', 'assets/Escena2/Puerta.png', 700, 288, 59);

        this.load.spritesheet('Puerta', 'assets/Escena2/Puerta.PNG', 700, 288, 59);

        this.load.spritesheet('Flor', 'assets/Escena2/Flor.PNG', 187, 304, 31);
        this.load.spritesheet('Maceta1', 'assets/Escena2/Maceta1.PNG', 206, 368, 19);
        this.load.spritesheet('Maceta2', 'assets/Escena2/Maceta2.PNG', 203, 372, 19);
        //this.load.spritesheet('Pastel', 'assets/Escena2/Pastel.png', 522, 525, 31);
        this.load.spritesheet('Pastel', 'assets/Escena2/Pastel.PNG', 658, 799, 64); //nuevo
        
        this.load.spritesheet('Zanahoria', 'assets/Escena2/Zanahoria.PNG', 122, 161, 21);
        this.load.spritesheet('Gusano', 'assets/Escena2/AnimaGusano.PNG', 576, 517, 62);  //nuevo       
        this.load.spritesheet('Ventana2', 'assets/Escena2/Ventana2.PNG', 305, 154, 31);
        this.load.image('TierraZana', 'assets/Escena2/TierraZana.PNG');
        
        //Precarga objetos escena3
        this.load.image('Escenario3', 'assets/Escena3/Escena3.PNG');
        //this.load.spritesheet('Jarra', 'assets/Escena3/AnimaJarra2.png', 277, 275, 5);
        this.load.spritesheet('Jarra', 'assets/Escena3/AnimaJarra2.PNG', 400, 443, 73);

        this.load.spritesheet('Emma', 'assets/Escena3/EmmaCome2.PNG', 400, 376, 73);
//        this.load.spritesheet('Emma', 'assets/Escena3/EmmaCome2.png', 474, 566, 73);
        
        //this.load.spritesheet('Ugo', 'assets/Escena3/UgoBebe.png', 241, 214.5555555555556, 73);
        this.load.spritesheet('Ugo', 'assets/Escena3/UgoBebe2.PNG', 400, 213, 73);


        this.load.image('platoMesa', 'assets/Escena3/platoMesa.PNG');
        this.load.image('salerosMesa', 'assets/Escena3/salerosMesa.PNG');

        //Boton continuar
        this.load.spritesheet('button-continue', 'assets/iconos/BOTON_SIGUIENTE_res.PNG', 358, 133);

        this.load.text('font-ttf', 'fonts/comicbook.ttf');
        this.load.text('font-svg', 'fonts/comicbook.svg');
        this.load.text('font-ttf', 'fonts/comicbook.ttf');
        this.load.text('font-woff', 'fonts/comicbook.woff');

        // Assets de Rompecabezas
        // this.load.image('bg_dark', 'assets/images/bg_dark.png');
        // this.load.image('interiorTitle', 'assets/images/interior_title.png');
        // this.load.image('base', 'assets/images/base.png');
        // this.load.image('basecolor', 'assets/images/basecolor.png');
        // this.load.image('welldone', 'assets/images/welldone.png');
        // this.load.spritesheet('jigsawWin_anim', 'assets/images/jigsawWin_anim.png', 292, 292);
        // this.load.image('gameNum', 'assets/images/game_num.png');
        // this.load.image('title', 'assets/images/title.png');

        //Precarga Imagenes rompecabezas
        for (var i = 1; i <= 15; i++) {
            this.imageNamePuzzle = i.toString() + 'ROMPECABEZA';
            this.load.image(this.imageNamePuzzle, 'assets/rompecabezas/' + this.imageNamePuzzle + '.png');
        }

        this.load.image('Rompecabezas', 'assets/rompecabezas/Rompecabezas.png');
        this.load.image('FondoRompecabezas', 'assets/rompecabezas/FondoRompecabezas.png');

        //Sonidos Loop    
        this.load.audio('AmbportadaMigranTesoro', 'assets/audio/AmbportadaMigranTesoro(loop).mp3');       
        this.load.audio('AmbEsc1MigranTesoro', 'assets/audio/AmbEsc1MigranTesoro(loop).mp3');
        this.load.audio('AmbEsc2MiGranTesoro', 'assets/audio/AmbEsc2MiGranTesoro(loop).mp3');
        this.load.audio('AmbEsc3MiGranTesoro', 'assets/audio/AmbEsc3MiGranTesoro(loop).mp3');


        //Sonidos Escena1
        this.load.audio('Esc1Alacena', 'assets/audio/Esc1Alacena.mp3');
        this.load.audio('Esc1Balon', 'assets/audio/Esc1Balon.mp3');
        this.load.audio('Esc1Lampara', 'assets/audio/Esc1Lampara.mp3');
        this.load.audio('Esc1Sofa', 'assets/audio/Esc1Sofa.mp3');
        this.load.audio('Esc1Ventana', 'assets/audio/Esc1Ventana.mp3');

        //Sonidos Escena2
        this.load.audio('Esc2Barril', 'assets/audio/Esc2Barril.mp3');
        this.load.audio('Esc2Cerca', 'assets/audio/Esc2Cerca.mp3');
        this.load.audio('Esc2Flores', 'assets/audio/Esc2Flores.mp3');
        this.load.audio('Esc2Gusanito', 'assets/audio/Esc2Gusanito.mp3');
        this.load.audio('Esc2Pez', 'assets/audio/Esc2Pez.mp3');
        this.load.audio('Esc2Potera', 'assets/audio/Esc2Potera.mp3');
        this.load.audio('Esc2Ventana', 'assets/audio/Esc2Ventana.mp3');
        this.load.audio('Esc2Zanahorias', 'assets/audio/Esc2Zanahorias.mp3');

        //Sonidos Escena3
        this.load.audio('Esc3Emacome', 'assets/audio/Esc3Emacome.mp3');
        this.load.audio('Esc3Jarra', 'assets/audio/Esc3Jarra.mp3');
        this.load.audio('Esc3Ugotomajugo', 'assets/audio/Esc3Ugotomajugo.mp3');

        //Sonidos Escena4
        this.load.audio('Esc4Rompecabezasacierto', 'assets/audio/Esc4Rompecabezasacierto.mp3');
        this.load.audio('Esc4Rompecabezascompletado', 'assets/audio/Esc4Rompecabezascompletado.mp3');
        this.load.audio('Esc4Rompecabezaserrorswip', 'assets/audio/Esc4Rompecabezaserrorswip.mp3');

        // --------------------------- End Scene
        /* Carga Imagenes Recompensa 1 */
        this.rootName = 'final-';
        this.fileNumberMask = '0000';
        this.fileExtension = '.PNG';

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
        this.fileExtension = '.PNG';

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
        this.fileExtension = '.PNG';

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
        this.fileExtension = '.PNG';

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
        this.fileExtension = '.PNG';

        //debugger;
        for (var i = 1; i <= 520; i++) {
            this.fileNumber = this.fileNumberMask.substring(0, this.fileNumberMask.length - i.toString().length);
            this.fileNumber += i.toString();
            this.imageName = this.rootName + this.fileNumber;
            this.load.image(this.imageName, 'assets/Intro/' + this.imageName + "_res" + this.fileExtension);
        }

        // Loading background
        this.load.image('introBG', 'assets/Intro/BG_INTRO.PNG');

        // Loading Audio
        this.load.audio('introDialog', 'assets/Intro/Intro.ogg');

        //Nuevos audios
        this.load.audio('eUno', 'assets/audios/1Estaeslasalademicasa.ogg');
        this.load.audio('eDos', 'assets/audios/2Escuchastelaspistaanterior.ogg');
        this.load.audio('eTres', 'assets/audios/3Yaescuchaste2pistassige.ogg');
        this.load.audio('EFin', 'assets/audios/4Muybienlograsteencontrartodas.ogg');


	},
	create: function() {
        this.game.state.start('Main');

        //this.preloadBar.cropEnabled = false;
        //this.game.state.start('Puzzle');        
        //this.game.state.start('SceneThree');
        //this.game.state.start('SceneTwo');
        //this.game.state.start('SceneOne');
	}
};