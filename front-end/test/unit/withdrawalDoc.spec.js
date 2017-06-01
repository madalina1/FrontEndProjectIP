describe('Cerere Retragere', function() {

    it('invalid CI ', function() {});
    it('check valid CI', function() {});
    it ('check invalid year ',function(){});
    it ('check valid year',function() {});
    it('corectly submitting', function() { });

});

describe("Unit Tests", function() {

  beforeEach(angular.mock.module('front-end'));

  it('CerereRetragere Controller', function() {
    expect(app.components.withdrawal).toBeDefined();
  });

  it('must have a Certificate service', inject(['Services',
    function(Services) {
      expect(Services.isValidCI).not.to.equal(null);


      var ValidCI[0] = 'XR 123456';
    }])
  );

  it ('must have a YearCheck service', inject(['Services',
  function (CheckYear) {
      var currentYear = 'take year from Certificate';
      var ValidYear[0] = Boolean (currentYear >= '2017');
  }])
  );
});