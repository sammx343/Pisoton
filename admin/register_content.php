<?php
session_start();
	require_once 'lib/pdoconnector.php';
	require('lib/config.php');

	date_default_timezone_set('America/Bogota');

	$resultado = array();
	$resultado ['exito'] = '0';
	$resultado ['datos'] = array();
  $resultado ['imageNotChange'] = '0';
  if(isset($_POST['title']) && isset($_POST['description']) && isset($_POST['type']))
  {
	    $pdoconnector = new PDOBaseConnector(); // Crear instancia para manejo de operaciones con bases de datos
      $title = $_POST['title'];
      //$title = 'asd';
    	$description = $_POST['description'];
      //$description = 'asd';

      $type = $_POST['type'];
      //$type = 2;
      //$idContent = '20';
      $target_dir = "uploads/";
      $fecha = date('YmdHis');
      if (isset($_POST['author'])){
        $author = $_POST['author'];
        if($author == ""){
          $author = "";
        }
      }else{
        $author = "";
      }
			if (isset($_POST['category'])) {
        $category = $_POST['category'];
        if($category == ""){
          $category = "";
        }
      }else{
        $category = "";
      }
			if (isset($_POST['section'])) {
        $section = $_POST['section'];
        if($section == "" || $section == "default"){
          $section = "";
        }
      }else{
        $section = "";
      }
			$tag = $section.'@'.$category;
      if (isset($_POST['link'])){
        $link = $_POST['link'];
      }else{
        $link = "";
      }
			if (isset($_POST['article'])) {
        $article = $_POST['article'];
        if($article == "" || $article == "default" || $article == "null"){
          $article = "";
        }
      }else{
        $article = "";
      }
			$link .= '@'.$article;
      if (isset($_POST['isVideo'])){
        $isVideo = $_POST['isVideo'];
      }else{
        $isVideo = 0;
      }
      if(isset($_POST['idContent'])) {
        $idContent = $_POST['idContent'];
      }
			//if ($_POST['idContent'] != '-1'){
	      if (isset($_POST['imageNotChange']) && $_POST['imageNotChange'] == '1' ) {
	        $query = "UPDATE Pis_content SET tag=:tag, title = :title, link = :link, isVideo = :isVideo, description = :description, author = :author, dateContent = :dateContent WHERE idContent = :idContent";
	        $parametros = array(':tag'=>$tag,':title'=> $title,':link'=> $link, ':isVideo'=> $isVideo,':description'=> $description, ':author'=> $author,':dateContent'=> date("Y-m-d H:i:s"), ':idContent' => $idContent);
	        $resultado ['imageNotChange'] = '1';
					if (isset($_POST['pdfNotChange']) && $_POST['pdfNotChange'] == '1' ) {

		      }else{
		        if($_FILES["pdf"]["name"]!="")
		        {
		            $ext = pathinfo($_FILES["pdf"]["name"], PATHINFO_EXTENSION);
		            $pdf_name = 'pdf-'.$fecha.'.'.$ext;
		            //echo $image_name;
		            //$imageName = date_timestamp_get($date) . basename($_FILES["fileToUpload"]["name"]);
		            $target_file = $target_dir . $pdf_name;
		            //echo $target_file;
		            $moved = move_uploaded_file($_FILES["pdf"]["tmp_name"], $target_file);
		        }
						$query = "UPDATE Pis_content SET tag=:tag,title = :title, urlPdf = :urlPdf, link = :link, isVideo = :isVideo, description = :description, author = :author, dateContent = :dateContent WHERE idContent=:idContent";
		        $parametros = array(':tag'=> $tag,':title'=> $title,':urlPdf'=> $pdf_name,':link'=> $link, ':isVideo'=> $isVideo,':description'=> $description, ':author'=> $author,':dateContent'=> date("Y-m-d H:i:s"), ':idContent' => $idContent);
		      }
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
					$query = "UPDATE Pis_content SET tag=:tag,title = :title, urlImage = :urlImage, link = :link, isVideo = :isVideo, description = :description, author = :author, dateContent = :dateContent WHERE idContent=:idContent";
	        $parametros = array(':tag'=> $tag,':title'=> $title,':urlImage'=> $image_name,':link'=> $link, ':isVideo'=> $isVideo,':description'=> $description, ':author'=> $author,':dateContent'=> date("Y-m-d H:i:s"), ':idContent' => $idContent);
					if (isset($_POST['pdfNotChange']) && $_POST['pdfNotChange'] == '1' ) {

		      }else{
		        if($_FILES["pdf"]["name"]!="")
		        {
		            $ext = pathinfo($_FILES["pdf"]["name"], PATHINFO_EXTENSION);
		            $pdf_name = 'pdf-'.$fecha.'.'.$ext;
		            //echo $image_name;
		            //$imageName = date_timestamp_get($date) . basename($_FILES["fileToUpload"]["name"]);
		            $target_file = $target_dir . $pdf_name;
		            //echo $target_file;
		            $moved = move_uploaded_file($_FILES["pdf"]["tmp_name"], $target_file);
		        }
						$query = "UPDATE Pis_content SET tag=:tag,title = :title, urlImage = :urlImage, urlPdf = :urlPdf, link = :link, isVideo = :isVideo, description = :description, author = :author, dateContent = :dateContent WHERE idContent=:idContent";
		        $parametros = array(':tag'=> $tag,':title'=> $title,':urlImage'=> $image_name,':urlPdf'=> $pdf_name,':link'=> $link, ':isVideo'=> $isVideo,':description'=> $description, ':author'=> $author,':dateContent'=> date("Y-m-d H:i:s"), ':idContent' => $idContent);
		      }
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
        if(isset($_POST['idContent']) && $_POST['idContent'] != '-1') {
          //Edit content

          $pdoconnector->executeQuery($query,$parametros);
        }else{
          //ADD content
					$query = 'INSERT INTO Pis_content (tag,title,urlPdf,urlImage,link,isVideo,description,author,type,dateContent,uploadBy,flagActive) VALUES (:tag,:title,:urlPdf,:urlImage,:link,:isVideo,:description,:author,:type,:dateContent,:uploadBy,:flagActive)';
        	$parametros = array(':tag'=> $tag,':title'=> $title,':urlPdf'=> $pdf_name,':urlImage'=> $image_name,':link'=> $link, ':isVideo'=> $isVideo, ':description'=> $description, ':author'=> $author, ':type'=> $type,':dateContent'=> date("Y-m-d H:i:s"), ':uploadBy' => $idAdmin, ':flagActive' => 1);
          $pdoconnector->executeQuery($query,$parametros);
        }
        $resultado ['exito'] = '1';
  	    $resultado ['datos'] = $parametros;
      }
	  }
    echo json_encode($resultado);
?>
