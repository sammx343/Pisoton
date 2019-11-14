<?php
header("Access-Control-Allow-Origin: *");
session_start();
	require_once 'lib/pdoconnector.php';
	require('lib/config.php');

	date_default_timezone_set('America/Bogota');

	$resultado = array();
	$resultado ['exito'] = '0';
	$resultado ['datos'] = array();
  $resultado ['audioNotChange'] = '0';
  if(isset($_POST['title']) && isset($_POST['author']))
  {
	    $pdoconnector = new PDOBaseConnector(); // Crear instancia para manejo de operaciones con bases de datos
      $title = $_POST['title'];
      //$title = 'asd';
    	$author = $_POST['author'];
      //$description = 'asd';
			$target_dir = "uploads/audios/";
      $fecha = date('YmdHis');
      $author = $_POST['author'];
    	if(isset($_POST['idAudioGuias'])) {
        $idAudioGuias = $_POST['idAudioGuias'];
      }
			//if ($_POST['idContent'] != '-1'){
	      if (isset($_POST['audioNotChange']) && $_POST['audioNotChange'] == '1' ) {
	        $query = "UPDATE Pis_audioGuias SET title = :title, author = :author WHERE idAudioGuias = :idAudioGuias";
	        $parametros = array(':title'=> $title,':author'=> $author,':idAudioGuias' => $idAudioGuias);
	        $resultado ['audioNotChange'] = '1';
	      }else{
	        if($_FILES["audio"]["name"]!="")
	        {
	            $ext = pathinfo($_FILES["audio"]["name"], PATHINFO_EXTENSION);
	            $audio_name = 'audio-'.$fecha.'.'.$ext;
	            //echo $image_name;
	            //$imageName = date_timestamp_get($date) . basename($_FILES["fileToUpload"]["name"]);
	            $target_file = $target_dir . $audio_name;
	            //echo $target_file;
	            $moved = move_uploaded_file($_FILES["audio"]["tmp_name"], $target_file);
	        }
					$query = "UPDATE Pis_audioGuias SET title = :title, author = :author, url = :url WHERE idAudioGuias = :idAudioGuias";
	        $parametros = array(':title'=> $title,':author'=> $author,':url'=> $audio_name,':idAudioGuias' => $idAudioGuias);
				}

		//	}
    	$pdoconnector->setConnectionData($db_host,$db_user,$db_password,'mysql',$db_schema);
      $usuario = $_SESSION['user'];
      $query0 = "SELECT idAdmin FROM Pis_admin WHERE username = :user ";
      $parametros0 = array(':user'=> $usuario);
      $rows = $pdoconnector->executeQuery($query0,$parametros0);
      if(count($rows)>0){
        $row = $rows[0];
        $idAdmin =  $row['idAdmin'];
        if(isset($_POST['idAudioGuias']) && $_POST['idAudioGuias'] != '-1') {
          //Edit content

          $pdoconnector->executeQuery($query,$parametros);
        }else{
          //ADD content
					$query = 'INSERT INTO Pis_audioGuias (title,author,url) VALUES (:title,:author,:url)';
        	$parametros = array(':title'=> $title,':author'=> $author,':url'=> $audio_name);
          $pdoconnector->executeQuery($query,$parametros);
        }
        $resultado ['exito'] = '1';
  	    $resultado ['datos'] = $parametros;
      }
	  }
    echo json_encode($resultado);
?>
