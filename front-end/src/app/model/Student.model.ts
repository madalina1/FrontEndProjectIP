export class Student {
  private id: Long;
  private matricolNumber: string;
  private firstName: string;
  private lastName: string;
  private cnp: Long;
  private identityCardId: string;
  private fatherInitial: string;
  private adress: String;
  private webmail: String;
  private birthDate: String;
  private password: String;


  constructor(object: any) {
    this.id = object.id;
    this.matricolNumber = object.matricolNumber;
    this.firstName = object.firstName;
    this.lastName = object.lastName;
    this.cnp = object.cnp;
    this.identityCardId = object.identityCardId;
    this.fatherInitial = object.fatherInitial;
    this.adress = object.adress;
    this.webmail = object.webmail;
    this.birthDate = object.birthDate;
    this.password = object.password;
  }
}
