<!DOCTYPE html>
<html>
<head>
    <script async src="https://www.googletagmanager.com/gtag/js?id=UA-137172068-1"></script>
    <script>
    window.dataLayer = window.dataLayer || [];
      function gtag(){dataLayer.push(arguments);}
      gtag('js', new Date());

      gtag('config', 'UA-137172068-1');
      gtag('event', 'home-niños');
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
    <link rel="stylesheet" href="css/childs.css">
    <link rel="stylesheet" href="css/game-panel.css">
    <link href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,900" rel="stylesheet">
</head>
<body>
  <div id="gamesLoader"></div>
  <section class="banner children-navbar">
    <div class="topnav parent" id="myTopnav">
      <a href="pisoton.html">Pisotón</a>
      <a href="padres.php" class="active">Padres</a>
      <a href="maestros.html">Maestros</a>
      <a href="index.php" >Las Aventuras de Ugo y Ema</a>
      <a href="javascript:void(0);" class="icon" onclick="menuClickParent()">&#9776;</a>
    </div>
    <navbar class="navbar-pisoton">
      <a href="index.php" class="nav-link adventures-link">
        <p> Las Aventuras de Ugo y Ema</p>
      </a>
      <a href="padres.php" class="nav-link parents-link">
        <p> Papá, mamá y cuidadores </p>
      </a>
      <a href="maestros.html" class="nav-link teachers-link">
        <p> Maestros, agentes educativos y tutores </p>
      </a>
      <a href="pisoton.html" class="nav-link pisoton-link"> 
        <p> Pisotón </p>
      </a>
    </navbar>
  </section>
  <section id="main">
    <h1 id="logo">
      <a href="index.php"></a>
    </h1>
    <div id="MainSubTitle">
      <img src="" />
    </div>
    <div id="backArrow">
      <img src="img/ninos/juegos-01.png" />
    </div>
    <article>
      <div id="bg-left"></div>
      <div id="bg-left_bottom"></div>
      <div id="bg-left_maxed"></div>
      <div id="bg-right"></div>
      <div id="bg-right_bottom"></div>
      <div id="bg-right_maxed"></div>
      <nav>
        <ul>
          <li id="games">
            <div class="navLiWrapper">
              <img src="img/ninos/juegos.png" alt="games"/>
            </div>
            <p>Juegos</p>
          </li>
          <li id="activities">
            <div class="navLiWrapper">
              <img src="img/ninos/actividades.png" alt="activities"/>
            </div>
            <p>Actividades</p>
          </li>
          <li id="songs">
            <div class="navLiWrapper">
              <img src="img/ninos/canciones.png" alt="songs"/>
            </div>
            <p>Canciones</p>
          </li>
          <li id="tv">
            <div class="navLiWrapper">
              <img src="img/ninos/series.png" alt="tv"/>
            </div>
            <p>Serie animada</p>
          </li>
        </ul>
      </nav>
      <div id="wrapperVideo">
        <div id="videoTagDiv">
          <iframe id="videoHome" frameborder='0' allowfullscreen style='width:100%;' src='https://www.youtube.com/embed/0yOZyn6LRJw'></iframe>\
        </div>
      </div>
    </article>
  </section>
  <section id="moreInfo">
    <div class="wrapper">
      <div class="otherPages otherPages pr-4 pr-md-0">
        <div class="page">
          <img class="bgOtherPages" src="img/ninos/home-09.png" alt="padres">
          <article class="pl-5 pl-md-0">
            <h2 class="mb-2"> Papá, mamá, cuidadores </h2>
            <p class="mb-3">
              Si quieres aprender más sobre el adecuado desarrollo de tus hijos y cómo ayudarles a crecer, haz click aquí. <a href="padres.php">Ver más...</a>
            </p>
          </article>
        </div>
        <div class="page">
          <article>
            <h2 class="mb-2"> Maestros, agentes educativos, tutores </h2>
            <p class="mb-3">
              Seguir aprendiendo es parte de su día a día, entra aquí y conoce más sobre el adecuado desarrollo psicoafectivo de los niños y niñas.  <a href="maestros.html">Ver más...</a>
            </p>
          </article>
          <img class="bgOtherPages" src="img/ninos/home-10.png" alt="maestros">
        </div>
      </div>
    </div>
    <div class="linkPisoton flex-row justify-content-center flex-wrap align-items-center">
      <img class="m-0 my-5 pr-lg-5 mr-md-5" src="img/ninos/pisoton-logo-white.png" alt="pisoton" width="250">
      <div class="pisoton-text text-center text-md-left">
        <p class="m-0 mb-4 mx-auto">
          Por más de dos décadas trabajamos incansablemente con, por y para la infancia. Entérate por qué y cómo lo hacemos ...
        </p>
        <a href="pisoton.html">haciendo click aquí</a>
      </div>
    </div>
  </section>
  <footer class="kid">
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
        <p>Suscríbete para recibir más información </p>
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
  <script src="js/libs/jquery/jquery.js"></script>
  <script src="js/libs/bootstrap/bootstrap.min.js"></script>
  <script src="js/mobileSelect.js"></script>
  <script src="js/handler.js"></script>
  <script src="js/gameQuestionController.js"></script>
    <!--<script src="js/libs/jqueryValidate/jqueryvalidate.js"></script>-->
    <!--<script src="js/formhandler.js"></script>-->
</body>
</html>
