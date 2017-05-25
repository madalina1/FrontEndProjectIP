/**
 * Cererea intrerupere studii
 */
export class InterruptionRequestDoc extends Document {

  public id: number;
  public documentName: string;
  public studentName: string;
  public currentYear: number;
  public yearOfStudy: number;
  public startingSemester: number;
  public fromUniversityYear: number;
  public numberOfSemesters: number;

  constructor(object: any) {
    super();
    this.id = object.id;
    this.documentName = object.documentName;
    this.studentName = object.studentName;
    this.currentYear = object.currentYear;
    this.yearOfStudy = object.yearOfStudy;
    this.startingSemester = object.startingSemester;
    this.fromUniversityYear = object.fromUniversityYear;
    this.numberOfSemesters = object.numberOfSemesters;

  }

}