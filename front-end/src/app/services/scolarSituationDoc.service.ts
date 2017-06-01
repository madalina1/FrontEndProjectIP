import { Injectable } from '@angular/core';
import { Http, ResponseContentType, Headers } from '@angular/http';
import { TransportInput } from '../model/TransportInput.model';
import { ScolarSituationInput } from '../model/ScolarSituationInput.model';

@Injectable()

/** Serviciul ce ne va ajuta si in momentul cand o sa legam cu backendul
 *  Avem la dispoztie un URL de unde preluam PDF pe care il dorim
 * **/

export class ScolarSituationDocService {

  private backendUrl: string;

  constructor(private _http: Http) {
    this.backendUrl = "http://localhost:9666/app";
  }


  sendSituationRequest(situation: ScolarSituationInput) {
    let headers = new Headers();
    headers.append('Content-Type', 'application/json');
    return this._http.post(
      this.backendUrl + '/scolarSituation/insert/'+ localStorage.getItem("id"),
      situation,
      {headers: headers})
      .map(res => res.json());
  }

}