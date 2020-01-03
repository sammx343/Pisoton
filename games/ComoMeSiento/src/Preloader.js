Candy.Preloader = function (game) {
    this.background = null;
    this.preloadBar = null;
    this.ready = false;
    this.interval = null;
};

var CORAZON = 0;
var EstadoVideo1 = 'ACTIVO';
var EstadoVideo2 = 'ACTIVO';
var EstadoVideo3 = 'ACTIVO';
var EstadoVideo4 = 'ACTIVO';

Candy.Preloader.prototype = {
    preload: function () {
        console.log("Load Preloader");
        var context = this;
        this.game.stage.backgroundColor = '#FFFFFF';//'#99FF55';   //#B4D9E7

        
        //Adiciona el fondo de la precarga, necesario
        this.game.add.sprite(0, 0, 'background');        
        //Adiciona el icono de cargando
		var xx = 160; 			var yy = 370;
        var iconPreloader = this.game.add.sprite(xx, yy, 'preloaderIconBruno_1');

        var framesCounter = 0;
        this.interval = setInterval(function () {
			
            if (framesCounter < 4) {
                switch (framesCounter) {
                    case 0:
                        iconPreloader = context.game.add.sprite(xx, yy, 'preloaderIconBruno_1');
                        iconPreloader.loadTexture('preloaderIconBruno_1');
                        break;
                    case 1:
                        iconPreloader = context.game.add.sprite(xx, yy, 'preloaderIconEma_2');
                        iconPreloader.loadTexture('preloaderIconEma_2');
                        break;
                    case 2:
                        iconPreloader = context.game.add.sprite(xx, yy, 'preloaderIconHugo_3');
                        iconPreloader.loadTexture('preloaderIconHugo_3');
                        break;
                    case 3:
                        iconPreloader = context.game.add.sprite(xx, yy, 'preloaderIconLucas_4');
                        iconPreloader.loadTexture('preloaderIconLucas_4');
                        break;
                }
                framesCounter++;
            } else {
                framesCounter = 0;
            }
        }, 2000);
        

        //Load files of fonts
        this.load.text('font-ttf', 'fonts/comicbook.ttf');
        this.load.text('font-svg', 'fonts/comicbook.svg');
        this.load.text('font-ttf', 'fonts/comicbook.ttf');
        this.load.text('font-woff', 'fonts/comicbook.woff');
        /*
            ####################################################################################################
        */

        //Sonidos        
        this.load.audio('AmbportadaDimecoomomesiento', 'assets/audios/AmbportadaDimecoomomesiento.mp3');       

        //Imagen de fondo
        this.load.image('backgroundPortada', 'assets/portada/backgroundPortada.jpg');        
        //Personajes
        this.load.image('p1', 'assets/portada/1.png');        
        this.load.image('p2', 'assets/portada/2.png');        
        this.load.image('p3', 'assets/portada/3.png');        
        this.load.image('p4', 'assets/portada/4.png');     

        //Arbustos
        this.load.image('arbustos', 'assets/portada/ARBUSTOS_PORTADA_DCMY.png');     

        //Lianas
        this.load.image('lianas', 'assets/portada/LIANAS_PORTADA_DCMY.png');     

        //Boton
        this.load.image('BotonPortada', 'assets/portada/BOTON_PORTADA_DCMY.png');     

        //Logo portada
        this.game.load.image('hoja', 'assets/portada/LOGO_PORTADA_DCMY.png');


        
        //Agregar el contenido de la intro
        //Adiciona el fondo de la precarga, necesario
        this.load.image('backgroundIntro', 'assets/intro/backgroundIntro.png');
    
        this.rootName = 'INTRO_JUEGO01';
        this.fileNumberMask = '0000';
        this.fileExtension = '.PNG';

       for (var i = 1; i <= 741; i++) {
           this.fileNumber = this.fileNumberMask.substring(0, this.fileNumberMask.length - i.toString().length);
           this.fileNumber += i.toString();
           this.imageName = this.rootName + this.fileNumber;
           this.load.image(this.imageName, 'assets/intro/' + this.imageName + this.fileExtension);
       }

        // Loading Audio
        this.load.audio('introDialog', 'assets/intro/IntroCMY.ogg');
       
        //fondoMenuIntro
        this.load.image('fondoMenuIntro', 'assets/intro/fondoMenuIntro.png');
        //Boton atras
        this.load.spritesheet('buttonBack', 'assets/accionBotones/botonBack/botonBackOn.png', 358, 133);
        //Boton continuar
        this.load.spritesheet('buttonNext', 'assets/accionBotones/botonNext/botonNextOn.png', 358, 133);
        
        /*
            ####################################################################################################
        */
   
        //Agregar el contenido del select video
        //Adiciona el fondo de la precarga, necesario
        this.load.image('backgroundSelectVideo', 'assets/selectVideo/BG_VIDEO_DCMY.png');
        //Agregar Marcos
        this.load.image('marcoMoradoSelectVideo', 'assets/selectVideo/MARCO_MORADO.png');
        this.load.image('marcoNaranjaSelectVideo', 'assets/selectVideo/MARCO_NARANJA.png');
        this.load.image('marcoRosadoSelectVideo', 'assets/selectVideo/MARCO_ROSADO.png');
        this.load.image('marcoVerdeSelectVideo', 'assets/selectVideo/MARCO_VERDE.png');
        //Agregar Botones On
        this.load.image('botonMoradoSelectVideo', 'assets/selectVideo/botonesMorado/botonMoradoOn2.png');
        this.load.image('botonNaranjaSelectVideo', 'assets/selectVideo/botonesAmarillo/botonAmarilloOn2.png');
        this.load.image('botonRosadoSelectVideo', 'assets/selectVideo/botonesRosado/botonRosadoOn2.png');
        this.load.image('botonVerdeSelectVideo', 'assets/selectVideo/botonesVerde/botonVerdeOn2.png');
        //Agregar Botones On
        this.load.image('botonMoradoOffSelectVideo', 'assets/selectVideo/botonesMorado/botonMoradoOff.png');
        this.load.image('botonNaranjaOffSelectVideo', 'assets/selectVideo/botonesAmarillo/botonAmarilloOff.png');
        this.load.image('botonRosadoOffSelectVideo', 'assets/selectVideo/botonesRosado/botonRosadoOff.png');
        this.load.image('botonVerdeOffSelectVideo', 'assets/selectVideo/botonesVerde/botonVerdeOff.png');
        //Agregar Barra
        this.load.image('barraTituloSelectVideo', 'assets/selectVideo/BARRA_TITULO_OPCIONAL.png');
   
        /*
            ####################################################################################################
        */
     
        //Agregar el contenido de viewVideo
        //Adiciona el fondo de la precarga, necesario
        this.load.image('backgroundViewVideo', 'assets/viewVideo/BG_SELECCION_DCMY.png');
        this.load.image('arbustosViewVideo', 'assets/viewVideo/ARBUSTOS_SELECCION_DCMY.png');
        this.load.image('frameViewVideo', 'assets/viewVideo/FRAME_SELECCION_DCMY.png');
        this.load.image('lianasViewVideo', 'assets/viewVideo/LIANAS_SELECCION_DCMY.png');

        //this.load.image('buttonBackViewVideo', 'assets/accionBotones/botonBack/botonBackOn.png');
        this.load.image('buttonActionViewVideo', 'assets/accionBotones/botonAction/_botonActionOn.png');
        this.load.image('buttonNextViewVideo', 'assets/accionBotones/botonNext/botonNextOn.png');

        this.load.image('iconHeartViewVideo', 'assets/viewVideo/CORAZONES_OfF_DCMY.png');
        this.load.image('iconHeartOnViewVideo', 'assets/viewVideo/CORAZONES_ON_DCMY.png');


        //Cargar Videos
        this.load.video('video1ViewVideo', 'assets/viewVideo/video1/video1.mp4');
        this.load.video('video2ViewVideo', 'assets/viewVideo/video2/video2.mp4');
        this.load.video('video3ViewVideo', 'assets/viewVideo/video3/video3.mp4');
        this.load.video('video4ViewVideo', 'assets/viewVideo/video4/video4.mp4');
        //Cargar Personaje Ugo
        this.load.image('personajeUgoTristeViewVideo', 'assets/viewVideo/ugo/UGO_AZUL_TRISTE.png');
        this.load.image('personajeUgoFelizViewVideo', 'assets/viewVideo/ugo/UGO_NARANJA_FELIZ.png');
        this.load.image('personajeUgoRabiaViewVideo', 'assets/viewVideo/ugo/UGO_ROJO_RABIA.png');
        this.load.image('personajeUgoAsustadoViewVideo', 'assets/viewVideo/ugo/UGO_ROSADO_ASUSTADO.png');
        //Cargar Personaje Bruno
        this.load.image('personajeBrunoTristeViewVideo', 'assets/viewVideo/bruno/BRUNO_AZUL_TRISTE.png');
        this.load.image('personajeBrunoFelizViewVideo', 'assets/viewVideo/bruno/BRUNO_NARANJA_FELIZ.png');
        this.load.image('personajeBrunoRabiaViewVideo', 'assets/viewVideo/bruno/BRUNO_ROJO_RABIA.png');
        this.load.image('personajeBrunoAsustadoViewVideo', 'assets/viewVideo/bruno/BRUNO_ROSADO_ASUSTADO.png');
        //Cargar Personaje Emma
        this.load.image('personajeEmmaTristeViewVideo', 'assets/viewVideo/emma/EMA_AZUL_TRISTE.png');
        this.load.image('personajeEmmaFelizViewVideo', 'assets/viewVideo/emma/EMA_NARANJA_FELIZ.png');
        this.load.image('personajeEmmaRabiaViewVideo', 'assets/viewVideo/emma/EMA_ROJO_RABIA.png');
        this.load.image('personajeEmmaAsustadoViewVideo', 'assets/viewVideo/emma/EMA_ROSADO_ASUSTADO.png');
        //Cargar Personaje Lucas
        this.load.image('personajeLucasTristeViewVideo', 'assets/viewVideo/lucas/LUCAS_AZUL_TRISTE.png');
        this.load.image('personajeLucasFelizViewVideo', 'assets/viewVideo/lucas/LUCAS_NARANJA_FELIZ.png');
        this.load.image('personajeLucasRabiaViewVideo', 'assets/viewVideo/lucas/LUCAS_ROJO_RABIA.png');
        this.load.image('personajeLucasAsustadoViewVideo', 'assets/viewVideo/lucas/LUCAS_ROSA_ASUSTADO.png');


         /*
            ####################################################################################################
        */
     
        //Agregar el contenido de la vista de emocionFallido
        this.rootNameEmocionFallido = 'final-';
        this.fileNumberMask = '0000';
        this.fileExtension = '.PNG';

       for (var i = 1; i <= 98; i++) {
           this.fileNumber = this.fileNumberMask.substring(0, this.fileNumberMask.length - i.toString().length);
           this.fileNumber += i.toString();
           this.imageName = this.rootNameEmocionFallido + this.fileNumber;
           this.load.image(this.imageName, 'assets/fallidoEmocion/' + this.imageName + '_res' + this.fileExtension);
       }
        this.load.audio('audioEmocionFallido', 'assets/fallidoEmocion/audioEmocionFallido.ogg');
    

        /*
            ####################################################################################################
        */
        //Agregar el contenido de la vista de emocionBueno
        this.rootNameEmocionBueno = 'corazonFinal-';
        this.fileNumberMask = '0000';
        this.fileExtension = '.png';

        for (var i = 1; i <= 39; i++) {
            this.fileNumber = this.fileNumberMask.substring(0, this.fileNumberMask.length - i.toString().length);
            this.fileNumber += i.toString();
            this.imageName = this.rootNameEmocionBueno + this.fileNumber;
            this.load.image(this.imageName, 'assets/corazonExito/' + this.imageName + this.fileExtension);
        }
        
        this.rootNameEmocionBueno = 'Juego_1_intento_bueno_';
        this.fileExtension = '.PNG';
        for (var i = 1; i <= 255; i++) {
            this.fileNumber = this.fileNumberMask.substring(0, this.fileNumberMask.length - i.toString().length);
            this.fileNumber += i.toString();
            this.imageName = this.rootNameEmocionBueno + this.fileNumber;
            this.load.image(this.imageName, 'assets/buenoEmocion/' + this.imageName + '_res' + this.fileExtension);
        }
        this.load.audio('audioEmocionBueno', 'assets/buenoEmocion/audioEmocionBueno.ogg');
       
        this.load.audio('eIni', 'assets/audios/0Queteparecesiantesdejugar.mp3');
        this.load.audio('EFin', 'assets/audios/6FINALUGOReconocistetodaslasemociones.mp3');
        
        
    },
    create: function () {
        window.clearInterval(this.interval);

        console.log('En preloader create Main en Como Me Siento Yo');
        this.game.state.start('CoverPage');  //********************************



       //this.game.state.states['SelectVideo'].videoActivePlay = "video1ViewVideo";
       // this.game.state.start('SelectVideo');






        //this.game.state.start('Main');
        //alert(2);
        //this.game.state.start('SelectVideo');
		
		//this.game.state.start('Intro');
		
    }
};