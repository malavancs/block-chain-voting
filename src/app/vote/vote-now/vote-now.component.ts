import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import * as CryptoJS from 'crypto-js';
import { VoterService } from '../../service/voter.service';
declare let App: any;
declare let web3: any;
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
  result: any = [];
  election_id: any;
  election_name: any;
  election_description: any;
  selectedCandidate: any;
  doesAllowVoting: any;
  constructor(private route: ActivatedRoute, private voterService: VoterService) { }

  ngOnInit() {
    this.doesAllowVoting = localStorage.getItem('isVote') === 'yes' ? false : true;
    // setTimeout(() => {
    //   this.getResult().then((re: any) => {
    //     console.log(re);
    //     this.result = re;

    //   });
    // }, 3000);

    this.data = { candidate_list: [] };
    this.route.queryParams.subscribe(params => {
      console.log('Paarams', params['id']);
      const datas = {
        public_key: '0xF0CB80F4374F998c141B5c109fb0dEeB1050EC98',
        election_id: '4b1c2104-52c7-11e9-8647-d663bd873d93'
      };
      const payload = JSON.stringify(datas);
      const data = btoa(payload);
      console.log('malaan', data);
      const output = atob(params['id']);
      // const output = CryptoJS.AES.decrypt(params['id'], 'test'.trim()).toString(CryptoJS.enc.Utf8);
      console.log('Malaavam', JSON.parse(output));
      this.public_address = JSON.parse(output).address;
      this.election_id = JSON.parse(output).election_id;
      this.voterService.getCandidateListById(this.election_id).subscribe((res: any) => {
        const json = res.json();
        json.candidate_data.forEach(element => {
          this.data.candidate_list.push({
            candidate_name: element.name,
            candidate_description: element.description,
            isSelected: false,
          });
        });
        setTimeout(() => {
          this.getResult().then((re: any) => {
            console.log(re);

            for (let i = 0; i < 2; i++) {
              console.log(re, i);
              re[i].name = this.data.candidate_list[i].candidate_name;
            }
            this.result = re;
          });
        }, 3000);

        this.data.election_name = json.election_data.name;
        this.data.election_description = json.election_data.description;
        this.data.election_isStarted = json.election_data.isStarted;
        this.data.election_isEnd = json.election_data.isEnd;
        console.log(json, 'val');
      });
    });
    //   this.data = {
    //     election_name: 'Best friends character Ever',
    //     election_description: 'Select your favorite friends character',
    //     candidate_list: [{
    //       candidate_name: 'Chandler Bing',
    //       candidate_description: 'Vote for me. I\'ll show you the bright feature',
    //       isSelected: false,
    //     },
    //     {
    //       candidate_name: 'Joey Tribianni',
    //       candidate_description: 'Vote for me',
    //       isSelected: false,
    //     },
    //     {
    //       candidate_name: 'Monica Geller',
    //       candidate_description: 'Vote for me',
    //       isSelected: true,
    //     },
    //     {
    //       candidate_name: 'Phoebe Buffay',
    //       candidate_description: 'Vote for me',
    //       isSelected: false,
    //     },
    //     {
    //       candidate_name: 'Rachel Green',
    //       candidate_description: 'Vote for me',
    //       isSelected: false,
    //     },
    //     {
    //       candidate_name: 'Ross Geller',
    //       candidate_description: 'Vote for me',
    //       isSelected: false,
    //     }]
    //   };
  }



  getResult(): Promise<any> {
    return new Promise((resolved, rejected) => {
      const data = [];
      let electionInstance;
      App.contracts.Election.deployed().then((instance) => {
        electionInstance = instance;
        return electionInstance.candidatesCount();
      }).then((candidatesCount) => {
        for (let i = 1; i <= candidatesCount; i++) {
          electionInstance.candidates(i).then(function (candidate) {
            const id = candidate[0];
            const name = candidate[1];
            const voteCount = candidate[2];
            data.push({
              id,
              name,
              voteCount
            });
          });
        }
        return electionInstance.voters(App.account);
      }).then(function (hasVoted) {
        resolved(data);
      }).catch(function (error) {
        console.warn(error);
      });
    });

  }
  voter_now() {
    if (localStorage.getItem('isVote') === 'yes') {
      return;
    }
    this.show = true;
    new Promise((resolved, rejected) => {
      web3.eth.getAccounts(accounts => console.log(accounts));
      const candidateId = this.selectedCandidate;
      App.contracts.Election.deployed().then(function (instance) {
        return instance.vote(candidateId, { from: App.account });
      }).then(function (result) {
        // Wait for votes to update
        resolved(true)
      }).catch(function (err) {
        console.error(err);
      });
    }).then((res: any) => {
      this.show = false;
      localStorage.setItem('isVote', 'yes');
    });
  }
  isMarked(event, ith) {
    this.selectedCandidate = ith + 1;
    console.log(event);

    this.data.candidate_list.forEach(element => {
      if (event.candidate_name === element.candidate_name) {
        if (element.isSelected) {
          element.isSelected = false;
        } else {
          element.isSelected = true;
        }
      } else {
        element.isSelected = false;
      }

    });
  }
}
