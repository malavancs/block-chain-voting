import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Http, Response, Headers, RequestOptions, URLSearchParams } from '@angular/http';
@Injectable({
  providedIn: 'root'
})
export class VoterService {

  api_url = environment.api_url;
  user_id: any;
  constructor(private http: Http) { }

  addVoterToElection(payload) {
    return this.http.post(this.api_url + '/addVoter', payload);
  }

  setUserId(val) {
    console.log(val,"data");
    this.user_id = val;
  }
  getUserId() {
    return this.user_id;
  }

  getElectionDetail() {
    return this.http.get(this.api_url + '/getElectionList', this.options());
  }

  addCandidate(payload) {
    return this.http.post(this.api_url + '/addCandidate', payload, this.options());
  }
  options(): RequestOptions {
    const headers = new Headers({ 'Content-Type': 'application/json' });
    return new RequestOptions({ headers: headers });
  }

  getCandidateListById(id: any) {
    return this.http.get(this.api_url + '/getCandidateListById/' + id, this.options());
  }
}
