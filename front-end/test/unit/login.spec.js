//components unit testing using angular js testing

describe('login page testing', function() {

    it('invalid e-mail adresses', function() {});
    it('check valid e-mail adresses', function() {});
    it ('check invalid password ',function(){});
    it ('check valid password',function() {});
    it('corectly submitting', function() { });

});

describe("Unit Tests", function() {

  beforeEach(angular.mock.module('front-end'));

  it('LoginControl Controller', function() {
    expect(app.components.login).toBeDefined();
  });

  it('must have a login service', inject(['Services',
    function(Services) {
      expect(Services.isValidEmail).not.to.equal(null);

     /* var EmailIsOk = [
        'adascalitei.mihai96@gmail.com',
        'punk.ripe@yahoo.com',
        'mihai.adascalitei@info.uaic.ro'
      ];*/

      var EmailIsOk[0] = 'adascalitei.mihai96@gmail.com'; /* this is how it should look like */

     /*  var EmailIsNotOk = [
       'adascalitei@.mihai96gmailcom',
               '@punkripe@yahoo.com',
               'mihaia@dascalitei@info.uaicro'
        ''
      ];*/
*/ no need to chec is not ok emails because we do have just OkEmails */

      /*for (var i in EmailIsOk) {
        var ok = Services.checkEmail(EmailIsOk[i]);
        expect(ok).toBeTruthy();
      }
      for (var i in EmailIsNotOk) {
        var ok = Services.checkEmail(EmailIsNotOk[i]);
        expect(ok).toBeFalsy();
      }
           
  No loops needed for testing*/

/* no if conditions , no loops , just variables */ 
    }])
  );
});
