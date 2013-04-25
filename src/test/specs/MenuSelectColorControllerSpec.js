
define(['controllers/MenuSelectColorController'], function(menuSelectColorController) {

	describe("Conjunto de test que prueban el manejo de estados del stateManager", function(){

		var stateManager = jasmine.createSpyObj('stateManager', ['set','saveState']);

		var dummyObject = {};

		window.App = Ember.Application.create({
			ColorsController : dummyObject,
			ColorController : dummyObject,
			menuSelectColorController : menuSelectColorController
		})

		App.stateManager = stateManager;

		/*
			By default, calling `Ember.Application.create()` will automatically initialize
			your application by calling the `Ember.Application.initialize()` method. If
			you need to delay initialization, you can call your app's `deferReadiness()`
			method. When you are ready for your app to be initialized, call its
			`advanceReadiness()` method.
		*/
		App.deferReadiness();
		var controlador = menuSelectColorController.create({
			container : App.__container__
		})

		var color = {
			name : "red"
		}

		

		

		it("El stateManager carga correctamente" ,function(){
			controlador.changeSelectedColor(color)

			expect(stateManager.set).toHaveBeenCalled();
			expect(stateManager.saveState).toHaveBeenCalled();
		});
	});
})
