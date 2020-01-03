var overlayToPlay;

Candy.ViewVideo = function (game) {
};


Candy.ViewVideo.prototype = {
    create: function () {
  

        debugger; //*************************************************
       

        console.log("Load ViewVideo");
        var context = this;
        this.videoCurrent = this.add.video(this.videoCurrentPlay);
        this.videoOnStop = new Phaser.Signal();

        this.videoOnStop.add(function () {
            context.isVideoComplete = true;
        });

        this.videoCurrent.onComplete = this.videoOnStop;

        this.isVideoComplete = false;
        this.rightSelection = false;
        this.rightAnswer = Math.floor(Math.random() * (4 - 1 + 1)) + 1;

        this.game.add.sprite(0, 0, 'backgroundViewVideo');
        this.game.add.sprite(0, 935, 'arbustosViewVideo');
        this.game.add.sprite(0, 190, 'frameViewVideo');
        this.game.add.sprite(0, 0, 'lianasViewVideo');

        //this.game.add.sprite(673, 927, 'buttonBackViewVideo');
        //this.game.add.sprite(891, 915, 'buttonActionViewVideo');
        context.videoCurrent.addToWorld(33, 219, 0, 0, 2.38, 2.49);
        context.videoCurrent.play(false);
        // this.add.button(673, 927, 'buttonBackViewVideo', function () {
        //     if (!this.isVideoComplete) {
        //         alert("Debe esperar a que termine el video");
        //         return;
        //     }
        //     this.game.state.start("SelectVideo");
        // }, this, 1, 0, 2);

        /*
        this.add.button(891, 915, 'buttonActionViewVideo', function () {
            context.videoCurrent.addToWorld(33, 219, 0, 0, 2.38, 2.49);
            context.videoCurrent.play(false);
        }, this, 1, 0, 2);
        this.add.button(1128, 927, 'buttonNextViewVideo', function () {
            if (!this.isVideoComplete) {
                swal("No puedes saltar el video", "debes esperar a que termine el video", "error")
                return;
            }
            this.game.state.start("SelectVideo");
        }, this, 1, 0, 2);
*/

        var iconHeartViewVideo1 = this.game.add.sprite(591, 38, 'iconHeartViewVideo');
        var iconHeartViewVideo2 = this.game.add.sprite(816, 38, 'iconHeartViewVideo');
        var iconHeartViewVideo3 = this.game.add.sprite(1041, 38, 'iconHeartViewVideo');
        var iconHeartViewVideo4 = this.game.add.sprite(1266, 38, 'iconHeartViewVideo');


        var personaje1 = "", personaje2 = "", personaje3 = "", personaje4 = ""; 
        switch (this.videoCurrentPlay) {
            
            case "video1ViewVideo":
                debugger;
                personajeTriste = "personajeUgoTristeViewVideo";
                personajeFeliz = "personajeUgoFelizViewVideo";
                personajeRabia = "personajeUgoRabiaViewVideo";
                personajeAsustado = "personajeUgoAsustadoViewVideo";   

                //GERMAN++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
                debugger;
                if (CORAZON == 1) {
                    iconHeartViewVideo1.destroy();


                    this.game.add.sprite(591, 38, 'iconHeartOnViewVideo');
                   
                }
                if (CORAZON == 2) {
                    
                    iconHeartViewVideo1.destroy();
                    iconHeartViewVideo2.destroy();

                    this.game.add.sprite(591, 38, 'iconHeartOnViewVideo');
                    this.game.add.sprite(816, 38, 'iconHeartOnViewVideo');
                    
                }
                if (CORAZON == 3) {
                    
                    iconHeartViewVideo1.destroy();
                    iconHeartViewVideo2.destroy();
                    iconHeartViewVideo3.destroy();

                    this.game.add.sprite(591, 38, 'iconHeartOnViewVideo');
                    this.game.add.sprite(816, 38, 'iconHeartOnViewVideo');
                    this.game.add.sprite(1041, 38, 'iconHeartOnViewVideo');

                }


                break;
            case "video2ViewVideo":
                debugger;
                personajeTriste = "personajeUgoTristeViewVideo";
                personajeFeliz = "personajeUgoFelizViewVideo";
                personajeRabia = "personajeUgoRabiaViewVideo";
                personajeAsustado = "personajeUgoAsustadoViewVideo";


                //GERMAN++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++


                if (CORAZON == 1) {
                    iconHeartViewVideo1.destroy();


                    this.game.add.sprite(591, 38, 'iconHeartOnViewVideo');

                }
                if (CORAZON == 2) {

                    iconHeartViewVideo1.destroy();
                    iconHeartViewVideo2.destroy();

                    this.game.add.sprite(591, 38, 'iconHeartOnViewVideo');
                    this.game.add.sprite(816, 38, 'iconHeartOnViewVideo');

                }
                if (CORAZON == 3) {

                    iconHeartViewVideo1.destroy();
                    iconHeartViewVideo2.destroy();
                    iconHeartViewVideo3.destroy();

                    this.game.add.sprite(591, 38, 'iconHeartOnViewVideo');
                    this.game.add.sprite(816, 38, 'iconHeartOnViewVideo');
                    this.game.add.sprite(1041, 38, 'iconHeartOnViewVideo');

                }

                //iconHeartViewVideo1.destroy();
                //this.game.add.sprite(591, 38, 'iconHeartOnViewVideo');
                /*
                personajeTriste = "personajeBrunoTristeViewVideo";
                personajeFeliz = "personajeBrunoFelizViewVideo";
                personajeRabia = "personajeBrunoRabiaViewVideo";
                personajeAsustado = "personajeBrunoAsustadoViewVideo";
                */
                break;
            case "video3ViewVideo":
                debugger;
                // personajeTriste = "personajeEmmaTristeViewVideo";
                // personajeFeliz = "personajeEmmaFelizViewVideo";
                // personajeRabia = "personajeEmmaRabiaViewVideo";
                // personajeAsustado = "personajeEmmaAsustadoViewVideo";

                personajeTriste = "personajeUgoTristeViewVideo";
                personajeFeliz = "personajeUgoFelizViewVideo";
                personajeRabia = "personajeUgoRabiaViewVideo";
                personajeAsustado = "personajeUgoAsustadoViewVideo";

                //GERMAN++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
                debugger;

                if (CORAZON == 1) {
                    iconHeartViewVideo1.destroy();


                    this.game.add.sprite(591, 38, 'iconHeartOnViewVideo');

                }
                if (CORAZON == 2) {

                    iconHeartViewVideo1.destroy();
                    iconHeartViewVideo2.destroy();

                    this.game.add.sprite(591, 38, 'iconHeartOnViewVideo');
                    this.game.add.sprite(816, 38, 'iconHeartOnViewVideo');

                }
                if (CORAZON == 3) {

                    iconHeartViewVideo1.destroy();
                    iconHeartViewVideo2.destroy();
                    iconHeartViewVideo3.destroy();

                    this.game.add.sprite(591, 38, 'iconHeartOnViewVideo');
                    this.game.add.sprite(816, 38, 'iconHeartOnViewVideo');
                    this.game.add.sprite(1041, 38, 'iconHeartOnViewVideo');

                }

                //iconHeartViewVideo1.destroy();
                //iconHeartViewVideo2.destroy();
                //this.game.add.sprite(591, 38, 'iconHeartOnViewVideo');
                //this.game.add.sprite(816, 38, 'iconHeartOnViewVideo');
                break;
            case "video4ViewVideo":
                debugger;
                // personajeTriste = "personajeLucasTristeViewVideo";
                // personajeFeliz = "personajeLucasFelizViewVideo";
                // personajeRabia = "personajeLucasRabiaViewVideo";
                // personajeAsustado = "personajeLucasAsustadoViewVideo";

                personajeTriste = "personajeUgoTristeViewVideo";
                personajeFeliz = "personajeUgoFelizViewVideo";
                personajeRabia = "personajeUgoRabiaViewVideo";
                personajeAsustado = "personajeUgoAsustadoViewVideo";                

                //GERMAN++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

                if (CORAZON == 1) {
                    iconHeartViewVideo1.destroy();


                    this.game.add.sprite(591, 38, 'iconHeartOnViewVideo');

                }
                if (CORAZON == 2) {

                    iconHeartViewVideo1.destroy();
                    iconHeartViewVideo2.destroy();

                    this.game.add.sprite(591, 38, 'iconHeartOnViewVideo');
                    this.game.add.sprite(816, 38, 'iconHeartOnViewVideo');

                }
                if (CORAZON == 3) {

                    iconHeartViewVideo1.destroy();
                    iconHeartViewVideo2.destroy();
                    iconHeartViewVideo3.destroy();

                    this.game.add.sprite(591, 38, 'iconHeartOnViewVideo');
                    this.game.add.sprite(816, 38, 'iconHeartOnViewVideo');
                    this.game.add.sprite(1041, 38, 'iconHeartOnViewVideo');

                }

                //iconHeartViewVideo1.destroy();
                //iconHeartViewVideo2.destroy();
                //iconHeartViewVideo3.destroy();
                //this.game.add.sprite(591, 38, 'iconHeartOnViewVideo');
                //this.game.add.sprite(816, 38, 'iconHeartOnViewVideo');
                //this.game.add.sprite(1041, 38, 'iconHeartOnViewVideo');
                break;
        }
        var respuestasVideos = ["buttonRabia", "buttonTriste", "buttonAsustado", "buttonFeliz"];
        var numVideo = (this.videoCurrentPlay).substr(5, 1) - 1;

        this.game.state.states['BuenoEmocion'].videoCurrentPlay = this.videoCurrentPlay;
        this.game.state.states['FallidoEmocion'].videoCurrentPlay = this.videoCurrentPlay;

        this.add.button(1226, 221, personajeTriste, function () {
            if (!this.isVideoComplete) {
                
                swal("No puedes saltar el video", "debes esperar a que termine el video", "error")
                return;
            }
            if (respuestasVideos[numVideo] == "buttonTriste") {
               
                this.game.state.start("BuenoEmocion");
                CORAZON++;
               
            } else {
                this.game.state.start("FallidoEmocion");
            }            
        }, this, 1, 0, 2);
        this.add.button(1225, 559, personajeFeliz, function () {
            if (!this.isVideoComplete) {
                swal("No puedes saltar el video", "debes esperar a que termine el video", "error")
                return;
            }
            if (respuestasVideos[numVideo] == "buttonFeliz") {
               
                this.game.state.start("BuenoEmocion");
                CORAZON++;
               
                
            } else {
                this.game.state.start("FallidoEmocion");
            }  
        }, this, 1, 0, 2);
        this.add.button(1572, 559, personajeRabia, function () {
            if (!this.isVideoComplete) {
                swal("No puedes saltar el video", "debes esperar a que termine el video", "error")
                return;
            }
            if (respuestasVideos[numVideo] == "buttonRabia") {
               
                this.game.state.start("BuenoEmocion");
                CORAZON++;
               
            } else {
                this.game.state.start("FallidoEmocion");
            }  
        }, this, 1, 0, 2);
        this.add.button(1572, 221, personajeAsustado, function () {
           
            if (!this.isVideoComplete) {
                swal("No puedes saltar el video", "debes esperar a que termine el video", "error")
                return;
            }
            if (respuestasVideos[numVideo] == "buttonAsustado") {
               
                this.game.state.start("BuenoEmocion");
                CORAZON++;
               
                
            } else {
                this.game.state.start("FallidoEmocion");
            }  
        }, this, 1, 0, 2);
    },
    update: function () {
    },
};
