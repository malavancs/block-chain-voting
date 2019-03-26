import { Component, OnInit } from '@angular/core';
import { VoterService } from '../../service/voter.service';

@Component({
  selector: 'app-add-voter',
  templateUrl: './add-voter.component.html',
  styleUrls: ['./add-voter.component.css']
})
export class AddVoterComponent implements OnInit {
  selectedElection: any;
  electionList: any[];
  firstname: any;
  lastname: any;
  email: any;
  constructor(private voterService: VoterService) { }

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
  }

  sendEmail() {
    // TODO: Validation @Balaji Do this
    const payload = {
      email: this.email,
      firstname: this.firstname,
      lastname: this.lastname
    };
    this.voterService.addVoterToElection(payload).subscribe((res: any) => {

    }, (err: any) => {
      console.log('Error Occured');
    });



  }
}
