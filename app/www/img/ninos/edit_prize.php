<?php
    include_once "../lib/user.php";
    include_once "../lib/admin.php";
    include_once "../lib/prizes.php";
    session_name('session_ldap');
    session_start();
    $admin = Model::factory('Admin')
    ->where('username', $_SESSION["admin_username"])
    ->find_one();
    $id_prize=$_GET["id"];
    $prize = ORM::for_table('prizes')->where('id', $id_prize)->find_one();
    $stores_array = array("du Nord Store", "Librería KM5", "du Nord H", "du Nord Plaza", "du Nord Graphique", "Restaurante 1966", "Café du Nord", "du Nord Terrase", "Le Salon", "Zonas Digitales", "du Nord Exprés", "Gimnasio Uninorte", "Tienda Mapuka");
?>

<!DOCTYPE html>
<html lang="en">

<head>

    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <meta name="description" content="">
    <meta name="author" content="">

    <title>Uninorte carro compartido</title>

    <!-- Bootstrap Core CSS -->
    <link href="css/bootstrap.min.css" rel="stylesheet">

    <!-- Custom CSS -->
    <link href="css/sb-admin.css" rel="stylesheet">

    <!-- Custom Fonts -->
    <link href="font-awesome/css/font-awesome.min.css" rel="stylesheet" type="text/css">

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
        <nav class="navbar navbar-inverse navbar-fixed-top" role="navigation">
            <!-- Brand and toggle get grouped for better mobile display -->
            <div class="navbar-header">
                <button type="button" class="navbar-toggle" data-toggle="collapse" data-target=".navbar-ex1-collapse">
                    <span class="sr-only">Toggle navigation</span>
                    <span class="icon-bar"></span>
                    <span class="icon-bar"></span>
                    <span class="icon-bar"></span>
                </button>
                <a class="navbar-brand" href="index.php">SB Admin</a>
            </div>
            <!-- Top Menu Items -->
            <ul class="nav navbar-right top-nav">

                <li class="dropdown">
                    <a href="#" class="dropdown-toggle" data-toggle="dropdown"><i class="fa fa-user"></i> <?php echo $admin->username; ?> <b class="caret"></b></a>
                    <ul class="dropdown-menu">
                        <li><a href="#"><i class="fa fa-fw fa-user"></i> Profile</a></li>
                        <li><a href="logout.php"><i class="fa fa-fw fa-power-off"></i> Log Out</a></li>
                    </ul>
                </li>
            </ul>

        </nav>

        <div id="page-wrapper">

            <div class="container-fluid">

                <!-- Page Heading -->
                <div class="row">
                    <div class="col-lg-12">
                        <h1 class="page-header">
                            Editar premio
                        </h1>
                    </div>
                </div>
                <!-- /.row -->

                <div class="row">
                    <div class="col-lg-6">
                        <h3>Editar premio </h3>
                        <form role="form" action="save-changes-prize.php" method="post">

                            <div class="form-group">
                            <!--p class="help-block"><label>id del premio</label><input  type="text" name="id" class="form-control"></p-->
                                <p class="help-block"><label>nombre del articulo</label><input type="text" name="name" class="form-control" value=" <?php echo ($prize->name);?>"></p>
                                <p class="help-block"><label>Unidad de Servicio</label>
                                  <select name="service_unit" class="form-control">
                                    <?php
                                      for ($i=0; $i < count($stores_array); $i++) {
                                        if($prize->service_unit == $stores_array[$i]){
                                          ?>
                                            <option selected><?php echo $prize->service_unit;?></option>
                                          <?php
                                        }else{
                                          ?>
                                            <option><?php echo $stores_array[$i];?></option>
                                          <?php
                                        }
                                      }
                                    ?>
                                  </select>
                                </p>
                                 <p class="help-block"><label>cantidad</label><input  type="text" name="quantity" class="form-control" value="<?php echo $prize->quantity;?>"></p>
                                <p class="help-block"><label>puntos</label><input type="text" name="point" class="form-control" value="<?php echo $prize->point;?>"></p>
                                <input type="hidden" name="id_prize" value="<?php echo $id_prize;?>" />
                            </div>
                            <p><input type="submit" class="btn btn-outline btn-xl page-scroll" value="Guardar" /></p>
                        </form>
                    </div>
                </div>
            </div>
                <!-- /.row -->

        </div>
        <!-- /#page-wrapper -->

    </div>
    <!-- /#wrapper -->

    <!-- jQuery -->
    <script src="js/jquery.js"></script>

     <!-- Bootstrap Core JavaScript -->
    <script src="js/bootstrap.min.js"></script>



</body>

</html>
