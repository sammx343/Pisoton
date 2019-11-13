Candy.CoverPage = function(game) {
	
};

// Adding animation
        var listImagesArbustos = [];
        var listImagesPersonajes = [];
        var listImagesLogo = [];
        var listImagesLianas = [];
        var listImagesBotonPortada = [];
        var gPaso1 = 0;
        var gPaso2 = 0;
        var gPaso3 = 0;
        var gPaso4 = 0;

        
Candy.CoverPage.prototype = {
    create: function () {
        //console.log("Load CoverPage *****************");

        console.log('inicia Main en Como Me Siento Yo Paso 1');
        var liScale = 0.4;

        //Adiciona el fondo
        this.add.sprite(0, 0, 'backgroundPortada');

        console.log('inicia Main en Como Me Siento Yo Paso 2');

        //sonido de fondo Portada
        music = this.game.add.audio('AmbportadaDimecoomomesiento',1,true);  
        music.play();

        console.log('inicia Main en Como Me Siento Yo Paso 3');
        //************** Intro inicial *****
        banderines = this.game.add.image(0, -600 * liScale, 'lianas');  //Lianas
        hoja = this.game.add.image(410 * liScale, -600 * liScale, 'hoja');  //Logo Portada

        
        P1 = this.game.add.image(-1000 * liScale, 1400 * liScale, 'p1');
        P2 = this.game.add.image(-1000 * liScale, 1400 * liScale, 'p2');
        P3 = this.game.add.image(4000 * liScale, 1400 * liScale, 'p3');
        P4 = this.game.add.image(4500 * liScale, 1400 * liScale, 'p4');

        Arbustos = this.game.add.image(0, 1080 * liScale, 'arbustos');

        this.add.button(0 * liScale, 0 * liScale, 'BotonPortada', function () { 
                music.stop();
				this.game.state.start('Intro'); //Intro SceneOne SceneThree') 
		}, this, 1, 0, 2);



    },
    update: function ()
    {
        var liScale = 0.4;     
        
        if (gPaso1 == 0)
        {
            if (P1.position.x < 10 * liScale) {
                P1.position.x += 10;
                if (P1.position.x > 12 * liScale) {
                    P1.position.x -= 10;
                    console.log('Paso 1');
                    gPaso1 = 1;
                }
            }
        }
        if (gPaso1 == 0)
        {
            if (P2.position.x < 1200 * liScale) {
                P2.position.x += 20;
                if (P2.position.x > 1220 * liScale) {
                    P2.position.x -= 20;
                    console.log('Paso 2');
                    gPaso2 = 1;
                }
            }
        }
        
        if (gPaso1 == 0)
        {
            if (P3.position.x > 2000 * liScale) {
                P3.position.x -= 10;
                if (P3.position.x < 2650 * liScale) {
                    P3.position.x += 10;
                    console.log('Paso 3');
                    gPaso3 = 1;
                }
            }
        }

        if (gPaso1 == 0)
        {
            if (P4.position.x > 2000 * liScale) {
                P4.position.x -= 7;
                if (P4.position.x < 3700 * liScale) {
                    P4.position.x += 7;
                    console.log('Paso 4');
                    gPaso4 = 1;
                }
            }
        }

        Arbustos.position.y -= 5;
        if (Arbustos.position.y < 740 * liScale) {
            Arbustos.position.y += 5;
        }


        hoja.position.y += 5;
        if (hoja.position.y > 0) {
            hoja.position.y -= 5;
        }

        banderines.position.y += 4;
        if (banderines.position.y > 0) {
            banderines.position.y -= 4;
        }        
    },
	shutdown: function () 
	{
		// //this.listImagesArbustos.destroy(); 
		// this.listImagesArbustos = null;
		// //this.listImagesPersonajes.destroy(); 
		// this.listImagesPersonajes = null;
		// //this.listImagesLogo.destroy(); 
		// this.listImagesLogo = null;
		// //this.listImagesLianas.destroy(); 
		// this.listImagesLianas = null;
		// //this.listImagesBotonPortada.destroy(); 
		// this.listImagesBotonPortada = null;

		// //this.personajesPortada.destroy(); 
		// this.personajesPortada = null;
		// //this.arbustosPortada.destroy(); 
		// this.arbustosPortada = null;
		// //this.lianasPortada.destroy(); 
		// this.lianasPortada = null;
		// //this.logoPortada.destroy(); 
		// this.logoPortada = null;
		// //this.botonPortada.destroy(); 
		// this.botonPortada = null;
	
        // console.log('destroy CovePage');
    },
};
