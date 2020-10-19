import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { AddUserComponent } from './add-user/add-user.component';
import { RouterModule } from '@angular/router';
import { ShowUserComponent } from './show-user/show-user.component'
import {FormsModule} from '@angular/forms'
  import { from } from 'rxjs';
import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';
@NgModule({
  declarations: [
    AppComponent,
    AddUserComponent,
    ShowUserComponent,
    LoginComponent,
    DashboardComponent  ],
  imports: [
    BrowserModule,
    AppRoutingModule,HttpClientModule,RouterModule,FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
