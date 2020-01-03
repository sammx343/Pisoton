Candy.Intro = function(game) {
};
Candy.Intro.prototype = {
    create: function() {
        
		var PausaAudio = false;
        var liScale = 0.4;

        var animationFrames = 520;
        var framesCounter = 1;
        var context = this;
        var estadoAnimacion = true;

        //Adding background
        this.game.add.sprite(0, 0, 'introBG');

        // Adding animation
        var animationImages = [];
        this.rootName = 'Juego_2_intro';
        this.fileNumberMask = '0000';
        this.fileExtension = '.png';

        for(var i = 1; i <= animationFrames; i++)
        {
            this.fileNumber = this.fileNumberMask.substring(0, this.fileNumberMask.length - i.toString().length);
            this.fileNumber += i.toString();
            this.imageName = this.rootName + this.fileNumber;
            animationImages.push(this.imageName);
           // console.log(this.imageName);
        }

        var ugo = this.game.add.sprite(0, 0, animationImages[0]);

        var sound = this.game.sound.play('introDialog');


        this.add.sprite(0, 340, 'BarraMadera1');                       
        
        
        // if (!estadoAnimacion)
        // {
            //al finalizar el audio, visualiza el boton continuar
            this.add.button(900 * liScale, 890 * liScale, 'button-continue', function () {
                //this.game.sound.stop('introDialog');
                if (!estadoAnimacion){
                    sound.pause();

                    // var music1 = this.sound.add('eUno');
                    // music1.play();

                    this.game.state.start("SceneOne");
                } else {
                    PausaAudio = true;
                    //alert("Espera a que termine la animacion.(1)");
                    PausaAudio = false;
                }
            }, this, 1, 0, 2);
//        }
        
                
				
        // Playing Ugo animation
        var interval = setInterval(function()
        {
			if (PausaAudio == false)
			{            
				this.advance = (sound.currentTime / sound.duration) / 1000;

				framesCounter = parseInt(animationFrames * this.advance);
				if(framesCounter < animationFrames)
				{
					ugo.loadTexture(animationImages[framesCounter]);
				}
				else {
					window.clearInterval(interval);
					estadoAnimacion = false;
					//context.game.state.start('Main');
				}
			}
        }, 4);
    },


    manageAudio: function() {
    }
};
