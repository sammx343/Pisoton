<?php
  error_reporting(E_ALL);
  ini_set('display_errors', 1);
  session_start();
  if( !isset($_SESSION['authorized']) ) header('Location: login.php');
  //require('lib/config.php');
  //ELIMINAR USUARIO
  require_once 'lib/pdoconnector.php';
  require('lib/config.php');
  $sql = "CREATE TABLE 'Pis_audioGuias' (
  'idAudioGuia' int(11) NOT NULL AUTO_INCREMENT,
  'title' varchar(255) DEFAULT NULL,
  'description' text,
  'url' varchar(255) DEFAULT NULL,
  PRIMARY KEY ('idAudioGuia')
) ENGINE=InnoDB AUTO_INCREMENT=14 DEFAULT CHARSET=utf8;";

  $connection = mysql_connect($db_host,$db_user,$db_password);
  mysql_select_db($db_schema,$connection);
  mysql_set_charset('utf8',$connection);

  $result = mysql_query($sql,$connection);
  mysql_close($connection);

?>
