<?php
  	header("Access-Control-Allow-Origin: *");
	require('lib/config.php');

	class Informacion{
	    public $pidm;
	    public $nombre;
	    public $alias;
	}

	$resultado = array();
    $resultado ['exito'] = '0';
    $resultado ['datos'] = array();

	if(isset($_POST['docu']))
    {
    	$docu = $_POST['docu'];
    	$status = false;// si esxiste la cedula o no

    	$oci_usuario = "emobileusr";
	    $oci_pass = "uninorte01";

	    $ora_db_location = "(DESCRIPTION =
	        (ADDRESS = (PROTOCOL = TCP)(HOST = 172.16.11.30)(PORT = 1521))
	        (CONNECT_DATA=(SERVER=DEDICATED)(SERVICE_NAME= PROD))(Client_CSet = UTF-8))";
	    $conn = oci_connect($oci_usuario, $oci_pass, $ora_db_location) or die;

	    if($conn)
    	{
    		//SACO EL PIDM
		    $sql = "Select SZRDOCU_PIDM
	        From Szrdocu
	        Where SZRDOCU_DOCU = :cedula";
		    $stmt = oci_parse($conn,$sql);
		    oci_bind_by_name($stmt,":cedula",$docu);
		    oci_execute($stmt);
		    while($row=oci_fetch_array($stmt))
		    {
		    	$status = true;
		    	$pidm = $row['SZRDOCU_PIDM'];
		    }

		    if ($status)
		    {
		    	$query = "select s.* from spriden s where s.SPRIDEN_pidm=:pidm and s.SPRIDEN_CHANGE_IND is null";
			    $sql = oci_parse($conn, $query);
			    oci_bind_by_name($sql,":pidm",$pidm);
			    oci_execute($sql);

			   	while($row=oci_fetch_assoc($sql))
			    {
			    	$informacion = new Informacion();
			        $informacion->pidm = $row['SPRIDEN_PIDM'];
			        $informacion->nombre = $row['SPRIDEN_LAST_NAME']." ".$row['SPRIDEN_FIRST_NAME']." ".$row['SPRIDEN_MI'];

			        $pidm = $row['SPRIDEN_PIDM'];

					$sql2 = "select gobtpac_external_user from gobtpac WHERE gobtpac_pidm ='".$pidm."'";
				    $stmt1 = oci_parse($conn,$sql2);
				    oci_execute($stmt1);
				    $a = array();
				    while($row2=oci_fetch_array($stmt1))
				    {
				      $a[] = $row2;

				    }
				    $informacion->alias = $a[0][0];
				    //echo "ALIAS: ".$a[0][0]."</br>";

				    $resultado['exito'] = '1';
			        $resultado['datos'] = $informacion;
					$informacion = null;

			      	/*echo "CODIGO: ".$row['SPRIDEN_ID']."</br>";
			      	echo "A: ".$row['SPRIDEN_LAST_NAME']."</br>";
			      	echo "A: ".$row['SPRIDEN_FIRST_NAME']."</br>";
			      	echo "A: ".$row['SPRIDEN_MI']."</br>";
			      	echo "A: ".$row['SPRIDEN_ENTITY_IND']."</br>";
			      	echo "A: ".$row['SPRIDEN_USER']."</br>";
			      	echo "A: ".$row['SPRIDEN_SEARCH_LAST_NAME']."</br>";*/
			    }
		    }
		    else
		    {
		    	//CEDULA NO EXISTE
		    	$resultado['exito'] = '2';
		        $resultado['datos'] = null;
		    }
		}
		echo json_encode($resultado);
    }
    oci_close($conn);
?>
