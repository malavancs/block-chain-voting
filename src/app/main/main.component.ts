import { Component, OnInit } from '@angular/core';
import { AuthService } from '../core/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {

  Router: Router;
  constructor(public authservice: AuthService, private router: Router) {
    this.Router = router;
  }

  ngOnInit() {
   this.authservice.user.subscribe(e => {
     if (e) {

     } else {
       this.Router.navigateByUrl('/login');
     }
   });
  }
  onActivate(event) {
    //
    console.log(event);
  }
}
