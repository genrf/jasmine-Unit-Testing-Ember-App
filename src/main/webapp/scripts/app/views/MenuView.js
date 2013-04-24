define([
	"ember",
	"text!templates/menuTemplate.html",
	"app/StateManager"
], function(Ember, menuTemplate) {
	var sm = require("app/StateManager");
	var MenuView = Ember.View.extend({
		defaultTemplate: Ember.Handlebars.compile(menuTemplate)
	});
	return MenuView;
});