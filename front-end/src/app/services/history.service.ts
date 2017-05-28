import { Injectable } from '@angular/core';
import {document} from "../../../node_modules/ng2-opd-popup/node_modules/@angular/platform-browser/src/facade/browser";


import { Http, ResponseContentType, Headers } from '@angular/http';

@Injectable()

export class HistoryService {

  private backendUrl: string;


  constructor(private _http: Http) {

    this.backendUrl = "http://localhost:9666/app/document/history/";
    /** probabil ca asa trebuie
     */
  }


  getListOfStudentHistory(id: String): any {
    let headers = new Headers();
    headers.append('Content-Type', 'application/json');
    return this._http.get(
      this.backendUrl + id,
      {headers: headers})
      .map(res => res.json());
  }
}
