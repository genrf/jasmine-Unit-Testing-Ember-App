define(["ember", 'cookies'], function(Ember, cookie){
	StateManager= Ember.StateManager.extend({
		isLogged: false,
		username: null,
		colorSelected: 'red',
		locSelected: 'en',
		
		init : function(){
			this._super();
			this.loadState();	
		},
		//Creamos una vista para el estado, para not logged será index
		notLoggedIn: Ember.State.create({
			enter: function(){
			}
		}),

		loggedIn: Ember.State.create({
			enter : function(manager){
				manager.set("isLogged", true);
			}
		}),

		loginSuccess: function(manager, username){
			this.transitionTo("loggedIn");
			this.set("isLogged", true);
			this.set("username", username);
			this.saveState();
			App.Router.router.transitionTo("menu.index")
		},

		saveState : function(){
			var options = {};
			options.isLogged = this.isLogged;
			options.username = this.username;
			options.colorSelected = this.colorSelected;
			options.locSelected = this.locSelected;
			$.cookie('options', options);
		},

		loadState : function(){
			var options = $.cookie('options');
			this.isLogged = options.isLogged;
			this.username = options.username;
			this.colorSelected = options.colorSelected;
			this.locSelected = options.locSelected;
		}
	});

	return StateManager;
}); 


