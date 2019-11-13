<?php
  session_start();
  if( !isset($_SESSION['authorized']) ) header('Location: login.php');
  //require('lib/config.php');
?>
<?php
    require('lib/config.php');

    //AGREGAR USUARIO
    if( isset($_POST['save']) )
    {
        $usuario = $_POST['usuario'];
        $rol = $_POST['rol'];

        if($usuario!="")
        {
            $connection = mysql_connect($db_host,$db_user,$db_password);
            mysql_select_db($db_schema,$connection);
            mysql_set_charset('utf8',$connection);

            $query = "INSERT INTO Pis_admin(username, rol) VALUES('$usuario','$rol')";
            $result = mysql_query($query,$connection);
            if ($result)
            {
                ?>
                  <p class="bg-success text-center">Usuario ingresado correctamente</p>
                <?php
            }
            else
            {
                ?>
                  <h4 class="bg-danger text-center">Upss ha ocurrido el siguiente error: <?php echo mysql_error($connection); ?></h4>
                <?php
            }
            mysql_close($connection);
        }
        else
        {
          ?>
            <p class="bg-danger text-center">No digito el identificador del usuario</p>
          <?php
        }
    }

    //EDITAR USUARIO
    if( isset($_POST['save_edit']) )
    {
        $new = $_POST['nuevo'];

        if($new!="")
        {
            $connection = mysql_connect($db_host,$db_user,$db_password);
            mysql_select_db($db_schema,$connection);
            mysql_set_charset('utf8',$connection);

            $id = $_COOKIE["id"];

            $query1 = "UPDATE Pis_admin SET username='$new' where idAdmin='$id' ";
            $result1 = mysql_query($query1,$connection);
            if ($result1)
            {
                ?>
                    <p class="bg-success text-center">Usuario editado correctamente</p>
                <?php
            }
            else
            {
                ?>
                    <h4 class="bg-danger text-center">Upss ha ocurrido el siguiente error: <?php echo mysql_error($connection); ?></h4>
                <?php
            }
            mysql_close($connection);
        }
        else
        {
            ?>
                <p class="bg-danger text-center">El campo esta vacío</p>
            <?php
        }
    }

    //ELIMINAR USUARIO
    if( isset($_GET['usuario-delete']) )
    {
        $condition = "";
        if(isset($_GET['usuario']))
        {
            $user = $_GET['usuario'];
            foreach ($user as $color)
            {
                $condition.= "idAdmin=$color or ";
                //echo $color."<br />";
            }
            $condition.= "idAdmin=-1";

            $connection = mysql_connect($db_host,$db_user,$db_password);
            mysql_select_db($db_schema,$connection);
            mysql_set_charset('utf8',$connection);

            $query = "DELETE FROM Pis_admin WHERE $condition";
            $result = mysql_query($query,$connection);
            if($result)
        {
            ?>
              <p class="bg-success text-center">El(Los) usuario(s) ha(n) sido eliminado(s)</p>
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
        <p class="bg-danger text-center">No has seleccionado un usuario</p>
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

    <!-- MetisMenu CSS -->
    <link href="vendor/metisMenu/metisMenu.min.css" rel="stylesheet">

    <!-- Custom CSS -->
    <link href="dist/css/sb-admin-2.css" rel="stylesheet">

    <!-- Custom Fonts -->
    <link href="vendor/font-awesome/css/font-awesome.min.css" rel="stylesheet" type="text/css">

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
                        <h1 class="page-header">Lista de Administradores</h1>
                    </div>
                    <!-- /.col-lg-12 -->
                </div>
                <!-- /.row -->
            </div>
            <div class="container-fluid">
              <div class="row">
                <div class="col-lg-12">
                    <form method="get" enctype="application/x-www-form-urlencoded" name="products-list-form" id="products-list-form">
                      <button type="button" class="btn btn-success" data-toggle="modal" data-target=".bd-example-modal-sm">Agregar</button>
                      <input class="btn btn-danger" type="submit" name="usuario-delete" id="usuario-delete" value="Eliminar">

                      <?php
                        require('lib/config.php');
                        $connection = mysql_connect($db_host,$db_user,$db_password);
                        mysql_select_db($db_schema,$connection);
                        mysql_set_charset('utf8',$connection);

                        $query = "SELECT * FROM Pis_admin";
                        $result = mysql_query($query,$connection);
                        $num_rows = mysql_num_rows($result);
                        if($num_rows > 0)
                        {
                      ?>
                      <div class="table-responsive" style="margin-top:40px;">
                        <table class="table" id="tabla_admin">
                          <thead>
                            <tr>
                              <th data-sort="string" class="text-center">Eliminar</th>
                              <th data-sort="string" class="text-center">Editar</th>
                              <th data-sort="string" class="text-center">Identificador del usuario</th>
                              <th data-sort="string" class="text-center">Rol a cumplir</th>
                            </tr>
                          </thead>
                          <tbody>
                            <?php
                              while( $row = mysql_fetch_array($result) )
                              {
                            ?>
                              <tr class="item_list">
                                <td class="text-center"><input type="checkbox" name="usuario[]" id="usuario[]" value="<?php echo $row['idAdmin']; ?>" /></td>
                                <td class="text-center"><a data-toggle="modal" data-target="#exampleModal" data-whatever="<?php echo $row['idAdmin'].'-'.$row['username']; ?>"><img src="img/edit.png" width="20" height="20" /></a></td>
                                <td class="text-center"><?php echo $row['username']; ?></td>
                                <td class="text-center"><?php echo $row['rol']; ?></td>
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
                    </form>
                </div>
                <div class="col-lg-6">
                    <div class="alert alert-info" role="alert" style="margin-top: 20px;">Si el rol es <b>Administrador</b> podrá visualizar todas las opciones.</div>
                     <div class="alert alert-success" role="alert" style="margin-top: 20px;">Si el rol es <b>admin_edicion</b> podrá agregar nuevo libro y visualizar reportes.</div>
                    <div class="alert alert-warning" role="alert" style="margin-top: 20px;">Si el rol es <b>reportes</b> solo podrá visualizar la opción de reportes. </div>
                    <div class="alert alert-success" role="alert" style="margin-top: 20px;">Si el rol es <b>vendedor</b> solo podrá  visualizar la opción de vender de libros.</div>
                </div>
              </div>
                <!-- /.row -->
            </div>
            <!-- /.container-fluid -->
        </div>
        <!-- /#page-wrapper -->

    </div>

    <div class="modal fade bd-example-modal-sm" id="agregar_admin" tabindex="-1" role="dialog" aria-labelledby="mySmallModalLabel" aria-hidden="true">
        <div class="modal-dialog modal-sm" role="document">
          <div class="modal-content">
            <div class="modal-header">
              <h3 class="modal-title" id="exampleModalLabel">Agregar Administrador</h3>
              <button type="button" class="close btn_x" data-dismiss="modal" aria-label="Close">
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <div class="modal-body">
              <form action="" method="post" target="_self" id="form1" name="form1">
                <div class="form-group">
                  <label for="recipient-name" class="form-control-label">Identificador del usuario :</label>
                  <input type="text" class="form-control" name="usuario" id="usuario" autocomplete="off">
                </div>
                <div class="form-group">
                  <label for="sel1">Tipo de Administrador :</label>
                  <select class="form-control" id="rol" name="rol">
                    <option value="administrador">Administrador</option>
                  </select>
                </div>
                <div class="modal-footer">
                  <button type="button" class="btn btn-secondary" data-dismiss="modal">Cerrar</button>
                  <button type="submit" class="btn btn-primary" id="save" name="save">Guardar</button>
                </div>
              </form>
            </div>
          </div>
        </div>
    </div>

    <div class="modal fade" id="exampleModal" tabindex="-1" role="dialog" aria-labelledby="mySmallModalLabel" aria-hidden="true">
        <div class="modal-dialog modal-sm" role="document">
          <div class="modal-content">
            <div class="modal-header">
              <button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>
              <h4 class="modal-title" id="exampleModalLabel">Edición Usuario</h4>
            </div>
            <div class="modal-body">
              <form action="" method="post" target="_self" id="form2" name="form2">
                <div class="form-group">
                  <label for="recipient-name" >Nuevo usuario</label>
                  <input type="text" class="form-control" name="nuevo" id="nuevo">
                </div>
                <div class="modal-footer">
                  <button type="button" class="btn btn-default" data-dismiss="modal">Close</button>
                  <button type="submit" class="btn btn-primary" id="save_edit" name="save_edit">Guardar Edición</button>
                </div>
              </form>
            </div>
          </div>
        </div>
    </div>
    <!-- /#wrapper -->



    <!-- jQuery -->
    <script src="vendor/jquery/jquery.min.js"></script>

    <!-- Bootstrap Core JavaScript -->
    <script src="vendor/bootstrap/js/bootstrap.min.js"></script>

    <!-- Metis Menu Plugin JavaScript -->
    <script src="vendor/metisMenu/metisMenu.min.js"></script>

    <!-- Custom Theme JavaScript -->
    <script src="dist/js/sb-admin-2.js"></script>

    <script src="https://cdn.datatables.net/1.10.13/js/jquery.dataTables.min.js"></script>

    <script type="text/javascript">
        $(document).ready(function(){

          $('#tabla_admin').DataTable({
            "language": {
              "url": "//cdn.datatables.net/plug-ins/9dcbecd42ad/i18n/Spanish.json",
            }
          });

        $("#usuario").keypress(function(event){
            var inputValue = event.which;
            // allow letters and whitespaces only.
            if(!(inputValue >= 65 && inputValue <= 120) && (inputValue != 32 && inputValue != 0)) {
                event.preventDefault();
            }
          });

          $('#exampleModal').on('show.bs.modal', function (event) {
            var button = $(event.relatedTarget) // Button that triggered the modal
            var recipient = button.data('whatever') // Extract info from data-* attributes
            // If necessary, you could initiate an AJAX request here (and then do the updating in a callback).
            // Update the modal's content. We'll use jQuery here, but you could use a data binding library or other methods instead.
            var modal = $(this)
            var array = recipient.split('-');
            document.cookie ='id='+array[0];
            modal.find('.modal-title').text('¿Desea editar el usuario ' + array[1].toUpperCase()+' ?')
          });
        });
    </script>

</body>

</html>
