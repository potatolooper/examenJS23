/* 
	Código en JavaScript
	Nome do ficheiro: ex5.js
	Usado: 
*/
var cancion;
cancion =prompt('Traduce:cancion');
var casa;
 casa =prompt('Traduce:casa');
 var  arbol =prompt('Traduce:arbol');
var  gato =prompt('Traduce:gato');
var  trompeta =prompt('Traduce:trompeta');
var i = 0;


function repetir (){
	document.location.reload();
	return;
}



//var numero = Math.random();
//document.write(numero)

switch(cancion){

	case 'song':
	
		i = i + 10;
		break;

	default:
	 alert('incorrecto cancion');
	 break;	
}
switch(casa){

	case 'house':
	
		i = i + 10;
		break;

	default:
	 alert('incorrecto casa');
	 break;	
}switch(arbol){

	case 'tree':
	
		i = i + 10;
		break;

	default:
	 alert('incorrecto arbol');
	 break;	
}switch(gato){

	case 'cat':

		i = i + 10;
		break;

	default:
	 alert('incorrecto gato');
	 break;	
}
switch(trompeta){

	case 'trumpet':
	document.write('Hola')
		i = i + 10;
		break;

	default:
	 alert('incorrecto trompeta');
	 break;	
}

	
document.write(i)



document.write('<br> <button onclick="repetir()"> Haz click si quieres repetir </button>')
