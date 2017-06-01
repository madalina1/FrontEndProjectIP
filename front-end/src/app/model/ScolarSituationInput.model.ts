
export class ScolarSituationInput {

  public currentYear: string;
  public yearOfStudy: string;
  public hasBroughtReceipt: string;

  constructor(public year: string, public cYear: string, public hasReceipt: string) {
    this.yearOfStudy = year;
    this.currentYear = cYear;
    this.hasBroughtReceipt = hasReceipt;
  }
}