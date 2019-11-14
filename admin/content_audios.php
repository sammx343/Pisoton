 <?php
  header("Access-Control-Allow-Origin: *");
  session_start();
  if( !isset($_SESSION['authorized']) ) header('Location: login.php');
  //require('lib/config.php');
  //ELIMINAR USUARIO
  require_once 'lib/pdoconnector.php';
  require('lib/config.php');
  $idEntry = -1;
  if( isset($_GET['audio-delete']) )
  {
      $condition = "";
      if(isset($_GET['audio']))
      {
          $user = $_GET['audio'];
          foreach ($user as $color)
          {
              $condition.= "idAudioGuias=$color or ";
              //echo $color."<br />";
          }
          $condition.= "idAudioGuias=-1";

          $connection = mysql_connect($db_host,$db_user,$db_password);
          mysql_select_db($db_schema,$connection);
          mysql_set_charset('utf8',$connection);

          $query = "DELETE FROM Pis_audioGuias WHERE $condition";
          $result = mysql_query($query,$connection);
          if($result)
          {
            ?>
              <p class="bg-success text-center">El(Los) audio(s) ha(n) sido eliminado(s)</p>
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
          <p class="bg-danger text-center">No has seleccionado un audio</p>
        <?php
      }
  }else{
    if(isset($_GET['audio']))
    {
      $idAudioGuia = $_GET['audio'];
      $pdoconnector = new PDOBaseConnector();
      $pdoconnector->setConnectionData($db_host,$db_user,$db_password,'mysql',$db_schema);
      $query0 = "SELECT * FROM Pis_audioGuias WHERE idAudioGuias = :idAudioGuias ";
      $parametros0 = array(':idAudioGuias'=> $idAudioGuia);
      $rows = $pdoconnector->executeQuery($query0,$parametros0);
      if(count($rows)>0){
        $row = $rows[0];
        if($row  != '') {
          $idEntry = $row['idAudioGuias'];
          $title =  $row['title'];
          $author =  $row['author'];
          $url =  $row['url'];
        }else{
          $idEntry = -1;
          $title = '';
          $author = '';
          $url = '';
        }
      }else{
        $idEntry = -1;
        $title = '';
        $author = '';
        $url = '';
      }
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
                        <h1 class="page-header">Audios</h1>
                    </div>
                    <!-- /.col-lg-12 -->
                </div>
                <!-- /.row -->
            </div>
            <div class="container-fluid">
                <div class="row">
                    <div class="col-lg-12">
                         <ul class="nav nav-tabs" role="tablist">
                            <li role="presentation" class="active"><a href="#add_audio" aria-controls="add_content" role="tab" data-toggle="tab">Agregar Contenido</a></li>
                            <li role="presentation"><a href="#all_contents" aria-controls="all_contents" role="tab" data-toggle="tab">Todos los Audios</a></li>
                          </ul>
                          <div class="tab-content">
                            <div role="tabpanel" class="tab-pane active" id="add_audio">
                                <div>
                                    <div class="margenes">
                                        <p>(*) Campos obligatorios</p>
                                        <div class="form-group">
                                            <label for="add_title">Título (*)</label>
                                            <input type="text" class="form-control" placeholder="Título" aria-describedby="basic-addon1" autocomplete="off" id="add_title" value="<?php echo ($idEntry != -1 ? $title : '');?>" autofocus>
                                        </div>
                                        <div class="form-group">
                                            <label for="add_author">Autor</label>
                                            <input type="text" class="form-control" placeholder="Título" aria-describedby="basic-addon1" autocomplete="off" id="add_author" value="<?php echo ($idEntry != -1 ? $author : '');?>" autofocus>
                                        </div>
                                        <div class ="form-group">
                                          <label for="add_url">Audio</label>
                                          <input type="file" name="add_url" id="add_url" accept=".mp3,audio/*"/>
                                        </div>
                                        <div class="btnestilOferta">
                                            <a class="btn btn-success" id="add-content" data-toggle="tab" >Modificar Contenido</a>
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


                                        $query = "SELECT * FROM Pis_audioGuias";

                                        $result = mysql_query($query,$connection);
                                        $num_rows = mysql_num_rows($result);
                                        if($num_rows > 0)
                                        {
                                    ?>
                                    <form method="get" enctype="application/x-www-form-urlencoded" name="products-list-form" id="products-list-form">
                                    <input class="btn btn-danger" type="submit" name="audio-delete" id="audio-delete" value="Eliminar">
                                    <div class="table-responsive" style="margin-top:40px;">
                                        <table class="table" id="table_all_contents">
                                            <thead>
                                                <tr>
                                                  <th data-sort="string" class="text-center">Eliminar</th>
                                                  <th data-sort="string" class="text-center">Editar</th>
                                                  <th data-sort="string" class="text-center">Título</th>
                                                  <th data-sort="string" class="text-center">Audio</th>
                                                  <th data-sort="string" class="text-center">Autor</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                            <?php
                                              while( $row = mysql_fetch_array($result) )
                                              {
                                            ?>
                                              <tr class="item_list">
                                                <td class="text-center idCheck" id="<?php echo $row['idAudioGuias']; ?>"><input type="checkbox" name="audio[]" id="audio[]" value="<?php echo $row['idAudioGuias']; ?>" /></td>
                                                <td class="text-center edit-entry"><img src="img/edit.png" width="20" height="20" /></td>
                                                <td class="text-left edit-title"><?php echo $row['title']; ?></td>
                                                <?php
                                                  $hasAudio = 'No';
                                                  if($row['url'] != ''){
                                                    $hasAudio = 'Sí';
                                                  }
                                                ?>
                                                <td class="text-left edit-audio"><?php echo $hasAudio; ?></td>
                                                <td class="text-left edit-author"><?php echo $row['author']; ?></td>
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
                      <h4 class="modal-title" id="exampleModalLabel">Edición Contenido</h4>
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
        var idEntry = <?php echo $idEntry;?>;
        $('#table_all_contents').DataTable({
           "language": {
             "url": "//cdn.datatables.net/plug-ins/9dcbecd42ad/i18n/Spanish.json",
           }
       });

        $("#add-content").click(function()
        {
            if ($("#add_title").val() != '' && $("#add_author").val() != '' && document.getElementById('add_url').files.length > 0)
            {
                $('#myModal').modal('show');
                var title = $("#add_title").val();
                var author = $("#add_author").val();
                var audioNotChange = 0;
                var audioInput = document.getElementById('add_url');
                if(audioInput.files.length < 1){
                  audioNotChange = 1;
                }
                var audio = audioInput.files[0];
                var formData = new FormData();
                formData.append('audio', audio);
                formData.append('author', author);
                formData.append('title', title);
                formData.append('audioNotChange', audioNotChange);
                $.ajax({
                    type: "POST",
                    url: "register_audio.php",
                    processData: false,
                    contentType: false,
                    data:formData,
                    success: function(mensaje)
                    {
                        alert(mensaje);
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
            if ($("#edit_title").val() != '' && $("#edit_author").val() != '')
            {
                $('#myModal').modal('show');
                var title = $("#edit_title").val();
                var author = $("#edit_author").val();
                var audioNotChange = 0;
                var audioInput = document.getElementById('edit_audio');
                if(audioInput.files.length < 1){
                  audioNotChange = 1;
                }
                var audio = audioInput.files[0];
                var formData = new FormData();
                formData.append('audio', audio);
                formData.append('idAudioGuias', idEntry);
                formData.append('author', author);
                formData.append('title', title);
                formData.append('audioNotChange', audioNotChange);
                $.ajax({
                    type: "POST",
                    url: "register_audio.php",
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
                          $("#"+obj.datos[':idAudioGuias']).siblings(".edit-title").html(obj.datos[':title']);
                          $("#"+obj.datos[':idAudioGuias']).siblings(".edit-author").html(obj.datos[':author']);
                          if(obj.datos[':url'] == ''){
                            $("#"+obj.datos[':idAudioGuias']).siblings(".edit-audio").html("No");
                          }else{
                              $("#"+obj.datos[':idAudioGuias']).siblings(".edit-audio").html("Sí");
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
          var author = $(this).siblings(".edit-author").html();
          $("#editContentModal .modal-body").html("<div class='margenes'>  \
                                                    <p>(*) Campos obligatorios</p>  \
                                                    <div class='form-group'>  \
                                                        <label for='edit_title'>Título (*)</label>  \
                                                        <input type='text' class='form-control' placeholder='Título' aria-describedby='basic-addon1' autocomplete='off' id='edit_title' value='" + title + "' autofocus>  \
                                                    </div>  \
                                                    <div class='form-group'>  \
                                                        <label for='edit_autohr'>Autor (*)</label>  \
                                                        <input type='text' class='form-control' placeholder='Autor' aria-describedby='basic-addon1' id='edit_author' autocomplete='off' value='" + author + "'>  \
                                                    </div>  \
                                                    <div class ='form-group'> \
                                                      <label for='add_url'>Audio</label> \
                                                      <input type='file' name='edit_audio' id='edit_audio' accept='.mp3,audio/*'/> \
                                                    </div> \
                                                    <div class='btnestilOferta'>  \
                                                        <a class='btn btn-success' id='edit-content' data-toggle='tab' >Editar Contenido</a>  \
                                                    </div>  \
                                                </div> "
                                              )
          $('#editContentModal').modal('show');
        });

    </script>

</body>

</html>
