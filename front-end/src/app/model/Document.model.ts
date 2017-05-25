/**
 * Document class which will be extended by other types of documents
 */
export class Document {
  public id: number;
  public documentName: string;
  public valabilityInDays: string;

  constructor(object: any) {
    this.id = object.id;
    this.documentName = object.documentName;
    this.valabilityInDays = object.valabilityInDays;


  }
}
