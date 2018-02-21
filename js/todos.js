 $('#mostrarTodos').click(function(event){
 	 
 	event.preventDefault(); //para evitar q el form se envie por defecto
 	$.ajax(
		 	{
		 		url:'data-1.json',
		 		type: 'GET',
		 		 
		 	}

 		).done(function(data){ //data almacena la respuesta del servidor
 			alert(data);
 		}) 

 	 alert('HOLA');
 }); 	
