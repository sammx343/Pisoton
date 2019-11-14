 <?php
  header("Access-Control-Allow-Origin: *");
  session_start();
  if( !isset($_SESSION['authorized']) ) header('Location: login.php');
  //require('lib/config.php');
  //ELIMINAR USUARIO
  require_once 'lib/pdoconnector.php';
  require('lib/config.php');
  $idEntry = -1;

    $pdoconnector = new PDOBaseConnector();
    $pdoconnector->setConnectionData($db_host,$db_user,$db_password,'mysql',$db_schema);
    $query0 = "SELECT * FROM Pis_trailers WHERE idTrailers = 1 ";
    $rows = $pdoconnector->executeQuery($query0);
    if(count($rows)>0){
      $row = $rows[0];
      if($row  != '') {
        $idEntry = $row['idTrailers'];
        $title =  $row['title'];
        $urlImage =  $row['urlImage'];
        $description =  $row['description'];
        $url =  $row['url'];
      }else{
        $idEntry = -1;
        $title = '';
        $urlImage = '';
        $description = '';
        $url = '';
      }
    }else{
      $idEntry = -1;
      $title = '';
      $urlImage = '';
      $description = '';
      $url = '';
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
                        <h1 class="page-header">Video Promocional</h1>
                    </div>
                    <!-- /.col-lg-12 -->
                </div>
                <!-- /.row -->
            </div>
            <div class="container-fluid">
                <div class="row">
                    <div class="col-lg-12">
                         <ul class="nav nav-tabs" role="tablist">
                            <li role="presentation" class="active"><a href="#add_content" aria-controls="add_content" role="tab" data-toggle="tab">Agregar Contenido</a></li>
                          </ul>
                          <div class="tab-content">
                            <div role="tabpanel" class="tab-pane active" id="add_game">
                                <div>
                                    <div class="margenes">
                                        <p>(*) Campos obligatorios</p>
                                        <div class="form-group">
                                            <label for="add_title">Título (*)</label>
                                            <input type="text" class="form-control" placeholder="Título" aria-describedby="basic-addon1" autocomplete="off" id="add_title" value="<?php echo ($idEntry != -1 ? $title : '');?>" autofocus>
                                        </div>
                                        <div class="form-group">
                                          <label for="add_urlImage">Url Miniatura(*)</label>
                                          <input type="text" class="form-control" placeholder="http://example.com/image.jpg" aria-describedby="basic-addon1" id="add_urlImage" value="<?php echo ($idEntry != -1 ? $urlImage : '');?>" autocomplete="off" >
                                        </div>
                                        <div class="form-group">
                                            <label for="add_description">Descripción</label>
                                            <textarea class="form-control" rows="10" placeholder="Breve descripción" aria-describedby="basic-addon1" id="add_description" autocomplete="off"><?php echo ($idEntry != -1 ? $description : '');?></textarea>
                                        </div>
                                        <div class="form-group">
                                          <label for="add_url">Url (*)</label>
                                          <input type="text" class="form-control" placeholder="http://example.com" aria-describedby="basic-addon1" id="add_url" value="<?php echo ($idEntry != -1 ? $url : '');?>" autocomplete="off" >
                                        </div>
                                        <div class="btnestilOferta">
                                            <a class="btn btn-success" id="add-content" data-toggle="tab" >Modificar Contenido</a>
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

        
        $("#add-content").click(function()
        {
            if ($("#add_title").val() != '' && $("#add_urlImage").val() != '' && $("#add_description").val() != '' && $("#add_url").val() != '')
            {
                $('#myModal').modal('show');
                var title = $("#add_title").val();
                var urlImage = $("#add_urlImage").val();
                var description = $("#add_description").val();
                var url = $("#add_url").val();

                $.ajax({
                    type: "POST",
                    url: "register_video.php",
                    data:{idTrailers:idEntry,title:title,urlImage:urlImage,description:description,url:url},
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

    </script>

</body>

</html>
