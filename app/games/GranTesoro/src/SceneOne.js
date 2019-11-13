Candy.SceneOne = function (game) {
};

var recompensa1;
var recompensa2;

Candy.SceneOne.prototype = {

    create: function () {
        var mensajeError = "Intentalo de nuevo.";
        var mensajeExito = "Has encontrado una pieza oculta, Felicitaciones.";

        var liScale = 0.4;
        //Adiciona el fondo
        //this.game.add.sprite(277, 55, 'sceneOne');
        this.game.add.sprite(0, 0, 'Escenario1');

        //Animar Cogin
        var lCogin = this.game.add.sprite(832 * liScale, 309 * liScale, 'cogin');
        lCogin.scale.setTo(liScale, liScale);
        var walk = lCogin.animations.add('AnimaCogin');
        lCogin.inputEnabled = true;  //Permite que el sprite sea clickeable        
        lCogin.events.onInputDown.add(listenerCogin, this);

        //Animar Armario
        var lArmario = this.game.add.sprite(1462 * liScale, 368 * liScale, 'Armario');
        lArmario.scale.setTo(liScale, liScale);
        var walk2 = lArmario.animations.add('AnimaArmario');
        lArmario.inputEnabled = true;  //Permite que el sprite sea clickeable        
        lArmario.events.onInputDown.add(listenerArmario, this);

        //Animar Pelota
        var lPelota = this.game.add.sprite(1062 * liScale, 768 * liScale, 'Pelota');
        lPelota.scale.setTo(liScale, liScale);
        var walk5 = lPelota.animations.add('AnimaPelota');
        lPelota.inputEnabled = true;  //Permite que el sprite sea clickeable        
        lPelota.events.onInputDown.add(listenerPelota, this);


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

        //Boton siguiente
        this.add.button(1670 * liScale, 880 * liScale, 'BotonPortada', function () {
            if (recompensa1.frame == 1 && recompensa2.frame == 1 && recompensa3.frame == 1){
                this.game.state.start('Felicitacion1');
            } else {
                alert("Aun no has completado todas las piezas.");
            }
        }, this, 1, 0, 2);

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


        storageAPI.initUnset('musicaFondo', true);
        var audioStatus = storageAPI.get('musicaFondo');
        //audioButton.animations.play('' + audioStatus);

        sceneToLoad = "SceneTwo";
        currentScene = "SceneOne";

        function listenerLampara() {
            lLampara.animations.play('AnimaLampara', 1, false);
            alert(mensajeError);
        }

        function listenerCogin() {
            if (recompensa1.frame != 1){
                //alert(mensajeExito);
            }
            lCogin.animations.play('AnimaCogin', 30, false);
            recompensa1.frame = 1;            
        }

        function listenerArmario() {
            if (recompensa2.frame != 1) {
                //alert(mensajeExito);
            }
            lArmario.animations.play('AnimaArmario', 15, false);
            recompensa2.frame = 1;
        }

        function listenerVentana() {
            lVentana.animations.play('AnimaVentana', 2, false);
            alert(mensajeError);
        }

        function listenerPelota() {
            if (recompensa3.frame != 1) {
                //alert(mensajeExito);
            }
            lPelota.animations.play('AnimaPelota', 7, false);
            recompensa3.frame = 1;
        }



    },
    update: function () {
        //  var activePointer = this.game.input.activePointer;
        //  console.log('X=' + activePointer.x + ' Y=' + activePointer.y);
        //
        //  if ((activePointer.x > 480) && (activePointer.x < 605))
        //  {
        //      if ((activePointer.y > 90) && (activePointer.y < 205))
        //      {
        //          lLampara.animations.play('AnimaLampara', 1, false);
        //      }
        //  }
        //480, 90          605, 205
    },
    manageAudio: function () {
        audioStatus = !audioStatus;
        audioButton.animations.play('' + audioStatus);
        storageAPI.set('musicaFondo', audioStatus);
        console.log('Audio status: ' + audioStatus);
    }
};
