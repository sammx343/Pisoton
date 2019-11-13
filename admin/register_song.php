<?php
  session_start();
	require_once 'lib/pdoconnector.php';
	require('lib/config.php');

	date_default_timezone_set('America/Bogota');

	$resultado = array();
	$resultado ['exito'] = '0';
	$resultado ['datos'] = array();

    if(isset($_POST['title']) && isset($_POST['description']) && isset($_POST['url']))
    {
	    $pdoconnector = new PDOBaseConnector(); // Crear instancia para manejo de operaciones con bases de datos

    	$title = $_POST['title'];
      $urlImage = $_POST['urlImage'];
    	$description = $_POST['description'];
    	$url = $_POST['url'];

      $target_dir = "uploads/";
      $fecha = date('YmdHis');
      if($_FILES["image"]["name"]!="")
      {
          $ext = pathinfo($_FILES["image"]["name"], PATHINFO_EXTENSION);
          $image_name = 'img-'.$fecha.'.'.$ext;
          //echo $image_name;
          //$imageName = date_timestamp_get($date) . basename($_FILES["fileToUpload"]["name"]);
          $target_file = $target_dir . $image_name;
          //echo $target_file;
          $moved = move_uploaded_file($_FILES["image"]["tmp_name"], $target_file);
      }

    	$pdoconnector->setConnectionData($db_host,$db_user,$db_password,'mysql',$db_schema);
      $usuario = $_SESSION['user'];
      $query0 = "SELECT idAdmin FROM Pis_admin WHERE username = :user ";
      $parametros0 = array(':user'=> $usuario);
      $rows = $pdoconnector->executeQuery($query0,$parametros0);
      if(count($rows)>0){
        $row = $rows[0];
        $idAdmin =  $row['idAdmin'];
        if(isset($_POST['idCanciones'])) {
          //Edit content
          $idCanciones = $_POST['idCanciones'];
          $query = "UPDATE Pis_canciones SET title=:title,urlImage=:urlImage, description=:description, url=:url WHERE idCanciones=:idCanciones";
        	$parametros = array(':title'=> $title, ':urlImage'=> $image_name, ':description'=> $description, ':url'=> $url, ':idCanciones' => $idCanciones);
          $pdoconnector->executeQuery($query,$parametros);
        }else{
          //ADD content
          $query = 'INSERT INTO Pis_canciones (title,urlImage,description,url) VALUES (:title,:urlImage,:description,:url)';
        	$parametros = array(':title'=> $title,':urlImage'=> $image_name, ':description'=> $description, ':url'=> $url);
          $pdoconnector->executeQuery($query,$parametros);

        }
        $resultado = array();
  	    $resultado ['exito'] = '1';
  	    $resultado ['datos'] = $parametros;
      }
	}
    echo json_encode($resultado);
?>
