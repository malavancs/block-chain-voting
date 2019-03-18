import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from 'angularfire2/auth';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  emailid: string;
  password: string;
  router: Router;
  user: Observable<firebase.User>;
  constructor(private fb: AngularFireAuth, private firebaseAuth: AngularFireAuth, router: Router) {
    this.user = firebaseAuth.authState;
    this.router = router;
  }

  ngOnInit() {
    
  }
  login() {
    this.fb.auth.signInWithEmailAndPassword(this.emailid, this.password).then(value => {
      if (this.user) {
        this.router.navigateByUrl('/addvoter');
      }
    });
  }

}
