import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-candidate-list',
  templateUrl: './candidate-list.component.html',
  styleUrls: ['./candidate-list.component.css']
})
export class CandidateListComponent implements OnInit {
  electionList: { label: string; value: string; }[];
  a: any[];
  constructor() { }

  ngOnInit() {
    this.a = [{
      image_url: '/assets/images/candidate-pic.png',
      name: 'Malvan',
      description: 'Hi test'
    },
    {
      image_url: '/assets/images/candidate-pic.png',
      name: 'Balaji',
      description: 'Hi test'
    },
    {
      image_url: '/assets/images/candidate-pic.png',
      name: 'Hariß',
      description: 'Hi test'
    }];

    this.electionList = [
      {
        label: 'Select an election to add',
        value: null
      },
      {
        label: '2019 Indian Election',
        value: 'election_id'
      }];
  }

}
