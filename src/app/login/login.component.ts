import { Component, OnInit, AfterViewInit } from '@angular/core';
import { AngularFireAuth } from 'angularfire2/auth';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';
import { VoterService } from '../service/voter.service';
import { environment } from 'src/environments/environment';
import * as firebase from 'firebase';
import '../../assets/js/login-anim.js';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit, AfterViewInit {

  emailid: string;
  password: string;
  router: Router;
  user: Observable<firebase.User>;
  show: boolean;
  constructor(private fb: AngularFireAuth, private firebaseAuth: AngularFireAuth, router: Router, private VoterService: VoterService) {
    this.user = firebaseAuth.authState;
    this.router = router;
  }

  ngOnInit() {

  }
  login() {
    this.show = true;
    this.fb.auth.signInWithEmailAndPassword(this.emailid, this.password).then(value => {
      if (this.user) {
        this.show = false;
        this.VoterService.setUserId(value.user.uid);
        console.log(value.user,"Malavan");
        this.router.navigateByUrl('/addvoter');
      }
    });
  }
  ngAfterViewInit() {
    (window as any).initialize();
  }

}
