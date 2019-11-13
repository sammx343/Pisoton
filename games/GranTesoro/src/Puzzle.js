Candy.Puzzle = function(game) {
    //	When a State is added to Phaser it automatically has the following properties set on it, even if they already exist:

    this.game;		//	a reference to the currently running game
    this.add;		//	used to add sprites, text, groups, etc
    this.camera;	//	a reference to the game camera
    this.cache;		//	the game cache
    this.input;		//	the global input manager (you can access this.input.keyboard, this.input.mouse, as well from it)
    this.load;		//	for preloading assets
    this.math;		//	lots of useful common math operations
    this.sound;		//	the sound manager - add a sound, play one, set-up markers, etc
    this.stage;		//	the game stage
    this.time;		//	the clock
    this.tweens;    //  the tween manager
    this.state;	    //	the state manager
    this.world;		//	the game world
    this.particles;	//	the particle manager
    this.physics;	//	the physics manager
    this.rnd;		//	the repeatable random number generator

    //	You can use any of these from any function within this State.
    //	But do consider them as being 'reserved words', i.e. don't create a property for your own game called "world" or you'll over-write the world reference.
};

//this.add.button(1270, 910, 'button-continue', function () { this.game.state.start('End') }, this, 1, 0, 2);
Candy.Puzzle.prototype = {
    create: function () {
        var liScale = 0.4;
        this.piecesleft = 15;

        //Sonido de fondo
        music = this.game.add.audio('AmbEsc1MigranTesoro',1,true);  
        music.play();
        
        // Adding BG
        this.game.add.sprite(0, 0, 'FondoRompecabezas');

        // Add graphics
        liScale = 1;
        this.base = this.game.add.sprite(760 * liScale, 300 * liScale, 'Rompecabezas');
        
        liScale = 0.4;

        // Add Draggable Pieces
        // Initial position is hard coded,
        // it would be nice to disposed them randomly :)
        this.xThreshold = 10;
        this.yThreshold = 10; //1 * liScale;

        this.pieces = this.game.add.group();
        this.piece1 = this.game.add.sprite(this.xThreshold + (24 * liScale), this.yThreshold + (369 * liScale), '3ROMPECABEZA');
        this.piece2 = this.game.add.sprite(this.xThreshold + (244 * liScale), this.yThreshold + (149 * liScale), '4ROMPECABEZA');
        this.piece3 = this.game.add.sprite(this.xThreshold + (161 * liScale), this.yThreshold + (205 * liScale), '5ROMPECABEZA');
        this.piece4 = this.game.add.sprite(this.xThreshold + (27 * liScale), this.yThreshold + (200 * liScale), '6ROMPECABEZA');
        this.piece5 = this.game.add.sprite(this.xThreshold + (70 * liScale), this.yThreshold + (361 * liScale), '7ROMPECABEZA');
        this.piece6 = this.game.add.sprite(this.xThreshold + (203 * liScale), this.yThreshold + (240 * liScale), '8ROMPECABEZA');
        this.piece7 = this.game.add.sprite(this.xThreshold + (40 * liScale), this.yThreshold + (101 * liScale), '9ROMPECABEZA');
        this.piece8 = this.game.add.sprite(this.xThreshold + (154 * liScale), this.yThreshold + (249 * liScale), '10ROMPECABEZA');
        this.piece9 = this.game.add.sprite(this.xThreshold + (58 * liScale), this.yThreshold + (100 * liScale), '11ROMPECABEZA');
        this.piece10 = this.game.add.sprite(this.xThreshold + (58 * liScale), this.yThreshold + (250 * liScale), '12ROMPECABEZA');
        this.piece11 = this.game.add.sprite(this.xThreshold + (58 * liScale), this.yThreshold + (300 * liScale), '13ROMPECABEZA');
        this.piece12 = this.game.add.sprite(this.xThreshold + (58 * liScale), this.yThreshold + (250 * liScale), '14ROMPECABEZA');
        this.piece13 = this.game.add.sprite(this.xThreshold + (58 * liScale), this.yThreshold + (200 * liScale), '15ROMPECABEZA');
        this.piece14 = this.game.add.sprite(this.xThreshold + (58 * liScale), this.yThreshold + (200 * liScale), '1ROMPECABEZA');
        this.piece15 = this.game.add.sprite(this.xThreshold + (58 * liScale), this.yThreshold + (100 * liScale), '2ROMPECABEZA');

        this.pieces.add(this.piece1);
        this.pieces.add(this.piece2);
        this.pieces.add(this.piece3);
        this.pieces.add(this.piece4);
        this.pieces.add(this.piece5);
        this.pieces.add(this.piece6);
        this.pieces.add(this.piece7);
        this.pieces.add(this.piece8);
        this.pieces.add(this.piece9);
        this.pieces.add(this.piece10);
        this.pieces.add(this.piece11);
        this.pieces.add(this.piece12);
        this.pieces.add(this.piece13);
        this.pieces.add(this.piece14);
        this.pieces.add(this.piece15);
        this.pieces.add(this.base);

        this.pieces.scale.setTo(0.7 * liScale, 0.7 * liScale);
        this.pieces.position.setTo(10 * liScale, 0 * liScale);

        liScale = 1;
        // Pieces final position (Hard coded)
        this.piece1.finalPositionX = 1389 * liScale;
        this.piece1.finalPositionY = 289 * liScale;

        this.piece2.finalPositionX = 1897 * liScale;
        this.piece2.finalPositionY = 293 * liScale;

        this.piece3.finalPositionX = 2159 * liScale;
        this.piece3.finalPositionY = 296 * liScale;

        this.piece4.finalPositionX = 759 * liScale;
        this.piece4.finalPositionY = 526 * liScale;

        this.piece5.finalPositionX = 1001 * liScale;
        this.piece5.finalPositionY = 640 * liScale;

        this.piece6.finalPositionX = 1510 * liScale;
        this.piece6.finalPositionY = 522 * liScale;

        this.piece7.finalPositionX = 1773 * liScale;
        this.piece7.finalPositionY = 638 * liScale;

        this.piece8.finalPositionX = 2279 * liScale;
        this.piece8.finalPositionY = 533 * liScale;

        this.piece9.finalPositionX = 759 * liScale;
        this.piece9.finalPositionY = 997 * liScale;

        this.piece10.finalPositionX = 1129 * liScale;
        this.piece10.finalPositionY = 882 * liScale;

        this.piece11.finalPositionX = 1386 * liScale;
        this.piece11.finalPositionY = 1000 * liScale;

        this.piece12.finalPositionX = 1895 * liScale;
        this.piece12.finalPositionY = 882 * liScale;

        this.piece13.finalPositionX = 2156 * liScale;
        this.piece13.finalPositionY = 993 * liScale;

        this.piece14.finalPositionX = 757 * liScale;
        this.piece14.finalPositionY = 302 * liScale;

        this.piece15.finalPositionX = 1126 * liScale;
        this.piece15.finalPositionY = 296 * liScale;

        liScale = 1;

        // Remember the original position
        for (var i = 1; i <= 15; i++) {

            this['piece' + i].originX = this['piece' + i].x * liScale;
            this['piece' + i].originY = this['piece' + i].y * liScale;
            this['piece' + i].inputEnabled = true;
            this['piece' + i].input.enableDrag(false, true);
            this['piece' + i].events.onDragStop.add(this.pieceDragStop, this);
            this['piece' + i].events.onDragUpdate.add(this.pieceDragUpdate, this);
        }
    },

    pieceDragStop: function (item) {
        // Calculate the distance between the piece and its final spot
        var liScale = 0.4;
        this.totalDistance = this.game.physics.arcade.distanceToXY(item, item.finalPositionX, item.finalPositionY);

        this.totalDistance = this.totalDistance * liScale;
        console.log(this.totalDistance);


        var liScale = 0.4;
        // If the distance is minor than 50 pixels the piece is placed in its final spot,
        // otherwise the piece return to its original position
        if (this.totalDistance < 50) {

            if (this.piecesleft > 0)
            {
                this.game.sound.play('Esc4Rompecabezasacierto');  //Sonido
            }

            this.game.add.tween(item).to({ x: item.finalPositionX, y: item.finalPositionY }, 500 * liScale, Phaser.Easing.Back.Out, true);
            // This piece is not draggable anymore
            item.inputEnabled = false;
            // Pieces to finish minus one
            this.piecesleft--;

            // If all the pieces are assembled the puzzle is finished :)
            if (this.piecesleft === 0)
            {
                music.stop();
                this.game.sound.play('Esc4Rompecabezascompletado');  //Sonido
                this.add.button(1670 * liScale, 880 * liScale, 'button-continue', function () { this.game.state.start('End') }, this, 1, 0, 2);
            }
                //this.add.button(1270, 910, 'button-continue', function () { this.game.state.start('End') }, this, 1, 0, 2);

        } else {
            this.game.sound.play('Esc4Rompecabezaserrorswip');  //Sonido
            
            this.game.add.tween(item).to({ x: item.originX, y: item.originY }, 500 * liScale, Phaser.Easing.Back.Out, true);

        }
    },

    update: function () {

    },

    backToMenu: function (pointer) {

        this.state.start('MainMenu');

    },
    pieceDragUpdate: function (item) {
        var liScale = 0.4;
        item.position.setTo((item.x) / (0.7 * liScale), (item.y) / (0.7 * liScale));
        //item.position.setTo((item.x * liScale) / 0.6, (item.y * liScale) / 0.99);
        //item.position.setTo((item.x * liScale), (item.y * liScale));
    }
};
