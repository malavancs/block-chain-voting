import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class VoterService {

  api_url = environment.api_url;
  constructor(private http: HttpClient) { }

  addVoterToElection(payload) {
    return this.http.post(this.api_url + '/addVoterToElection', payload);
  }

}
