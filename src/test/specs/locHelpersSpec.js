define(['app/locHelpers'], function() {
  describe("Conjunto de test que prueban las funciones de Localizacion", function(){
    it("Las funciones existen",function(){
      expect(loadLoc).not.toBeUndefined();
      expect(guessLanguage).not.toBeUndefined();
      expect(loadOptions).not.toBeUndefined();
    });
    describe("La funcion setLanguage",function(){
      it("Nos devuelve en-US, si la localizacion del navegador es en-US",function(){
        expect(setLanguage('en-US')).toEqual("en-US");
      });
      it("Nos devuelve en, si la localizacion del navegador no la soporta la aplicacion", function(){
        expect(setLanguage('fr')).toEqual("en");
      });
    });
  });
});