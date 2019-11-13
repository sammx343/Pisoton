Candy.SceneTwo = function(game) {
};
var recompensa1;
var recompensa2;
var recompensa3;

Candy.SceneTwo.prototype = {
    create: function() {

        var mensajeError = "Intentalo de nuevo.";
        var mensajeExito = "Has encontrado una pieza oculta, Felicitaciones.";

        var liScale = 0.4;

        //Adiciona el fondo
        this.game.add.sprite(0, 0, 'Escenario2');

		var EscalaRecompensas = 0.3;
        recompensa1 = this.game.add.sprite(1400 * liScale, 100 * liScale, 'recompensa1'); recompensa1.frame = 0;
        recompensa1.scale.setTo(EscalaRecompensas);

        recompensa2 = this.game.add.sprite(1550 * liScale, 100 * liScale, 'recompensa2'); recompensa2.frame = 0;
        recompensa2.scale.setTo(EscalaRecompensas);

        recompensa3 = this.game.add.sprite(1700 * liScale, 100 * liScale, 'recompensa3'); recompensa3.frame = 0;
        recompensa3.scale.setTo(EscalaRecompensas);
/*		
        recompensa1 = this.game.add.sprite(1300 * liScale, 40 * liScale, 'recompensa1'); recompensa1.frame = 0;
        recompensa1.scale.setTo(0.5, 0.5);

        recompensa2 = this.game.add.sprite(1400 * liScale, 40 * liScale, 'recompensa2'); recompensa2.frame = 0;
        recompensa2.scale.setTo(0.5, 0.5);

        recompensa3 = this.game.add.sprite(1500 * liScale, 40 * liScale, 'recompensa3'); recompensa3.frame = 0;
        recompensa3.scale.setTo(0.5, 0.5);
*/

        //Animar Pez
        var lPez = this.game.add.sprite(20 * liScale, 370 * liScale, 'Pez');
        //lPez.scale.setTo(2, 2);
        var walk = lPez.animations.add('AnimaPez');
        lPez.inputEnabled = true;  //Permite que el sprite sea clickeable        
        lPez.events.onInputDown.add(listenerPez, this);

        function listenerPez() {
            lPez.animations.play('AnimaPez', 15, false);
        }


        //Animar Puerta
        var lPuerta = this.game.add.sprite(1570 * liScale, 280 * liScale, 'Puerta');
        lPuerta.scale.setTo(liScale, liScale);
        var walk = lPuerta.animations.add('AnimaPuerta');
        lPuerta.inputEnabled = true;  //Permite que el sprite sea clickeable        
        lPuerta.events.onInputDown.add(listenerPuerta, this);

        function listenerPuerta() {
            if (recompensa1.frame != 1) {
                //alert(mensajeExito);
            }
            lPuerta.animations.play('AnimaPuerta', 7, false);
            recompensa1.frame = 1;
        }


        //Animar Barril
        var lBarril = this.game.add.sprite(1520 * liScale, 570 * liScale, 'Barril');
        lBarril.scale.setTo(liScale, liScale);
        var walk = lBarril.animations.add('AnimaBarril');
        lBarril.inputEnabled = true;  //Permite que el sprite sea clickeable        
        lBarril.events.onInputDown.add(listenerBarril, this);

        function listenerBarril() {
            if (recompensa3.frame != 1) {
                //alert(mensajeExito);
            }
            lBarril.animations.play('AnimaBarril', 20, false);
            recompensa3.frame = 1;
        }


        //Animar Flor
        var lFlor1 = this.game.add.sprite(1150 * liScale, 695 * liScale, 'Flor');
        lFlor1.scale.setTo(liScale, liScale);
        var walkf1 = lFlor1.animations.add('AnimaFlor1');
        var lFlor2 = this.game.add.sprite(980 * liScale, 695 * liScale, 'Flor');
        lFlor2.scale.setTo(liScale, liScale);
        var walkf2 = lFlor2.animations.add('AnimaFlor2');

        var lFlor = this.game.add.sprite(1330 * liScale, 695 * liScale, 'Flor');
        lFlor.scale.setTo(liScale, liScale);
        var walk = lFlor.animations.add('AnimaFlor');
        lFlor.inputEnabled = true;  //Permite que el sprite sea clickeable        
        lFlor.events.onInputDown.add(listenerFlor, this);

        function listenerFlor() {
            lFlor.animations.play('AnimaFlor', 10, false);
            lFlor1.animations.play('AnimaFlor1', 10, false);
            lFlor2.animations.play('AnimaFlor2', 10, false);
        }



        //Animar Maceta1
        var lMaceta1 = this.game.add.sprite(245 * liScale, 210 * liScale, 'Maceta1');
        lMaceta1.scale.setTo(liScale, liScale);
        var walk = lMaceta1.animations.add('AnimaMaceta1');
        lMaceta1.inputEnabled = true;  //Permite que el sprite sea clickeable        
        lMaceta1.events.onInputDown.add(listenerMaceta1, this);

        function listenerMaceta1() {
            lMaceta1.animations.play('AnimaMaceta1', 20, false);
            lMaceta2.animations.play('AnimaMaceta2', 20, false);
        }

        //Animar Maceta2
        var lMaceta2 = this.game.add.sprite(455 * liScale, 195 * liScale, 'Maceta2');
        lMaceta2.scale.setTo(liScale, liScale);
        var walk = lMaceta2.animations.add('AnimaMaceta2');
        lMaceta2.inputEnabled = true;  //Permite que el sprite sea clickeable        
        lMaceta2.events.onInputDown.add(listenerMaceta2, this);

        function listenerMaceta2() {
            lMaceta2.animations.play('AnimaMaceta2', 20, false);
            lMaceta1.animations.play('AnimaMaceta1', 20, false);
        }


      


        //Animar Zanahoria
        var lZanahoria = this.game.add.sprite(960 * liScale, 457 * liScale, 'Zanahoria');
        lZanahoria.scale.setTo(liScale, liScale);
        var lZanahoria2 = this.game.add.sprite(1090 * liScale, 457 * liScale, 'Zanahoria');
        lZanahoria2.scale.setTo(liScale, liScale);
        var lZanahoria3 = this.game.add.sprite(1220 * liScale, 457 * liScale, 'Zanahoria');
        lZanahoria3.scale.setTo(liScale, liScale);
        var lZanahoria4 = this.game.add.sprite(1330 * liScale, 457 * liScale, 'Zanahoria');
        lZanahoria4.scale.setTo(liScale, liScale);
        //Animar Zanahoria
        var lZanahoria5 = this.game.add.sprite(960 * liScale, 587 * liScale, 'Zanahoria');
        lZanahoria5.scale.setTo(liScale, liScale);
        var lZanahoria6 = this.game.add.sprite(1090 * liScale, 587 * liScale, 'Zanahoria');
        lZanahoria6.scale.setTo(liScale, liScale);
        var lZanahoria7 = this.game.add.sprite(1220 * liScale, 587 * liScale, 'Zanahoria');
        lZanahoria7.scale.setTo(liScale, liScale);
        var lZanahoria8 = this.game.add.sprite(1330 * liScale, 587 * liScale, 'Zanahoria');
        lZanahoria8.scale.setTo(liScale, liScale);

        //lZanahoria.scale.setTo(2, 2);
        var walk = lZanahoria.animations.add('AnimaZanahoria');
        lZanahoria.inputEnabled = true;  //Permite que el sprite sea clickeable        
        lZanahoria.events.onInputDown.add(listenerZanahoria, this);

        var walk = lZanahoria2.animations.add('AnimaZanahoria2');
        lZanahoria2.inputEnabled = true;  //Permite que el sprite sea clickeable        
        lZanahoria2.events.onInputDown.add(listenerZanahoria, this);

        var walk = lZanahoria3.animations.add('AnimaZanahoria3');
        lZanahoria3.inputEnabled = true;  //Permite que el sprite sea clickeable        
        lZanahoria3.events.onInputDown.add(listenerZanahoria, this);

        var walk = lZanahoria4.animations.add('AnimaZanahoria4');
        lZanahoria4.inputEnabled = true;  //Permite que el sprite sea clickeable        
        lZanahoria4.events.onInputDown.add(listenerZanahoria, this);

        var walk = lZanahoria5.animations.add('AnimaZanahoria5');
        lZanahoria5.inputEnabled = true;  //Permite que el sprite sea clickeable        
        lZanahoria5.events.onInputDown.add(listenerZanahoria, this);

        var walk = lZanahoria6.animations.add('AnimaZanahoria6');
        lZanahoria6.inputEnabled = true;  //Permite que el sprite sea clickeable        
        lZanahoria6.events.onInputDown.add(listenerZanahoria, this);

        var walk = lZanahoria7.animations.add('AnimaZanahoria7');
        lZanahoria7.inputEnabled = true;  //Permite que el sprite sea clickeable        
        lZanahoria7.events.onInputDown.add(listenerZanahoria, this);

        var walk = lZanahoria8.animations.add('AnimaZanahoria8');
        lZanahoria8.inputEnabled = true;  //Permite que el sprite sea clickeable        
        lZanahoria8.events.onInputDown.add(listenerZanahoria, this);

        function listenerZanahoria() {
            lZanahoria.animations.play('AnimaZanahoria', 20, false);
            lZanahoria2.animations.play('AnimaZanahoria2', 20, false);
            lZanahoria3.animations.play('AnimaZanahoria3', 20, false);
            lZanahoria4.animations.play('AnimaZanahoria4', 20, false);
            lZanahoria5.animations.play('AnimaZanahoria5', 20, false);
            lZanahoria6.animations.play('AnimaZanahoria6', 20, false);
            lZanahoria7.animations.play('AnimaZanahoria7', 20, false);
            lZanahoria8.animations.play('AnimaZanahoria8', 20, false);
        }


        





        //Animar Pastel
        var lPastel = this.game.add.sprite(840 * liScale, 10 * liScale, 'Pastel');
        lPastel.scale.setTo(liScale, liScale);
        var walk = lPastel.animations.add('AnimaPastel');
        //lPastel.inputEnabled = true;  //Permite que el sprite sea clickeable        
  //      lPastel.events.onInputDown.add(listenerPastel, this);
  //
  //      function listenerPastel() {
  //          lPastel.animations.play('AnimaPastel', 10, false);
  //      }



        //Animar Ventana2
        var lVentana2 = this.game.add.sprite(720 * liScale, 25 * liScale, 'Ventana2');
        //lVentana2.scale.setTo(liScale, liScale);
        var walk = lVentana2.animations.add('AnimaVentana2');
        lVentana2.inputEnabled = true;  //Permite que el sprite sea clickeable        
        lVentana2.events.onInputDown.add(listenerVentana2, this);

        function listenerVentana2() {
            if (recompensa2.frame != 1) {
                //alert(mensajeExito);
            }
            lVentana2.animations.play('AnimaVentana2', 3, false);
            lPastel.animations.play('AnimaPastel', 10, false);
            recompensa2.frame = 1;
        }


        //Animar Gusano
        var lGusano = this.game.add.sprite(660 * liScale, 487 * liScale, 'Gusano');
        lGusano.scale.setTo(liScale, liScale);
        var walk = lGusano.animations.add('AnimaGusano');
        lGusano.inputEnabled = true;  //Permite que el sprite sea clickeable        
        lGusano.events.onInputDown.add(listenerGusano, this);

        function listenerGusano() {
            lGusano.animations.play('AnimaGusano', 15, false);
        }

        var Tiera1 = this.game.add.sprite(900 * liScale, 560 * liScale, 'TierraZana');
        Tiera1.scale.setTo(liScale, liScale);
        var Tiera12 = this.game.add.sprite(900 * liScale, 710 * liScale, 'TierraZana');
        Tiera12.scale.setTo(liScale, liScale);

       /* audioButton = this.add.button(100 * liScale, 880 * liScale, 'button-audio', this.manageAudio, this);
        audioButton.animations.add('true', [0], 10, true);
        audioButton.animations.add('false', [1], 10, true);
        audioButton.animations.play('true');
*/
        storageAPI.initUnset('musicaFondo', true);
        var audioStatus = storageAPI.get('musicaFondo');
        //audioButton.animations.play('' + audioStatus);




        //this.add.button(1300, 200, 'hitarea', function(){this.game.state.start('Reward')}, this, 1, 0, 2);
        //this.add.button(1400, 790, 'hitarea', function(){this.game.state.start('Loading')}, this, 1, 0, 2);
        sceneToLoad = "SceneThree";
        currentScene = "SceneTwo";

        //Boton siguiente
        this.add.button(1670 * liScale, 880 * liScale, 'BotonPortada', function () {           
            if (recompensa1.frame == 1 && recompensa2.frame == 1 && recompensa3.frame == 1) {
                this.game.state.start('Felicitacion2')
            } else {
                alert("Aun no has completado todas las piezas.");
            }
        }, this, 1, 0, 2);





    },
    manageAudio: function () {
        audioStatus = !audioStatus;
        //audioButton.animations.play('' + audioStatus);
        storageAPI.set('musicaFondo', audioStatus);
        console.log('Audio status: ' + audioStatus);

    }
};
