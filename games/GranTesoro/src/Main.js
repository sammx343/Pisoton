Candy.Main = function(game) {
};
Candy.Main.prototype = {
    create: function () {

        var liScale = 0.4;

        //Adiciona el fondo, la casa y el pasto
        this.add.sprite(0, 0, 'main');


        //sonido de fondo Portada
        music = this.game.add.audio('AmbportadaMigranTesoro',1,true);  
        music.play();

        //************** Intro inicial *****
        banderines = this.game.add.image(0, -600 * liScale, 'banderines');
        hoja = this.game.add.image(410 * liScale, -600 * liScale, 'hoja');

        HugoEmma = this.game.add.image(430 * liScale, 1080 * liScale, 'HugoEmma');
        Arbustos = this.game.add.image(0, 1080 * liScale, 'Arbustos');

        this.add.button(1550 * liScale, 790 * liScale, 'BotonPortada', function () { 
                music.stop();
				this.game.state.start('Intro'); //Intro SceneOne SceneThree') 
		}, this, 1, 0, 2);

        //Determina escena de inicio
        sceneToLoad = "SceneOne";
    },
    update: function ()
    {
        var liScale = 0.4;
        if (HugoEmma.position.x < 800 * liScale) {
            HugoEmma.position.y -= 20;
            if (HugoEmma.position.y < 420 * liScale) {
                HugoEmma.position.y += 20;
            }
        }

        Arbustos.position.y -= 5;
        if (Arbustos.position.y < 740 * liScale) {
            Arbustos.position.y += 5;
        }


        hoja.position.y += 15;
        if (hoja.position.y > 10) {
            hoja.position.y -= 15;
        }

        banderines.position.y += 20;
        if (banderines.position.y > 10) {
            banderines.position.y -= 20;
        }
    },
};
