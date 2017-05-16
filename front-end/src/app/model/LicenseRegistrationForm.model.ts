export class LicenseRegistrationForm extend Document{
  private id: Long;
  private documentName: string;
  private studentName: string;
  private marticolNumber: string;
  private graduationYear: Integer;
  private dataReceiptLinguisticCompetence: string;
  private paymentReceiptLinguisticCompetence: Integer;
  private dateReceiptRedoExam: string;
  private paymentReceiptRedoExam: Integer;
  private licenseTopic: string;
  private coordinatorProf: string;
  private currentDateToday: string;
  private phoneNumber: string;


  constructor(object: any) {
    this.id = object.id;
    this.documentName = object.documentName;
    this.studentName = object.studentName;
    this.matricolNumber = object.matricolNumber;
    this.graduationYear = object.graduationYear;
    this.dataReceiptLinguisticCompetence = object.dataReceiptLinguisticCompetence;
    this.paymentReceiptLinguisticCompetence = object.paymentReceiptLinguisticCompetence;
    this.dateReceiptRedoExam = object.dateReceiptRedoExam;
    this.paymentReceiptRedoExam = object.paymentReceiptRedoExam;
    this.licenseTopic = object.licenseTopic;
    this.coordinatorProf = object.coordinatorProf;
    this.currentDateToday = object.currentDateToday;
    this.phoneNumber = object.phoneNumber;
  }
}
