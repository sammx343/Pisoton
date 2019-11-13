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
      gtag('event', 'home-padres');
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
  <div class="hidden" id="#tabSelect"></div>
  <section id="banner">
    <div class="topnav parent" id="myTopnav">
      <a href="pisoton.html">Pisotón</a>
      <a href="#" class="active">Padres</a>
      <a href="maestros.html">Maestros</a>
      <a href="index.php" >Las Aventuras de Ugo y Ema</a>
      <a href="javascript:void(0);" class="icon" onclick="menuClickParent()">&#9776;</a>
    </div>
    <header>
      <div class="headerWrapper">
        <a href="#"><img src="img/padres/Padres-01.png"></a>
        <a href="maestros.html"><img src="img/padres/Padres-02.png"></a>
        <a href="pisoton.html"><img src="img/padres/Padres-03.png"></a>
        <a href="index.php" ><img src="img/padres/Padres-04.png"></a>
      </div>
    </header>
    <iframe  type="text/html" allowfullscreen style="width:100%;height:100%;display:none" src="" frameborder="0"></iframe>
    <div class="bannerImg"></div>
    <!--<div class="subMenu">
      <a id="refBanner" href="#" class="active">Inicio</a>
      <a id="refBlog" href="#blog">Video Blog</a>
      <a id="refArticles" href="#articles" >Artículos</a>
      <a id="refDownloader" href="#downloader">Descargables</a>
      <a id="refContacts" href="#moreInfo">Contacto</a>
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
    <div class="generalWrapper">
      <article>
        <h2></h2>
        <p></p>
        <a class="articleLink" href=""></a>
      </article>
    </div>
    <div id="overlay_back"></div>
  </section>
  <section id="anarita">
    <!--<div class="sectionHeader parents">
      <h3>Ana rita ¿Qué hago?</h3>
      <a href="maestros.html#formPis" class="btn">Preguntanos</a>
    </div>-->
    <div class="generalWrapper">
      <div id="blog">
        <article>
          <div>
            <p class="pretitle"> Video Blog</p>
            <p class="title">Ana Rita ¿Qué hago para manejar las pataletas de mi hijo?</p>
            <p> Las pataletas son parte del desarrollo de los niñas y niñas, ante ellas, muchas veces los padres no saben como actuar, qué hacer, como manejarlas o reducirlas</p>
            <a href="blog.php?f=0" class="btn">Ir a video Blog</a>
          </div>
          <div id="videoBlog">

          </div>
        </article>
      </div>
      <div id="cards">
        <div class="card" id="audioGuide">
          <p class="cardTitle">Audio guías con amor</p>
          <p class="cardSubtitle">Audios</p>
          <!--<p class="cardDescTitle"> Audio Guías con amor - Audio</p>-->
          <p class="cardDesc">Nuestras recomendaciones y consejos sobre la crianza de los niños también se emiten en la radio, escucha aquí las cápsulas de Guías con Amor presentadas en Uninorte Fm Estéreo</p>
          <a href="#" class="btn">Escuchar más</a>
          <div class="moreAudio">
            <span>Escucha más Audio Guías con amor!</span>
            <ul>
              <li id="test3">test3</li>
            </ul>
          </div>
          <div class="audioplayer">
            <p class="player">
              <span id="playtoggle"></span>
              <span id="gutter">
                <span id="loading" ></span>
                <span id="handle" class="ui-slider-handle" ></span>
              </span>
              <span id="timeleft" >1:54</span>

              <span id="volume">
                <img id="volumeIcon" src="img/reproductor/Icon.png"/>
                <span id="loadingVolume" ></span>
                <span id="handleVolume" class="ui-slider-handle" ></span>
              </span>
              <audio id="tagAudio">
                <source src="audio/padres/test.mp3">
              </audio>
            </p>
          </div>
        </div>
        <div class="card" id="infograph">
          <p class="cardTitle">Infografía</p>
          <p class="cardSubtitle">Infografías</p>
          <!--<p class="cardDescTitle"> Infografía</p>-->
          <p class="cardDesc">Papá y mamá el proceso de desarrollo de crecimiento de los niños parece fácil pero a veces no es así, Guías con Amor los acompaña para que este gran reto esté cargado de enseñanzas, amor y cuidados</p>
          <!--<a href="#" class="btn">Ver más</a>-->
          <img id="infoImg" src="img/padres/info1.png"/>
          <!--<ul class="socialNet">
            <li><a href="#"><img src="img/padres/face_icon.png"/></a></li>
            <li><a href="#"><img src="img/padres/twitter_icon.png"/></a></li>
            <li><a href="#"><img src="img/padres/in_icon.png"/></a></li>
          </ul>-->
        </div>
      </div>
      <div id="articles">
        <article>
          <p class="articleTitle">Artículos expertos temas de crianza</p>
          <p class="articleText">Si quieres informarte y aprender más sobre la crianza de tus hijos e hijas, haz click aquí.</p>
        </article>
        <div class="opt_content_slider_wrapper">
          <div class="opt_content active">
          </div>
        </div>
        <div id="wrapperSelectorArticle">
          <span class="active" id="opt1">1</span>
          <span id="opt2">2</span>
          <span id="opt3">3</span>
        </div>
      </div>
      <div id="downloader">
        <div class="arrowLeft"><img src="img/pisoton/friends/ICONO_IZQ.png"/></div>
        <div class="arrowRight"><img src="img/pisoton/friends/ICONO_DER.png"/></div>
        <div id="downloaderSlider" class="pisoton_slider">
          <div class="sliderContent">

          </div>
        </div>
      </div>
    </div>
    <div class="sectionHeader lastSection">
      <h3>¿Tienes inquietudes sobre la crianza de tus hijos?</h3>
      <a href="https://anaritaquehago.questionpro.com" target="_blank" class="btn">Pregúntanos</a>
    </div>
  </section>
  <!--<section id="store">
    <article>
      <h2>Visita la tienda de Ugo y Ema</h2>
      <p>xxxxxxxxxxxxxxx xxxxxxxxxxxxxxx xxxxxxxxxxxxxxx xxxxxxxxxxxxxxx xxxxxxxxxxxxxxx xxxxxxxxxxxxxxx xxxxxxxxxxxxxxx xxxxxxxxxxxxxxx xxxxxxxxxxxxxxx</p>
      <a href="#" class="btn">Tienda<img src="img/padres/car.svg"/></a>
    </article>
    <div id="footerGrass"></div>
  </section>-->
  <section id="moreInfo" >
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
    <!--<script src="js/libs/jqueryValidate/jqueryvalidate.js"></script>-->
    <!--<script src="js/formhandler.js"></script>-->
</body>
</html>
