var imOnActivity = false;
var backPage = '';
var arrayReasons = ['Un vínculo afectivo adecuado es aquella relación que se alimenta de expresiones afectivas como miradas tiernas, abrazos protectores, sonrisas cálidas, alimentación con entrega, y si esas manifestaciones se dan desde los primeros días, llenarán de confianza y seguridad a los niños, logrando fortalecer sus habilidades sociales para relacionarse con los otros.',
                    'Los niños pueden experimentar miedos, temores y ansiedad al momento de separarse de sus padres, por ejemplo cuando los dejan en el colegio, viajan o salen a trabajar. Es importante que los padres comprendan que los niños temen quedarse solos y que es clave la constancia con la que les demuestran que ellos siguen siendo objeto de su amor.',
                    'Límites claros con amor y sin temor. La educación con amor supone el establecimiento sano de límites para que los niños aprendan a ser autónomos y sean capaces de adaptarse a las normas sociales, lo que puede llevarlos a sentir frustración y rabia al entrar en conflicto con sus deseos, así como también un sentimiento ambivalente frente a sus figuras de amor.',
                    'Cuando el niño entra a interactuar con otros niños se da cuenta de que el mundo no le pertenece y siente una necesidad de control y defensa. Es importante que los niños aprendan a compartir y respetar los deseos del otro sin desconocer sus necesidades.',
                    'El impulso por conocer el mundo que los rodea hace que los niños desarrollen su iniciativa para explorarlo, los temores que puedan sentir frente a la realización de actividades nuevas, los límites de la auto-determinación que esto trae consigo y la identificación de las diferencias sexuales ayudan a consolidar su identidad.',
                    'Algunas experiencias durante el crecimiento de los niños les pueden ocasionar ciertos sentimientos de culpa, miedo y celos. Es importante que a través de la expresión de sus emociones, reconozcan sus temores, como por ejemplo a la oscuridad, monstruos y fantasmas, así como también, la fantasía que trae consigo la rivalidad fraterna cuando llega un nuevo hermano.',
                    'Los niños pueden experimentar situaciones donde la toma de decisiones está directamente relacionada con el reconocimiento de los límites y su desarrollo moral, reconocer su sentido de existir partiendo de la existencia del otro, les permite adaptarse de mejor manera a la realidad.',
                    'Me conozco, me quiero, te reconozco y admiro. Un individuo se forma según el respeto y el amor por sí mismo, pero también según el reconocimiento y la admiración por el otro. Es importante generar espacios para que los niños se conozcan, respeten, potencialicen y preocupen por sí mismos y por el otro, creando una buena auto estima y una admiración en la diferencia.']


$(document).ready(function(){
  if (location.protocol != 'https:')
  {
   location.href = 'https:' + window.location.href.substring(window.location.protocol.length);
  }
  var current = window.location.href;
  var isBanner = 0;
  var bannerType;
  if(current.indexOf('padres') != -1){
    bannerType = 3;
    filterArticles = 0;
    isBanner = 1;
  }else{
    if(current.indexOf('maestros') != -1){
      bannerType = 4;
      filterArticles = 1;
      isBanner = 1;
    }else{
      if(current.indexOf('pisoton') != -1){
        bannerType = 5;
        filterArticles = 2;
        isBanner = 1;
      }
      if(current.indexOf('razones_y_corazones') != -1){
        bannerType = 6;
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
              if(obj.datos[0]['isVideo'] == 0){
                $(".bannerImg").css({'background-image': "url('https://comino.uninorte.edu.co/pisoton/admin/uploads/"+ obj.datos[0]['urlImage']+"')"});
              }else{
                $("#banner iframe").attr('src',obj.datos[0]['link'].split("@")[0].replace('watch?v=', 'embed/')+"?autoplay=0&showinfo=0&controls=0&rel=0");
                $("#banner iframe").css({'display':'block'});
                $("#banner #overlay_back").css({'display':'none'});
                $("#banner .generalWrapper").css({'display':'none'});
                $(".bannerImg").css({'display':'none'});
              }
              $("#banner article h2").html(obj.datos[0]['title']);
              $("#banner article p").html(obj.datos[0]['description']);
              if (obj.datos[0]['link'].split("@").length > 1){
                if (obj.datos[0]['link'].split("@")[1] != ''){
                  $("#banner .articleLink").html("Ir al artículo...");
                  $("#banner .articleLink").attr('href','articles.php?f='+filterArticles+'&article=' + obj.datos[0]['link'].split("@")[1]);
                  $("#banner .articleLink").css({'display':'inline-block'});
                }
              }
            }
        },
        error : function (mensaje)
        {
            $('#myModal').modal('hide');
            $('#prueba').modal('show');
            $('#mensaje').text("Se produjo un error en la petición, Vuelva a intentarlo");
        }
    });
    $.ajax({
        type: "POST",
        url: "https://comino.uninorte.edu.co/pisoton/admin/load_articles.php",
        data:{filterArticles:filterArticles},
        success: function(mensaje)
        {
            //alert(mensaje);
            var obj = JSON.parse(mensaje);
            if(obj.exito == "1")
            {
              var htmlArticles = '';
              for (var i = 0; i < obj.datos.length; i++) {
                category = obj.datos[i]['tag'].split("@")[1];
                htmlArticles += '<article class="card"> \
                                  <p class="cardTitle">Artículo</p> \
                                  <p class="cardSubtitle">'+ category +'</p> \
                                  <p class="cardDescTitle"> '+ obj.datos[i]['title'] +'</p> \
                                  <div class="cardDesc">'+ obj.datos[i]['description'] +'</div> \
                                  <a href="articles.php?f='+filterArticles+'&article='+obj.datos[i]['idContent']+'">Ver más</a> \
                                </article>';
              }
              $(".opt_content").html(htmlArticles);
              if (obj.datos.length < 3){
                $(".opt_content").parent().parent().children("#wrapperSelectorArticle").css({'display':'none'});
              }else{
                if (obj.datos.length < 5){
                  $(".opt_content").parent().parent().children("#wrapperSelectorArticle").children("span#opt3").css({'display':'none'});
                }
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
    var type = 1;
    $.ajax({
        type: "POST",
        url: "https://comino.uninorte.edu.co/pisoton/admin/load_content.php",
        data:{type:type},
        success: function(mensaje)
        {
            var obj = JSON.parse(mensaje);
            if(obj.exito == "1")
            {
              var htmlActivities = '';
              for (var i = 0; i < obj.datos.length; i++) {
                addClass = '';
                imgUrl = 'actividades.png';
                if (i%2!==0) {
                  addClass = 'boxToRight';
                  imgUrl = 'juegos.png';
                }
                htmlActivities += "<div class='pdfBoxes "+addClass+"'> \
                                    <div class='wrapper-img'> \
                                      <img src='img/ninos/"+imgUrl+"'/> \
                                    </div> \
                                    <article> \
                                      <p class='boxUpperTitle'>Descargables</p> \
                                      <p>" + obj.datos[i]['title'] +"</p> \
                                      <input type='hidden' class='activityTitle' value='" +obj.datos[i]['title'] + "' /> \
                                      <input type='hidden' class='activityDesc' value='" +escape(obj.datos[i]['description']) + "' /> \
                                      <input type='hidden' class='activityImg' value='"+ obj.datos[i]['urlImage'] + "' /> \
                                      <input type='hidden' class='downloader' value='https://comino.uninorte.edu.co/pisoton/admin/uploads/"+ obj.datos[i]['urlPdf'] + "' /> \
                                      <a href='#'>Ver más</a> \
                                    </article> \
                                  </div>";
                //htmlActivities += "<div class='activitySliderBox'><p>"+ obj.datos[i]['title'] +"</p><div class='imgWrapper'>  <img src='https://comino.uninorte.edu.co/pisoton/admin/uploads/"+ obj.datos[i]['urlImage'] +"'/></div><div class='desc'>"+ obj.datos[i]['description'] +"</div><input type='hidden' class='downloader' value='https://comino.uninorte.edu.co/pisoton/admin/uploads/"+ obj.datos[i]['urlPdf'] + "' /></div>";
              }
              $('#downloaderSlider .sliderContent').html(htmlActivities);
              setTimeout(function(){
                totalChildrenDownloaderSlider = $("#downloader .sliderContent .pdfBoxes").length;
                totalPagesDownloaderSlider = Math.floor(totalChildrenDownloaderSlider/3);
                if (totalPagesDownloaderSlider - totalChildrenDownloaderSlider/3 == 0){
                  totalPagesDownloaderSlider--;
                }
                if(totalPagesDownloaderSlider == 0){
                  $('#downloader .arrowRight').css({'display':'none'});
                }
              },1000);

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
    if(bannerType == 3){
      $.ajax({
          type: "POST",
          url: "https://comino.uninorte.edu.co/pisoton/admin/load_audios.php",
          data:{filter:1},
          success: function(mensaje)
          {
              //alert(mensaje);
              var obj = JSON.parse(mensaje);
              if(obj.exito == "1")
              {
                var htmlAudios = '';
                for (var i = 0; i < obj.datos.length; i++) {
                  htmlAudios += '<li id="'+obj.datos[i]['url']+'">'+obj.datos[i]['title']+'</li>';
                }
                $(".moreAudio ul").html(htmlAudios);
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
    if(bannerType == 5){
      $.ajax({
          type: "POST",
          url: "https://comino.uninorte.edu.co/pisoton/admin/load_history.php",
          data:{filter:'all'},
          success: function(mensaje)
          {
              //alert(mensaje);
              var obj = JSON.parse(mensaje);
              if(obj.exito == "1")
              {
                var htmlHistorias = '';
                for (var i = 0; i < obj.datos.length; i++) {

                  htmlHistorias += '<div class="card" style="background-image:url(admin/uploads/'+ obj.datos[i]['urlImage'] +')"> \
                                      <div class="background_overlay"></div> \
                                      <article> \
                                        <!--<p class="cardSubtitle">'+ obj.datos[i]['title'] +'</p>--> \
                                        <p class="cardDescTitle"> '+ obj.datos[i]['title'] +'</p> \
                                        <a href="histories.php?f=2&history='+obj.datos[i]['idHistorias']+'">Ver más</a> \
                                      </article> \
                                    </div>'
                }
                $("#team .sliderContent").html(htmlHistorias);

                setTimeout(function(){
                  totalChildrenTeamSlider = $("#team .sliderContent .card").length;
                  totalPagesTeamSlider = Math.floor(totalChildrenTeamSlider/3);
                  if (totalPagesTeamSlider - totalChildrenTeamSlider/3 == 0){
                    totalPagesTeamSlider--;
                  }
                  if(totalPagesTeamSlider == 0){
                    $('#team .arrowRight').css({'display':'none'});
                  }
                },1000);
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
    if(bannerType == 6){
      htmlReasons = '';
      for (var i = 0; i < arrayReasons.length; i++) {
        htmlReasons += '<article class="card"> \
                          <p class="cardDescTitle"> Razón No. '+ (i + 1) +'</p> \
                          <p class="cardDesc">'+ arrayReasons[i] +'</p> \
                          <a href="reasons.php?f=2&reason='+i+'" class="btn-pisoton my-2">Ver más</a> \
                        </article>'
      }
      $('.opt_content_reasons').html(htmlReasons);
    }
  }
  $('#downloaderSlider .sliderContent').on('click', '.pdfBoxes a',function(event){
    event.preventDefault();
    var title = $(this).parent().children('.activityTitle').val();
    var desc = unescape($(this).parent().children('.activityDesc').val());
    var src = '';
    if($(this).parent().children('.activityImg').val() != 'null'){
      var src = "https://comino.uninorte.edu.co/pisoton/admin/uploads/" + $(this).parent().children('.activityImg').val();
    }
    var srcPdf = $(this).parent().children('.downloader').val();
    if (srcPdf.indexOf('null') != -1){
      srcPdf = "https://comino.uninorte.edu.co/pisoton/admin/uploads/" + src;
    }
    $("#activityModal .modal-body").html("<div id='activitiesWrapperDetails'>\
                              <div id='act01'>\
                                <p class='title'>"+ title +"</p>\
                                <div class='activityPdfBoxes'> \
                                  <img src='"+ src +"'/>\
                                  <div class='desc'>\
                                    "+ desc +"\
                                  </div>\
                                </div> \
                                <a href='"+ srcPdf +"' download class='btn'>Descargar</a>\
                              </div>\
                            </div> ");
    $('#activityModal').modal('show');
    gtag('event', 'niños/actividades');
  });

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
    $('#main nav ul li').removeClass('active');
    $('#main h1').css({"display":"none"});
    $('#moreInfo').css({"display":"none"});
    $('#main #MainSubTitle').css({"display":"block"});
    $('#main #backArrow').css({"display":"block"});
    idClick = $(this).attr('id');
    $(this).addClass('active');
    imOnActivity = false;
    var audio = $('<audio />', {
       autoPlay : 'autoplay'
     });
    if(idClick == 'games'){
      $('#main #MainSubTitle img').attr("src","img/ninos/juegos-05.png");
      $("#videoTagDiv").html("<div id='gamesWrapper'>\
                                    <div id='game01'>\
                                      <img src='img/ninos/REF_1.png'/>\
                                      <span>Cómo me siento</span>\
                                    </div>\
                                    <div id='game02'>\
                                      <img src='img/ninos/REF_2.png'/>\
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
      gtag('event', 'niños/juegos');
    }
    if(idClick == 'activities'){
      $('#main #MainSubTitle img').attr("src","img/ninos/juegos-04.png");
      var type = 1;
      $.ajax({
          type: "POST",
          url: "https://comino.uninorte.edu.co/pisoton/admin/load_content.php",
          data:{type:type},
          success: function(mensaje)
          {
              var obj = JSON.parse(mensaje);
              if(obj.exito == "1")
              {
                //$('#prueba').modal('show');
                //$('#mensaje').text("Registrado correctamente.");
                //$('#all_contents').load('content_information.php #all_contents');
                //Actualizar llos datos de la tabla
                //var htmlActivityBanner = "<div id='activityBanner'><img src='https://comino.uninorte.edu.co/pisoton/admin/uploads/"+ obj.datos[0]['urlImage'] +"'/><article><p class='title'>"+ obj.datos[0]['title'] +"</p><div class='desc'>"+ obj.datos[0]['description'] +"</div></article></div>";
                var htmlActivities = '';
                for (var i = 0; i < obj.datos.length; i++) {
                  htmlActivities += "<div class='activitySliderBox'><p>"+ obj.datos[i]['title'] +"</p><div class='imgWrapper'>  <img src='https://comino.uninorte.edu.co/pisoton/admin/uploads/"+ obj.datos[i]['urlImage'] +"'/></div><div class='desc'><div>"+ obj.datos[i]['description'] +"</div></div><input type='hidden' class='downloader' value='https://comino.uninorte.edu.co/pisoton/admin/uploads/"+ obj.datos[i]['urlPdf'] + "' /></div>";
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
                addSource(audio, 'audio/MCactividades.mp3');
                gtag('event', 'niños/actividades');
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
      $('#main #MainSubTitle img').attr("src","img/ninos/juegos-03.png");
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
                                      <p>"+ obj.datos[i]['title'] +"</p>\
                                      <div class='imgWrapper'>\
                                        <iframe frameborder='0' allowfullscreen style='width:100%;height:100%' src='"+obj.datos[i]['url'].replace("watch?v=", "embed/")+"'></iframe>\
                                      </div>\
                                      <div class='desc'>\
                                        "+ obj.datos[i]['description'] +"\
                                      </div>\
                                      <input type='hidden' class='url' value='"+ obj.datos[i]['url'] +"'>\
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
                gtag('event', 'niños/canciones');
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
      $('#main #MainSubTitle img').attr("src","img/ninos/juegos-02.png");
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
                gtag('event', 'niños/serie');
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

  $('#main #backArrow img').click(function(){
    if(imOnActivity){
      imOnActivity = false;
      idClick = 'activities';
      $('#main nav ul li#activities').click();
    }else{
      $('#main h1').css({"display":"block"});
      $('#moreInfo').css({"display":"block"});
      $('#main nav ul li').removeClass('active');
      $('#main #MainSubTitle').css({"display":"none"});
      $('#main #backArrow').css({"display":"none"});
      $("#bg-left_bottom").css({"display":"none"});
      $("#bg-right_bottom").css({"display":"none"});
      $("#bg-right_maxed").css({"display":"block"});
      $("#bg-left_maxed").css({"display":"block"});
      $("#videoTagDiv").css({"border":"10px solid #FFF","width":"700px"});
      $("#bg-left").removeClass("long");
      $("#bg-right").removeClass("long");
      $("#videoTagDiv").html('<iframe id="videoHome" frameborder="0" allowfullscreen style="width:100%;" src="https://www.youtube.com/embed/Z2uKbfWNJAw?autoplay=0&showinfo=0&controls=1&rel=0"></iframe>');
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
    var audio = $('<audio />', {
       autoPlay : 'autoplay'
     });
    switch (idGame) {
      case 'game01':
        $("#videoTagDiv").css({"border":"none"});
        $("#gamesLoader").html("<div id='game01'>\
                                    <iframe style='width:"+width+"px;height:"+height+"px' class='gameFrame' src='https://comino.uninorte.edu.co/pisoton/games/ComoMeSiento/index.html'></iframe>\
                                    <img id='closeGame' style='top:"+top+"px !important;left:"+left+"px !important' src='img/ninos/closeGame.png'/>\
                                    <div class='game-question-modal'>\
                                      <div class='game-video-question'>\
                                        <p class='bg-primary' id='linkVideoRef'>Ir al video</p> \
                                        <p class='bg-success' id='closeVideoPanel'>Seguir Jugando</p> \
                                      </div> \
                                    </div>\
                                  </div>");
        $("#gamesLoader").css({"display":"block"});
        $("body").css({"overflow":"hidden"});
        addSource(audio, 'audio/antes_de_jugar.wav');
        gtag('event', 'niños/juegos/Como Me Siento');
        break;
      case 'game02':
        $("#videoTagDiv").css({"border":"none"});
        $("#gamesLoader").html("<div id='game02'>\
                                    <iframe style='width:"+width+"px;height:"+height+"px' class='gameFrame' src='https://comino.uninorte.edu.co/pisoton/games/GranTesoro/index.html'></iframe>\
                                    <img id='closeGame' style='top:"+top+"px !important;left:"+left+"px !important' src='img/ninos/closeGame.png'/>\
                                  </div>");
        $("#gamesLoader").css({"display":"block"});
        $("body").css({"overflow":"hidden"});
        gtag('event', 'niños/juegos/Gran Tesoro');
          break;
      default:
        break;
    }
  });

  $("#gamesLoader").on('click','#linkVideoRef',function(event){
    $("#gamesLoader").html();
    $("#gamesLoader").css({"display":"none"});
    $("body").css({"overflow":"auto"});
    $('#main nav ul li#tv').click();
  });

  $("#gamesLoader").on('click','#closeGame',function(event){
    $("#gamesLoader").html();
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
      var title = $(this).children("p:first-child").html();
      var desc = $(this).children(".desc").html();
      var src = $(this).children('.imgWrapper').children("img").attr('src');
      var srcPdf = $(this).children('.downloader').val();
      if (srcPdf.indexOf('null') != -1){
        srcPdf = src;
      }
      imOnActivity = true;
      backPage = "activities";

      $("#videoTagDiv").html("<div id='activitiesWrapperDetails'>\
                                <div id='act01'>\
                                  <p class='title'>"+ title +"</p>\
                                  <img src='"+ src +"'/>\
                                  <div class='desc'>\
                                    "+ desc +"\
                                  </div>\
                                  <a href='"+ srcPdf +"' download class='btn'>Descargar</a>\
                                </div>\
                              </div> ")
    }else{
      if(idClick == "songs" || idClick == "tv"){
        headTitle = 'Serie';
        if (idClick == "songs"){
          headTitle = 'Canción';
        }
        var title = $(this).children("p:first-child").html();
        var desc = $(this).children(".desc").html();
        $("#activityModal .modal-title").html(headTitle);
        $("#activityModal .modal-body").html("<div id='activitiesWrapperDetails'>\
                                  <div id='act01'>\
                                    <p class='title'>"+ title +"</p>\
                                    <div class='desc'>\
                                      "+ desc +"\
                                    </div>\
                                  </div>\
                                </div> ");
        $('body').css({'overflow':'hidden'});
        $('#activityModal').modal('show');
      }
    }

  });

  $('#newsFormRegister').click(function(){
    $("#activityModal .modal-title").html('¡Hola, queremos que hagas parte de la Comunidad Pisotón!');
    $("#activityModal .modal-body").html('<form id="formNews" method="post" action=""> \
                                          <input type="text" id="formNews_name" name="name" placeholder="* Nombre" required/> \
                                          <input type="email" id="formNews_email" name="email" placeholder="* E-mail" value="'+ $("#newsFormEmail").val() +'" required/> \
                                          <button  class="btn btn-primary" type="submit" id="submitted" name="submitted">Enviar</button> \
                                        </form>');
    $('body').css({'overflow':'hidden'});
    $('#activityModal').modal('show');
    gtag('event', 'Newsletter');
  });

  $('#activityModal').on('click','#submitted', function (event) {
    event.preventDefault();
    var name = $("#formNews_name").val();
    var email = $("#formNews_email").val();
    var formData = new FormData();
    formData.append('name', name);
    formData.append('email', email);
    $.ajax({
        type: "POST",
        url: "https://comino.uninorte.edu.co/pisoton/admin/register.php",
        processData: false,
        contentType: false,
        data:formData,
        success: function(mensaje)
        {
            var obj = JSON.parse(mensaje);
            if(obj.exito == "1")
            {
              $("#formNews_name").val('');
              $("#formNews_email").val('');
              $("#activityModal .modal-title").html('¡Hola, ' + obj.nombre + '!');
              $("#activityModal .modal-body").html("Felicitaciones te has inscrito en la comunidad Pisotón satisfactoriamente");
            }
        },
        error : function (mensaje)
        {
            $('#myModal').modal('hide');
            $('#prueba').modal('show');
            $('#mensaje').text("Se produjo un error en la petición, Vuelva a intentarlo");
        }
    });
  })

  $('#activityModal').on('hidden.bs.modal', function () {
    $('body').css({'overflow':'unset'});
  })
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
  var totalChildrenTeamSlider = 0;
  var totalPagesTeamSlider = 0;
  //this is calculate on load function above

  var ActivePageCronologySlider = 0;
  var dotPositionTimelineIndex = 0;
  var dotPositionTimeline = [5,22.58,40.16,46.02,51.88,57.74,61.3,64.86,68.42,71.98,75.54,77.298,79.056,80.814,82.572,84.33,86.088,87.846,89.604,91.362,93.12];
  var totalChildrenCronologySlider = $("#cronology .sliderContent .cronologyItem").length;
  var totalPagesCronologySlider = Math.floor(totalChildrenCronologySlider);
  if (totalPagesCronologySlider - totalChildrenCronologySlider == 0){
    totalPagesCronologySlider--;
  }
  if(totalPagesCronologySlider == 0){
    $('#cronology .arrowRight').css({'display':'none'});
  }
  //var widthImgCronology = $("#cronology .sliderContent .cronologyItem").eq(ActivePageCronologySlider).children("img").width();
  //$('#cronology .arrowLeft').css({'right':(widthImgCronology + 30) + "px"});
  var ActivePageDownloaderSlider = 0;
  var totalChildrenDownloaderSlider = 0;
  var totalPagesDownloaderSlider = 0;
  //this is calculate on load function above
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
          dotPositionTimelineIndex++;
          var newLeftDot = dotPositionTimeline[dotPositionTimelineIndex]*$('#timeline').width()/100;
          $('#timeline #dotImg').animate({
                left: newLeftDot
          }, 1000, 'swing', function() {
            //alert("ok");
          });
          //var widthImgCronology = $("#cronology .sliderContent .cronologyItem").eq(Math.abs(ActivePageCronologySlider)).children("img").width();
          //$('#cronology .arrowLeft').css({'right':(widthImgCronology - 30) + "px"});
        }else{
          if ($(this).parent().attr('id') == 'downloader'){
            ActivePageDownloaderSlider--;
            var newLeft =   ActivePageDownloaderSlider*($(this).siblings(".pisoton_slider").children('.sliderContent').width() + 5);
            if(Math.abs(ActivePageDownloaderSlider) == totalPagesDownloaderSlider){
              $(this).css({'display':'none'});
            }
          }
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
          dotPositionTimelineIndex--;
          var newLeftDot = dotPositionTimeline[dotPositionTimelineIndex]*$('#timeline').width()/100;
          $('#timeline #dotImg').animate({
                left: newLeftDot
          }, 1000, 'swing', function() {
            //alert("ok");
          });
          //var widthImgCronology = $("#cronology .sliderContent .cronologyItem").eq(Math.abs(ActivePageCronologySlider)).children("img").width();
          //$('#cronology .arrowLeft').css({'right':(widthImgCronology - 30) + "px"});
        }else{
          if ($(this).parent().attr('id') == 'downloader'){
            ActivePageDownloaderSlider++;
            var newLeft =   ActivePageDownloaderSlider*($(this).siblings(".pisoton_slider").children('.sliderContent').width() + 5);
            if(ActivePageDownloaderSlider == 0){
              $(this).css({'display':'none'});
            }
          }
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
      if($('#downloader').length){
        var visible = isElementInViewport($('#downloader'));
        if(visible){
          $('.subMenu a').removeClass('active');
          $('.subMenu a#refDownloader').addClass('active');
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
      if($('#formPis').length){
        var visible = isElementInViewport($('#formPis'));
        if(visible){
          $('.subMenu a').removeClass('active');
          $('.subMenu a#refFormPis').addClass('active');
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
      if($('#videos').length){
        var visible = isElementInViewport($('#videos'));
        if(visible){
          $('.subMenu a').removeClass('active');
          $('.subMenu a#refVideos').addClass('active');
        }
      }
      if($('#teamAndFriends').length){
        var visible = isElementInViewport($('#teamAndFriends'));
        if(visible){
          $('.subMenu a').removeClass('active');
          $('.subMenu a#refTeamAndFriends').addClass('active');
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
  $('#audioGuide a').click(function(){
    $(".moreAudio").toggle( 'slow', function(){
      //$(".log").text('Toggle Transition Complete');
    });
    //$('.moreAudio').css({'display':'inline-block'});
    return false;
  });

  $('.moreAudio').on('click','li',function(){
    id = $(this).attr('id');
    $('.player audio').unbind();
    $('#playtoggle').unbind();
    $('.player audio').bind('load',function(){
      loadAudio(1);
    });
    $('.player audio source').attr('src',"admin/uploads/audios/" + id);
    $('.player audio').load();
    $('.moreAudio').css({'display':'none'});
  });
  loadAudio(0);

});
audioVolumen = 0.7;
function loadAudio(changeSource){
  $("#playtoggle").removeClass('playing');
  var audio = $('.player audio').get(0);
  loadingIndicator = $('.player #loading');
  gutterIndicator = $('.player #gutter');
  positionIndicator = $('.player #handle');
  positionIndicator.css({left: 0 + '%'});
  loadingIndicator.css({width: 0 + '%'});
  volumeIndicator = $('.player #loadingVolume');
  volumeIndicator.css({width: audioVolumen*100 + '%'});
  timeleft = $('.player #timeleft');
  $(audio).on("canplay", function () {
    var rem = parseInt(audio.duration - audio.currentTime, 10),
    pos = (audio.currentTime / audio.duration) * 100,
    mins = Math.floor(rem/60,10),
    secs = rem - mins*60;
    timeleft.text('-' + mins + ':' + (secs > 9 ? secs : '0' + secs));
  });
  manualSeek = false;
  loaded = false;


  $('.player audio').bind('timeupdate', function() {
    if(changeSource == 0 || loaded){
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
          value: audioVolumen,
          step: 0.01,
          orientation: "horizontal",
          range: "min",
          max: 1,
          animate: true,
          stop:function(e,ui) {
            volumeIndicator.css({width: ui.value*100 + '%'});
            audio.volume = ui.value;
            audioVolumen = ui.value;
          }
        });
      }
    }else{
      changeSource = 0;
    }
  });

  $('.player audio').bind('play',function() {
    $("#playtoggle").addClass('playing');
  });
  $('.player audio').bind('pause ended', function() {
    $("#playtoggle").removeClass('playing');
  });

  $("#playtoggle").click(function() {
    if (audio.paused) {
      audio.play();
    }else {
      audio.pause();
    }
  });
}

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
  if($('#myTopnav').hasClass('responsive')){
    $('#myTopnav').removeClass('responsive');
  }else{
    $('#myTopnav').addClass('responsive');
  }
  //if (x.className === "topnav parent") {
  //     x.className += " responsive";
  // } else {
  //     x.className = "topnav parent";
  // }
}
