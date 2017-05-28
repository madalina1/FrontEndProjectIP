
export class TransportInput{

  public nrSeriesId : string;
  public yearOfStudy : string;

  constructor (public nr: string, public  year:string) {
   this.nrSeriesId = nr;
   this.yearOfStudy = year;
  }
}