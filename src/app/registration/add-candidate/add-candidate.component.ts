import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-add-candidate',
  templateUrl: './add-candidate.component.html',
  styleUrls: ['./add-candidate.component.css']
})
export class AddCandidateComponent implements OnInit {
  electionList: { label: string; value: string; }[];
  imgval: any;
  constructor() {
    this.imgval = '/assets/images/candidate-pic.png';
   }

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
  onFileChanged(event) {
    const file = event.target.result;
    console.log(event);
    this.imgval = file;
    const reader = new FileReader();

  reader.onload = ((e) => {
   this.imgval = e.target['result'];
  });

  reader.readAsDataURL(event.target.files[0]);
  }
}
