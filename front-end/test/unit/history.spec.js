//components unit testing using angular js testing

describe('access history page testing', function() {

    it('access history adresses', function() {});
    it('check access history adresses', function() {});
    it('corectly submitting', function() { });
});

describe("Unit Tests", function() {

  beforeEach(angular.mock.module('front-end'));

  it('HistoryControl Controller', function() {
    expect(app.components.history).toBeDefined();
  });

  it('must have a URL adress service', inject(['Services',
    function(Services) {
      expect(Services.isValidAdress).not.to.equal(null);



      var AdressIsOk[0] = 'http://localhost:9666/app/document/history/';
    }])
  );
});
