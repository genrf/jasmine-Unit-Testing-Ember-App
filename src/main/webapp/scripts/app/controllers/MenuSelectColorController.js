define(['ember'],function(Ember){

	MenuSelectColorController = Ember.Controller.extend({
		needs: ['Color', 'Colors'],
		init: function(){
			this._super();
		},
		changeSelectedColor : function(newColor){
			/* Si no se le pasa ningun StateManager usa por defecto el de App */
			App.stateManager.set("colorSelected", newColor.name);
			App.stateManager.saveState();
		}
	});
	return MenuSelectColorController;
});