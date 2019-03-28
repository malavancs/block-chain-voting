import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-etherum-balance',
  templateUrl: './etherum-balance.component.html',
  styleUrls: ['./etherum-balance.component.css']
})
export class EtherumBalanceComponent implements OnInit {
  electionList: { label: string; value: string; }[];
  cars: { sno: number; etherum_address: string; transaction_address: string; }[];
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
