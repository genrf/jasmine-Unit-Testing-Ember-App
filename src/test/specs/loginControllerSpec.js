define(['app/controllers/LoginController', 'config'], function(loginController,config) {
	require.config(config);
	describe("Conjunto de test que prueban la funcionalidad del  loginController ",function(){
		it("LoginController está definido ",function(){
			expect(loginController).toBeDefined();
		})
		it("La funcion attempLogin cambia el estado, si la validacion es correcta", function(){
			loginController.userName='pepe';
			loginController.repeatedUserName='pepe';
			App = {};
			App.stateManager={};
			App.stateManager.loginSuccess = jasmine.createSpy();
			loginController.attemptLogin();
			expect(App.stateManager.loginSuccess).toHaveBeenCalled();
		})

		describe("La funcion de attemptLogin en caso incorrecto" , function(){
			beforeEach(function(){
				loginController.userName='unnombre';
				loginController.repeatedUserName='otronombre';

				App = {};
				App.stateManager={};
				App.stateManager.loginSuccess = jasmine.createSpy();
				loginController.attemptLogin();

			});
			it('no llama a la funcion que cambia el estado', function(){				
				expect(App.stateManager.loginSuccess).not.toHaveBeenCalled();
			});

			it('cambia las variable de error', function(){
				expect(loginController.hasError).toBe(true);
			});

			it('el tipo de error  es errorMismatch', function(){
				expect(loginController.errorMismatch).toBe(true);
				expect(loginController.errorEmpty).toBe(false);
			})
			it('si los campos estan vacios que el error sea de tipo errorEmpty',function(){
				loginController.userName = "";
				loginController.repeatedUserName= "";
				loginController.attemptLogin();						
				expect(loginController.errorMismatch).toBe(false);
				expect(loginController.errorEmpty).toBe(true);				
			})			
					
		})

	});
});