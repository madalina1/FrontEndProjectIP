export class ScolarSituationDocument extend Document{
  private id: Long;
  private documentName: string;
  private studentName: string;
  private currentYear: Integer;
  private yearOfStudy: Integer;
  private hasBroughtReceipt: string

  constructor(object: any) {
    this.id = object.id;
    this.documentName = object.documentName;
    this.studentName = object.studentName;
    this.currentYear = object.currentYear;
    this.yearOfStudy = object.yearOfStudy;
    this.hasBroughtReceipt = object.hasBroughtReceipt;
  }
}
