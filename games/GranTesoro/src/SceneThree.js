Candy.SceneThree = function(game) {
};
var recompensa1;
var recompensa2;
var recompensa3;

var Pista111 = false;
var Pista222 = false;
var Pista333 = false;

Candy.SceneThree.prototype = {
    create: function() {

        //alert(3);
        this.game.sound.play('eTres');

        Pista111 = false;         Pista222 = false;        Pista333 = false;

        var liScale = 0.4;

        //Sonido de fondo
        music = this.game.add.audio('AmbEsc1MigranTesoro',1,true);  
        music.play();

        var mensajeError = "Intentalo de nuevo.";
        var mensajeExito = "Has encontrado una pieza oculta, Felicitaciones.";

        //Adiciona el fondo
        this.game.add.sprite(0, 0, 'Escenario3');


        //Animar Ugo
        var lUgo = this.game.add.sprite(400 * liScale, 295 * liScale, 'Ugo');
        //lUgo.scale.setTo(2, 2);
        var walk = lUgo.animations.add('AnimaUgo');
        lUgo.inputEnabled = true;  //Permite que el sprite sea clickeable        
        //lUgo.events.onInputDown.add(listenerUgo, this);
        lUgo.input.pixelPerfectClick = true;
        lUgo.input.useHandCursor = true;         
        lUgo.events.onInputDown.add(listenerUgo, this);


		var EscalaRecompensas = 0.3;
        recompensa1 = this.game.add.sprite(1400 * liScale, 100 * liScale, 'recompensa1'); recompensa1.frame = 0;
        recompensa1.scale.setTo(EscalaRecompensas);

        recompensa2 = this.game.add.sprite(1550 * liScale, 100 * liScale, 'recompensa2'); recompensa2.frame = 0;
        recompensa2.scale.setTo(EscalaRecompensas);

        recompensa3 = this.game.add.sprite(1700 * liScale, 100 * liScale, 'recompensa3'); recompensa3.frame = 0;
        recompensa3.scale.setTo(EscalaRecompensas);
               
                
        this.add.button(195, 288, 'platoMesa', function () {
            this.game.sound.play('Esc2Barril');  //Sonido
            
        }, this, 1, 0, 2);

        this.add.button(27, 272, 'salerosMesa', function () {
            this.game.sound.play('Esc2Barril');  //Sonido
            
        }, this, 1, 0, 2);


        
        // //Animar Jarra
        // var lJarra = this.game.add.sprite(900 * liScale, 600 * liScale, 'Jarra');
        // liScaleP = 0.43;
        // lJarra.scale.setTo(liScaleP, liScaleP);
        
        // var walk = lJarra.animations.add('AnimaJarra');
        // lJarra.inputEnabled = true;  //Permite que el sprite sea clickeable        
        // //lJarra.events.onInputDown.add(listenerJarra, this);
        // lJarra.input.pixelPerfectClick = true;
        // lJarra.input.useHandCursor = true;         
        // lJarra.events.onInputDown.add(listenerJarra, this);

      

        //Animar Emma
        var lEmma = this.game.add.sprite(896 * liScale, 240 * liScale, 'Emma');
        liScaleP = 0.83;
        lEmma.scale.setTo(liScaleP, liScaleP);
        var walk = lEmma.animations.add('AnimaEmma');
        lEmma.inputEnabled = true;  //Permite que el sprite sea clickeable        
        //lEmma.events.onInputDown.add(listenerEmma, this);

        lEmma.input.pixelPerfectClick = true;
        lEmma.input.useHandCursor = true;         
        lEmma.events.onInputDown.add(listenerEmma, this);


  //Animar Jarra
  var lJarra = this.game.add.sprite(800 * liScale, 320 * liScale, 'Jarra');
  liScaleP = 0.53;
  lJarra.scale.setTo(liScaleP, liScaleP);
  
  var walk = lJarra.animations.add('AnimaJarra');
  lJarra.inputEnabled = true;  //Permite que el sprite sea clickeable        
  //lJarra.events.onInputDown.add(listenerJarra, this);
  lJarra.input.pixelPerfectClick = true;
  lJarra.input.useHandCursor = true;         
  lJarra.events.onInputDown.add(listenerJarra, this);        



        // //Animar Ugo
        // var lUgo = this.game.add.sprite(450 * liScale, 295 * liScale, 'Ugo');
        // //lUgo.scale.setTo(2, 2);
        // var walk = lUgo.animations.add('AnimaUgo');
        // lUgo.inputEnabled = true;  //Permite que el sprite sea clickeable        
        // lUgo.events.onInputDown.add(listenerUgo, this);



        function listenerEmma() {
            if (Pista222 == true)
            {
                return;
            }

            Pista222 = true;

            this.game.sound.play('Esc3Emacome');  //Sonido
			if (recompensa3.frame != 1) {
                //alert(mensajeExito);
            }
            recompensa3.frame = 1;
            lEmma.animations.play('AnimaEmma', 20, false);

            //Boton siguiente
            if (recompensa1.frame == 1 && recompensa2.frame == 1 && recompensa3.frame == 1) 
            {
                    this.add.button(1670 * liScale, 880 * liScale, 'BotonPortada', function () {            
                    if (recompensa1.frame == 1 && recompensa2.frame == 1 && recompensa3.frame == 1) {
                        music.stop();
                        Pista111 = false; Pista222 = false; Pista333 = false;
                        this.game.state.start('Felicitacion3');
                        
                    } else {
                        //alert("Aun no has completado todas las piezas.");
                    }
                }, this, 1, 0, 2);
            }

        }


        function listenerUgo() {
            
            if (Pista111 == true)
            {
                return;
            }

            Pista111 = true;

            this.game.sound.play('Esc3Ugotomajugo');  //Sonido

			if (recompensa2.frame != 1) {
                //alert(mensajeExito);
            }
            recompensa2.frame = 1; 
            lUgo.animations.play('AnimaUgo', 20, false);

            //Boton siguiente
            if (recompensa1.frame == 1 && recompensa2.frame == 1 && recompensa3.frame == 1) 
            {
                    this.add.button(1670 * liScale, 880 * liScale, 'BotonPortada', function () {            
                    if (recompensa1.frame == 1 && recompensa2.frame == 1 && recompensa3.frame == 1) {
                        music.stop();
                        Pista111 = false; Pista222 = false; Pista333 = false;
                        this.game.state.start('Felicitacion3');
                        
                    } else {
                        //alert("Aun no has completado todas las piezas.");
                    }
                }, this, 1, 0, 2);
            }

        }


        function listenerJarra() {
            if (Pista333 == true)
            {
                return;
            }

            Pista333 = true;

            this.game.sound.play('Esc3Jarra');  //Sonido

            if (recompensa1.frame != 1) {
                //alert(mensajeExito);
            }
            lJarra.animations.play('AnimaJarra', 20, false);
            recompensa1.frame = 1; 

            //Boton siguiente
            if (recompensa1.frame == 1 && recompensa2.frame == 1 && recompensa3.frame == 1) 
            {
                    this.add.button(1670 * liScale, 880 * liScale, 'BotonPortada', function () {            
                    if (recompensa1.frame == 1 && recompensa2.frame == 1 && recompensa3.frame == 1) {
                        music.stop();
                        Pista111 = false; Pista222 = false; Pista333 = false;
                        this.game.state.start('Felicitacion3');
                        
                    } else {
                        //alert("Aun no has completado todas las piezas.");
                    }
                }, this, 1, 0, 2);
            }            
        }

        
		
        // storageAPI.initUnset('musicaFondo', true);
        // var audioStatus = storageAPI.get('musicaFondo');

        sceneToLoad = "Puzzle";
        currentScene = "SceneThree";
    },
    manageAudio: function () {
        // audioStatus = !audioStatus;
        // //audioButton.animations.play('' + audioStatus);
        // storageAPI.set('musicaFondo', audioStatus);
        // console.log('Audio status: ' + audioStatus);
    }
};
