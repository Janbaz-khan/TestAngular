import { Component, OnInit } from '@angular/core';
import { UserService } from '../Services/user.service';
import { Router } from '@angular/router';
import { User } from '../Models/user/user.model';

@Component({
  selector: 'app-show-user',
  templateUrl: './show-user.component.html',
  styleUrls: ['./show-user.component.css']
})
export class ShowUserComponent implements OnInit {

  ngOnInit():void{
    this.userService.GetUsers().subscribe(a=>{
      this.users=a;
       })
  }
  constructor(private userService:UserService,private router:Router){
    }
  users:User[]

  NavigateToAddUser(){
    this.router.navigate(['AddUser']);
  }

}
