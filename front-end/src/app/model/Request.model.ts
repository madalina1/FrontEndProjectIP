
export class Request {
  public id: number;
  public studentId: number;
  public documentId: number;

  constructor(object: any) {
    this.id = object.id;
    this.studentId = object.studentId;
    this.documentId = object.documentId;
  }
}
