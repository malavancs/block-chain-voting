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
    this.voterService.getElectionDetail().subscribe((resPonse: any) => {
      const data = resPonse.json();
      console.log('Status', data);

      data.forEach(element => {
        element.label = element.name;
        element.value = element.election_id;
      });
      this.electionList = data;
      this.selectedElection = this.electionList[0].value;
    }, (err: any) => {
      console.log('Malaavan', err);
    });

  }

  sendEmail() {
    // TODO: Validation @Balaji Do this
    const payload = {
      emailId: this.email,
      firstName: this.firstname,
      lastName: this.lastname,
      election_id: this.selectedElection
    };
    this.voterService.addVoterToElection(payload).subscribe((res: any) => {

    }, (err: any) => {
      console.log('Error Occured');
    });



  }
}
