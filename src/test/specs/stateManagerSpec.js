require(["config"], function(config){	
	requirejs.config(config);


	define(['app/StateManager'], function( StateManager) {

	

		// Cargamos nuestra config para simular el entorno de desarrollo/produccion

		describe("Conjunto de test que prueban el manejo de estados del stateManager", function(){

			it("El stateManager carga correctamente" ,function(){
				//expect(StateManager).not.toBeUndefined();
				//stateManager = StateManager.create({});	
			});
			beforeEach(function(){
				
			});

			it("El stateManager comienza con")

		});
	});
});