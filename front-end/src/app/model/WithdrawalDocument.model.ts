export class WithdrawalDocumentRequest extend Document{
  private id: Long;
  private documentName: string;
  private studentName: string;
  private series: string;
  private numberIdCard: Long;
  private studyYear: Long;
  private universityYear: Long;
  private typeOfCourses: string;
  private approveReason: string;
  private date: string;
  private signature: string;
  private seriesBac: string;
  private numberBac: Long;
  private numberSheet: Long;

  constructor(object: any) {
    this.id = object.id;
    this.documentName = object.documentName;
    this.studentName = object.studentName;
    this.series = object.series;
    this.numberIdCard = object.numberIdCard;
    this.studyYear = object.studyYear;
    this.universityYear = object.universityYear;
    this.typeOfCourses = object.typeOfCourses;
    this.approveReason =object.approveReason;
    this.date = object.date;
    this.signature = object.signature;
    this.seriesBac = object.seriesBac;
    this.numberBac = object.numberBac;
    this.numberSheet = object.numberSheet;
  }
}