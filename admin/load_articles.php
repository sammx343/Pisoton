<?php
  header("Access-Control-Allow-Origin: *");
  session_start();
	require_once 'lib/pdoconnector.php';
	require('lib/config.php');

	date_default_timezone_set('America/Bogota');
  $resultado = array();
	$resultado ['exito'] = '0';
	$resultado ['datos'] = array();
  //noac
  $connection = mysql_connect($db_host,$db_user,$db_password);
  mysql_select_db($db_schema,$connection);
  mysql_set_charset('utf8',$connection);
  $usuario = $_SESSION['user'];
  $contentType = '2';
  if($contentType != 0){
    if(isset($_POST['filter'])){
      if($_POST['filter'] == 'all' || ($_POST['filter'] > 0 && $_POST['filter'] < 5) ){
        $query = "SELECT * FROM Pis_content WHERE type = $contentType ORDER BY dateContent desc";
      }else{
        $articleId = $_POST['filter'];
        $query = "SELECT * FROM Pis_content WHERE idContent = $articleId";
      }
    }else{
      if(isset($_POST['filterArticles'])){
        $articleType = $_POST['filterArticles'].'@%';
        $query = "SELECT * FROM Pis_content WHERE type = $contentType AND tag like '$articleType' ORDER BY dateContent desc limit 6";
      }else{
        $query = "SELECT * FROM Pis_content WHERE type = $contentType ORDER BY dateContent desc limit 6";
      }
    }
  }else{
    $query = "SELECT * FROM Pis_content";
  }
  $result = mysql_query($query,$connection);
  $num_rows = mysql_num_rows($result);
  //$resultado ['exito'] = $result;
    $resultado ['exito'] = '1';
    while( $row = mysql_fetch_array($result) )
    {
      $resultado ['datos'][] = $row;
    }


  echo json_encode($resultado);
?>
