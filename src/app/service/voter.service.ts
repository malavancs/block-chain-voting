import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class VoterService {

  api_url = environment.api_url;
  user_id: any;
  constructor(private http: HttpClient) { }

  addVoterToElection(payload) {
    return this.http.post(this.api_url + '/addVoterToElection', payload);
  }

  setUserId(val) {
    this.user_id = val;
  }
  getUserId() {
    return this.user_id;
  }

  getElectionDetail(payload) {
    return this.http.get(this.api_url + '/getElectionDetails?election_id=' + payload);
  }

}
