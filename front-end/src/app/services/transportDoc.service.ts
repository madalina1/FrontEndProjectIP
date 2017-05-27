import { Injectable } from '@angular/core';
import { Http, ResponseContentType, Headers } from '@angular/http';
import { TransportInput } from '../model/TransportInput.model';

@Injectable()

/** Serviciul ce ne va ajuta si in momentul cand o sa legam cu backendul
 *  Avem la dispoztie un URL de unde preluam PDF pe care il dorim
 * **/

export class TransportDocService {

  private backendUrl: string;

  constructor(private _http: Http) {
    this.backendUrl = "http://localhost:9666/app";
  }


  sendTransportRequest(transport: TransportInput) {
    let headers = new Headers();
    headers.append('Content-Type', 'application/json');
    return this._http.post(
      this.backendUrl + '/transport/insert/'+ localStorage.getItem("id"),
      transport,
      {headers: headers})
      .map(res => res.json());
  }

}