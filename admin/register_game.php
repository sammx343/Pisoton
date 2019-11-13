<?php
  session_start();
	require_once 'lib/pdoconnector.php';
	require('lib/config.php');

	date_default_timezone_set('America/Bogota');

	$resultado = array();
	$resultado ['exito'] = '0';
	$resultado ['datos'] = array();

    if(isset($_POST['title']) && isset($_POST['description']) && isset($_POST['url']) && isset($_POST['urlImage']))
    {
	    $pdoconnector = new PDOBaseConnector(); // Crear instancia para manejo de operaciones con bases de datos

    	$title = $_POST['title'];
      $urlImage = $_POST['urlImage'];
    	$description = $_POST['description'];
    	$url = $_POST['url'];

    	$pdoconnector->setConnectionData($db_host,$db_user,$db_password,'mysql',$db_schema);
      $usuario = $_SESSION['user'];
      $query0 = "SELECT idAdmin FROM Pis_admin WHERE username = :user ";
      $parametros0 = array(':user'=> $usuario);
      $rows = $pdoconnector->executeQuery($query0,$parametros0);
      if(count($rows)>0){
        $row = $rows[0];
        $idAdmin =  $row['idAdmin'];
        if(isset($_POST['idGame']) && $_POST['idGame'] != -1) {
          //Edit content
          $idGame = $_POST['idGame'];
          $query = "UPDATE Pis_juegos SET title=:title, urlImage=:urlImage, description=:description, url=:url WHERE idJuegos=:idGame";
        	$parametros = array(':title'=> $title, ':urlImage'=> $urlImage, ':description'=> $description, ':url'=> $url, ':idGame' => $idGame);
          $pdoconnector->executeQuery($query,$parametros);
        }else{
          //ADD content
          $query = 'INSERT INTO Pis_juegos (title,urlImage,description,url) VALUES (:title,:urlImage,:description,:url)';
        	$parametros = array(':title'=> $title, ':urlImage'=> $urlImage, ':description'=> $description, ':url'=> $url);
          $pdoconnector->executeQuery($query,$parametros);

        }
        $resultado = array();
  	    $resultado ['exito'] = '1';
  	    $resultado ['datos'] = $parametros;
      }
	}
    echo json_encode($resultado);
?>
