define(['app/locHelpers', 'config'], function(locHelpers,config) {

	require.config(config)


	describe("Conjunto de test que prueban las funciones de Localizacion", function(){

		it("Las funciones existen",function(){
			expect(locHelpers.loadLoc).not.toBeUndefined();
			expect(locHelpers.guessLanguage).not.toBeUndefined();
			expect(locHelpers.loadOptions).not.toBeUndefined();
		});

		describe("La funcion setLanguage",function(){

			it("Nos devuelve en-US, si la localizacion del navegador es en-US",function(){
				expect(locHelpers.setLanguage('en-US')).toEqual("en-US");
			});

			it("Nos devuelve en, si la localizacion del navegador no la soporta la aplicacion", function(){
				expect(locHelpers.setLanguage('fr')).toEqual("en");
			});

		});

		describe("La funcion load options carga correctamente el lenguaje en funcion de la opcion guardada en la cookie", function(){
			var options;

			it("Comprobamos que en caso de no existir ningun idioma seleccionado en la cookie llama a la funcion guessLanguage", function(){
				
				options = {
					locSelected : null
				};

				locHelpers.guessLanguage = jasmine.createSpy();

				locHelpers.loadLoc(options);

				expect(locHelpers.guessLanguage).toHaveBeenCalled();

			})

			it("Comprobamos que hace require al fichero del idioma español, si en la cookie el locSelected es 'es' ", function(){

				options = {
					locSelected : 'es'
				};

				require = jasmine.createSpy();

				locHelpers.loadLoc(options);

				expect(require).toHaveBeenCalledWith('locEs');

			});


		});
	});

});