import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import * as CryptoJS from 'crypto-js';

@Component({
  selector: 'app-vote-now',
  templateUrl: './vote-now.component.html',
  styleUrls: ['./vote-now.component.css']
})
export class VoteNowComponent implements OnInit {
  show: boolean;
  private_address: string;
  public_address: any;
  data: any;
  constructor(private route: ActivatedRoute) { }

  ngOnInit() {

    this.route.queryParams.subscribe(params => {
      console.log('Paarams', params['id']);
      const datas = {
        public_key: '0xF0CB80F4374F998c141B5c109fb0dEeB1050EC98',
        election_id: '4b1c2104-52c7-11e9-8647-d663bd873d93'
      };
      const payload = JSON.stringify(datas);
      const data = btoa(payload);
      console.log("malaan", data);
      const output = atob(params['id']);
      // const output = CryptoJS.AES.decrypt(params['id'], 'test'.trim()).toString(CryptoJS.enc.Utf8);
      console.log("Malaavam", JSON.parse(output));
      this.public_address = JSON.parse(output).public_key;
    });

    
    this.private_address = '0xpksasfkaskdfbaskjdfbkjasdfbkjasdfbsd';
    this.data = {
      election_name: 'Best friends character Ever',
      election_description: 'Select your favorite friends character',
      candidate_list: [{
        candidate_name: 'Chandler Bing',
        candidate_description: 'Vote for me. I\'ll show you the bright feature',
        isSelected: false,
      },
      {
        candidate_name: 'Joey Tribianni',
        candidate_description: 'Vote for me',
        isSelected: false,
      },
      {
        candidate_name: 'Monica Geller',
        candidate_description: 'Vote for me',
        isSelected: true,
      },
      {
        candidate_name: 'Phoebe Buffay',
        candidate_description: 'Vote for me',
        isSelected: false,
      },
      {
        candidate_name: 'Rachel Green',
        candidate_description: 'Vote for me',
        isSelected: false,
      },
      {
        candidate_name: 'Ross Geller',
        candidate_description: 'Vote for me',
        isSelected: false,
      }]
    };
  }
  voter_now() {
    this.show = true;
  }
}
