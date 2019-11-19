$(document).ready(function() {
    $("#gamesLoader").on('click','#closeVideoPanel',()=> {
        console.log("omg");
        $('.game-question-modal').css({"display":"none"});
    });
});
