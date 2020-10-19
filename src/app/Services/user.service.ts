import { Injectable } from '@angular/core';
import { User } from '../Models/user/user.model';
import { Observable } from 'rxjs';
import {HttpClient, HttpHeaders} from '@angular/common/http'
import { Login } from '../Models/login.model';
@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http:HttpClient) { }

  GetUsers():Observable<User[]>{
    return this.http.get<User[]>('https://localhost:44349/api/Register/Get');
  }
  Login(login:Login):any{
    
    const headers = new HttpHeaders({'Content-Type':'application/x-www-form-urlencoded'});
    let body = 'grant_type=password' + '&username=' + login.username + '&password='+ login.password;
    return this.http.post('https://localhost:44349/Token',body,{headers:headers});
  }

  PostUser(user:User){
    //var reqheader=new HttpHeaders({'response-type':'json','content-type':'application/json'})
    return this.http.post('https://localhost:44349/api/Register/POST',user
    //,{
     // headers:reqheader,observe:'response'
    //}
    );  }

    getAdmindata(){
      let token=sessionStorage.getItem('Token')
      const headers = new HttpHeaders({'Authorization':'Bearer '+token.toString()});
      return this.http.get('https://localhost:44349/api/Test/get',{headers:headers});
    }
    
}
