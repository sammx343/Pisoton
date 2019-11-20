$(document).ready(function() {
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
                var storyHtml = ''
                $('.stories .feature-story').html(createStoryHtml(obj.datos[0], true));
                
                storyHtml += createStoryHtml(obj.datos[1], false);
                storyHtml += createStoryHtml(obj.datos[2], false);

                $(".stories .old-stories").html(storyHtml);
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

    function createStoryHtml(story, isFeatured){
        const featured = isFeatured? '<h4>Historia Destacada</h4>' : '';
        return `<div class='story'>
                    <a href="histories.php?f=2&history=${story['idHistorias']}" class='profile-image' style='background-image:url(admin/uploads/${story['urlImage']})'>
                    </a>
                    <div class='information'>
                        ${featured}
                        <h3 class='title'>${story['title']}</h3>
                        <!--<p class='description'>${story['title']}</p>-->
                        <a href="histories.php?f=2&history=${story['idHistorias']}" class='btn-pisoton'> Ir al Artículo...</a>
                    </div>\
                </div>`
    }
});
