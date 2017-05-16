export class InterruptionRequestDocument extend Document{
  private id: Long;
  private documentName: string;
  private studentName: string;
  private currentYear: Integer;
  private yearOfStudy: Integer;
  private startingSemester: Integer;
  private fromUniversityYear: Integer;
  private numberOfSemesters: Integer;



  constructor(object: any) {
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
