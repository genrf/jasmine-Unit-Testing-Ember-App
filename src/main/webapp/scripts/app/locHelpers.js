define(['cookies', 'locEs' ,'locEn'],function(){

	var locHelpers = {};

/*
	Funcion que carga el idioma que considere la aplicacion correcto ( basandose en factores como el lenguaje del navegador y los idiomas disponibles ), y escribe una cookie en el navegador
	con la informacion sobre el lenguaje seleccionado.
*/
locHelpers.loadLoc = function(options){
	var loc;
	var options = options;
	var locSelected = options.locSelected;
	var language;
	
	if(locSelected != null){
		language = locSelected;

	}else{
		language = locHelpers.guessLanguage();
	}

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
locHelpers.setLanguage = function(userLang){
	
	var selectedLang;
	var supportedLangs = ['en-US', 'en-UK', 'en', 'es', 'es-ES'];

	if(supportedLangs.contains(userLang)){
		selectedLang = userLang;
	}else{
		selectedLang = "en";
	}

	return selectedLang
}

locHelpers.guessLanguage = function(){
	var lang = this.setLanguage(navigator.language);
	return lang;
}

/*
	Funcion que carga las opciones almacenadas en la cookie, devuelve un objeto con notacion JSON con las opciones
*/
locHelpers.loadOptions = function(){
	var options = $.cookie('options');
	if(options){
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

return locHelpers;

});