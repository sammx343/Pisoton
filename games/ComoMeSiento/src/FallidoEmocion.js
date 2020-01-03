Candy.FallidoEmocion = function (game) {
};
Candy.FallidoEmocion.prototype = {
    create: function () {
        console.log("Load FallidoEmocion");
         //Adiciona el fondo de la precarga, necesario 
        this.game.add.sprite(0, 0, 'backgroundIntro');

        var animationFrames = 98;
        var framesCounter = 1;
        var context = this;
        this.animationFinish = false;


        // Adding animation
        var animationImages = [];

        this.rootName = 'final-';
        this.fileNumberMask = '0000';

        for (var i = 1; i <= animationFrames; i++) {
            this.fileNumber = this.fileNumberMask.substring(0, this.fileNumberMask.length - i.toString().length);
            this.fileNumber += i.toString();
            this.imageName = this.rootName + this.fileNumber;
            animationImages.push(this.imageName);
        }

        var emocionFallido = this.game.add.sprite(0, 0, animationImages[0]);
        emocionFallido.scale.setTo(2);
        //emocionFallido.scale.setTo(1, 1); //*********************** */
        var sound = this.game.sound.play('audioEmocionFallido');

        var interval = setInterval(function () {
            this.advance = (sound.currentTime / sound.duration) / 950;
            framesCounter = parseInt(animationFrames * this.advance);
            if (framesCounter < animationFrames) {
                emocionFallido.loadTexture(animationImages[framesCounter]);
            }
            else {
                context.animationFinish = true;
                window.clearInterval(interval);
            }
        }, 3);

        //fondoMenuIntro
        var fondoMenuIntro = this.game.add.sprite(0, 845, 'fondoMenuIntro');
        fondoMenuIntro.scale.setTo(1, 0.22);
        //Button Back
        var NumVideo = ["0","1", "2", "3", "4"];
        this.add.button(100, 870, 'buttonBack', function () {
            if (!context.animationFinish) {
                swal("No puedes saltar el video", "debes esperar a que termine el video", "error")
                return;
            }
            debugger;
            //this.game.state.states['SelectVideo'].videoCurrentPlay = context.videoCurrentPlay;
            if (NumVideo[VideoElegido] == 1) {
                
                this.game.state.states['ViewVideo'].videoCurrentPlay = "video1ViewVideo";
                this.game.state.start("ViewVideo");
                
            } 
            if (NumVideo[VideoElegido] == 2) {
                this.game.state.states['ViewVideo'].videoCurrentPlay = "video2ViewVideo";
                this.game.state.start("ViewVideo");
                    
            } 
            if (NumVideo[VideoElegido] == 3) {
                this.game.state.states['ViewVideo'].videoCurrentPlay = "video3ViewVideo";
                this.game.state.start("ViewVideo");
                        
            } 
            if (NumVideo[VideoElegido] == 4) {
                this.game.state.states['ViewVideo'].videoCurrentPlay = "video4ViewVideo";
                this.game.state.start("ViewVideo");
                            
            }
              
           // this.game.state.start('SelectVideo');
        }, this, 1, 0, 2);
    },
    update: function () {
    },
};
