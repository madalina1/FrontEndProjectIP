/**
 * Diploma request Document
 */
export class DiplomaRequestDoc extends Document {

  public id: number;
  public documentName: string;
  public studentName: string;
  public currentYear: string;
  public yearOfStudy: string;

  constructor(object: any) {
    super();
    this.id = object.id;
    this.documentName = object.documentName;
    this.studentName = object.studentName;
    this.currentYear = object.currentYear;
    this.yearOfStudy = object.yearOfStudy;
  }

}