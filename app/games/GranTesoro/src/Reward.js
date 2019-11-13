Candy.Reward = function(game) {
};
Candy.Reward.prototype = {
    create: function() {
        var liScale = 0.4;
        //Adiciona el fondo
        this.game.add.sprite(277 * liScale, 0, 'reward');

        this.add.button(1255 * liScale, 900 * liScale, 'button-continue', function () { this.game.state.start(currentScene) }, this, 1, 0, 2);
    },
    manageAudio: function() {
    }
};
