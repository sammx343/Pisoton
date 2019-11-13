Candy.Achievements = function(game) {
	// buttonContinue = null;
	// state = null;
};
Candy.Achievements.prototype = {
	create: function() {
		// this.showStory();
		this.add.sprite(0, 0, 'screen-achievements');
		backButton = this.add.button((1920 - 358) / 2, 1080 - 133 - 10, 'button-back', function () {
		    this.game.state.start('MainMenu')
		}, this, 1, 0, 2);

		debugger;
   	var totalscore = storageAPI.get('totalscore');
    this.game.add.text(200, 20, "HHAHAHHAHA", { font: "40px ComicBook", fill: "#FFCC00" });
    this.game.add.text(1910, 1070, "Texto1: ", { font: "28px ComicBook", fill: "#FFFFFF" });
   this.game.add.text(275, 95, totalscore, { font: "40px ComicBook", fill: "#FFFFFF" });
  // this.game.add.text(330, 100, " points!", { font: "28px ComicBook", fill: "#FFFFFF" });
  // 
  // this.game.add.text(30, 150, "Reach certain amount of points", { font: "28px ComicBook", fill: "#FFFFFF" });
  // this.game.add.text(40, 180, "to unlock new candy!", { font: "28px ComicBook", fill: "#FFFFFF" });
  // 
  // this.game.add.text(30, 250, "50: red candy (worth 1 point)", { font: "28px ComicBook", fill: "#FFFFFF" });
  // this.game.add.text(30, 300, "100: marshmallow (worth 2 points)", { font: "28px ComicBook", fill: "#FFFFFF" });
  // this.game.add.text(30, 350, "200: jelly (worth 3 points)", { font: "28px ComicBook", fill: "#FFFFFF" });
  // this.game.add.text(30, 400, "500: donut (worth 4 points)", { font: "28px ComicBook", fill: "#FFFFFF" });
  // this.game.add.text(30, 450, "1000: cupcake (worth 5 points)", { font: "28px ComicBook", fill: "#FFFFFF" });
  // this.game.add.text(30, 520, "Random: cake/lollipop/bisquit? (worth 30 points)", { font: "28px ComicBook", fill: "#FFFFFF" });
  // this.game.add.text(30, 570, "Random: chocolate (points x2 for 10 seconds)", { font: "28px ComicBook", fill: "#FFFFFF" });
   this.game.add.text(30, 640, "5000: get The Crown of Candyland (points x3)", { font: "28px ComicBook", fill: "#FFFFFF" });
   this.game.add.text(30, 690, "3000 in one run: WIN THE GAME", { font: "28px ComicBook", fill: "#FFFFFF" });
	}
};