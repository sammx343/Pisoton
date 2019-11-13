Candy.SceneOne = function (game) {
};

var recompensa1;
var recompensa2;

Candy.SceneOne.prototype = {

    create: function () {
        var mensajeError = "Intentalo de nuevo.";
        var mensajeExito = "Has encontrado una pieza oculta, Felicitaciones.";


        //Sonido de fondo
        music = this.game.add.audio('AmbEsc1MigranTesoro',1,true);  
        music.play();

        var liScale = 0.4;
        //Adiciona el fondo
        //this.game.add.sprite(277, 55, 'sceneOne');
        this.game.add.sprite(0, 0, 'Escenario1');


        //Animar Pelota
        var lPelota = this.game.add.sprite(462 * liScale, 518 * liScale, 'Pelota');
        lPelota.scale.setTo(liScale, liScale);
        var walk5 = lPelota.animations.add('AnimaPelota');
        lPelota.inputEnabled = true;  //Permite que el sprite sea clickeable        
        lPelota.events.onInputDown.add(listenerPelota, this);

        //Animar Armario
        //var lArmario = this.game.add.sprite(1462 * liScale, 368 * liScale, 'Armario');
        var lArmario = this.game.add.sprite(685 * liScale, 257 * liScale, 'Armario');
        lArmario.scale.setTo(liScale, liScale);
        var walk2 = lArmario.animations.add('AnimaArmario');
        lArmario.inputEnabled = true;  //Permite que el sprite sea clickeable        
        lArmario.events.onInputDown.add(listenerArmario, this);

        //Animar Cogin
        var lCogin = this.game.add.sprite(670 * liScale, 295 * liScale, 'cogin');
        lCogin.scale.setTo(liScale, liScale);
        var walk = lCogin.animations.add('AnimaCogin');
        lCogin.inputEnabled = true;  //Permite que el sprite sea clickeable        
        lCogin.events.onInputDown.add(listenerCogin, this);

        //Animar Ventana
        var lVentana = this.game.add.sprite(12 * liScale, 70 * liScale, 'Ventana');
        lVentana.scale.setTo(liScale, liScale);
        var walk3 = lVentana.animations.add('AnimaVentana');
        lVentana.inputEnabled = true;  //Permite que el sprite sea clickeable        
        lVentana.events.onInputDown.add(listenerVentana, this);

        //Animar Lampara
        var lLampara = this.game.add.sprite(365 * liScale, 30 * liScale, 'Lampara');
        lLampara.scale.setTo(liScale, liScale);
        var walk4 = lLampara.animations.add('AnimaLampara');
        lLampara.inputEnabled = true;
        lLampara.events.onInputDown.add(listenerLampara, this);         //lLampara.animations.play('AnimaLampara', 1, true);


/*        audioButton = this.add.button(100 * liScale, 880 * liScale, 'button-audio', this.manageAudio, this);
        audioButton.animations.add('true', [0], 10, true);
        audioButton.animations.add('false', [1], 10, true);
        audioButton.animations.play('true');
*/
		var EscalaRecompensas = 0.3;
        recompensa1 = this.game.add.sprite(1400 * liScale, 100 * liScale, 'recompensa1'); recompensa1.frame = 0;
        recompensa1.scale.setTo(EscalaRecompensas);

        recompensa2 = this.game.add.sprite(1550 * liScale, 100 * liScale, 'recompensa2'); recompensa2.frame = 0;
        recompensa2.scale.setTo(EscalaRecompensas);

        recompensa3 = this.game.add.sprite(1700 * liScale, 100 * liScale, 'recompensa3'); recompensa3.frame = 0;
        recompensa3.scale.setTo(EscalaRecompensas);


        //storageAPI.initUnset('musicaFondo', true);
        //var audioStatus = storageAPI.get('musicaFondo');
        //audioButton.animations.play('' + audioStatus);

        sceneToLoad = "SceneTwo";
        currentScene = "SceneOne";

        function listenerLampara() {
            this.game.sound.play('Esc1Lampara');  //Sonido
            lLampara.animations.play('AnimaLampara', 1, false);
            //alert(mensajeError);
        }

        function listenerVentana() {
            this.game.sound.play('Esc1Ventana');  //Sonido

            lVentana.animations.play('AnimaVentana', 2, false);
            //alert(mensajeError);
        }

        function listenerPelota() {
            this.game.sound.play('Esc1Balon');  //Sonido

            if (recompensa3.frame != 1) {
                //alert(mensajeExito);
            }
            lPelota.animations.play('AnimaPelota', 7, false);
            recompensa1.frame = 1;

            // //Boton siguiente
            if (recompensa1.frame == 1 && recompensa2.frame == 1 && recompensa3.frame == 1)
            {
                this.add.button(1670 * liScale, 880 * liScale, 'BotonPortada', function () {
                    if (recompensa1.frame == 1 && recompensa2.frame == 1 && recompensa3.frame == 1){
                        music.stop();
                        this.game.state.start('Felicitacion1');
                    } else {
                        alert("Aun no has completado todas las piezas.");
                    }
                }, this, 1, 0, 2);
            }

        }



        function listenerCogin() {
            this.game.sound.play('Esc1Sofa');  //Sonido
            if (recompensa1.frame != 1){
                //alert(mensajeExito);
            }
            lCogin.animations.play('AnimaCogin', 30, false);
            recompensa2.frame = 1;            

            // //Boton siguiente
            if (recompensa1.frame == 1 && recompensa2.frame == 1 && recompensa3.frame == 1)
            {
                this.add.button(1670 * liScale, 880 * liScale, 'BotonPortada', function () {
                    if (recompensa1.frame == 1 && recompensa2.frame == 1 && recompensa3.frame == 1){
                        music.stop();
                        this.game.state.start('Felicitacion1');
                    } else {
                        alert("Aun no has completado todas las piezas.");
                    }
                }, this, 1, 0, 2);
            }

        }


        function listenerArmario() {
            this.game.sound.play('Esc1Alacena');  //Sonido

            if (recompensa2.frame != 1) {
                //alert(mensajeExito);
            }
            lArmario.animations.play('AnimaArmario', 15, false);
            recompensa3.frame = 1;

            // //Boton siguiente
            if (recompensa1.frame == 1 && recompensa2.frame == 1 && recompensa3.frame == 1)
            {
                this.add.button(1670 * liScale, 880 * liScale, 'BotonPortada', function () {
                    if (recompensa1.frame == 1 && recompensa2.frame == 1 && recompensa3.frame == 1){
                        music.stop();
                        this.game.state.start('Felicitacion1');
                    } else {
                        alert("Aun no has completado todas las piezas.");
                    }
                }, this, 1, 0, 2);
            }            
        }

    },
    update: function () {


    },
    manageAudio: function () {
        // audioStatus = !audioStatus;
        // audioButton.animations.play('' + audioStatus);
        // storageAPI.set('musicaFondo', audioStatus);
        // console.log('Audio status: ' + audioStatus);
    }
};
