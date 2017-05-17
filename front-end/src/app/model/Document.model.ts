/**
 * Document class which will be extended by other types of documents
 */
export class Document {
  public id: number;
  public document_name: string;
  public valability_in_days: string;

  constructor(object: any) {
    this.id = object.id;
    this.document_name = object.document_name;
    this.valability_in_days = object.valability_in_days;


  }
}
