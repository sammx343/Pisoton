<?php
  header("Access-Control-Allow-Origin: *");
  session_start();
	require_once 'lib/pdoconnector.php';
	require('lib/config.php');

	date_default_timezone_set('America/Bogota');

	$resultado = array();
	$resultado ['exito'] = '0';
	$resultado ['datos'] = array();

    if(isset($_POST['url']) && isset($_POST['title']))
    {
	    $pdoconnector = new PDOBaseConnector(); // Crear instancia para manejo de operaciones con bases de datos

      $title = $_POST['title'];
    	$url = $_POST['url'];
      $fecha = date('YmdHis');
      $pdoconnector->setConnectionData($db_host,$db_user,$db_password,'mysql',$db_schema);

      if(isset($_POST['idVideoBlog'])) {
        //Edit content
        $idVideoBlog = $_POST['idVideoBlog'];
        $query = "UPDATE Pis_videoBlog SET title=:title, url=:url, dateTrailer=:dateTrailer WHERE idVideoBlog=:idVideoBlog";
      	$parametros = array(':title'=> $title, ':url'=> $url,':dateTrailer'=> date("Y-m-d H:i:s"), ':idVideoBlog' => $idVideoBlog);
        $pdoconnector->executeQuery($query,$parametros);
      }else{
        //ADD content
        $query = 'INSERT INTO Pis_videoBlog (title,url,dateTrailer) VALUES (:title,:url,:dateTrailer)';
      	$parametros = array(':title'=> $title,':url'=> $url,':dateTrailer'=> date("Y-m-d H:i:s"));
        $pdoconnector->executeQuery($query,$parametros);

      }
      $resultado = array();
	    $resultado ['exito'] = '1';
	    $resultado ['datos'] = $parametros;
	}
    echo json_encode($resultado);
?>
