import { LoginService, User } from '../../services/login.service';
import { Component } from '@angular/core';
import { Student } from '../../model/Student.model';

@Component({
  selector: 'login-form',
  providers: [LoginService],
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {

  public user = new User('', '');
  public errorMsg = '';
  public loggedIn: boolean;

  /**
   * Inject the LoginService where we make the http request to see
   * if webmail & password are in the database
   * @param _service
   */

  constructor(private _service: LoginService) {
    this.loggedIn = true;
  }

  /**
   * We call the function authentificate from LoginService
   * If credentials are found int the database we receive data
   * that contains information about that secretary if not we call
   * an error function
   */

  login() {

    this._service.authentificate(this.user)
      .subscribe(
        (data) => this.retrieveData(data),
        (error) => this.showError());
  }

  /**
   * Error message if something fails on the server side to see in the console
   */

  showError() {
    this.errorMsg = 'Webmail si/sau parola gresita!';
    console.log("Failed to retrieve data from server.");
  }

  /**
   * We make a new Student Object and populate it with the data that
   * we recieve from database
   * We save into the localStorage some information about the person that
   * just logged in
   * We also call the login() function from LoginService that will route the
   * user to the Home Page of the application
   * @param responseData - data that we receive from database
   */

  retrieveData(responseData: any) {
    console.log("Successfully logged in");
    let student = new Student(responseData);
    if (student.id == null) {
      this.errorMsg = 'Webmail si/sau parola gresita!'
    } else {

      localStorage.setItem("id", student.id.toString());

      console.log(student.firstName);
      console.log(student.lastName);
      this._service.login();

    }
  }
}