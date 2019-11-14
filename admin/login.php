<?php
header("Access-Control-Allow-Origin: *");
session_start();
if( isset($_SESSION['authorized']) ) session_destroy();

require('lib/config.php');
if( isset($_POST['login']) )
{
    $usuario = $_POST['user'];
    $pass = $_POST['pass'];

    $connection = mysql_connect($db_host,$db_user,$db_password);
    mysql_select_db($db_schema,$connection);
    mysql_set_charset('utf8',$connection);

    $query = "select * from Pis_admin where username='$usuario'";
    $result = mysql_query($query,$connection);
    $num_rows = mysql_num_rows($result);
    if($num_rows > 0)
    {
        //EL EGRESADO YA EXISTE EN MI BASES DE DATOS
        $row = mysql_fetch_array($result);
        $usuario =  $row['username'];
        $rol =  $row['rol'];

        $adServer = "ldap://tomillo.uninorte.edu.co";
        $ldap = ldap_connect($adServer);
        $ldaprdn = 'uid='.$usuario.',ou=People,o=uninorte.edu.co,o=uninorte.edu.co';
        ldap_set_option($ldap, LDAP_OPT_PROTOCOL_VERSION, 3);
        ldap_set_option($ldap, LDAP_OPT_REFERRALS, 0);
        $bind = @ldap_bind($ldap, $ldaprdn, $pass);
        if ($bind)
        {
            $_SESSION['user'] = $usuario;
            $_SESSION['rol'] = $rol;
            $_SESSION['authorized'] = true;
            header('Location: index.php');
        }
        else
        {
            ?>
                <p class="bg-danger text-center">Usuario o contraseña incorrecta</p>
            <?php
        }
        @ldap_close($ldap);
    }
    else
    {
        ?>
            <p class="bg-danger text-center">No se encuentra registrado en la base de datos</p>
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

    <title>Panel administrativo de E-cards (libros electrónicos)</title>

    <!-- Bootstrap Core CSS -->
    <link href="vendor/bootstrap/css/bootstrap.min.css" rel="stylesheet">

    <!-- MetisMenu CSS -->
    <link href="vendor/metisMenu/metisMenu.min.css" rel="stylesheet">

    <!-- Custom CSS -->
    <link href="dist/css/sb-admin-2.css" rel="stylesheet">

    <!-- Custom Fonts -->
    <link href="vendor/font-awesome/css/font-awesome.min.css" rel="stylesheet" type="text/css">

    <!-- ESTILO ADMIN-->
    <link href="dist/css/estilo_admin.css" rel="stylesheet" type="text/css"/>

    <!-- HTML5 Shim and Respond.js IE8 support of HTML5 elements and media queries -->
    <!-- WARNING: Respond.js doesn't work if you view the page via file:// -->
    <!--[if lt IE 9]>
        <script src="https://oss.maxcdn.com/libs/html5shiv/3.7.0/html5shiv.js"></script>
        <script src="https://oss.maxcdn.com/libs/respond.js/1.4.2/respond.min.js"></script>
    <![endif]-->

</head>

<body>
    <div class="container">
        <div class="row">
            <div class="col-md-4 col-md-offset-4">
                <div class="login-panel panel panel-default">
                    <div class="panel-heading">
                        <h3 class="panel-title">Inicio de Sesión</h3>
                    </div>
                    <div class="panel-body">
                        <form action="" method="post" target="_self" id="form1" name="form1">
                            <fieldset>
                                <div class="form-group">
                                    <label for="user">Nombre de usuario:</label>
                                    <div class="input-group">
                                        <div class="input-group-addon"><i class="fa fa-user" aria-hidden="true"></i></div>
                                        <input type="text" class="form-control" id="user" name="user" placeholder="Usuario">
                                    </div>
                                </div>
                                <div class="form-group">
                                    <label for="user">Contraseña:</label>
                                    <div class="input-group">
                                        <div class="input-group-addon"><i class="fa fa-unlock-alt" aria-hidden="true"></i></div>
                                        <input type="password" class="form-control" id="pass" name="pass" placeholder="Contraseña">
                                    </div>
                                </div>

                                <!-- Change this to a button or input when using this as a form -->
                                <p>
                                  <input class="btn btn-lg btn-success btn-block" type="submit" name="login" id="login" value="Iniciar sesión">
                                </p>
                            </fieldset>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </div>

    <!-- jQuery -->
    <script src="vendor/jquery/jquery.min.js"></script>

    <!-- Bootstrap Core JavaScript -->
    <script src="vendor/bootstrap/js/bootstrap.min.js"></script>

    <!-- Metis Menu Plugin JavaScript -->
    <script src="vendor/metisMenu/metisMenu.min.js"></script>

    <!-- Custom Theme JavaScript -->
    <script src="dist/js/sb-admin-2.js"></script>

    <script type="text/javascript">
         $( function () {
            //window.location.href = "https://comino.uninorte.edu.co/ecards_libros_electronicos/login.php";
        } );

    </script>

</body>

</html>
