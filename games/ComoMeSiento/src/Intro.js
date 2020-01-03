Candy.Intro = function (game) {
};

var animationImages = [];
var introHugoYEma;
var fondoMenuIntro;
var VideoElegido = 0;

Candy.Intro.prototype = {
    create: function () {
        console.log("Load Intro");
        //Adiciona el fondo de la precarga, necesario 
        this.game.add.sprite(0, 0, 'backgroundIntro');

        var animationFrames = 741;
        var framesCounter = 1;
        var context = this;


        // Adding animation
//        var animationImages = [];
        this.rootName = 'INTRO_JUEGO01';
        this.fileNumberMask = '0000';

        for (var i = 1; i <= animationFrames; i++) {
            this.fileNumber = this.fileNumberMask.substring(0, this.fileNumberMask.length - i.toString().length);
            this.fileNumber += i.toString();
            this.imageName = this.rootName + this.fileNumber;
            animationImages.push(this.imageName);
        }

        introHugoYEma = this.game.add.sprite(0, 0, animationImages[0]);   //ojo		
		//introHugoYEma = this.game.add.sprite(600, 410, animationImages[0]);   //ojo
		introHugoYEma.scale.setTo(2);
		
        var sound = this.game.sound.play('introDialog');

        // Playing introHugoYEma animation
        var interval = setInterval(function () {
            this.advance = (sound.currentTime / sound.duration) / 1000;
            framesCounter = parseInt(animationFrames * this.advance);
            if (framesCounter < animationFrames) {
                introHugoYEma.loadTexture(animationImages[framesCounter]);
            }
            else {
                window.clearInterval(interval);

                // this.game.add.button(1670, 870, 'buttonNext', function () {
                //     sound.pause();
                //     this.game.state.states['SelectVideo'].videoActivePlay = "video1ViewVideo";
                //     this.game.state.start('SelectVideo');
                // }, this, 1, 0, 2);

            }
        }, 3);

        //fondoMenuIntro
        fondoMenuIntro = this.game.add.sprite(0, 845, 'fondoMenuIntro');  //ojo
        fondoMenuIntro.scale.setTo(1, 0.22);
        // //Button Mute
        // this.add.button(100, 870, 'buttonBack', function () {

        //     if (this.game.sound.mute) {
        //         this.game.sound.mute = false;
        //     } else {
        //         this.game.sound.mute = true;
        //     }
        // }, this, 1, 0, 2);
        //Button Next
        this.add.button(1670, 870, 'buttonNext', function () {
             sound.pause();
            
            this.game.state.states['SelectVideo'].videoActivePlay = "video1ViewVideo";
            this.game.state.start('SelectVideo');
        
        }, this, 1, 0, 2);
    },
    update: function () {
    },
	shutdown: function () 
	{
		this.animationImages = null;
		this.introHugoYEma = null;
		this.fondoMenuIntro = null;

		//this.listImagesArbustos.destroy(); 
	
        console.log('destroy Intro');
    },	
};
