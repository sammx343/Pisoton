<?php
  session_start();
	require_once 'lib/pdoconnector.php';
	require('lib/config.php');

	date_default_timezone_set('America/Bogota');

	$resultado = array();
	$resultado ['exito'] = '0';
	$resultado ['datos'] = array();

    if(isset($_POST['name']) && isset($_POST['email']))
    {
	    //$pdoconnector = new PDOBaseConnector(); // Crear instancia para manejo de operaciones con bases de datos
    	$name = $_POST['name'];
      $email = $_POST['email'];

      $fecha = date('YmdHis');
      $to_email           = "com_pisoton@uninorte.edu.co";
      $to_email_cc        = "jpion@uninorte.edu.co";
      //$to_email="jpion@uninorte.edu.co;";
      $headers   = "Content-type: text/html; charset=utf-8\r\n";
      $headers   .= "Message-ID: <".time().rand(1,1000)."@".$_SERVER['SERVER_NAME'].">". "\r\n";

      require_once('phpmail/function_mail.php');
      $email_subject      = "INSCRIPCION * [Correo automatizado] Pisotón Web";
      $mensaje = "<meta http-equiv='Content-Type' content='text/html; charset=utf-8' /> ";
      $mensaje .= "<br/>";
      $mensaje .= "Hola el siguiente usuario se ha inscrito<br/>";
      $mensaje .= "<strong>Nombre: </strong>".$name . "<br/>";
      $mensaje .= "<strong>Correo: </strong>" . $email ."<br/>";
      $mensaje .= "-------------------------------------------------------------------------";
      $mensaje .= "<br /> <br />";
      $mensaje.= "Fecha y Hora:    ".date("d/m/Y")." ".date("h:i:s a")."<br />";
      if (email("consulta",$to_email,$to_email_cc,$email_subject,$mensaje,'','')){

      }else{
        //echo "<div align='left' class='vpb_info'>Su mensaje no pudo ser enviado, intente nuevamente o si el problema persiste                  por favor comuniquese al correo webmaster@uninorte.edu.co.</div>";
      }
	    $resultado ['exito'] = '1';
      $resultado ['nombre'] = $name;
	}
    echo json_encode($resultado);
?>
