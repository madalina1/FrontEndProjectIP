export class Secretary {
  public id: number;
  public firstName: string;
  public lastName: string;
  public webmail: String;
  public password: String;


  constructor(object: any) {
    this.id = object.id;
    this.firstName = object.firstName;
    this.lastName = object.lastName;
    this.webmail = object.webmail;
    this.password = object.password;
  }

}
