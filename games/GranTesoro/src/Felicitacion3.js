﻿Candy.Felicitacion3 = function (game) {
};
Candy.Felicitacion3.prototype = {
    create: function () {
        console.log("Recompensa 3");
        //Adiciona el fondo
        this.game.add.sprite(0, 0, 'introBG');

        var liScale = 0.4;

        var animationFrames = 218;
        var framesCounter = 1;
        var context = this;
        var estadoAnimacion = true;

        // Adding animation
        var animationImages = [];
        this.rootName = 'recompensa3-final-';
        this.fileNumberMask = '0000';
        this.fileExtension = '.png';

        for (var i = 1; i <= animationFrames; i++) {
            this.fileNumber = this.fileNumberMask.substring(0, this.fileNumberMask.length - i.toString().length);
            this.fileNumber += i.toString();
            this.imageName = this.rootName + this.fileNumber;
            animationImages.push(this.imageName);
        }
        var ugo = this.game.add.sprite(0, 0, animationImages[0]);
        var sound = this.game.sound.play('audioRecompensa3');

        //Barra de madera
        this.add.sprite(0, 340, 'BarraMadera1'); 
        //al finalizar el audio, visualiza el boton continuar
        this.add.button(900 * liScale, 890 * liScale, 'button-continue', function () {
            //this.game.sound.stop('introDialog');
            if (!estadoAnimacion) {
                sound.pause();
                this.game.state.start("Puzzle");
            } else {
                //alert("Espera a que termine la animación.");
            }
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
                estadoAnimacion = false;
            }
        }, 4);  

    },
    update: function () {



    },
};
