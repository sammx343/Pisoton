Candy.BuenoEmocion = function (game) {
};
Candy.BuenoEmocion.prototype = {
    create: function () {
        console.log("Load BuenoEmocion");
        var context = this;
        //Adiciona el fondo de la precarga, necesario 
        this.game.add.sprite(0, 0, 'backgroundIntro');

        var animationFrames = 255;
        var framesCounter = 1;
        var context = this;
        this.animationFinish = false;
              
        // Adding animation
        var animationImages = [];

        this.rootName = 'Juego_1_intento_bueno_';
        this.fileNumberMask = '0000';

        for (var i = 1; i <= animationFrames; i++) {
            this.fileNumber = this.fileNumberMask.substring(0, this.fileNumberMask.length - i.toString().length);
            this.fileNumber += i.toString();
            this.imageName = this.rootName + this.fileNumber;
            animationImages.push(this.imageName);
        }

       

        var emocionBueno = this.game.add.sprite(600, 410, animationImages[0]);
        var sound = this.game.sound.play('audioEmocionBueno');

        var interval = setInterval(function () {
            this.advance = (sound.currentTime / sound.duration) / 1000;
            framesCounter = parseInt(animationFrames * this.advance);
            if (framesCounter < animationFrames) {
                emocionBueno.loadTexture(animationImages[framesCounter]);
               
            }
            else {
                context.animationFinish = true;
                window.clearInterval(interval);
                
            }
        }, 3);

        //fondoMenuIntro
        var fondoMenuIntro = this.game.add.sprite(0, 845, 'fondoMenuIntro');
        fondoMenuIntro.scale.setTo(1, 0.22);
        //Button Next

     

        //EVENTO DEL BOTON
        this.add.button(1670, 870, 'buttonNext', function ()
        {
            if (!context.animationFinish){
                swal("No puedes saltar el video", "debes esperar a que termine el video", "error")
                return;
            }
            var listVideos = ["video1ViewVideo", "video2ViewVideo", "video3ViewVideo", "video4ViewVideo"];
            debugger;
            var posicionVideo = listVideos.indexOf(this.videoCurrentPlay);
             if (posicionVideo != -1) {
                posicionVideo++;
            }
            if (posicionVideo >= 4) {
               
                this.game.state.states['SelectVideo'].videoActivePlay = listVideos[0];
            } else{
                this.game.state.states['SelectVideo'].videoActivePlay = listVideos[posicionVideo];
            } if (CORAZON == 4) {

                this.game.sound.play('EFin');
                CORAZON = 0;
                EstadoVideo1 = 'ACTIVO';
                EstadoVideo2 = 'ACTIVO';
                EstadoVideo3 = 'ACTIVO';
                EstadoVideo4 = 'ACTIVO';

                //swal("Muy bien, lo lograste", "has completado todos los corazones", "success");

                CORAZON = 0;
                this.game.state.start('CoverPage');
            } else {
                this.game.state.start('SelectVideo');
              }
        }, this, 1, 0, 2);

        //ADICIONA EL CORAZON
        var animationImagesHeart = [];
        this.rootName = 'corazonFinal-';
        this.fileNumberMask = '0000';

        for (var i = 0; i < 39; i++) {
            this.fileNumber = this.fileNumberMask.substring(0, this.fileNumberMask.length - i.toString().length);
            this.fileNumber += i.toString();
            this.imageName = this.rootName + this.fileNumber;
            animationImagesHeart.push(this.imageName);
           
        }
        var posicionX = 0;
        var posicionY = -300;

        //++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
        switch (CORAZON) {
            case 1:
                console.log("PASO 6 - UN CORAZON");
                posicionX = -300;
                break;
            case 2:
                console.log("PASO 7 - DOS CORAZONES");
                this.game.add.sprite(-300, -300, 'corazonFinal-0039');
                posicionX = -75;
                break;
            case 3:
                console.log("PASO 8 - TRES CORAZONES");
                this.game.add.sprite(-300, -300, 'corazonFinal-0039');
                this.game.add.sprite(-75, -300, 'corazonFinal-0039');
                posicionX = 150;
                break;
            case 4:
                console.log("PASO 9 - CUATRO CORAZONES");
                this.game.add.sprite(-300, -300, 'corazonFinal-0039');
                this.game.add.sprite(-75, -300, 'corazonFinal-0039');
                this.game.add.sprite(150, -300, 'corazonFinal-0039');
                posicionX = 375;
                break;
        }



        //switch (this.videoCurrentPlay) {
        //    case "video1ViewVideo":
        //        posicionX = -300;
        //        break;
        //    case "video2ViewVideo":
        //        this.game.add.sprite(-300, -300, 'corazonFinal-0039');
        //        posicionX = -75;
        //        break;
        //    case "video3ViewVideo":
        //        this.game.add.sprite(-300, -300, 'corazonFinal-0039');
        //        this.game.add.sprite(-75, -300, 'corazonFinal-0039');
        //        posicionX = 150;
        //        break;
        //    case "video4ViewVideo":
        //        this.game.add.sprite(-300, -300, 'corazonFinal-0039');
        //        this.game.add.sprite(-75, -300, 'corazonFinal-0039');
        //        this.game.add.sprite(150, -300, 'corazonFinal-0039');
        //        posicionX = 375;
        //        break;
        //}


        var emocionBuenoHeart = this.game.add.sprite(posicionX, posicionY, animationImagesHeart[0]);
        var framesCounter = 1;
        var interval = setInterval(function () {
            if (framesCounter <= 39) {
             
                emocionBuenoHeart.loadTexture(animationImagesHeart[framesCounter]);
            }
            else {
                
                window.clearInterval(interval);
            }
            framesCounter++;
        }, 800);


       
       // this.game.add.sprite(-300, -300, 'corazonExitoBrillante');
       // this.game.add.sprite(-75, -300, 'corazonExitoBrillante');
       // this.game.add.sprite(150, -300, 'corazonExitoBrillante');
      //  this.game.add.sprite(375, -300, 'corazonExitoBrillante');
    },
    update: function () {
    },
};
