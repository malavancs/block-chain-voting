import { Component, OnInit } from '@angular/core';
import { VoterService } from '../../service/voter.service';

@Component({
  selector: 'app-candidate-list',
  templateUrl: './candidate-list.component.html',
  styleUrls: ['./candidate-list.component.css']
})
export class CandidateListComponent implements OnInit {
  electionList: { label: string; value: string; }[];
  a: any[];
  selectedElection: any;
  constructor(private voterService: VoterService) { }

  ngOnInit() {

    this.voterService.getElectionDetail().subscribe((resPonse: any) => {
      const data = resPonse.json();
      console.log('Status', data);

      data.forEach(element => {
        element.label = element.name;
        element.value = element.election_id;
      });
      this.electionList = data;

    }, (err: any) => {
      console.log('Malaavan', err);
    });


  }
  getList(event) {
    this.voterService.getCandidateListById(event.value).subscribe((res: any) => {
      const json = res.json();
      this.a = json.candidate_data;
      console.log(json, 'val');
    });
  }

}
