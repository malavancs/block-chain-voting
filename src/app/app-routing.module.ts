import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login/login.component';
import { RouterModule, Routes } from '@angular/router';
import { AddVoterComponent } from './registration/add-voter/add-voter.component';
import { AddCandidateComponent } from './registration/add-candidate/add-candidate.component';
import { CandidateListComponent } from './registration/candidate-list/candidate-list.component';
const routes: Routes = [

  { path: 'login', component: LoginComponent },
  { path: 'addvoter', component: AddVoterComponent},
  { path: 'addcandidate', component: AddCandidateComponent},
  { path: 'candidatelist', component: CandidateListComponent}
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  declarations: [],
  exports: [RouterModule]
})
export class AppRoutingModule {

}
