import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AuthService } from './core/auth.service';
import { AuthGuard} from './core/auth.guard';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './/app-routing.module';
import { LoginComponent } from './login/login.component';
import { SideNavBarComponent } from './side-nav-bar/side-nav-bar.component';
import { TopProfileBarComponent } from './top-profile-bar/top-profile-bar.component';
import { MainComponent } from './main/main.component';
import {CardModule} from 'primeng/card';
import {InputTextModule} from 'primeng/inputtext';
import { FormsModule } from '@angular/forms';
import {ButtonModule} from 'primeng/button';
import { AngularFireModule } from 'angularfire2';
import { environment } from '../environments/environment';
import { AngularFireAuthModule } from 'angularfire2/auth';
import {MenuModule} from 'primeng/menu';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MenuItem} from 'primeng/api';
import { AddVoterComponent } from './registration/add-voter/add-voter.component';
import {PanelMenuModule} from 'primeng/panelmenu';
import {DropdownModule} from 'primeng/dropdown';
import { HttpClientModule } from '@angular/common/http';
import { AddCandidateComponent } from './registration/add-candidate/add-candidate.component';
import { CandidateListComponent } from './registration/candidate-list/candidate-list.component';
import { EtherumBalanceComponent } from './blockchain/etherum-balance/etherum-balance.component';
import { EtherumPayComponent } from './blockchain/etherum-pay/etherum-pay.component';
import {TableModule} from 'primeng/table';
import {ProgressSpinnerModule} from 'primeng/progressspinner';
import {BlockUIModule} from 'primeng/blockui';
import { VotingListComponent } from './election-authority/voting-list/voting-list.component';
@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    SideNavBarComponent,
    TopProfileBarComponent,
    MainComponent,
    AddVoterComponent,
    AddCandidateComponent,
    CandidateListComponent,
    EtherumBalanceComponent,
    EtherumPayComponent,
    VotingListComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    CardModule,
    DropdownModule,
    MenuModule,
    ProgressSpinnerModule,
    ButtonModule,
    BlockUIModule,
    InputTextModule,
    PanelMenuModule,
    FormsModule,
    AngularFireModule.initializeApp(environment.firebase, 'block-chain'),
    AngularFireAuthModule,
    TableModule
  ],
  providers: [AuthService],
  bootstrap: [AppComponent]
})
export class AppModule { }
