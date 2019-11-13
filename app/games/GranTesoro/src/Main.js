Candy.Main = function(game) {
};
Candy.Main.prototype = {
    create: function () {

        var liScale = 0.4;

        //Adiciona el fondo
        this.add.sprite(0, 0, 'main');

        console.log("Main");

        //************** Intro inicial *****
        banderines = this.game.add.image(0, -600 * liScale, 'banderines');
        hoja = this.game.add.image(410 * liScale, -600 * liScale, 'hoja');

        HugoEmma = this.game.add.image(430 * liScale, 1080 * liScale, 'HugoEmma');
        Arbustos = this.game.add.image(0, 1080 * liScale, 'Arbustos');


       // this.add.button(1550, 790, 'BotonSiguiente', function () { this.game.state.start('Loading') }, this, 1, 0, 2);

        //************************* define que escena inicia primero ***********************************************

        this.add.button(1550 * liScale, 790 * liScale, 'BotonPortada', function () { 
				this.game.state.start('Intro') 
		}, this, 1, 0, 2);


        //Determina escena de inicio
        sceneToLoad = "SceneOne";
       // sceneToLoad = "SceneThree";
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


        /*
        if (HugoEmma.position.x < 800) {
            HugoEmma.position.y -= 20;
            if (HugoEmma.position.y < 420) {
                HugoEmma.position.y += 20;
            }
        }

        Arbustos.position.y -= 5;
        if (Arbustos.position.y < 740)
        {
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
        */






      //  console.log(Arbustos.position.y);

       // console.log(Arbustos.position.x);

        //HugoEmma.position.y -= 5;

        /*
        if (leftKey.isDown) {
            HugoEmma.position.x += 2.5;
            Arbustos.position.x += 2.5;
        } else if (rightKey.isDown) {
            HugoEmma.position.x -= 2.5;
            Arbustos.position.x -= 2.5;
        } else {
            this.Alex.play('stand');
        }


        if (HugoEmma.position.x < 500) {
            HugoEmma.position.y -= 5;
            if (HugoEmma.position.y < 70) {
                HugoEmma.position.y += 5;
            }
        }
        */
        //debugger;
   //     console.log(Arbustos.position.x);
   //     console.log(Arbustos.position.y);

  //     if (Arbustos.position.x < 500) {
  //         Arbustos.position.y -= 5;
  //         if (Arbustos.position.y < 70) {
  //             Arbustos.position.y += 5;
  //         }
  //     }


    },
};
