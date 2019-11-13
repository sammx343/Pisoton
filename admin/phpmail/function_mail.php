<?php
function email($remitente,$destinatario,$destinatario_oculto,$asunto,$mensaje,$ruta,$name){ 
	require_once('class.phpmailer.php');
	if($remitente!='' && $asunto!='' && $mensaje!=''){ 
		error_reporting(E_STRICT);
		date_default_timezone_set('America/Bogota');
		$mail             = new PHPMailer();
		$body             = file_get_contents('contents.html');
		$body             = eregi_replace("[\]",'',$body);
		$mail->CharSet 	  = 'UTF-8';
		$mail->IsSMTP(); 
		$mail->Host       = "unimail.uninorte.edu.co"; 
		$mail->SMTPDebug  = 1;                     // enables SMTP debug information (for testing)
												   // 1 = errors and messages
												   // 2 = messages only
		$mail->SMTPAuth   = false;
		$mail->Host       = "unimail.uninorte.edu.co";
		$mail->Port       = 25;

		$mail->SetFrom($remitente);
		$mail->Subject    = $asunto;
		$mail->AltBody    = utf8_decode($mensaje);

		// $mail->Body = utf8_decode($mensaje);

		$mail->Body = utf8_decode($mensaje);
		if($name != ""){
			$mail->AddAttachment($ruta,$name);
		}
		if($destinatario!=""){			
			$destinatarios = explode(";", $destinatario);
			for($i=0;$i<count($destinatarios);$i++){
				$mail->AddAddress($destinatarios[$i]);
			}
		}	
		if($destinatario_oculto!=""){		
			$destinatarios_ocultos = explode(";", $destinatario_oculto);
			for($i=0;$i<count($destinatarios_ocultos);$i++){
				$mail->AddBCC($destinatarios_ocultos[$i]);
			}
		}	

		if(!$mail->Send()) {
			return false;
		}else{
			return true;
		}

	}else{
			return false;
	}
}
	
 ?>
