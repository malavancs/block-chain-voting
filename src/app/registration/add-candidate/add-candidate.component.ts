import { Component, OnInit } from '@angular/core';
import { VoterService } from '../../service/voter.service';

@Component({
  selector: 'app-add-candidate',
  templateUrl: './add-candidate.component.html',
  styleUrls: ['./add-candidate.component.css']
})
export class AddCandidateComponent implements OnInit {
  selectedElection: any;
  electionList: { label: string; value: string; }[];
  imgval: any;
  name: any;
  description: any;
  constructor(private voterService: VoterService) {
    this.imgval = '/assets/images/candidate-pic.png';
  }

  ngOnInit() {
    this.voterService.getElectionDetail().subscribe((resPonse: any) => {
      const data = resPonse.json();
      console.log('Status', data);

      data.forEach(element => {
        element.label = element.name;
        element.value = element.election_id;
      });
      this.electionList = data;

    }, (err: any) => {
      console.log('Malaavan', err);
    });
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

  addCandidate() {
    console.log(this.selectedElection);
    const payload = {
      'name': this.name,
      'description': this.description,
      'election_id': this.selectedElection,
      'imageUrl': 'https://images.pexels.com/photos/67636/rose-blue-flower-rose-blooms-67636.jpeg'
    };
    this.voterService.addCandidate(payload).subscribe((res: any) => {
      console.log('Malavan', res.json());
    });
  }
}
