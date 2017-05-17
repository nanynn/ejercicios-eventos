

var boton = document.getElementById('demo');
boton.addEventListener('click', function() {
	alert('¡HOLA MUNDO!');
});

function cargarPagina(){
		alert('La pagina esta completamente cargada');
}

function sobreElemento(){
var dato = document.getElementById('info');
dato.addEventListener('mouseout', function(){
	alert('Estás sobre mí');
});

dato.addEventListener('mouseover', function(){
	alert('No estás sobre mí');
});
}