
export class DiplomaInput{

  public currentYear: string;
  public yearOfStudy: string;

  constructor (public year: string, public cYear: string) {
    this.currentYear = cYear;
    this.yearOfStudy = year;
  }
}