<!DOCTYPE html>
<html>
<head>
    <script async src="https://www.googletagmanager.com/gtag/js?id=UA-137172068-1"></script>
    <script>
    console.log("some");
    window.dataLayer = window.dataLayer || [];
      function gtag(){dataLayer.push(arguments);}
      gtag('js', new Date());

      gtag('config', 'UA-137172068-1');
    </script>
    <meta http-equiv="X-UA-Compatible" content="IE=Edge" />
    <meta charset="utf-8">
    <title></title>
    <meta name="viewport" content="width=device-width, user-scalable=no" >
    <link rel="stylesheet" href="css/bootstrap.css">
    <link rel="stylesheet" href="css/bootstrap-4-utilities.min.css">
    <link rel="stylesheet" href="css/default.css">
    <link rel="stylesheet" href="css/fonts.css">
    <link rel="stylesheet" href="css/navbar.css">
    <link href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,900" rel="stylesheet">
</head>
<body>
    <div class="topnav parent whiteBg" id="myTopnav">
      <a href="pisoton.html">Pisotón</a>
      <a href="padres.php">Padres</a>
      <a href="maestros.html">Maestros</a>
      <a href="index.php" >Niños</a>
      <a href="javascript:void(0);" class="icon" onclick="menuClickParent()">&#9776;</a>
    </div>
    <navbar class="navbar-pisoton">
      <a href="padres.php" class="nav-link parents-link">
        <p> Papá, mamá y cuidadores </p>
      </a>
      <a href="maestros.html" class="nav-link teachers-link">
        <p> Maestros, agentes educativos y tutores </p>
      </a>
      <a href="pisoton.html" class="nav-link pisoton-link"> 
        <p> Pisotón </p>
      </a>
      <a href="index.php" class="nav-link adventures-link">
        <p> Las Aventuras de Ugo y Ema</p>
      </a>
    </navbar>
  <section id="info" class="intern maxWidth mt-md-5 pt-md-5">
    <article id="contentArticle" class="bottom" style="overflow:auto">
      <p class="title"></p>
      <div id='blogImageSliderWrapper' >
        <div id='blogImageSlider'>
          <div class='blogImageSliderBox'><img src=''/></div>
        </div>
      </div>
      <div class="desc"></div>
      <div class="author"></div>
    </article>
  </section>
  <section id="videos" class="intern">
    <h4 class="sectionDivider">Artículos</h4>
    <div id='blogSliderWrapper' class="maxWidth" style='max-width: 1200px !important;margin-left: 0 !important;position: relative;left: 50%;transform: translate(-50%,0);'>
      <div id='blogSlider'>
      </div>
    </div>
    <a href='#' class='btn' id='loadMoreVideos'>Ver más</a>
  </section>

  <section id="moreInfo" class="maxWidth">
  </section>
  <footer>
    <div class="footerWrapper">
      <a href="index.php"><img src="img/ninos/home-06.png" alt="Las Aventuras de Ugo y Ema" /></a>
      <div id="networks">
        <p><a href="https://www.facebook.com/Pisoton/" target="_blank" ><img src="img/ninos/facebook_icon.png" alt="facebook">Programa Pisotón Uninorte</a></p>
        <p><a href="https://twitter.com/unpisoton" target="_blank" ><img src="img/ninos/twitter_icon.png" alt="twitter">@unpisoton</a></p>
        <p><a href="https://www.instagram.com/pisoton_uninorte" target="_blank" ><img src="img/ninos/instagram_icon.png" alt="instagram">@pisoton_uninorte</a></p>
      </div>
      <div id="news">
        <h4>Newsletter</h4>
        <span>
          <input id="newsFormEmail" type ="text" placeholder="Email"></input>
          <img id="newsFormRegister" src="img/ninos/telegram.png"/>
        </span>
        <p>Suscríbete para recibir más información</p>
      </div>
      <a href="pisoton.html"><img id="logoPisoton" src="img/ninos/home-07.png" alt="pisoton"/></a>
    </div>
  </footer>
  <div class="modal fade" id="activityModal" tabindex="-1" role="dialog" aria-labelledby="mySmallModalLabel" aria-hidden="true">
      <div class="modal-dialog modal-sm" role="document">
        <div class="modal-content">
          <div class="modal-header">
            <button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>
            <h4 class="modal-title" id="exampleModalLabel">Actividad </h4>
          </div>
          <div class="modal-body">

          </div>
        </div>
      </div>
  </div>
  <script src="https://code.jquery.com/jquery.js"></script>
  <script src="https://code.jquery.com/ui/1.12.1/jquery-ui.js"></script>
  <script src="js/libs/bootstrap/bootstrap.min.js"></script>
  <script src="js/mobileSelect.js"></script>
  <script src="js/handler.js"></script>
  <script>
    $(document).ready(function(){
        var callback = GetURLParameter('f');
        switch (callback) {
          case '0':
            gtag('event', 'padres/artículos');
            $('header').html('<div class="headerWrapper"> \
                              <a href="padres.php"><img src="img/padres/Padres-01.png"></a> \
                              <a href="maestros.html"><img src="img/padres/Padres-02.png"></a> \
                              <a href="pisoton.html"><img src="img/padres/Padres-03.png"></a> \
                              <a href="index.php" ><img src="img/padres/Padres-04.png"></a> \
                            </div>');
            break;
          case '1':
            gtag('event', 'maestros/artículos');
            $('header').html('<div class="headerWrapper teachers"> \
                              <a href="maestros.html"><img src="img/padres/maestros.png"></a> \
                              <a href="padres.php"><img src="img/padres/Padres-05.png"></a> \
                              <a href="pisoton.html"><img src="img/padres/Padres-03.png"></a> \
                              <a href="index.php" ><img src="img/padres/Padres-04.png"></a> \
                            </div>');
            break;
          case '2':
            gtag('event', 'pisoton/artículos');
            $('header').html('<div class="headerWrapper pisotonB"> \
                                <a href="pisoton.html"><img src="img/pisoton/PisotonHome-01.png"></a> \
                                <div class="subHeader"> \
                                  <div class="subHeaderItem"> \
                                    <a href="padres.php"><img src="img/padres/Padres-05.png"></a> \
                                    <a href="maestros.html"><img src="img/padres/Padres-02.png"></a> \
                                    <a href="index.php" ><img src="img/padres/Padres-04.png"></a> \
                                  </div> \
                                  <div class="subHeaderItem"> \
                                    <a href="#"><img src="img/pisoton/NosEmociona-09.png"></a> \
                                    <a href="razones_y_corazones.html"><img src="img/pisoton/NosEmociona-10.png"></a> \
                                  </div> \
                                </div> \
                              </div>');
            break;
          default:
            gtag('event', 'pisoton/artículos');
            $('header').html('<div class="headerWrapper pisotonB"> \
                              <a href="pisoton.html"><img src="img/pisoton/PisotonHome-01.png"></a> \
                              <div class="subHeader"> \
                                <div class="subHeaderItem"> \
                                  <a href="padres.php"><img src="img/padres/Padres-05.png"></a> \
                                  <a href="maestros.html"><img src="img/padres/Padres-02.png"></a> \
                                  <a href="index.php" ><img src="img/padres/Padres-04.png"></a> \
                                </div> \
                                <div class="subHeaderItem"> \
                                  <a href="#"><img src="img/pisoton/NosEmociona-09.png"></a> \
                                  <a href="razones_y_corazones.html"><img src="img/pisoton/NosEmociona-10.png"></a> \
                                </div> \
                              </div> \
                            </div>');
        }
        $.ajax({
          type: "POST",
          url: "https://comino.uninorte.edu.co/pisoton/admin/load_articles.php",
          data:{filter:'all'},
          success: function(mensaje)
          {
              //alert(mensaje);ç
              var obj = JSON.parse(mensaje);
              if(obj.exito == "1")
              {
                var htmlArticles = '';
                for (var i = 0; i < obj.datos.length; i++) {
                  category = obj.datos[i]['tag'].split("@")[1];
                  switch (obj.datos[i]['tag'].split("@")[0]) {
                    case '0':
                      section = "Padres";
                      break;
                    case '1':
                      section = "Maestros";
                      break;
                    case '2':
                      section = "Pisotón";
                      break;
                    case '3':
                      section = "Investigación";
                      break;
                    default:
                      section = "Pisotón";
                      break;
                  };

                  htmlImg = '';
                  classCSS = '';
                  if(obj.datos[i]['urlImage'] != null){
                    htmlImg = '<img class="backImg" src="admin/uploads/' + obj.datos[i]['urlImage'] + '">';
                    classCSS = 'withImg';
                  }
                  htmlArticles += '<div class="blogSliderBox"> \
                                    <article class="card articles '+classCSS+'"> \
                                      <p class="cardTitle">'+  section +'</p> \
                                      <p class="cardSubtitle">'+ category +'</p> \
                                      <p class="cardDescTitle"> '+ obj.datos[i]['title'] +'</p> \
                                      <div class="cardDesc">'+ obj.datos[i]['description'] +'</div> \
                                      <a href="articles.php?f='+obj.datos[i]['tag'].split("@")[0]+'&article='+obj.datos[i]['idContent']+'">Ver más</a> \
                                      '+ htmlImg +' \
                                    </article> \
                                  </div>';
                }
                $("#blogSlider").html(htmlArticles).parent().siblings('#loadMoreVideos').css({'right':'calc(50% - ' + $('#blogSliderWrapper').width()/2 + 'px)'});
                fixHeight();
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
      function fixHeight(){
        setTimeout(function(){
            containerHeight = ($(".blogSliderBox").height() + 40 + 1)*2 - 2;
            if($("#blogSliderWrapper").height() != containerHeight){
              $("#blogSliderWrapper").css({"height":containerHeight});
              fixHeight();
            }else{
              $(window).scrollTop(1);
            }
          },500);
      }
      var url_string = window.location.href;
      var url = new URL(url_string);
      var articleId = url.searchParams.get("article");
      $.ajax({
          type: "POST",
          url: "https://comino.uninorte.edu.co/pisoton/admin/load_articles.php",
          data:{filter:articleId},
          success: function(mensaje)
          {
              //alert(mensaje);
              var obj = JSON.parse(mensaje);
              if(obj.exito == "1")
              {
                $(".bottom .title").html(obj.datos[0]['title']);
                $(".bottom .desc").html(obj.datos[0]['description']);
                $(".bottom .author").html('Por: ' + obj.datos[0]['author']);
                if(obj.datos[0]['urlImage'] != null){
                  $(".bottom .blogImageSliderBox img").attr('src','admin/uploads/' + obj.datos[0]['urlImage']);
                }else{
                  $(".bottom #blogImageSliderWrapper").css({'display':'none'});
                }
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
    });
    function GetURLParameter(sParam){
        var sPageURL = window.location.search.substring(1);
        var sURLVariables = sPageURL.split('&');
        for (var i = 0; i < sURLVariables.length; i++)
        {
            var sParameterName = sURLVariables[i].split('=');
            if (sParameterName[0] == sParam)
            {
                return sParameterName[1];
            }
        }
      }
  </script>
    <!--<script src="js/libs/jqueryValidate/jqueryvalidate.js"></script>-->
    <!--<script src="js/formhandler.js"></script>-->
</body>
</html>
