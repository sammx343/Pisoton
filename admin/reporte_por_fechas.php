<?php
    header("Access-Control-Allow-Origin: *");
	require_once 'lib/pdoconnector.php';
	require('lib/config.php');

	date_default_timezone_set('America/Bogota');

	$resultado = array();
	$resultado ['exito'] = '0';
	$resultado ['datos'] = array();

    if(isset($_POST['fecha_inicio']) && isset($_POST['fecha_fin']))
    {
	    $pdoconnector = new PDOBaseConnector(); // Crear instancia para manejo de operaciones con bases de datos

    	$fecha_inicio = $_POST['fecha_inicio'];
        $fecha_fin = $_POST['fecha_fin'];

        $pdoconnector->setConnectionData($db_host,$db_user,$db_password,'mysql',$db_schema);

        $query = 'SELECT distinct d.*, h.vendidos
                  FROM books_description d
                  INNER JOIN books_sold s ON s.issbn = d.issbn
                  INNER JOIN books_history h ON h.issbn = d.issbn
                  WHERE s.fecha >= :fecha_inicio AND s.fecha <= :fecha_fin';
        $parametros = array(':fecha_inicio'=> $fecha_inicio,':fecha_fin'=> $fecha_fin);
        $records = $pdoconnector->executeQuery($query,$parametros);

        $size = sizeof($records);
        if($size - 1 > 0)
        {
            //ENCONTRO RESULTADOS
            $resultado ['exito'] = '1';
            $resultado ['datos'] = $records;
        }
        else
        {
            //NO ENCONTRO RESULTADO
            $resultado ['exito'] = '2';
            $resultado ['datos'] = null;
        }
	}
    echo json_encode($resultado);
?>
