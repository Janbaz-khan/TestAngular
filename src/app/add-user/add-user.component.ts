import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { UserService } from '../Services/user.service';
import { HttpResponse, HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.css']
})
export class AddUserComponent implements OnInit {

  constructor(private userService:UserService) { }

  ngOnInit(): void {
  }
OnSubmit(form:NgForm){
  this.userService.PostUser(form.value).subscribe((res:HttpResponse<any>)=>{
    alert(res.body)
   
  },(err:HttpErrorResponse)=>{
    alert(err.message)
  })
}
}
