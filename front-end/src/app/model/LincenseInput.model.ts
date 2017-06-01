
export class LicenseInput {

  public graduationYear: number;
  public dateReceiptLinguisticCompetence: string;
  public paymentReceiptLinguisticCompetence: number;
  public dateReceiptRedoLicenseExam: string;
  public paymentReceiptRedoLicenseExam: number;
  public licenseTopic: string;
  public coordinatorProf: string;
  public phoneNumber: string;

  constructor(public gYear: number, public lingDate: string, public lingPayment: number, public redoDate: string,
      public redoPayment: number, public topic: string, public prof: string, public phoneNr: string) {
    this.graduationYear = gYear;
    this.dateReceiptLinguisticCompetence = lingDate;
    this.paymentReceiptLinguisticCompetence = lingPayment;
    this.dateReceiptRedoLicenseExam = redoDate;
    this.paymentReceiptRedoLicenseExam = redoPayment;
    this.licenseTopic = topic;
    this.coordinatorProf = prof;
    this.phoneNumber = phoneNr;
  }
}