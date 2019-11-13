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

      if(isset($_POST['idTrailers'])) {
        //Edit content
        $idTrailers = $_POST['idTrailers'];
        $query = "UPDATE Pis_trailers SET title=:title,urlImage=:urlImage, description=:description, url=:url, dateTrailer=:dateTrailer WHERE idTrailers=:idTrailers";
      	$parametros = array(':title'=> $title,':urlImage'=> $image_name, ':description'=> $description, ':url'=> $url,':dateTrailer'=> date("Y-m-d H:i:s"), ':idTrailers' => $idTrailers);
        $pdoconnector->executeQuery($query,$parametros);
      }else{
        //ADD content
        $query = 'INSERT INTO Pis_trailers (title,urlImage,description,url,dateTrailer) VALUES (:title,:urlImage,:description,:url,:dateTrailer)';
      	$parametros = array(':title'=> $title,':urlImage'=> $image_name, ':description'=> $description, ':url'=> $url,':dateTrailer'=> date("Y-m-d H:i:s"));
        $pdoconnector->executeQuery($query,$parametros);

      }
      $resultado = array();
	    $resultado ['exito'] = '1';
	    $resultado ['datos'] = $parametros;
	}
    echo json_encode($resultado);
?>
