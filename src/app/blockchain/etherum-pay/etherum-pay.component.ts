import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-etherum-pay',
  templateUrl: './etherum-pay.component.html',
  styleUrls: ['./etherum-pay.component.css']
})
export class EtherumPayComponent implements OnInit {
  cars: { sno: number; etherum_address: string; transaction_address: string; }[];
  electionList: { label: string; value: string; }[];

  constructor() { }

  ngOnInit() {
    this.electionList = [
      {
        label: 'Select an election to add',
        value: null
      },
      {
        label: '2019 Indian Election',
        value: 'election_id'
      }];

      this.cars = [{
        sno: 1,
        etherum_address: 'sfjfakjnkjasndfasnfjasndfkjasndf',
        transaction_address: 'poeddhsdfuwibfakhdbf-fasdfsf'
      },{
        sno: 1,
        etherum_address: 'sfjfakjnkjasndfasnfjasndfkjasndf',
        transaction_address: 'poeddhsdfuwibfakhdbf-fasdfsf'
      },
      {
        sno: 1,
        etherum_address: 'sfjfakjnkjasndfasnfjasndfkjasndf',
        transaction_address: 'poeddhsdfuwibfakhdbf-fasdfsf'
      }];
  }

}
