import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login/login.component';
import { RouterModule, Routes } from '@angular/router';
import { AddVoterComponent } from './registration/add-voter/add-voter.component';
const routes: Routes = [

  { path: 'login', component: LoginComponent },
  { path: 'addvoter', component: AddVoterComponent }
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
