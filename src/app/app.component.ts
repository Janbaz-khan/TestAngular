import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from './Models/user/user.model';
import { UserService } from './Services/user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'TestAngular';
  constructor(){
  
  }
 
}