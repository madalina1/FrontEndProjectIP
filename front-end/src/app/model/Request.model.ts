export class Request {
  private id: Long;
  private studentId: Long;
  private documentId: Long;

  constructor(object: any) {
    this.id = object.id;
    this.studentId = object.studentId;
    this.documentId = object.documentId;
  }
}
