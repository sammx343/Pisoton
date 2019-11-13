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
    <link rel="stylesheet" href="css/default.css">
    <link href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,900" rel="stylesheet">
</head>
<body>
  <!--<div class="hidden" id="#tabSelect"></div>
  <section id="banner" class="intern">-->
    <div class="topnav parent" id="myTopnav">
      <a href="pisoton.html" class="active">Pisotón</a>
      <a href="padres.php">Padres</a>
      <a href="maestros.html">Maestros</a>
      <a href="index.php" >Niños</a>
      <a href="javascript:void(0);" class="icon" onclick="menuClickParent()">&#9776;</a>
    </div>
   <!--<div class="subMenu">
      <a id="refBanner" href="#" class="active">Inicio</a>
      <a id="refVideos" href="#videos">Videos</a>
    </div>-->
    <!--<h1 id="logo">
      <a href="#"></a>
    </h1>
    /*<div class="topnav" id="myTopnav">
      <a href="#padres">Padres</a>
      <a href="#maestros">Maestros</a>
      <a href="#" class="active">Niños</a>
      <a href="#blog">Video Blog</a>
      <a href="#Contacto">Contacto</a>
      <a href="javascript:void(0);" class="icon" onclick="menuClick()">&#9776;</a>
    </div>-->
  <!--</section>-->
  <header class="relHeader">
  </header>
  <section id="videos" class="intern">
    <h4>Más videos</h4>
    <article>
      Video Blog Ana Rita ¿Qué hago?
    </article>
    <div id='blogSliderWrapper' class="maxWidth"  style='max-width: 1200px !important;margin-left: 0 !important;position: relative;left: 50%;transform: translate(-50%,0);'>
      <div id='blogSlider'>

      </div>
    </div>
    <a href='#' class='btn' id='loadMoreVideos'>Ver más</a>

  </section>

  <section id="moreInfo">
    <!--<div class="wrapper">
      <div>
        <h4><a href="index.html">Niños</a></h4>
      </div>
      <div>
        <h4><a href="padres.php">Padres</a></h4>
        <ul>
          <li><a href="padres.php#blog">Video Blog</a></li>
          <li><a href="padres.php#articles">Artículos</a></li>
        </ul>
      </div>
      <div>
        <h4><a href="maestros.html">Maestros</a></h4>
        <ul>
          <li><a href="maestros.html#blog">Video Blog</a></li>
          <li><a href="maestros.html#articles">Artículos</a></li>
        </ul>
      </div>
      <div>
        <h4><a href="pisoton.html">Pisotón</a></h4>
        <ul>
          <li><a href="pisoton.html#articles">Artículos</a></li>
          <li><a href="pisoton.html#cronology">Cronología</a></li>
        </ul>
      </div>
      <div>
        <h4>Newsletter</h4>
        <p>Neque porro quisquam est qui dolorem ipsum quia dolor sit amet</p>
        <span>
          <input type ="text" placeholder="Email"></input>
          <img src="img/ninos/telegram.jpg"/>
        </span>
        <div id="networks">
          <img src="img/ninos/facebook_icon.png" alt="facebook">
          <img src="img/ninos/twitter_icon.png" alt="twitter">
          <img src="img/ninos/feeds_icon.png" alt="feeds">
          <img src="img/ninos/instagram_icon.png" alt="instagram">
          <img src="img/ninos/google_icon.png" alt="google">
        </div>
      </div>
    </div>-->
    <div class="sectionHeader lastSection">
      <h3>¿Tienes inquietudes sobre la crianza de tus hijos?</h3>
      <a href="https://anaritaquehago.questionpro.com" target="_blank" class="btn">Pregúntanos</a>
    </div>
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
        <p>Neque porro quisquam est qui dolorem ipsum quia dolor sit amet</p>
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
          gtag('event', 'padres/videoBlog');
          $('header').html('<div class="headerWrapper"> \
                            <a href="padres.php"><img src="img/padres/Padres-01.png"></a> \
                            <a href="maestros.html"><img src="img/padres/Padres-02.png"></a> \
                            <a href="pisoton.html"><img src="img/padres/Padres-03.png"></a> \
                            <a href="index.php" ><img src="img/padres/Padres-04.png"></a> \
                          </div>');
          break;
        case '1':
          gtag('event', 'maestros/videoBlog');
          $('header').html('<div class="headerWrapper teachers"> \
                            <a href="maestros.html"><img src="img/padres/maestros.png"></a> \
                            <a href="padres.php"><img src="img/padres/Padres-05.png"></a> \
                            <a href="pisoton.html"><img src="img/padres/Padres-03.png"></a> \
                            <a href="index.php" ><img src="img/padres/Padres-04.png"></a> \
                          </div>');
          break;
        default:
          gtag('pisoton', 'padres/videoBlog');
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
          url: "https://comino.uninorte.edu.co/pisoton/admin/load_videoBlog.php",
          data:{filter:'all'},
          success: function(mensaje)
          {
              //alert(mensaje);
              var obj = JSON.parse(mensaje);
              if(obj.exito == "1")
              {
                var htmlArticles = '';
                for (var i = 0; i < obj.datos.length; i++) {
                  htmlArticles += '<div class="blogSliderBox"> \
                                    <p>'+ obj.datos[i]['title'] +'</p>\
                                    <iframe frameborder="0" allowfullscreen style="width:100%;height:100%" src="'+obj.datos[i]["url"].replace("watch?v=", "embed/")+'"></iframe>\
                                  </div>';
                }
                $("#blogSlider").html(htmlArticles);
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
              var elmnt = document.getElementById("contentArticle");
              elmnt.scrollIntoView({block:'center',behavior:'smooth'});
            }
          },500);
      }
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
    });
  </script>
    <!--<script src="js/libs/jqueryValidate/jqueryvalidate.js"></script>-->
    <!--<script src="js/formhandler.js"></script>-->
</body>
</html>
