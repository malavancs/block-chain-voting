import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-voting-list',
  templateUrl: './voting-list.component.html',
  styleUrls: ['./voting-list.component.css']
})
export class VotingListComponent implements OnInit {
  cars: any;
  constructor() { }

  ngOnInit() {
    this.cars = [{
     s_no : 1,
     name: 'Vice Counseller Election',
     candidate_list: 10,
     election_id: 'gfjfxkgchjuyvb',
     starting_time: new Date().toDateString(),
     isStarted: false,
    },
    {
      s_no : 2,
      name: 'President Election',
      candidate_list: 10,
      election_id: 'gfjfxkgchjuyvb',
      starting_time: new Date().toDateString(),
      isStarted : false,
     },
     {
      s_no : 3,
      name: 'Vice Sales president Election',
      candidate_list: 10,
      election_id: 'gfjfxkgchjuyvb',
      starting_time: new Date().toDateString(),
      isStarted : false,
     },
     {
      s_no : 4,
      name: 'Board Member Election',
      candidate_list: 10,
      election_id: 'gfjfxkgchjuyvb',
      starting_time: new Date().toDateString(),
      isStarted : false,
     },
     {
      s_no : 5,
      name: 'Cunning Bastard Balaji Election',
      candidate_list: 10,
      election_id: 'gfjfxkgchjuyvb',
      starting_time: new Date().toDateString(),
      isStarted : false,
     },
  ];
  }

}
