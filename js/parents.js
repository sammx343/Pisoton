$(document).ready(function() {
    $.ajax({
        type: "POST",
        url: "https://comino.uninorte.edu.co/pisoton/admin/load_videoBlog.php",
        data:{filter:1},
        success: function(mensaje)
        {
            //alert(mensaje);
            var obj = JSON.parse(mensaje);
            htmlIframe = '';
            if(obj.exito == "1")
            {
              htmlIframe = '<iframe style="width:100%;height:100%" allowfullscreen src="'+obj.datos[0]['url'].replace('watch?v=', 'embed/')+"?autoplay=0&showinfo=0&controls=0&rel=0"+'" frameborder="0"></iframe>';
             $("#videoblog-frame").html(htmlIframe);
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

