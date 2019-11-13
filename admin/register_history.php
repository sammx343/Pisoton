<?php
  session_start();
	require_once 'lib/pdoconnector.php';
	require('lib/config.php');

	date_default_timezone_set('America/Bogota');

	$resultado = array();
	$resultado ['exito'] = '0';
	$resultado ['datos'] = array();
  $resultado ['imageNotChange'] = '0';
    if(isset($_POST['title']) && isset($_POST['description']))
    {
	    $pdoconnector = new PDOBaseConnector(); // Crear instancia para manejo de operaciones con bases de datos

    	$title = $_POST['title'];
      $urlImage = $_POST['urlImage'];
    	$description = $_POST['description'];

      $target_dir = "uploads/";
      $fecha = date('YmdHis');
      if(isset($_POST['idHistorias'])) {
        $idHistorias = $_POST['idHistorias'];
      }
      if (isset($_POST['imageNotChange']) && $_POST['imageNotChange'] == '1' ) {
        $query = "UPDATE Pis_historias SET title = :title, description=:description WHERE idHistorias=:idHistorias";
        $parametros = array(':title'=> $title, ':description'=> $description, ':idHistorias' => $idHistorias);
        $resultado ['imageNotChange'] = '1';
      }else{
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
        $query = "UPDATE Pis_historias SET title=:title,urlImage=:urlImage, description=:description WHERE idHistorias=:idHistorias";
        $parametros = array(':title'=> $title, ':urlImage'=> $image_name, ':description'=> $description, ':idHistorias' => $idHistorias);
      }

    	$pdoconnector->setConnectionData($db_host,$db_user,$db_password,'mysql',$db_schema);
      $usuario = $_SESSION['user'];
      $query0 = "SELECT idAdmin FROM Pis_admin WHERE username = :user ";
      $parametros0 = array(':user'=> $usuario);
      $rows = $pdoconnector->executeQuery($query0,$parametros0);
      if(count($rows)>0){
        $row = $rows[0];
        $idAdmin =  $row['idAdmin'];
        if(isset($_POST['idHistorias']) && $_POST['idHistorias'] != '-1') {
          //Edit content
          $pdoconnector->executeQuery($query,$parametros);
        }else{
          //ADD content
          $query = 'INSERT INTO Pis_historias (title,urlImage,description) VALUES (:title,:urlImage,:description)';
        	$parametros = array(':title'=> $title,':urlImage'=> $image_name, ':description'=> $description);
          $pdoconnector->executeQuery($query,$parametros);

        }
        $resultado ['exito'] = '1';
  	    $resultado ['datos'] = $parametros;
      }
	}
    echo json_encode($resultado);
?>
