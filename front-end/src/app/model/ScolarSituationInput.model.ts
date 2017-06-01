
export class ScolarSituationInput {


  public currentYear: string;
  public yearOfStudy: string;

  constructor(public year: string, public cYear: string) {
    this.yearOfStudy = year;
    this.currentYear = cYear;
  }
}