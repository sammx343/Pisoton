// Este script tiene código parcial del blog slider
// Si ves esto, no alcancé a mover y mejorar todo el desastre que estaba antes

const blogSlider = {
    // --- Muestra el artículo pedido o el artículo más reciente en el banner ----
    // El featured article es el artículo pedido (si es que se pidió) o el artículo más reciente
    // Si se pidió un artículo en concreto, se debe esperar el resultado de ambas promesas (todos los artículos y el artículo pedido)
    // ya que la respuesta es asincrona. No se asigna directamente el valor debido a que se debe estar seguro que el artículo pedido exista
    // Si no se pidió un artículo en concreto, asigna el artículo más reciente

    // Si este código cayó en tus manos, me disculpo de antemano, he intentado arreglar lo más posible del desastre 
    // que el pendejo que estaba antes que yo (Jesús Pión, presuntamente) hizo
    loadFeaturedArticlePromises(articleId, allArticlesPromise, customArticlePromise){
        if(articleId){
            Promise.all([allArticlesPromise, customArticlePromise]).then( values => {
                var allArticlesResponse = JSON.parse(values[0]); 
                var featuredArticleResponse = JSON.parse(values[1]); 
                
                if( featuredArticleResponse.exito == "1" && featuredArticleResponse.datos.length ){
                    var featuredArticle = featuredArticleResponse.datos[0];
                    this.showFeaturedArticleSection(featuredArticle);
                }else if( allArticlesResponse.exito == "1" && allArticlesResponse.datos.length ){
                    var featuredArticle = allArticlesResponse.datos[0];
                    this.showFeaturedArticleSection(featuredArticle);
                    $('#prueba').modal('show');
                    $("#mensaje").text("El artículo que solicitaste no existe o no se encuentra disponible");
                }else{
                    $('#prueba').modal('show');
                    $("#mensaje").text("Se produjo un error en la petición, Vuelva a intentarlo");
                }
            });
        }else{
            allArticlesPromise.then( responseJSON => {
                var response = JSON.parse(responseJSON);
                
                if(response.exito == "1" && response.datos.length){
                    var featuredArticle = response.datos[0];
                    this.showFeaturedArticleSection(featuredArticle);
                }else{
                    $('#prueba').modal('show');
                    $("#mensaje").text("Se produjo un error en la petición, Vuelva a intentarlo");
                }
            })
        }
    },
    showFeaturedArticleSection(article){
        $(".bottom .title").html(article['title']);
        $(".bottom .desc").html(article['description']);
        $(".bottom .author").html('Por: ' + article['author']);
        if(article['urlImage'] != null){
            $(".bottom .blogImageSliderBox img").attr('src','admin/uploads/' + article['urlImage']);
        }else{
            $(".bottom #blogImageSliderWrapper").css({'display':'none'});
        }
    },
    fixHeight(){
        setTimeout(() => {
            console.log('calls in here');
            containerHeight = ($(".blogSliderBox").height() + 40 + 1)*2 - 2;
            if($("#blogSliderWrapper").height() != containerHeight){
                $("#blogSliderWrapper").css({"height":containerHeight});
                this.fixHeight();
            }else{
                $(window).scrollTop(1);
            }

            //--- Método que viene desde el handler.js para colocar el número de páginas al elemento .page-counter
            initSliderPages();
        },500);
    }
}