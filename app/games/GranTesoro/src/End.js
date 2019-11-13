Candy.End = function(game) {
};
Candy.End.prototype = {
    create: function() {

        console.log("Escena Final");
        //Adiciona el fondo
        this.game.add.sprite(0, 0, 'introBG');

        var liScale = 0.4;

        var animationFrames = 234;
        var framesCounter = 1;
        var context = this;

        // Adding animation
        var animationImages = [];
        this.rootName = 'final-Juego2_IntentoBueno';
        this.fileNumberMask = '0000';
        this.fileExtension = '.png';

        for (var i = 1; i <= animationFrames; i++) {
            this.fileNumber = this.fileNumberMask.substring(0, this.fileNumberMask.length - i.toString().length);
            this.fileNumber += i.toString();
            this.imageName = this.rootName + this.fileNumber;
            animationImages.push(this.imageName);
        }
        var ugo = this.game.add.sprite(0, 0, animationImages[0]);
        var sound = this.game.sound.play('audioEscenafinal');

        //al finalizar el audio, visualiza el boton continuar
        this.add.button(1235 * liScale, 820 * liScale, 'button-continue', function () {
            //this.game.sound.stop('introDialog');
            sound.pause();
            this.game.state.start("Main");
        }, this, 1, 0, 2);


        // Playing Ugo animation
        var interval = setInterval(function () {
            this.advance = (sound.currentTime / sound.duration) / 1000;
            framesCounter = parseInt(animationFrames * this.advance);
            if (framesCounter < animationFrames) {
                ugo.loadTexture(animationImages[framesCounter]);
            }
            else {
                window.clearInterval(interval);
            }
        }, 4); 
    },
    manageAudio: function() {
    }
};
