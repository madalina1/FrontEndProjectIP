/**
 * Student model
 */

export class Student {
  public id: number;
  public matricolNumber: string;
  public firstName: string;
  public lastName: string;
  public cnp: number;
  public identityCardId: string;
  public fatherInitial: string;
  public adress: String;
  public webmail: String;
  public birthDate: String;
  public password: String;


  constructor(object: any) {
    this.id = object.id;
    this.matricolNumber = object.matricol_number;
    this.firstName = object.first_name;
    this.lastName = object.last_name;
    this.cnp = object.cnp;
    this.identityCardId = object.identity_card_id;
    this.fatherInitial = object.father_initial;
    this.adress = object.adress;
    this.webmail = object.webmail;
    this.birthDate = object.birth_date;
    this.password = object.password;
  }
}
