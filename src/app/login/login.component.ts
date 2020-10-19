import { Component, OnInit } from '@angular/core';
import { UserService } from '../Services/user.service';
import { NgForm } from '@angular/forms';
import { HttpResponse, HttpErrorResponse } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private Service:UserService,private router:Router) { }

  ngOnInit(): void {
  }
  OnSubmit(form:NgForm){
    this.Service.Login(form.value).subscribe(result=>{
      sessionStorage.setItem('Token',result.access_token)
      console.log("Successfully logged in")
      this.router.navigate(['Dashboard'])

    },(err:HttpErrorResponse)=>{alert(err.error.error_description)})
  }

}
