(function(root){
	require(["config"], function(config){
		requirejs.config(config);
		require(['jquery', 'cookies', "App", "ember", "i18n", "controllers/LoginController", "app/StateManager", "app/locHelpers",
			// Aqui se cargaran todos los ficheros de idioma, aparte de agregarlos al config.js
			"locEs", "locEn"],
			function($, cookies , App, Ember, i18n, LoginController, StateManager){
				$.cookie.json = true
				var app_name = config.app_name || "App";
				var loc = null;

				var options = loadOptions();

				loc = loadLoc(options);

				//Actualizamos la cookie con el idioma que ha elegido la aplicacion
				$.cookie('options', options);

				App.loginController = LoginController;
				
				App.stateManager = StateManager.create({
					
				});					

				Em.I18n.translations = loc;

				Ember.LOG_VERSION = false;
				root[app_name] = App = Ember.Application.create(App);
		});
	});
})(this);
