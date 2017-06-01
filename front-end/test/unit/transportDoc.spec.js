//components unit testing using angular js testing

describe('TransportDoc testing', function() {

    it('invalid date CI adresses', function() {});
    it('check valid date CI adresses', function() {});


});

describe("Unit Tests", function() {

  beforeEach(angular.mock.module('front-end'));

  it('TransportControl Controller', function() {
    expect(app.components.transportDoc).toBeDefined();
  });


  it('must have a TransportDoc service', inject(['Services',
    function(Services) {
      expect(Services.isValidDate).not.to.equal(null);


      var DateIsOk[0] = 'XR 389718'; /* this is how it should look like */

      var DateIsNotOk[0] = '389718 XR';

    }])
  );
});
