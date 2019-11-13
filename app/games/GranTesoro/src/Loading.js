Candy.Loading = function(game) {
};
Candy.Loading.prototype = {
    create: function (){

        var liScale = 0.4;
        //Adiciona el fondo
        this.game.add.sprite(0, 0, 'introBG');
        this.add.button(1235 * liScale, 820 * liScale, 'button-continue', function () { this.game.state.start(sceneToLoad) }, this, 1, 0, 2);
        console.log("Loading crated");
    },
    manageAudio: function() {
    }
};
