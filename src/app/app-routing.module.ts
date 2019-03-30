import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login/login.component';
import { RouterModule, Routes } from '@angular/router';
import { AddVoterComponent } from './registration/add-voter/add-voter.component';
import { AddCandidateComponent } from './registration/add-candidate/add-candidate.component';
import { CandidateListComponent } from './registration/candidate-list/candidate-list.component';
import { EtherumBalanceComponent } from './blockchain/etherum-balance/etherum-balance.component';
import { EtherumPayComponent } from './blockchain/etherum-pay/etherum-pay.component';
import { VotingListComponent } from './election-authority/voting-list/voting-list.component';
import { VoteNowComponent } from './vote/vote-now/vote-now.component';
const routes: Routes = [

  { path: 'login', component: LoginComponent },
  { path: 'addvoter', component: AddVoterComponent},
  { path: 'addcandidate', component: AddCandidateComponent},
  { path: 'candidatelist', component: CandidateListComponent},
  { path: 'etherum-balance', component: EtherumBalanceComponent},
  { path: 'pay-etherum', component: EtherumPayComponent},
  { path: 'voting-list', component: VotingListComponent},
  { path: 'election/vote', component: VoteNowComponent}
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
