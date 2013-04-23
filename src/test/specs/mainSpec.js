define(function() {
  describe("Comprobacion de que las librerias se hayan cargado correctamente", function() {
    it("Ember se ha cargado", function() {
      expect(Ember).not.toBeUndefined();
    });
    it("jQuery se ha cargado", function() {
      expect($).not.toBeUndefined();
    });
    it("Handlebars se ha cargado", function() {
      expect(Handlebars).not.toBeUndefined();
    });
    it("Require se ha cargado", function() {
      expect(require).not.toBeUndefined();
    });
  });
});