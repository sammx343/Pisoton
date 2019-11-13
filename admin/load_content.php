<?php
  header("Access-Control-Allow-Origin: *");
  session_start();
	require_once 'lib/pdoconnector.php';
	require('lib/config.php');

	date_default_timezone_set('America/Bogota');
  $resultado = array();
	$resultado ['exito'] = '0';
	$resultado ['datos'] = array();

    if(isset($_POST['type']) )
    {
      $contentType = $_POST['type'];
	    $connection = mysql_connect($db_host,$db_user,$db_password);
      mysql_select_db($db_schema,$connection);
      mysql_set_charset('utf8',$connection);
      $usuario = $_SESSION['user'];
      if($contentType != 0){
        $query = "SELECT * FROM Pis_content WHERE type = $contentType";
      }else{
        $query = "SELECT * FROM Pis_content";
      }
      $result = mysql_query($query,$connection);
      $num_rows = mysql_num_rows($result);
      //$resultado ['exito'] = $result;
      if($num_rows > 0)
      {
        $resultado = array();
  	    $resultado ['exito'] = '1';
  	    while( $row = mysql_fetch_array($result) )
        {
          $resultado ['datos'][] = $row;
        }
      }
	  }
    echo json_encode($resultado);
?>
