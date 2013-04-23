/*
	Funcion que carga el idioma que considere la aplicacion correcto ( basandose en factores como el lenguaje del navegador y los idiomas disponibles ), y escribe una cookie en el navegador
	con la informacion sobre el lenguaje seleccionado.
*/
function loadLoc(options){
	var options = options;
	var locSelected = options.locSelected;
	var language;
	if(locSelected != null){
		language = locSelected;
	}else{
		language = guessLanguage();
	}

	var lang;
	switch(language){
		case 'es': 
			options.locSelected = "es";	
			loc = require('locEs'); 
		break;

		case 'es-ES': 
			options.locSelected = "es";	
			loc = require('locEs');
		break;

		case 'en':
			options.locSelected = "en";	
			loc = require('locEn');
		break;

		case 'en-UK':
			options.locSelected = "en";	
			loc = require('locEn');
			break;
		case 'en-US':
			options.locSelected = "en";	
			loc = require('locEn');
			break;
	}
	return loc
}
/*
	Funcion interna de loadLoc que elige el lenguaje que considera correcto
*/
function setLanguage(userLang){
	var selectedLang;
	var supportedLangs = ['en-US', 'en-UK', 'en', 'es', 'es-ES'];

	if(supportedLangs.contains(userLang)){
		selectedLang = userLang;
	}else{
		selectedLang = "en";
	}

	return selectedLang
}

function guessLanguage(){
	setLanguage(navigator.language);
}

/*
	Funcion que carga las opciones almacenadas en la cookie, devuelve un objeto con notacion JSON con las opciones
*/
function loadOptions(){
	var options = $.cookie('options');
	if(options){
		console.debug("Se ha cargado la cookie de opciones");
	}else{
		// En caso de que no exista la cookie, creamos el objeto options con las opciones por defecto
		options = {
			isLogged : false,
			username : null,
			colorSelected : 'red',
			loc : null
		}
		// Y guardamos la cookie con las opciones por defecto
		$.cookie('options', options)
	}

	return options
}
