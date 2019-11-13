$().ready(function() {
	$.validator.addMethod("valueNotEquals", function(value, element, arg){
	  return arg !== value;
	}, "Escoja una opción");
	$("#formPis").validate({
		rules: {
			name:"required",
			phone:"required",
			city:"required",
			address:"required",
			email:"required",
			message:"required"
		},
		messages: {
			name: "Por favor, escriba su nombre",
			email: "Por favor, escriba su correo",
			city:"Por favor, escriba su ciudad",
			address:"Por favor, escriba su dirección",
			email:"Por favor, escriba su correo",
			message:"Por favor, escriba su mensaje"
		},
		submitHandler: function(form,event) {
				event.preventDefault();
				var name = $("#form_name").val();
				var phone = $("#form_phone").val();
				var city = $("#form_city").val();
				var address = $("#form_address").val();
				var email = $("#form_email").val();
				var message = $("#form_message").val();
				var formData = new FormData();
				formData.append('name', name);
				formData.append('phone', phone);
				formData.append('city', city);
				formData.append('address', address);
				formData.append('email', email);
				formData.append('message', message);
				gtag('event', 'maestros/pregunta');
				$.ajax({
		        type: "POST",
		        url: "https://comino.uninorte.edu.co/pisoton/admin/send-mail.php",
						processData: false,
						contentType: false,
						data:formData,
		        success: function(mensaje)
		        {
		            var obj = JSON.parse(mensaje);
		            if(obj.exito == "1")
		            {
									$("#form_name").val('');
									$("#form_phone").val('');
									$("#form_city").val('');
									$("#form_address").val('');
									$("#form_email").val('');
									$("#form_message").val('');
									$('#prueba').modal('show');
									$('#mensaje').text("Correo envíado satisfactoriamente");
		            }
		        },
		        error : function (mensaje)
		        {
		            $('#myModal').modal('hide');
		            $('#prueba').modal('show');
		            $('#mensaje').text("Se produjo un error en la petición, Vuelva a intentarlo");
		        }
		    });
		    return false;
  		}
	});
	$("#formNews").validate({
		rules: {
			name:"required",
			email:"required",
		},
		messages: {
			name: "Por favor, escriba su nombre",
			email: "Por favor, escriba su correo",
		},
		submitHandler: function(form,event) {
				event.preventDefault();
				var name = $("#formNews_name").val();
				var email = $("#formNews_email").val();
				var formData = new FormData();
				formData.append('name', name);
				formData.append('email', email);
				$.ajax({
		        type: "POST",
		        url: "https://comino.uninorte.edu.co/pisoton/admin/register.php",
						processData: false,
						contentType: false,
						data:formData,
		        success: function(mensaje)
		        {
		            var obj = JSON.parse(mensaje);
		            if(obj.exito == "1")
		            {
									$("#formNews_name").val('');
									$("#formNews_email").val('');
									$('#prueba').modal('show');
									$('#mensaje').text("Felicitaciones "+ obj.nombre +" te has inscrito en la comunidad Pisotón satisfactoriamente");
		            }
		        },
		        error : function (mensaje)
		        {
		            $('#myModal').modal('hide');
		            $('#prueba').modal('show');
		            $('#mensaje').text("Se produjo un error en la petición, Vuelva a intentarlo");
		        }
		    });
		    return false;
  		}
	});
	// var nIntervId;
	// var width= 0;
	// function changeWidth() {
	//   	setInterval(function(){
	//   		width += 20;
	//   		if(width>100){
	//   			width = 0;
	//   		}
	//   		$(".bar").css("width",width+"%");
	//   	}, 500);
	// }

});
