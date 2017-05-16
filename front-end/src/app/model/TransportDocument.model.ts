export class TransportRequestDocument extend Document{
  private id: Long;
  private documentName: string;
  private studentName: string;
  private nrSeriesId: string;
  private yearOfStudy: Integer;

  constructor(object: any) {
    this.id = object.id;
    this.documentName = object.documentName;
    this.studentName = object.studentName;
    this.nrSeriesId = object.nrSeriesId;
    this.yearOfStudy = object.yearOfStudy;
  }
}