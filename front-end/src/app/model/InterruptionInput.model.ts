
export class InterruptionInput {

  public currentYear: string;
  public yearOfStudy: string;
  public startingSemester: number;
  public fromUniversityYear: number;
  public numberOfSemesters: number;

  constructor(public year: string, public cYear: string, public sSem: number, public uYear: number, public nOfSem: number) {
    this.currentYear = cYear;
    this.yearOfStudy = year;
    this.startingSemester = sSem;
    this.fromUniversityYear = uYear;
    this.numberOfSemesters = nOfSem;
  }
}