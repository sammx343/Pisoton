<?php
  header("Access-Control-Allow-Origin: *");
  session_start();
  if( !isset($_SESSION['authorized']) ) header('Location: login.php');
  //require('lib/config.php');
  //ELIMINAR USUARIO
  require_once 'lib/pdoconnector.php';
  require('lib/config.php');
  if( isset($_GET['videoBlog-delete']) )
  {
      $condition = "";
      if(isset($_GET['videoBlog']))
      {
          $user = $_GET['videoBlog'];
          foreach ($user as $color)
          {
              $condition.= "idVideoBlog=$color or ";
              //echo $color."<br />";
          }
          $condition.= "idVideoBlog=-1";

          $connection = mysql_connect($db_host,$db_user,$db_password);
          mysql_select_db($db_schema,$connection);
          mysql_set_charset('utf8',$connection);

          $query = "DELETE FROM Pis_videoBlog WHERE $condition";
          $result = mysql_query($query,$connection);
          if($result)
          {
            ?>
              <p class="bg-success text-center">El(Los) video(s) ha(n) sido eliminado(s)</p>
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
          <p class="bg-danger text-center">No has seleccionado un video</p>
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
                        <h1 class="page-header">Video Blog</h1>
                    </div>
                    <!-- /.col-lg-12 -->
                </div>
                <!-- /.row -->
            </div>
            <div class="container-fluid">
                <div class="row">
                    <div class="col-lg-12">
                         <ul class="nav nav-tabs" role="tablist">
                            <li role="presentation" class="active"><a href="#add_video" aria-controls="add_video" role="tab" data-toggle="tab">Agregar Video</a></li>
                            <li role="presentation"><a href="#all_videos" aria-controls="all_videos" role="tab" data-toggle="tab">Todos los Videos</a></li>
                            <li role="presentation"><a href="#main_video" aria-controls="main_video" role="tab" data-toggle="tab">Video principal</a></li>
                          </ul>


                          <div class="tab-content">
                            <div role="tabpanel" class="tab-pane active" id="add_video">
                                <div>
                                    <div class="margenes">
                                        <p>(*) Campos obligatorios</p>
                                        <div class="form-group">
                                            <label for="add_title">Título (*)</label>
                                            <input type="text" class="form-control" placeholder="Título del video" aria-describedby="basic-addon1" id="add_title" autocomplete="off" >
                                        </div>
                                        <div class="form-group">
                                            <label for="add_url">Url (*)</label>
                                            <input type="text" class="form-control" placeholder="http://example.com" aria-describedby="basic-addon1" id="add_url" autocomplete="off" >
                                        </div>
                                        <div class="btnestilOferta">
                                            <a class="btn btn-success" id="add-video" data-toggle="tab" >Agregar Contenido</a>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div role="tabpanel" class="tab-pane" id="all_videos">
                                <div class="margenes">
                                    <?php
                                        require('lib/config.php');
                                        $connection = mysql_connect($db_host,$db_user,$db_password);
                                        mysql_select_db($db_schema,$connection);
                                        mysql_set_charset('utf8',$connection);

                                        $query = "SELECT * FROM Pis_videoBlog WHERE idVideoBlog != 1";
                                        $result = mysql_query($query,$connection);
                                        $num_rows = mysql_num_rows($result);
                                        if($num_rows > 0)
                                        {
                                    ?>
                                    <form method="get" enctype="application/x-www-form-urlencoded" name="products-list-form" id="products-list-form">
                                    <input class="btn btn-danger" type="submit" name="videoBlog-delete" id="videoBlog-delete" value="Eliminar">
                                    <div class="table-responsive" style="margin-top:40px;">
                                        <table class="table" id="table_all_videos">
                                            <thead>
                                                <tr>
                                                  <th data-sort="string" class="text-center">Eliminar</th>
                                                  <th data-sort="string" class="text-center">Editar</th>
                                                  <th data-sort="string" class="text-center">Título</th>
                                                  <th data-sort="string" class="text-center">Url</th>
                                                  <th data-sort="string" class="text-center">Fecha</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                            <?php
                                              while( $row = mysql_fetch_array($result) )
                                              {
                                            ?>
                                              <tr class="item_list">
                                                <td class="text-center idCheck" id="<?php echo $row['idVideoBlog']; ?>"><input type="checkbox" name="videoBlog[]" id="videoBlog[]" value="<?php echo $row['idVideoBlog']; ?>" /></td>
                                                <td class="text-center edit-entry"><img src="img/edit.png" width="20" height="20" /></td>
                                                <td class="text-left edit-title"><?php echo $row['title']; ?></td>
                                                <td class="text-left edit-url"><?php echo $row['url']; ?></td>
                                                <td class="text-center edit-dateVideo"><?php echo $row['dateTrailer']; ?></td>
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
                            <div role="tabpanel" class="tab-pane" id="main_video">
                                <div>
                                    <div class="margenes">
                                      <?php
                                          require('lib/config.php');
                                          $connection = mysql_connect($db_host,$db_user,$db_password);
                                          mysql_select_db($db_schema,$connection);
                                          mysql_set_charset('utf8',$connection);

                                          $query = "SELECT * FROM Pis_videoBlog where idVideoBlog = 1";
                                          $result = mysql_query($query,$connection);
                                          $num_rows = mysql_num_rows($result);
                                          $urlMain = '';
                                          if($num_rows > 0)
                                          {
                                            if ($row = mysql_fetch_array($result)){
                                                $urlMain = $row['url'];
                                            }
                                          }
                                      ?>
                                        <p>(*) Campos obligatorios</p>
                                        <div class="form-group">
                                            <label for="add_url">Url (*)</label>
                                            <input type="text" class="form-control" placeholder="http://example.com" aria-describedby="basic-addon1" id="add_main_url" autocomplete="off" value="<?php echo $urlMain;?>">
                                        </div>
                                        <div class="btnestilOferta">
                                            <a class="btn btn-success" id="add-main-video" data-toggle="tab" >Agregar Contenido</a>
                                        </div>
                                    </div>
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
                    <p>Registrando Video en la Bases de datos</p>
                    <div class="progress progress-striped active" style="margin-bottom:0;"><div class="progress-bar" style="width: 100%"></div></div>
                    <!--<div class="progress">
                      <div class="progress-bar bar" role="progressbar" aria-valuenow="0" aria-valuemin="0" aria-valuemax="100">

                      </div>
                    </div>-->
                  </div>
                </div><!-- /.modal-content -->
              </div><!-- /.modal-dialog -->
            </div><!-- /.modal -->

            <div class="modal fade" id="editVideoModal" tabindex="-1" role="dialog" aria-labelledby="mySmallModalLabel" aria-hidden="true">
                <div class="modal-dialog modal-sm" role="document">
                  <div class="modal-content">
                    <div class="modal-header">
                      <button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>
                      <h4 class="modal-title" id="exampleModalLabel">Edición Video</h4>
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
         $('#table_all_videos').DataTable({
            "language": {
              "url": "//cdn.datatables.net/plug-ins/9dcbecd42ad/i18n/Spanish.json",
            }
        });
        //$('#add_description').wysihtml5();

        $("#add-video").click(function()
        {
            if ($("#add_url").val() != '')
            {
                $('#myModal').modal('show');
                var title = $("#add_title").val();
                var url = $("#add_url").val();
                var formData = new FormData();
                formData.append('url', url);
                formData.append('title', title);
                $.ajax({
                    type: "POST",
                    url: "register_videoBlog.php",
                    processData: false,
                    contentType: false,
                    data:formData,
                    success: function(mensaje)
                    {
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

        $("#add-main-video").click(function()
        {
            if ($("#add_main_url").val() != '')
            {
                $('#myModal').modal('show');
                var title = 'Main video';
                var url = $("#add_main_url").val();
                var formData = new FormData();
                formData.append('idVideoBlog', 1);
                formData.append('url', url);
                formData.append('title', title);
                $.ajax({
                    type: "POST",
                    url: "register_videoBlog.php",
                    processData: false,
                    contentType: false,
                    data:formData,
                    success: function(mensaje)
                    {
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

        $("#editVideoModal").on( "click", "#edit-video", function() {
          $('#editVideoModal').modal('hide');
            if ($("#edit_title").val() != '' && $("#edit_url").val() != '')
            {
                $('#myModal').modal('show');
                var title = $("#edit_title").val();
                var url = $("#edit_url").val();
                var formData = new FormData();
                formData.append('idVideoBlog', idEntry);
                formData.append('title', title);
                formData.append('url', url);
                $.ajax({
                    type: "POST",
                    url: "register_videoBlog.php",
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
                          $("#"+obj.datos[':idVideoBlog']).siblings(".edit-title").html(obj.datos[':title']);
                          $("#"+obj.datos[':idVideoBlog']).siblings(".edit-url").html(obj.datos[':url']);
                          $("#"+obj.datos[':idVideoBlog']).siblings(".edit-dateTrailer").html(obj.datos[':dateTrailer']);
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

        $("#all_videos").on( "click", ".edit-entry", function() {
          ///alert("click");
          idEntry = $(this).siblings(".idCheck").children().val();
          var title = $(this).siblings(".edit-title").html();
          var url = $(this).siblings(".edit-url").html();
          $("#editVideoModal .modal-body").html("<div class='margenes'>  \
                                                    <p>(*) Campos obligatorios</p>  \
                                                    <div class='form-group'>  \
                                                        <label for='edit_title'>Título (*)</label>  \
                                                        <input type='text' class='form-control' placeholder='' aria-describedby='basic-addon1' id='edit_title' autocomplete='off' value='" + title + "'>  \
                                                    </div>  \
                                                    <div class='form-group'>  \
                                                        <label for='edit_url'>Url (*)</label>  \
                                                        <input type='text' class='form-control' placeholder='http://example.com' aria-describedby='basic-addon1' id='edit_url' autocomplete='off' value='" + url + "'>  \
                                                    </div>  \
                                                    <div class='btnestilOferta'>  \
                                                        <a class='btn btn-success' id='edit-video' data-toggle='tab' >Editat Trailer</a>  \
                                                    </div>  \
                                                </div> "
                                              )
          $('#editVideoModal').modal('show');
        });
    </script>

</body>

</html>
