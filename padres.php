<!DOCTYPE html>
<html>
<head>
    <script async src="https://www.googletagmanager.com/gtag/js?id=UA-137172068-1"></script>
    <script>
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
    <link rel="stylesheet" href="css/bootstrap-4-utilities.min.css">
    <link rel="stylesheet" href="css/default.css">
    <link rel="stylesheet" href="css/fonts.css">
    <link rel="stylesheet" href="css/navbar.css">
    <link rel="stylesheet" href="css/parents.css">
    <link rel="stylesheet" href="css/buttons.css">
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
        <p> Las Aventuras de Ugo y Ema</p>|
      </a>
    </navbar>
    <div class="bannerImg"></div>
    <div class="generalWrapper parents-hero">
      <article>
        <h2></h2>
        <p></p>
        <a class="articleLink btn-pisoton" href=""></a>
      </article>
    </div>
    <div id="overlay_back"></div>
  </section>
  <section id="anarita">
    <div class="sectionHeader lastSection">
      <h3 class="mr-lg-3">¿Tienes inquietudes sobre la crianza de tus hijos?</h3>
      <a href="https://anaritaquehago.questionpro.com" target="_blank" class="btn">Pregúntanos</a>
    </div>
    <div class="visual-information p-3 p-lg-5">
      <div class="infography mb-5">
        <div class="card d-flex justify-content-center align-items-center p-1 mr-lg-5">
            <img src="img/padres/info1.png"/>
            <div class="information d-flex flex-column justify-content-center">
              <h3>Guías con amor</h3>
              <p>Papá y mamá, el desarrollo de los niños y niñas parece fácil, pero no lo es; Guías con Amor los acompaña para que este gran reto esté cargado de enseñanzas, amor y cuidados.</p>
              <a href="https://youtu.be/FsT8K-kCRSw" target="_blank" class="btn-custom-secondary mx-auto mx-lg-0">Ver más...</a>
            </div>
        </div>
      </div>
      <div class="videoblog">
          <p class="pretitle"> Videoblog </p>
          <div id="videoblog-frame"></div>
          <p class="postitle mt-2"> Pataletas: </p>
          <p class="text"> ¿Qué hacer?¿Cómo manejarlas?¿Cómo reducirlas?</p>
          <a href="blog.php?f=0" class="btn">Ir a Videoblog</a>
          </div>
      </div>
    </div>

    <div class="information-resources pt-3">
      <div class="articles-links py-2 py-lg-3 px-1 px-md-3">
          <a class="mb-3 mr-md-5 text-lg-right" href="https://soundcloud.com/pisot-n/sets/guias-con-amor" target="_blank"><img src="img/padres/elementos-39.png" alt="Nos emociona educar"></a>
          <a class="mb-5 text-lg-left" href="articles.php"><img src="img/padres/elementos-40.png" alt="Razones y corazones"></a>
      </div>
      <div class="images-to-color">
        <div class="info">
          <h2 class="pt-0 mb-3"> Colorea en familia</h2>
          <p class="mb-4">Conoce a los personajes de la divertida serie Las Aventuras de Ugo y Ema, y junto a tus hijos, colorea en casa</p>
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
    </div>
  </section>
  <section id="moreInfo" >
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
  <script src="js/parents.js"></script>
    <!--<script src="js/libs/jqueryValidate/jqueryvalidate.js"></script>-->
    <!--<script src="js/formhandler.js"></script>-->
</body>
</html>
