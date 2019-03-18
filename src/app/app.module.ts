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
@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    SideNavBarComponent,
    TopProfileBarComponent,
    MainComponent,
    AddVoterComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    CardModule,
    MenuModule,
    ButtonModule,
    InputTextModule,
    PanelMenuModule,
    FormsModule,
    AngularFireModule.initializeApp(environment.firebase, 'block-chain'),
    AngularFireAuthModule
  ],
  providers: [AuthService],
  bootstrap: [AppComponent]
})
export class AppModule { }
