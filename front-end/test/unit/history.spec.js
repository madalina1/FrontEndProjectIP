//components unit testing using angular js testing

describe('access history page testing', function() {

    it('access history adresses', function() {});
    it('check access history adresses', function() {});

});

describe("Unit Tests", function() {

  beforeEach(angular.mock.module('front-end'));

  it('LoginControl Controller', function() {
    expect(app.components.history).toBeDefined();
  });

  it('must have URL adress service', inject(['Services',
    function(Services) {
      expect(Services.isValidAdress).not.to.equal(null);



      var AdressIsOk[0] = 'http://localhost:9666/app/document/history/'; /* this is how it should look like */

    }])
  );
});
