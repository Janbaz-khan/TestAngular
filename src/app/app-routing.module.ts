import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddUserComponent } from './add-user/add-user.component';
import { AppComponent } from './app.component';
import { ShowUserComponent } from './show-user/show-user.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { LoginComponent } from './login/login.component';


const routes: Routes = [
  {
    path:"AddUser",
    component:AddUserComponent
  },
  {
    path:"ShowUser",
    component:ShowUserComponent
  },
  {
    path:"",
    component:ShowUserComponent
  },
  {
    path:'Dashboard',
    component:DashboardComponent
  },
  {
    path:'Login',
    component:LoginComponent
  }
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { 
}
