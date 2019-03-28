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
  }

}
