import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api';
import { AuthService } from '../core/auth.service';
import { Router } from '@angular/router';
import * as firebase from 'firebase';
import { environment } from 'src/environments/environment';
import { VoterService } from '../service/voter.service';
@Component({
  selector: 'app-side-nav-bar',
  templateUrl: './side-nav-bar.component.html',
  styleUrls: ['./side-nav-bar.component.css']
})
export class SideNavBarComponent implements OnInit {

  items: MenuItem[];
  router: Router;
  ngOnInit() {
    console.log("Voter",this.voterService.user_id);
    if (this.voterService.user_id === '7pID2YEqrNY1GkVEmeepnamA9Cg1' || false) {
      this.items = [
        { label: 'Dashboard', icon: 'pi pi-fw pi-home', routerLink: '/addvoter' },
        { label: 'Balance List', icon: 'pi pi-fw pi-plus', routerLink: '/etherum-balance' },
        { label: 'Pay Etherum', icon: 'pi pi-fw pi-plus', routerLink: '/pay-etherum' },
        { label: 'Election List', icon: 'pi pi-fw pi-list', routerLink: '/voting-list' },
        { label: 'View Results', icon: 'pi pi-fw pi-plus', routerLink: '/viewresults' },
        { label: 'Signed Out', icon: 'pi pi-fw pi-sign-out', routerLink: '/', command: e => this.logout() }
      ];
    } else {

      this.items = [
        { label: 'Dashboard', icon: 'pi pi-fw pi-home', routerLink: '/addvoter' },
        { label: 'Add a voter', icon: 'pi pi-fw pi-plus', routerLink: '/addvoter' },
        { label: 'Add a canditate', icon: 'pi pi-fw pi-plus', routerLink: '/addcandidate' },
        { label: 'Candidate list', icon: 'pi pi-fw pi-list', routerLink: '/candidatelist' },
        { label: 'View Results', icon: 'pi pi-fw pi-plus', routerLink: '/viewresults' },
        { label: 'Signed Out', icon: 'pi pi-fw pi-sign-out', routerLink: '/', command: e => this.logout() }
      ];
    }

  }

  constructor(private authService: AuthService, public router1: Router, public voterService: VoterService) {
    this.router = router1;
  }
  logout() {
    this.authService.logout();
    this.router.navigateByUrl('/login');
  }

}
