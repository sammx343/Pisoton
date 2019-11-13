<?php
  session_start();
  if( !isset($_SESSION['authorized']) ) header('Location: login.php');
  //require('lib/config.php');
  //ELIMINAR USUARIO
  require('lib/config.php');
  if( isset($_GET['content-delete']) )
  {
      $condition = "";
      if(isset($_GET['song']))
      {
          $user = $_GET['song'];
          foreach ($user as $color)
          {
              $condition.= "idCanciones=$color or ";
              //echo $color."<br />";
          }
          $condition.= "idCanciones=-1";

          $connection = mysql_connect($db_host,$db_user,$db_password);
          mysql_select_db($db_schema,$connection);
          mysql_set_charset('utf8',$connection);

          $query = "DELETE FROM Pis_canciones WHERE $condition";
          $result = mysql_query($query,$connection);
          if($result)
          {
            ?>
              <p class="bg-success text-center">El(Los) contenido(s) ha(n) sido eliminado(s)</p>
              <?php
            }
          else
          {
              ?>
                <p class="bg-danger text-center">Upss ha ocurrido el siguiente error: <?php echo mysql_error($connection); ?></p>
              <?php
          }
          mysql_close($connection);
      }
      else
      {
        ?>
          <p class="bg-danger text-center">No has seleccionado un contenido</p>
        <?php
      }
  }
?>

<!DOCTYPE html>
<html lang="en">

<head>

    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <meta name="description" content="">
    <meta name="author" content="">

    <title>Menú Administrativo</title>

    <!-- Bootstrap Core CSS -->
    <link href="vendor/bootstrap/css/bootstrap.min.css" rel="stylesheet">
    <link href="vendor/bootstrap/css/bootstrap3-wysihtml5.css" rel="stylesheet">

    <!-- MetisMenu CSS -->
    <link href="vendor/metisMenu/metisMenu.min.css" rel="stylesheet">

    <!-- Custom CSS -->
    <link href="dist/css/sb-admin-2.css" rel="stylesheet">

    <!-- Custom Fonts -->
    <link href="vendor/font-awesome/css/font-awesome.min.css" rel="stylesheet" type="text/css">

    <link href="dist/css/estilo_admin.css" rel="stylesheet" type="text/css"/>

    <link rel="stylesheet" type="text/css" href="https://cdn.datatables.net/1.10.13/css/jquery.dataTables.min.css">


    <!-- HTML5 Shim and Respond.js IE8 support of HTML5 elements and media queries -->
    <!-- WARNING: Respond.js doesn't work if you view the page via file:// -->
    <!--[if lt IE 9]>
        <script src="https://oss.maxcdn.com/libs/html5shiv/3.7.0/html5shiv.js"></script>
        <script src="https://oss.maxcdn.com/libs/respond.js/1.4.2/respond.min.js"></script>
    <![endif]-->

</head>

<body>

    <div id="wrapper">

        <!-- Navigation -->
        <?php include'menu_navegacion.php'; ?>

        <!-- Page Content -->
        <div id="page-wrapper">
            <div class="container-fluid">
                <div class="row">

                    <div class="col-lg-12">
                        <h1 class="page-header">
                          <h1 class="page-header">Canciones</h1>
                        </h1>
                    </div>
                    <!-- /.col-lg-12 -->
                </div>
                <!-- /.row -->
            </div>
            <div class="container-fluid">
                <div class="row">
                    <div class="col-lg-12">
                         <ul class="nav nav-tabs" role="tablist">
                            <li role="presentation" class="active"><a href="#add_content" aria-controls="add_content" role="tab" data-toggle="tab">Agregar Canción</a></li>
                            <li role="presentation"><a href="#all_contents" aria-controls="all_contents" role="tab" data-toggle="tab">Todas las canciones</a></li>
                          </ul>


                          <div class="tab-content">
                            <div role="tabpanel" class="tab-pane active" id="add_content">
                                <div>
                                    <div class="margenes">
                                        <p>(*) Campos obligatorios</p>
                                        <div class="form-group">
                                            <label for="add_title">Título (*)</label>
                                            <input type="text" class="form-control" placeholder="Título" aria-describedby="basic-addon1" autocomplete="off" id="add_title" autofocus>
                                        </div>
                                        <div class ="image-upload">
                                          <label for="exampleInputEmail1">Imágen</label>
                                          <p class="infoEjemplo">La imagen que adjunte debe estar en formato .JPG o .PNG, recomendado(?px × ?px)</p>

                                          <input type="file" class="hide" name="image" id="image" class="fileupload" onchange="fileSelected(this);" accept="image/*"/>
                                          <a href="#" id="triggerFile" class="btn btn-primary"><img src="img/camera.png"><span id="fileText"></span></a>
                                          <?php
                                            echo "<img id='preview1' src=''></img>";
                                          ?>
                                        </div>
                                        <div class="form-group">
                                            <label for="add_description">Descripción</label>
                                            <textarea class="form-control" rows="10" placeholder="Breve descripción" aria-describedby="basic-addon1" id="add_description" autocomplete="off"></textarea>
                                        </div>
                                        <div class="form-group">
                                          <label for="add_url">Url (*)</label>
                                          <input type="text" class="form-control" placeholder="http://example.com" aria-describedby="basic-addon1" id="add_url" autocomplete="off" >
                                        </div>
                                        <div class="btnestilOferta">
                                            <a class="btn btn-success" id="add-content" data-toggle="tab" >Agregar Contenido</a>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div role="tabpanel" class="tab-pane" id="all_contents">
                                <div class="margenes">
                                    <?php
                                        require('lib/config.php');
                                        $connection = mysql_connect($db_host,$db_user,$db_password);
                                        mysql_select_db($db_schema,$connection);
                                        mysql_set_charset('utf8',$connection);


                                        $query = "SELECT * FROM Pis_canciones";

                                        $result = mysql_query($query,$connection);
                                        $num_rows = mysql_num_rows($result);
                                        if($num_rows > 0)
                                        {
                                    ?>
                                    <form method="get" enctype="application/x-www-form-urlencoded" name="products-list-form" id="products-list-form">
                                    <input class="btn btn-danger" type="submit" name="content-delete" id="content-delete" value="Eliminar">
                                    <div class="table-responsive" style="margin-top:40px;">
                                        <table class="table" id="table_all_contents">
                                            <thead>
                                                <tr>
                                                  <th data-sort="string" class="text-center">Eliminar</th>
                                                  <th data-sort="string" class="text-center">Editar</th>
                                                  <th data-sort="string" class="text-center">Título</th>
                                                  <th data-sort="string" class="text-center">Imágen</th>
                                                  <th data-sort="string" class="text-center">Descripcíón</th>
                                                  <th data-sort="string" class="text-center">Url</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                            <?php
                                              while( $row = mysql_fetch_array($result) )
                                              {
                                            ?>
                                              <tr class="item_list">
                                                <td class="text-center idCheck" id="<?php echo $row['idCanciones']; ?>"><input type="checkbox" name="song[]" id="song[]" value="<?php echo $row['idCanciones']; ?>" /></td>
                                                <td class="text-center edit-entry"><img src="img/edit.png" width="20" height="20" /></td>
                                                <td class="text-left edit-title"><?php echo $row['title']; ?></td>
                                                <td class="text-left edit-image"><?php echo "<img src='uploads/".$row['urlImage']."' width='50px'/>"; ?></td>
                                                <td class="text-left edit-description"><div><?php echo $row['description']; ?></div></td>
                                                <td class="text-center edit-url"><?php echo $row['url']; ?></td>
                                              </tr>
                                            <?php
                                              }
                                            ?>
                                            </tbody>
                                        </table>
                                    </div>
                                    <?php
                                        }
                                          mysql_close($connection);
                                    ?>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div class="modal fade" id="myModal" tabindex="-1" role="dialog" aria-labelledby="myModalLabel" aria-hidden="true">
              <div class="modal-dialog">
                <div class="modal-content">
                  <div class="modal-header">
                    <h4 class="modal-title" id="myModalLabel"><i class="fa fa-clock-o"></i> Por favor espere</h4>
                  </div>
                  <div class="modal-body center-block">
                    <p>Registrando contenido en la Bases de datos</p>
                    <div class="progress progress-striped active" style="margin-bottom:0;"><div class="progress-bar" style="width: 100%"></div></div>
                    <!--<div class="progress">
                      <div class="progress-bar bar" role="progressbar" aria-valuenow="0" aria-valuemin="0" aria-valuemax="100">

                      </div>
                    </div>-->
                  </div>
                </div><!-- /.modal-content -->
              </div><!-- /.modal-dialog -->
            </div><!-- /.modal -->

            <div class="modal fade" id="editContentModal" tabindex="-1" role="dialog" aria-labelledby="mySmallModalLabel" aria-hidden="true">
                <div class="modal-dialog modal-sm" role="document">
                  <div class="modal-content">
                    <div class="modal-header">
                      <button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>
                      <h4 class="modal-title" id="exampleModalLabel">Edición Contenido </h4>
                    </div>
                    <div class="modal-body">

                    </div>
                  </div>
                </div>
            </div>

            <div class="modal fade bs-example-modal-sm" tabindex="-1" id="prueba" role="dialog" aria-labelledby="mySmallModalLabel">
                <div class="modal-dialog modal-sm" role="document">
                    <div class="modal-content">
                        <div class="modal-header">
                            <button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>
                            <h4 class="modal-title" id="gridSystemModalLabel">Mensaje</h4>
                        </div>
                        <div class="modal-body">
                            <label for="recipient-name" class="control-label" id="mensaje"></label>
                        </div>
                    </div>
                </div>
            </div>

            <!-- /.container-fluid -->
        </div>
        <!-- /#page-wrapper -->

    </div>
    <!-- /#wrapper -->

    <!-- jQuery -->
    <script src="vendor/jquery/jquery.min.js"></script>

    <!-- Bootstrap Core JavaScript -->
    <script src="vendor/bootstrap/js/bootstrap.min.js"></script>
    <script src="vendor/bootstrap/js/bootstrap3-wysihtml5.js"></script>

    <!-- Metis Menu Plugin JavaScript -->
    <script src="vendor/metisMenu/metisMenu.min.js"></script>

    <!-- Custom Theme JavaScript -->
    <script src="dist/js/sb-admin-2.js"></script>
    <script src="https://cdn.datatables.net/1.10.13/js/jquery.dataTables.min.js"></script>

    <script type="text/javascript">
        var idEntry;
         $('#table_all_contents').DataTable({
            "language": {
              "url": "//cdn.datatables.net/plug-ins/9dcbecd42ad/i18n/Spanish.json",
            }
        });
        
        $("#add-content").click(function()
        {
          if ($("#add_title").val() != '' != '' && $("#add_description").val() != '' && $("#add_url").val() != '')
          {
              $('#myModal').modal('show');
              var title = $("#add_title").val();
              var description = $("#add_description").val();
              var url = $("#add_url").val();
              var fileInput = document.getElementById('image');
              var image = fileInput.files[0];
              var formData = new FormData();
              formData.append('image', image);
              formData.append('description', description);
              formData.append('title', title);
              formData.append('url', url);
              $.ajax({
                  type: "POST",
                  url: "register_song.php",
                  processData: false,
                  contentType: false,
                  data:formData,
                    success: function(mensaje)
                    {
                        //alert(mensaje);
                        var obj = JSON.parse(mensaje);

                        $('#myModal').modal('hide');
                        if(obj.exito == "1")
                        {
                            //SE AGREGO COREECTAMENTE
                            localStorage.setItem("registrado", true);
                            location.reload(true);
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
            else
            {
                $('#prueba').modal('show');
                $('#mensaje').text("Ingrese todos los datos para poder continuar.");
            }
        });

        $("#editContentModal").on( "click", "#edit-content", function() {
          $('#editContentModal').modal('hide');
            if ($("#edit_title").val() != '' && $("#edit_urlImage").val() != ''&& $("#edit_description").val() != '' && $("#edit_url").val() != '')
            {
                $('#myModal').modal('show');
                var title = $("#edit_title").val();
                var description = $("#edit_description").val();
                var url = $("#edit_url").val();
                var fileInput = document.getElementById('edit-image');
                var image = fileInput.files[0];
                var formData = new FormData();
                formData.append('image', image);
                formData.append('idCanciones', idEntry);
                formData.append('description', description);
                formData.append('title', title);
                formData.append('url', url);
                  $.ajax({
                    type: "POST",
                    url: "register_song.php",
                    processData: false,
                    contentType: false,
                    data:formData,
                    success: function(mensaje)
                    {
                        //alert(mensaje);
                        var obj = JSON.parse(mensaje);

                        $('#myModal').modal('hide');
                        if(obj.exito == "1")
                        {
                          $('#prueba').modal('show');
                          $('#mensaje').text("Registrado correctamente.");
                          //$('#all_contents').load('content_information.php #all_contents');
                          //Actualizar llos datos de la tabla
                          $("#"+obj.datos[':idCanciones']).siblings(".edit-title").html(obj.datos[':title']);
                          $("#"+obj.datos[':idCanciones']).siblings(".edit-urlImage").html(obj.datos[':urlImage']);
                          $("#"+obj.datos[':idCanciones']).siblings(".edit-description").html(obj.datos[':description']);
                          $("#"+obj.datos[':idCanciones']).siblings(".edit-url").html(obj.datos[':url']);
                          $("#"+obj.datos[':idCanciones']).siblings(".edit-image").children('img').attr('src','uploads/'+obj.datos[':urlImage']);

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
            else
            {
              $('#prueba').modal('show');
              $('#mensaje').text("Ingrese todos los datos para poder continuar.");
            }
        });

        $("#all_contents").on( "click", ".edit-entry", function() {
          ///alert("click");
          idEntry = $(this).siblings(".idCheck").children().val();
          var title = $(this).siblings(".edit-title").html();
          var src = $(this).siblings(".edit-image").children('img').attr('src');
          var description = $(this).siblings(".edit-description").html();
          var url = $(this).siblings(".edit-url").html();
          $("#editContentModal .modal-body").html("<div class='margenes'>  \
                                                    <p>(*) Campos obligatorios</p>  \
                                                    <div class='form-group'>\
                                                        <label for='edit_title'>Título (*)</label>\
                                                        <input type='text' class='form-control' placeholder='Título' aria-describedby='basic-addon1' autocomplete='off' id='edit_title' value='"+title+"' autofocus>\
                                                    </div>\
                                                    <div class ='image-upload'> \
                                                      <label for='exampleInputEmail1'>Imágen</label> \
                                                      <p class='infoEjemplo'>La imagen que adjunte debe estar en formato .JPG o .PNG, recomendado(?px × ?px)</p> \
                                                      <input type='file' class='hide' name='image' id='edit-image' class='fileupload' onchange='editFileSelected(this);' accept='image/*'/> \
                                                      <a href='#' id='triggerFileEdit' class='btn btn-primary'><img src='img/camera.png'><span id='editFileText'></span></a> \
                                                      <img id='edit-preview' src='"+ src +"'></img>' \
                                                    </div> \
                                                    <div class='form-group'>\
                                                        <label for='edit_description'>Descripción</label>\
                                                        <textarea class='form-control' rows='10' placeholder='Breve descripción' aria-describedby='basic-addon1' id='edit_description' autocomplete='off'>"+description+"</textarea>\
                                                    </div>\
                                                    <div class='form-group'>\
                                                      <label for='edit_url'>Url (*)</label>\
                                                      <input type='text' class='form-control' placeholder='http://example.com' aria-describedby='basic-addon1' id='edit_url' value='"+url+"' autocomplete='off' >\
                                                    </div> \
                                                    <div class='btnestilOferta'>  \
                                                        <a class='btn btn-success' id='edit-content' data-toggle='tab' >Editar Contenido</a>  \
                                                    </div>  \
                                                </div> "
                                              )
          $('#editContentModal').modal('show');
        });
        $('#triggerFile').on('click', function(e) {
          e.preventDefault();
          $("#image").trigger('click');
        });
        $('#editContentModal').on('click','#triggerFileEdit', function(e) {
          e.preventDefault();
          $("#edit-image").trigger('click');
        });
        function fileSelected(input) {
          var count = document.getElementById('image').files.length;
          document.getElementById('fileText').innerHTML = "";
          for (var index = 0; index < count; index ++) {
            var file = document.getElementById('image').files[index];
            var fileSize = 0;
            if (file.size > 1024 * 1024){
              fileSize = (Math.round(file.size * 100 / (1024 * 1024)) / 100).toString() + 'MB';
            }else{
              fileSize = (Math.round(file.size * 100 / 1024) / 100).toString() + 'KB';
            }
          }
          var ext = input.files[0]['name'].substring(input.files[0]['name'].lastIndexOf('.') + 1).toLowerCase();
          if (input.files && input.files[0] && (ext == "gif" || ext == "png" || ext == "jpeg" || ext == "jpg")){
            var reader = new FileReader();
            reader.onload = function (e) {
              $('#preview1').attr('src', e.target.result);
            }

            reader.readAsDataURL(input.files[0]);
          }
          document.getElementById('fileText').innerHTML = " (1)";
          $('#triggerFile').addClass('fileSelected');
        }
        function editFileSelected(input) {
          var count = document.getElementById('edit-image').files.length;
          document.getElementById('editFileText').innerHTML = "";
          for (var index = 0; index < count; index ++) {
            var file = document.getElementById('edit-image').files[index];
            var fileSize = 0;
            if (file.size > 1024 * 1024){
              fileSize = (Math.round(file.size * 100 / (1024 * 1024)) / 100).toString() + 'MB';
            }else{
              fileSize = (Math.round(file.size * 100 / 1024) / 100).toString() + 'KB';
            }
          }
          var ext = input.files[0]['name'].substring(input.files[0]['name'].lastIndexOf('.') + 1).toLowerCase();
          if (input.files && input.files[0] && (ext == "gif" || ext == "png" || ext == "jpeg" || ext == "jpg")){
            var reader = new FileReader();
            reader.onload = function (e) {
              $('#edit-preview').attr('src', e.target.result);
            }

            reader.readAsDataURL(input.files[0]);
          }
          document.getElementById('editFileText').innerHTML = " (1)";
          $('#triggerFileEdit').addClass('fileSelected');
        }
    </script>

</body>

</html>
