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
    if (this.router.url === '/election/vote') {
      console.log('malavan', this.router.url);
    } else {
      console.log('malavan', this.router.url);

      this.authservice.user.subscribe(e => {
        if (e) {
        } else {
          
        }
      });
    }
  }
  onActivate(event) {
    //
    console.log(event);
  }
}
