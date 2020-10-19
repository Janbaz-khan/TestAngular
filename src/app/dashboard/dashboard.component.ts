import { Component, OnInit } from '@angular/core';
import { UserService } from '../Services/user.service';
import { Router } from '@angular/router';
import { HttpErrorResponse, HttpResponse } from '@angular/common/http';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  constructor(private Service:UserService,private router:Router) { }

  ngOnInit(): void {
  }
  GetValue(){
    this.Service.getAdmindata().subscribe((res:HttpResponse<any>)=>{
      console.log(res)
    },(err:HttpErrorResponse)=>{
      alert(err.error.Message)
    })
  }
}
