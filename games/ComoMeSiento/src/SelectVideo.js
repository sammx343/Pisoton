Candy.SelectVideo = function (game) {
};



Candy.SelectVideo.prototype = {
    create: function () {
        console.log("Load SelectVideo");
        var context = this;

        //sonido de fondo Portada
        music = this.game.add.audio('AmbportadaDimecoomomesiento',1,true);  
        music.play();

        // this.game.sound.mute = false;
        // this.game.add.sprite(0, 0, 'backgroundSelectVideo');

        var marcoRosado = this.game.add.sprite(40, 23, 'marcoRosadoSelectVideo');
        var marcoNaranja = this.game.add.sprite(965, 10, 'marcoNaranjaSelectVideo');
        var marcoVerde = this.game.add.sprite(40, 563, 'marcoVerdeSelectVideo');
        var marcoMorado = this.game.add.sprite(969, 545, 'marcoMoradoSelectVideo');
        
		debugger;
        this.numVideo = (this.videoActivePlay).substr(5, 1);
        
        botonRosado = this.add.button(678, 333, 'botonRosadoSelectVideo', function () {
            debugger;
           
            if (EstadoVideo1 == 'ACTIVO') {
                VideoElegido = 1;
                music.stop();
                this.game.state.states['ViewVideo'].videoCurrentPlay = "video1ViewVideo";
                this.game.state.start("ViewVideo");
                EstadoVideo1 = 'VISTO';


                //swal("Good job!", "You clicked the button!", "success");

                
            } else if (EstadoVideo1 == 'VISTO') {

                swal("Ya lo viste", "Selecciona otro video", "error" )
            }            
        }, this, 1, 0, 2);
		botonRosado.scale.setTo(1.2, 1.2);
        
        botonNaranja = this.add.button(1640, 290, 'botonNaranjaSelectVideo', function () {

            if (EstadoVideo2 == 'ACTIVO') {
                VideoElegido = 2;
                music.stop();
                this.game.state.states['ViewVideo'].videoCurrentPlay = "video2ViewVideo";
                this.game.state.start("ViewVideo");
                EstadoVideo2 = 'VISTO';
                
            } else if (EstadoVideo2 == 'VISTO') {
                swal("Ya lo viste", "Selecciona otro video", "error")
            } 
        }, this, 1, 0, 2);
		botonNaranja.scale.setTo(1.2, 1.2);
		
		
        botonVerde = this.add.button(670, 856, 'botonVerdeSelectVideo', function () {
           



            if (EstadoVideo3 == 'ACTIVO') {
                VideoElegido = 3;
                music.stop();
                this.game.state.states['ViewVideo'].videoCurrentPlay = "video3ViewVideo";
                this.game.state.start("ViewVideo");
                EstadoVideo3 = 'VISTO';
                
            } else if (EstadoVideo3 == 'VISTO') {
                swal("Ya lo viste", "Selecciona otro video", "error")
            } 
        }, this, 1, 0, 2);
		
		botonVerde.scale.setTo(1.2, 1.2);
		//botonVerde.anchor.setTo(0.5, 0.5);
	
	
		
        botonMorado = this.add.button(1645, 842, 'botonMoradoSelectVideo', function () {

         //context.numVideo
            if (EstadoVideo4 == 'ACTIVO') {
                VideoElegido = 4;
                music.stop();
                this.game.state.states['ViewVideo'].videoCurrentPlay = "video4ViewVideo";
                this.game.state.start("ViewVideo");
                EstadoVideo4 = 'VISTO';
                
            } else if (EstadoVideo4 == 'VISTO') {
                swal("Ya lo viste", "Selecciona otro video", "error")
            } 
        }, this, 1, 0, 2);
		botonMorado.scale.setTo(1.2, 1.2);
		
        // if (this.videoActivePlay == "video1ViewVideo") {
        //     this.game.add.sprite(670, 323, 'botonRosadoOffSelectVideo');
        // }
        // if (this.videoActivePlay == "video2ViewVideo") {
        //     this.game.add.sprite(1620, 291, 'botonNaranjaOffSelectVideo');
        // }
        // if (this.videoActivePlay == "video3ViewVideo") {
        //     this.game.add.sprite(670, 826, 'botonVerdeOffSelectVideo');
        // }
        // if (this.videoActivePlay == "video4ViewVideo") {
        //     this.game.add.sprite(1620, 826, 'botonMoradoOffSelectVideo');
        // }
    },
    update: function () {
    },
};
