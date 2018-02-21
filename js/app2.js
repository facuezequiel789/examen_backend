var btnTodos =  $('#mostrarTodos');
var datos = {todos: ""}
var contBienes =  $('#bienes');
var submitButton = $('#submitButton');

var cargarSelect =  function(){
     $('select').material_select() /* que hace esto???*/
    };
cargarSelect();
    
var renderizar = function(data){
	contBienes.html(''); //vaciamos el div contBienes
	var newData = JSON.parse(data);
	//console.log(newData);
	for (i = 0; i < newData.length; i++) {
		

        var bienTemplate = '<div class="itemMostrado card horizontal">'+
                               '<img src="img/home.jpg">'+
                             '<div class="card-stacked">'+
                               '<div class="card-content">'+
                                 '<div>'+
                                   '<b>Direccion: </b>:direccion:<p></p>'+
                                 '</div>'+
                                 '<div>'+
                                   '<b>Ciudad: </b>:ciudad:<p></p>'+
                                 '</div>'+
                                 '<div>'+
                                   '<b>Telefono: </b>:telefono:<p></p>'+
                                 '</div>'+
                                 '<div>'+
                                   '<b>Código postal: </b>:codigo_postal:<p></p>'+
                                 '</div>'+
                                 '<div>'+
                                   '<b>Precio: </b>:precio:<p></p>'+
                                 '</div>'+
                                 '<div>'+
                                   '<b>Tipo: </b>:tipo:<p></p>'+
                                 '</div>'+
                               '</div>'+
                               '<div class="card-action right-align">'+
                                 '<a href="#">Ver más</a>'+
                               '</div>'+
                             '</div>'+
                           '</div>';

	        var newBien = bienTemplate.replace(':direccion:', newData[i]['Direccion'])
	                                  .replace(':ciudad:', newData[i]['Ciudad'])
	                                  .replace(':telefono:', newData[i]['Telefono'])
	                                  .replace(':codigo_postal:', newData[i]['Codigo_Postal'])
	                                  .replace(':precio:', newData[i]['Precio'])
	                                  .replace(':tipo:', newData[i]['Tipo'])

		contBienes.append(newBien)
        }
}//cierra renderizar


var toNumero = function(num){
      var numero = num
      var newNumero = Number(numero.replace('$', '').replace(',', '').replace(' ', ''))
      return newNumero
    };

var searchBienes =  function(){     
      //seleccionamos la opcion seleccionada del input select*/
      var ciudad = $('form').find('select[id="selectCiudad"]').val()
      var tipo = $('form').find('select[id="selectTipo"]').val()
      var from =  toNumero($('.irs-from').text())
      var to =  toNumero($('.irs-to').text())

      var datoss = {ciudad: ciudad, tipo: tipo, from: from, to: to}//viajan al servidor como parametros mediante post
      //hacemos la peticion ajax, mediante POST se le envia ciudad, tipo, from y to
       
       $.ajax({
        url: 'buscador.php',
        type: 'POST',
        data: datoss
      }).done(function(data){              

        renderizar(data);
     
      })
    };

    var cargarTodos = function(){
//a buscador.php como dato se le envia el parametro todos, ya que en el servidor se pregunta si existe POST['todos']
        $.ajax({
        	url: 'buscador.php',
        	type: 'POST',
        	data: datos
      	}).done(function(data){              

        	renderizar(data);     
      })
    }


btnTodos.on('click',function(){
	cargarTodos();
});

submitButton.on('click',function(){
       searchBienes();
 });




/*
	 cuando se hace click en el boton se procede a
	  hacer una llamada con ajax a buscador.php,
	   y lo que esta pagina retorna se muestra con javascript y html.	
*/


