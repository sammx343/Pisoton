<?php
  session_start();
	require_once 'lib/pdoconnector.php';
	require('lib/config.php');

	date_default_timezone_set('America/Bogota');
  $resultado = array();
	$resultado ['exito'] = '0';
	$resultado ['datos'] = array();

  $connection = mysql_connect($db_host,$db_user,$db_password);
  mysql_select_db($db_schema,$connection);
  mysql_set_charset('utf8',$connection);
  $usuario = $_SESSION['user'];
  if(isset($_POST['filter'])){
    if($_POST['filter'] == 'all'){
      $query = "SELECT * FROM Pis_historias";
    }else{
      $historyId = $_POST['filter'];
      $query = "SELECT * FROM Pis_historias WHERE idHistorias = $historyId";
    }
  }else{
    $query = "SELECT * FROM Pis_historias";
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
	echo json_encode($resultado);
?>
