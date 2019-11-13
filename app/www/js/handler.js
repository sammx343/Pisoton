var app = {
    initialize: function() {
        // setting required to use $.mobile.changePage()
        // http://jquerymobile.com/demos/1.2.0/docs/pages/phonegap.html
        $.mobile.allowCrossDomainPages = true;
    },
};
$(document).ready(function(){
  var current = window.location.href;
  var isBanner = 0;
  var bannerType;
  if(current.indexOf('padres') != -1){
    bannerType = 3;
    isBanner = 1;
  }else{
    if(current.indexOf('maestros') != -1){
      bannerType = 4;
      isBanner = 1;
    }else{
      if(current.indexOf('pisoton') != -1){
        bannerType = 5;
        isBanner = 1;
      }
    }
  }
  if(isBanner == 1){
    $.ajax({
        type: "POST",
        url: "https://comino.uninorte.edu.co/pisoton/admin/load_content.php",
        data:{type:bannerType},
        success: function(mensaje)
        {
            var obj = JSON.parse(mensaje);
            if(obj.exito == "1")
            {
              $("#banner").css({'background-image': "url('https://comino.uninorte.edu.co/pisoton/admin/uploads/"+ obj.datos[0]['urlImage']+"')"});
              $("#banner article h2").html(obj.datos[0]['title']);
              $("#banner article p").html(obj.datos[0]['description']);
            }
        },
        error : function (mensaje)
        {
            $('#myModal').modal('hide');
            $('#prueba').modal('show');
            $('#mensaje').text("Se produjo un error en la petición, Vuelva a intentarlo");
        }
    });
  }
  var idClick;
  $("#main nav ul li").mouseenter(function() {
    var idHover = $(this).attr('id');
    var audio = $('<audio />', {
       autoPlay : 'autoplay'
     });

     //addSource(audio, 'audio/'+Math.ceil(Math.random() * 5)+'.ogg');
     switch (idHover) {
       case 'games':
        addSource(audio, 'audio/MOjuegos.mp3');
       break;
     case 'activities':
      addSource(audio, 'audio/MOactividades.mp3');
       break;
     case 'songs':
      addSource(audio, 'audio/MOcanciones.mp3');
       break;
     case 'tv':
      addSource(audio, 'audio/MOseries.mp3');
       break;
     }
    /*switch (idClick) {
      case 'games':
        $("#MOjuegos")[0].play();
      break;
    case 'activities':
      $("#MOactividades")[0].play();
      break;
    case 'songs':
      $("#MOcanciones")[0].play();
      break;
    case 'tv':
      $("#MOseries")[0].play();
      break;
    }*/
    audio.appendTo('body');
  });
  function addSource(elem, path) {
    $('<source>').attr('src', path).appendTo(elem);
  }
  $('#main nav ul li').click(function(){
    idClick = $(this).attr('id');
    var audio = $('<audio />', {
       autoPlay : 'autoplay'
     });
    if(idClick == 'games'){
      $("#videoTagDiv").html("<div id='gamesWrapper'>\
                                    <div id='game01'>\
                                      <img src='img/ninos/back_games.png'/>\
                                      <span>Cómo me siento yo</span>\
                                    </div>\
                                    <div id='game02'>\
                                      <img src='img/ninos/back_games.png'/>\
                                      <span>Mi gran tesoro</span>\
                                    </div>\
                                  </div> ");
      $("#videoTagDiv").css({"border":"none","height":"unset","width":"100%"});
      $("#bg-left_bottom").css({"display":"block"});
      $("#bg-right_bottom").css({"display":"block"});
      $("#bg-right_maxed").css({"display":"none"});
      $("#bg-left_maxed").css({"display":"none"});

      $("#bg-left").addClass("long");
      $("#bg-right").addClass("long");
      addSource(audio, 'audio/MCjuego.mp3');
    }
    if(idClick == 'activities'){
      var type = 1;
      $.ajax({
          type: "POST",
          url: "https://comino.uninorte.edu.co/pisoton/admin/load_content.php",
          data:{type:type},
          success: function(mensaje)
          {
              //alert(mensaje);
              var obj = JSON.parse(mensaje);
              if(obj.exito == "1")
              {
                //$('#prueba').modal('show');
                //$('#mensaje').text("Registrado correctamente.");
                //$('#all_contents').load('content_information.php #all_contents');
                //Actualizar llos datos de la tabla
                var htmlActivityBanner = "<div id='activityBanner'><img src='https://comino.uninorte.edu.co/pisoton/admin/uploads/"+ obj.datos[0]['urlImage'] +"'/><article><p class='title'>"+ obj.datos[0]['title'] +"</p><div class='desc'>"+ obj.datos[0]['description'] +"</div></article></div>";
                var htmlActivities = '';
                for (var i = 1; i < obj.datos.length; i++) {
                  htmlActivities += "<div class='activitySliderBox'><p>"+ obj.datos[i]['title'] +"</p><div class='imgWrapper'>  <img src='https://comino.uninorte.edu.co/pisoton/admin/uploads/"+ obj.datos[i]['urlImage'] +"'/></div><div class='desc'>"+ obj.datos[i]['description'] +"</div></div>";
                }
                /*$("#"+obj.datos[':idContent']).siblings(".edit-title").html(obj.datos[':title']);
                $("#"+obj.datos[':idContent']).siblings(".edit-description").html(obj.datos[':description']);
                $("#"+obj.datos[':idContent']).siblings(".edit-author").html(obj.datos[':author']);
                $("#"+obj.datos[':idContent']).siblings(".edit-dateContent").html(obj.datos[':dateContent']);
                $("#"+obj.datos[':idContent']).siblings(".edit-uploadBy").html(obj.datos[':uploadBy']);*/
                $("#bg-left_bottom").css({"display":"block"});
                $("#bg-right_bottom").css({"display":"block"});
                $("#bg-right_maxed").css({"display":"none"});
                $("#bg-left_maxed").css({"display":"none"});
                $("#videoTagDiv").css({"border":"none","height":"unset"});
                $("#bg-left").addClass("long");
                $("#bg-right").addClass("long");
                $("#videoTagDiv").html("<div id='activitiesWrapper'>\
                                          "+ htmlActivityBanner +"\
                                          <div id='activitySliderWrapper'>\
                                            <div id='activitySlider'>\
                                              "+ htmlActivities +"\
                                            </div>\
                                          </div>\
                                          <a href='#' class='btn' id='loadMoreActivities'>Ver más</a>\
                                        </div> ");

                containerHeight = ($(".activitySliderBox").height() + 40 + 1)*2 - 2;
                $("#activitySliderWrapper").css({"height":containerHeight});
                addSource(audio, 'audio/MCactividades.mp3');
              }
              else
              {
                  $('#prueba').modal('show');
                  $("#mensaje").text("Se produjo un error en la petición, Vuelva a intentarlo");
              }
          },
          error : function (mensaje)
          {
              $('#myModal').modal('hide');
              $('#prueba').modal('show');
              $('#mensaje').text("Se produjo un error en la petición, Vuelva a intentarlo");
          }
      });
    }

    if(idClick == 'songs'){
      $.ajax({
          type: "POST",
          url: "https://comino.uninorte.edu.co/pisoton/admin/load_song.php",
          data:{},
          success: function(mensaje)
          {
              //alert(mensaje);
              var obj = JSON.parse(mensaje);
              if(obj.exito == "1")
              {
                //$('#prueba').modal('show');
                //$('#mensaje').text("Registrado correctamente.");
                //$('#all_contents').load('content_information.php #all_contents');
                //Actualizar llos datos de la tabla
                /*<img src='https://comino.uninorte.edu.co/pisoton/admin/uploads/"+ obj.datos[i]['urlImage'] +"'/>\*/
                var htmlActivities = '';
                for (var i = 0; i < obj.datos.length; i++) {
                  htmlActivities += "<div class='activitySliderBox'>\
                                      <input type='hidden' class='url' value='"+ obj.datos[i]['url'] +"'>\
                                      <p>"+ obj.datos[i]['title'] +"</p>\
                                      <div class='imgWrapper'>\
                                        <iframe frameborder='0' allowfullscreen style='width:100%;height:100%' src='"+obj.datos[i]['url'].replace("watch?v=", "embed/")+"'></iframe>\
                                      </div>\
                                      <div class='desc'>\
                                        "+ obj.datos[i]['description'] +"\
                                      </div>\
                                    </div>";
                }
                /*$("#"+obj.datos[':idContent']).siblings(".edit-title").html(obj.datos[':title']);
                $("#"+obj.datos[':idContent']).siblings(".edit-description").html(obj.datos[':description']);
                $("#"+obj.datos[':idContent']).siblings(".edit-author").html(obj.datos[':author']);
                $("#"+obj.datos[':idContent']).siblings(".edit-dateContent").html(obj.datos[':dateContent']);
                $("#"+obj.datos[':idContent']).siblings(".edit-uploadBy").html(obj.datos[':uploadBy']);*/
                $("#bg-left_bottom").css({"display":"block"});
                $("#bg-right_bottom").css({"display":"block"});
                $("#bg-right_maxed").css({"display":"none"});
                $("#bg-left_maxed").css({"display":"none"});
                $("#videoTagDiv").css({"border":"none","height":"unset","width":"100%"});
                $("#bg-left").addClass("long");
                $("#bg-right").addClass("long");
                $("#videoTagDiv").html("<div id='activitiesWrapper'>\
                                          <div id='activitySliderWrapper'>\
                                            <div id='activitySlider'>\
                                              "+ htmlActivities +"\
                                            </div>\
                                          </div>\
                                          <a href='#' class='btn' id='loadMoreActivities'>Ver más</a>\
                                        </div> ");

                containerHeight = ($(".activitySliderBox").height() + 40 + 1)*2 - 2;
                $("#activitySliderWrapper").css({"height":containerHeight});
                $("#activitiesWrapper").css({"width":'100%'});
                addSource(audio, 'audio/MCcanciones.mp3');
              }
              else
              {
                  $('#prueba').modal('show');
                  $("#mensaje").text("Se produjo un error en la petición, Vuelva a intentarlo");
              }
          },
          error : function (mensaje)
          {
              $('#myModal').modal('hide');
              $('#prueba').modal('show');
              $('#mensaje').text("Se produjo un error en la petición, Vuelva a intentarlo");
          }
      });
    }
    if(idClick == 'tv'){
      $.ajax({
          type: "POST",
          url: "https://comino.uninorte.edu.co/pisoton/admin/load_trailers.php",
          data:{},
          success: function(mensaje)
          {
              //alert(mensaje);
              var obj = JSON.parse(mensaje);
              if(obj.exito == "1")
              {
                //$('#prueba').modal('show');
                //$('#mensaje').text("Registrado correctamente.");
                //$('#all_contents').load('content_information.php #all_contents');
                //Actualizar llos datos de la tabla
                var htmlActivities = '';
                for (var i = 0; i < obj.datos.length; i++) {
                  htmlActivities += "<div class='activitySliderBox'>\
                                      <p>"+ obj.datos[i]['title'] +"</p>\
                                      <div class='imgWrapper'>\
                                        <iframe frameborder='0' allowfullscreen style='width:100%;height:100%' src='"+obj.datos[i]['url'].replace("watch?v=", "embed/")+"'></iframe>\
                                      </div>\
                                      <div class='desc'>\
                                        "+ obj.datos[i]['description'] +"\
                                      </div>\
                                    </div>";
                }
                /*$("#"+obj.datos[':idContent']).siblings(".edit-title").html(obj.datos[':title']);
                $("#"+obj.datos[':idContent']).siblings(".edit-description").html(obj.datos[':description']);
                $("#"+obj.datos[':idContent']).siblings(".edit-author").html(obj.datos[':author']);
                $("#"+obj.datos[':idContent']).siblings(".edit-dateContent").html(obj.datos[':dateContent']);
                $("#"+obj.datos[':idContent']).siblings(".edit-uploadBy").html(obj.datos[':uploadBy']);*/
                $("#bg-left_bottom").css({"display":"block"});
                $("#bg-right_bottom").css({"display":"block"});
                $("#bg-right_maxed").css({"display":"none"});
                $("#bg-left_maxed").css({"display":"none"});
                $("#videoTagDiv").css({"border":"none","height":"unset","width":"100%"});
                $("#bg-left").addClass("long");
                $("#bg-right").addClass("long");
                $("#videoTagDiv").html("<div id='activitiesWrapper'>\
                                          <div id='activitySliderWrapper'>\
                                            <div id='activitySlider'>\
                                              "+ htmlActivities +"\
                                            </div>\
                                          </div>\
                                          <a href='#' class='btn' id='loadMoreActivities'>Ver más</a>\
                                        </div> ");

                containerHeight = ($(".activitySliderBox").height() + 40 + 1)*2 - 2;
                $("#activitySliderWrapper").css({"height":containerHeight});
                $("#activitiesWrapper").css({"width":'100%'});
                addSource(audio, 'audio/MCseries.mp3');
              }
              else
              {
                  $('#prueba').modal('show');
                  $("#mensaje").text("Se produjo un error en la petición, Vuelva a intentarlo");
              }
          },
          error : function (mensaje)
          {
              $('#myModal').modal('hide');
              $('#prueba').modal('show');
              $('#mensaje').text("Se produjo un error en la petición, Vuelva a intentarlo");
          }
      });

    }
  });

  $("#videoTagDiv").on('click','#gamesWrapper div', function(){
    var idGame = $(this).attr('id');
    var width = (window.innerWidth || document.documentElement.clientWidth);
    width -= 50;
    var left = width + 10;
    height = parseInt(width/1.77);
    var top = parseInt(window.innerHeight || document.documentElement.clientHeight)/2 - height/2;

    if(height > (window.innerHeight || document.documentElement.clientHeight)){
      height = (window.innerHeight || document.documentElement.clientHeight);
      height -= 50;
      var top = 25;
      width = parseInt(height*1.77);
      var left = parseInt(window.innerWidth || document.documentElement.clientWidth)/2 + width/2;
      left -= 16;
    }
    top -= 16;
    switch (idGame) {
      case 'game01':
        $("#videoTagDiv").css({"border":"none"});
        $("#gamesLoader").html("<div id='game01'>\
                                    <iframe style='width:"+width+"px;height:"+height+"px' class='gameFrame' src='games/ComoMeSientoYo/index.html'></iframe>\
                                    <img id='closeGame' style='top:"+top+"px !important;left:"+left+"px !important' src='img/ninos/closeGame.png'/>\
                                  </div>");
        $("#gamesLoader").css({"display":"block"});
        $("body").css({"overflow":"hidden"});
        break;
      case 'game02':
        $("#videoTagDiv").css({"border":"none"});
        $("#gamesLoader").html("<div id='game02'>\
                                    <iframe style='width:"+width+"px;height:"+height+"px' class='gameFrame' src='games/GranTesoro/index.html'></iframe>\
                                    <img id='closeGame' style='top:"+top+"px !important;left:"+left+"px !important' src='img/ninos/closeGame.png'/>\
                                  </div>");
        $("#gamesLoader").css({"display":"block"});
        $("body").css({"overflow":"hidden"});
          break;
      default:
        break;
    }
  });

  $("#gamesLoader").on('click','#closeGame',function(event){
    $("#gamesLoader").css({"display":"none"});
    $("body").css({"overflow":"auto"});
  });
  var activitiesPages = 0;

  $('#videoTagDiv').on('click', '#loadMoreActivities',function(event){
    event.preventDefault();
    var totalPagesActivitiesSlider = Math.floor($("#activitySlider").height()/$("#activitySliderWrapper").height());
    if (totalPagesActivitiesSlider - $("#activitySlider").height()/$("#activitySliderWrapper").height() == 0){
      totalPagesActivitiesSlider--;
    }
    console.log(totalPagesActivitiesSlider);
    activitiesPages++;
    if(activitiesPages > totalPagesActivitiesSlider){
      activitiesPages = 0;
    }
    $("#activitySlider").animate({
      top: -(activitiesPages)*($("#activitySliderWrapper").height() + 2)
    }, 1000, 'swing', function() {
        //alert("ok");
    });

  });
  $('#videoTagDiv').on('click', '#activityBanner,.activitySliderBox',function(){
    if(idClick == "activities"){
      $("#videoTagDiv").css({"border":"none"});
      if($(this).attr('id') == "activityBanner"){
        var title = $(this).children("article").children("p:first-child").html();
        var desc = $(this).children("article").children(".desc").html();
        var src = $(this).children("img").attr('src');
      }else{
        var title = $(this).children("p:first-child").html();
        var desc = $(this).children(".desc").html();
        var src = $(this).children('.imgWrapper').children("img").attr('src');
      }

      $("#videoTagDiv").html("<div id='activitiesWrapperDetails'>\
                                <div id='act01'>\
                                  <p class='title'>"+ title +"</p>\
                                  <img src='"+ src +"'/>\
                                  <div class='desc'>\
                                    "+ desc +"\
                                  </div>\
                                  <a href='"+ src +"' download class='btn'>Descargar</a>\
                                </div>\
                              </div> ")
    }

  });


  $('#wrapperSelectorArticle span').click(function(){
    if (!$(this).is(".active")) {
      $('#wrapperSelectorArticle span').removeClass('active');
      $(this).addClass('active');
      var idActive = $(this).attr('id');
      idString = idActive.replace("opt", "");
      console.log(idString);
      $(this).parent().siblings(".opt_content_slider_wrapper").children().animate({
            left: -(parseInt(idString) - 1)*($(this).parent().siblings(".opt_content_slider_wrapper").children().width())
      }, 1000, 'swing', function() {
        //alert("ok");
      });
    }
  });

  $('#infodata .tab_header').click(function(){
    if (!$(this).is(".active")) {
    $('#infodata .tab_header').removeClass('active');
      $(this).addClass('active');
      var idActive = $(this).attr('id');
      $('#infodata .tab_content').removeClass('active');
      $('#infodata #content_' + idActive).addClass('active');
      $('#infodata #tabSelect').html($(this).html());
      $('#infodata #tabSelect').addClass('active');
      mobileSelect1.locatePosition(0,1);
    }
  });

  var ActivePageFriendSlider = 0;
  var totalChildrenFriendSlider = $("#friendsWrapper .sliderContent div").length;
  var totalPagesFriendSlider = Math.floor(totalChildrenFriendSlider/6);
  if (totalPagesFriendSlider - totalChildrenFriendSlider/6 == 0){
    totalPagesFriendSlider--;
  }
  if(totalPagesFriendSlider == 0){
    $('#friendsWrapper .arrowRight').css({'display':'none'});
  }
  var ActivePageTeamSlider = 0;
  var totalChildrenTeamSlider = $("#teamWrapper .sliderContent .card").length;
  var totalPagesTeamSlider = Math.floor(totalChildrenTeamSlider/3);
  if (totalPagesTeamSlider - totalChildrenTeamSlider/3 == 0){
    totalPagesTeamSlider--;
  }
  if(totalPagesTeamSlider == 0){
    $('#teamWrapper .arrowRight').css({'display':'none'});
  }
  var ActivePageCronologySlider = 0;
  var totalChildrenCronologySlider = $("#cronology .sliderContent .cronologyItem").length;
  var totalPagesCronologySlider = Math.floor(totalChildrenCronologySlider);
  if (totalPagesCronologySlider - totalChildrenCronologySlider == 0){
    totalPagesCronologySlider--;
  }
  if(totalPagesCronologySlider == 0){
    $('#cronology .arrowRight').css({'display':'none'});
  }
  var widthImgCronology = $("#cronology .sliderContent .cronologyItem").eq(ActivePageCronologySlider).children("img").width();
  $('#cronology .arrowLeft').css({'right':(widthImgCronology + 30) + "px"});
  $('.arrowRight').click(function () {
    if ($(this).parent().attr('id') == 'friendsWrapper'){
      ActivePageFriendSlider--;
      var newLeft =   ActivePageFriendSlider*($(this).siblings(".pisoton_slider").children('.sliderContent').width() + 5);
      if(Math.abs(ActivePageFriendSlider) == totalPagesFriendSlider){
        $(this).css({'display':'none'});
      }
    }else {
      if ($(this).parent().attr('id') == 'teamWrapper'){
        ActivePageTeamSlider--;
        var newLeft =   ActivePageTeamSlider*($(this).siblings(".pisoton_slider").children('.sliderContent').width() + 5);
        if(Math.abs(ActivePageTeamSlider) == totalPagesTeamSlider){
          $(this).css({'display':'none'});
        }
      }else{
        if ($(this).parent().attr('id') == 'cronologyWrapper'){
          ActivePageCronologySlider--;
          var newLeft =   ActivePageCronologySlider*($(this).siblings(".pisoton_slider").children('.sliderContent').width());
          if(Math.abs(ActivePageCronologySlider) == totalPagesCronologySlider){
            $(this).css({'display':'none'});
          }
          var widthImgCronology = $("#cronology .sliderContent .cronologyItem").eq(Math.abs(ActivePageCronologySlider)).children("img").width();
          $('#cronology .arrowLeft').css({'right':(widthImgCronology - 30) + "px"});
        }
      }
    }
    $(this).siblings(".pisoton_slider").children('.sliderContent').animate({
          left: newLeft
    }, 1000, 'swing', function() {
      //alert("ok");
    });
    $(this).siblings('.arrowLeft').css({'display':'block'});
  });

  $('.arrowLeft').click(function () {
    if ($(this).parent().attr('id') == 'friendsWrapper'){
      ActivePageFriendSlider++;
      var newLeft =   ActivePageFriendSlider*($(this).siblings(".pisoton_slider").children('.sliderContent').width() + 5);
      if(ActivePageFriendSlider == 0){
        $(this).css({'display':'none'});
      }
    }else {
      if ($(this).parent().attr('id') == 'teamWrapper'){
        ActivePageTeamSlider++;
        var newLeft =   ActivePageTeamSlider*($(this).siblings(".pisoton_slider").children('.sliderContent').width() + 5);
        if(ActivePageTeamSlider == 0){
          $(this).css({'display':'none'});
        }
      }else{
        if ($(this).parent().attr('id') == 'cronologyWrapper'){
          ActivePageCronologySlider++;
          var newLeft =   ActivePageCronologySlider*($(this).siblings(".pisoton_slider").children('.sliderContent').width());
          if(ActivePageCronologySlider == 0){
            $(this).css({'display':'none'});
          }
          var widthImgCronology = $("#cronology .sliderContent .cronologyItem").eq(Math.abs(ActivePageCronologySlider)).children("img").width();
          $('#cronology .arrowLeft').css({'right':(widthImgCronology - 30) + "px"});
        }
      }
    }
    $(this).siblings(".pisoton_slider").children('.sliderContent').animate({
          left: newLeft
    }, 1000, 'swing', function() {
    });
    $(this).siblings('.arrowRight').css({'display':'block'});
  });

  $('#infodata .arrowRight').click(function() {
    $('#infodata #tabSelect').click();
  })

  var options = [$('#tab1').html(),$('#tab2').html()];
  if($('#tabSelect').length){
    mobileSelect1 = new MobileSelect({
      trigger: '#tabSelect',
      wheels: [
        {data: options}
      ],
      position:[0],
      ensureBtnText: 'Seleccionar',
      cancelBtnText: 'Cancelar',
      callback:function(indexArr, data){
        $('#infodata .tab_header').removeClass('active');
        $('#infodata #tab' + (indexArr[0] + 1)).addClass('active');
        var idActive = 'tab' + (indexArr[0] + 1);
        $('#infodata .tab_content').removeClass('active');
        $('#infodata #content_' + idActive).addClass('active');
        $('#infodata #tabSelect').addClass('active');
      }
    });
  }

  $('#videos').on('click', '#loadMoreVideos',function(event){
    event.preventDefault();
    var totalPagesBlogSlider = Math.floor($("#blogSlider").height()/$("#blogSliderWrapper").height());
    if (totalPagesBlogSlider - $("#blogSlider").height()/$("#blogSliderWrapper").height() == 0){
      totalPagesBlogSlider--;
    }
    console.log(totalPagesBlogSlider);
    activitiesPages++;
    if(activitiesPages > totalPagesBlogSlider){
      activitiesPages = 0;
    }
    $("#blogSlider").animate({
      top: -(activitiesPages)*($("#blogSliderWrapper").height() + 2)
    }, 1000, 'swing', function() {
        //alert("ok");
    });

  });

  function isElementInViewport (el) {

    //special bonus for those using jQuery
    if (typeof jQuery === "function" && el instanceof jQuery) {
        el = el[0];
    }

    var rect = el.getBoundingClientRect();
    //console.log("b: " + rect.bottom + "; r: " + rect.right + "; t: " + rect.top + "; l: " + rect.left);
    return (

      rect.bottom >= 0 &&
      rect.right >= 0 &&
      rect.top <= (window.innerHeight/2 || document.documentElement.clientHeight/2) &&
      rect.left <= (window.innerWidth || document.documentElement.clientWidth));
  }

  function onVisibilityChange(el, callback) {
      var old_visible;
      return function () {
          var visible = isElementInViewport(el);
          if (visible != old_visible) {
              old_visible = visible;
              if (typeof callback == 'function') {
                  callback();
              }
          }
      }
  }

  var handler = function() {
    if($('#gamesLoader').css('display') == 'block'){
      var width = (window.innerWidth || document.documentElement.clientWidth);
      width -= 50;
      var left = width + 10;
      height = parseInt(width/1.77);
      var top = parseInt(window.innerHeight || document.documentElement.clientHeight)/2 - height/2;

      if(height > (window.innerHeight || document.documentElement.clientHeight)){
        height = (window.innerHeight || document.documentElement.clientHeight);
        height -= 50;
        var top = 25;
        width = parseInt(height*1.77);
        var left = parseInt(window.innerWidth || document.documentElement.clientWidth)/2 + width/2;
        left -= 16;
      }
      top -= 16;

      $('.gameFrame').css({"width":width+"px","height":height+"px"});
      $('#closeGame').css({"top":top+"px","left":left+"px"});
    }
    if($("#activitySlider").length){
      containerHeight = ($(".activitySliderBox").height() + 40 + 1)*2 - 2;
      $("#activitySliderWrapper").css({"height":containerHeight});
    }
    if($("#blogSlider").length){
      containerHeight = ($(".blogSliderBox").height() + 40 + 1)*2 - 2;
      $("#blogSliderWrapper").css({"height":containerHeight});
    }
    if($("#blogImageSlider").length){
      containerHeight = ($(".blogImageSliderBox").height() + 40 + 1)*1 - 2;
      $("#blogImageSliderWrapper").css({"height":containerHeight});
    }
    if(window.innerWidth > 587){
      if($('.topnav.parent').length){
        var visible = isElementInViewport($('.topnav.parent'));
        if(!visible){
          $('.subMenu').css({'display':'block'});
          setTimeout(function(){ $('.subMenu').addClass('visible'); }, 50);
        }else{
          $('.subMenu').removeClass('visible');
          $('.subMenu').css({'display':'none'});
        }
      }
      if($('#banner').length){
        var visible = isElementInViewport($('#banner'));
        if(visible){
          $('.subMenu a').removeClass('active');
          $('.subMenu a#refBanner').addClass('active');
        }
      }
      if($('#blog').length){
        var visible = isElementInViewport($('#blog'));
        if(visible){
          $('.subMenu a').removeClass('active');
          $('.subMenu a#refBlog').addClass('active');
        }else{
          if($('#articles').length){
            var visible = isElementInViewport($('#articles'));
            if(visible){
              $('.subMenu a').removeClass('active');
              $('.subMenu a#refArticles').addClass('active');
            }
          }
        }
      }
      if($('#store').length){
        var visible = isElementInViewport($('#store'));
        if(visible){
          $('.subMenu a').removeClass('active');
          $('.subMenu a#refStore').addClass('active');
        }else{
          if($('#moreInfo').length){
            var visible = isElementInViewport($('#moreInfo'));
            if(visible){
              $('.subMenu a').removeClass('active');
              $('.subMenu a#refContacts').addClass('active');
            }
          }
        }
      }
      if($('#infodata').length){
        var visible = isElementInViewport($('#infodata'));
        if(visible){
          $('.subMenu a').removeClass('active');
          $('.subMenu a#refInfodata').addClass('active');
        }
      }
      if($('#cronology').length){
        var visible = isElementInViewport($('#cronology'));
        if(visible){
          $('.subMenu a').removeClass('active');
          $('.subMenu a#refCronology').addClass('active');
        }else{
          if($('#moreInfo').length){
            var visible = isElementInViewport($('#moreInfo'));
            if(visible){
              $('.subMenu a').removeClass('active');
              $('.subMenu a#refContacts').addClass('active');
            }
          }
        }
      }
      var scrollHeight = $(document).height();
    	var scrollPosition = $(window).height() + $(window).scrollTop();
    	if ((scrollHeight - scrollPosition) / scrollHeight === 0) {
        if($('#moreInfo').length){
          $('.subMenu a').removeClass('active');
          $('.subMenu a#refContacts').addClass('active');
        }
    	}
    }
  };


  //jQuery
  $(window).on('DOMContentLoaded load resize scroll', handler);











  //audio Player
  audio = $('.player audio').get(0);
  loadingIndicator = $('.player #loading');
  gutterIndicator = $('.player #gutter');
  positionIndicator = $('.player #handle');
  volumeIndicator = $('.player #loadingVolume');
  timeleft = $('.player #timeleft');
  manualSeek = false;
  loaded = false;


  $(audio).bind('timeupdate', function() {
    var rem = parseInt(audio.duration - audio.currentTime, 10),
    pos = (audio.currentTime / audio.duration) * 100,
    mins = Math.floor(rem/60,10),
    secs = rem - mins*60;

    timeleft.text('-' + mins + ':' + (secs > 9 ? secs : '0' + secs));
    if (!manualSeek) {
      positionIndicator.css({left: pos + '%'});
      loadingIndicator.css({width: pos + '%'});
    }
    if (!loaded) {
      loaded = true;

      $('.player #gutter').slider({
        value: 0,
        step: 0.01,
        orientation: "horizontal",
        range: "min",
        max: audio.duration,
        animate: true,
        slide: function() {
          manualSeek = true;
        },
        stop:function(e,ui) {
          manualSeek = false;
          audio.currentTime = ui.value;
        }
      });
      $('.player #volume').slider({
        value: 0.7,
        step: 0.01,
        orientation: "horizontal",
        range: "min",
        max: 1,
        animate: true,
        stop:function(e,ui) {
          volumeIndicator.css({width: ui.value*100 + '%'});
          audio.volume = ui.value;
        }
      });
    }
  });
  $(audio).bind('play',function() {
    $("#playtoggle").addClass('playing');
  }).bind('pause ended', function() {
    $("#playtoggle").removeClass('playing');
  });

  $("#playtoggle").click(function() {
    if (audio.paused) { audio.play(); }
    else { audio.pause(); }
  });


});
function menuClick() {
  var x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
      x.className += " responsive";
  } else {
      x.className = "topnav";
  }
}

function menuClickParent() {
  var x = document.getElementById("myTopnav");
  if (x.className === "topnav parent") {
      x.className += " responsive";
  } else {
      x.className = "topnav parent";
  }
}
