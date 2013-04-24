define(['ember'],function(Ember){

	MenuSelectColorController = Ember.Controller.extend({
		needs: ['Color', 'Colors'],
		init: function(){
			this._super();
		},
		changeSelectedColor : function(newColor, stateManager){
			/* Si no se le pasa ningun StateManager usa por defecto el de App */
			if(stateManager == undefined){
				stateManager = App.stateManager;
			}
			stateManager.set("colorSelected", newColor.name);
			stateManager.saveState();
		}
	});
	return MenuSelectColorController;
});