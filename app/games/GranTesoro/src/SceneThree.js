Candy.SceneThree = function(game) {
};
var recompensa1;
var recompensa2;
var recompensa3;

Candy.SceneThree.prototype = {
    create: function() {
        var liScale = 0.4;

        var mensajeError = "Intentalo de nuevo.";
        var mensajeExito = "Has encontrado una pieza oculta, Felicitaciones.";

        //Adiciona el fondo
        this.game.add.sprite(0, 0, 'Escenario3');

		var EscalaRecompensas = 0.3;
        recompensa1 = this.game.add.sprite(1400 * liScale, 100 * liScale, 'recompensa1'); recompensa1.frame = 0;
        recompensa1.scale.setTo(EscalaRecompensas);

        recompensa2 = this.game.add.sprite(1550 * liScale, 100 * liScale, 'recompensa2'); recompensa2.frame = 0;
        recompensa2.scale.setTo(EscalaRecompensas);

        recompensa3 = this.game.add.sprite(1700 * liScale, 100 * liScale, 'recompensa3'); recompensa3.frame = 0;
        recompensa3.scale.setTo(EscalaRecompensas);
		
/*
        recompensa1 = this.game.add.sprite(1400 * liScale, 60 * liScale, 'recompensa1'); recompensa1.frame = 0;
        recompensa1.scale.setTo(0.5, 0.5);

        recompensa2 = this.game.add.sprite(1500 * liScale, 60 * liScale, 'recompensa2'); recompensa2.frame = 0;
        recompensa2.scale.setTo(0.5, 0.5);

        recompensa3 = this.game.add.sprite(1600 * liScale, 60 * liScale, 'recompensa3'); recompensa3.frame = 0;
        recompensa3.scale.setTo(0.5, 0.5);
*/
        
        this.add.button(195, 288, 'platoMesa', function () {
            
        }, this, 1, 0, 2);

        this.add.button(27, 272, 'salerosMesa', function () {
            
        }, this, 1, 0, 2);



        //Animar Jarra
        var lJarra = this.game.add.sprite(900 * liScale, 700 * liScale, 'Jarra');
        lJarra.scale.setTo(liScale, liScale);
        var walk = lJarra.animations.add('AnimaJarra');
        lJarra.inputEnabled = true;  //Permite que el sprite sea clickeable        
        lJarra.events.onInputDown.add(listenerJarra, this);

        function listenerJarra() {
            if (recompensa1.frame != 1) {
                //alert(mensajeExito);
            }
            lJarra.animations.play('AnimaJarra', 2, false);
            recompensa1.frame = 1; 
        }

        //Animar Emma
        var lEmma = this.game.add.sprite(1271 * liScale, 336 * liScale, 'Emma');
        lEmma.scale.setTo(liScale, liScale);
        var walk = lEmma.animations.add('AnimaEmma');
        lEmma.inputEnabled = true;  //Permite que el sprite sea clickeable        
        lEmma.events.onInputDown.add(listenerEmma, this);

        function listenerEmma() {
			if (recompensa3.frame != 1) {
                //alert(mensajeExito);
            }
            recompensa3.frame = 1;
            lEmma.animations.play('AnimaEmma', 30, false);
        }


        //Animar Ugo
        var lUgo = this.game.add.sprite(450 * liScale, 120 * liScale, 'Ugo');
        //lUgo.scale.setTo(2, 2);
        var walk = lUgo.animations.add('AnimaUgo');
        lUgo.inputEnabled = true;  //Permite que el sprite sea clickeable        
        lUgo.events.onInputDown.add(listenerUgo, this);

        function listenerUgo() {
			if (recompensa2.frame != 1) {
                //alert(mensajeExito);
            }
            recompensa2.frame = 1; 
            lUgo.animations.play('AnimaUgo', 30, false);
        }



        //Boton siguiente
        this.add.button(1670 * liScale, 880 * liScale, 'BotonPortada', function () {            
            if (recompensa1.frame == 1 && recompensa2.frame == 1 && recompensa3.frame == 1) {
                this.game.state.start('Felicitacion3');
            } else {
                alert("Aun no has completado todas las piezas.");
            }
        }, this, 1, 0, 2);

        /*audioButton = this.add.button(100 * liScale, 880 * liScale, 'button-audio', this.manageAudio, this);
        audioButton.animations.add('true', [0], 10, true);
        audioButton.animations.add('false', [1], 10, true);
        audioButton.animations.play('true');
		*/
		
        storageAPI.initUnset('musicaFondo', true);
        var audioStatus = storageAPI.get('musicaFondo');
        //audioButton.animations.play('' + audioStatus);




        //Adiciona el fondo
        //this.game.add.sprite(277, 55, 'sceneThree');

        //this.add.button(590, 510, 'hitarea', function(){this.game.state.start('Reward')}, this, 1, 0, 2);
        //this.add.button(1400, 790, 'hitarea', function(){this.game.state.start('Loading')}, this, 1, 0, 2);
        sceneToLoad = "Puzzle";
        currentScene = "SceneThree";
    },
    manageAudio: function () {
        audioStatus = !audioStatus;
        //audioButton.animations.play('' + audioStatus);
        storageAPI.set('musicaFondo', audioStatus);
        console.log('Audio status: ' + audioStatus);
    }
};
