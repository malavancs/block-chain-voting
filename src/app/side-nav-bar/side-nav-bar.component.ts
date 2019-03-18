import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api';
import { AuthService } from '../core/auth.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-side-nav-bar',
  templateUrl: './side-nav-bar.component.html',
  styleUrls: ['./side-nav-bar.component.css']
})
export class SideNavBarComponent implements OnInit {

  items: MenuItem[];
  router: Router;
  ngOnInit() {
    this.items = [
      { label: 'Dashboard', icon: 'pi pi-fw pi-home', routerLink: '/addvoter' },
      { label: 'Add a voter', icon: 'pi pi-fw pi-plus', routerLink: '/addvoter' },
      { label: 'Add a canditate', icon: 'pi pi-fw pi-plus', routerLink: '/addcandidate' },
      { label: 'Candidate list', icon: 'pi pi-fw pi-list', routerLink: '/candidatelist' },
      { label: 'View Results', icon: 'pi pi-fw pi-plus', routerLink: '/viewresults' },
      { label: 'Signed Out', icon: 'pi pi-fw pi-sign-out', routerLink: '/', command: e => this.logout() }
    ];
  }

  constructor(private authService: AuthService, public router1: Router) {
    this.router = router1;
  }
  logout() {
    this.authService.logout();
    this.router.navigateByUrl('/login');
  }

}
