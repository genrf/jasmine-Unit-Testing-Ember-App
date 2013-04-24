define(['controllers/MenuSelectColorController', 'controllers/ColorController', 'controllers/ColorsController'], function(menuSelectColorController, ColorController, ColorsController) {

	describe("Conjunto de test que prueban el manejo de estados del stateManager", function(){

		var contfalsoController = {};

		var App = Ember.Application.create({
			ColorsController : contfalsoController,
			ColorController : ColorController,
			menuSelectColorController : menuSelectColorController,
			stateManager : contfalsoController
		})

		var controlador = menuSelectColorController.create({
			container : App.__container__
		})

		var stateManagerFalso = {
			set : function(){
				console.log("Ha llamado al metodo set")
				console.log(arguments)
			},
			saveState : function(){
				console.log("Ha llamado al metodo saveState")
			}
		}

		var color = {
			name : "red"
		}

		controlador.changeSelectedColor(color, stateManagerFalso)
		

		it("El stateManager carga correctamente" ,function(){
			//expect(cont).not.toBeUndefined();	
		});

		it("El stateManager comienza co")

	});
})