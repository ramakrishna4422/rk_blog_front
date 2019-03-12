import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
userUrl = "http://localhost:2020/users/";
data;
  constructor(private http : HttpClient) { }

  userRegister(data){
    return this.http.post<any>(this.userUrl+"new", data)
  }

  userLogin(data){
    return this.http.post<any>(this.userUrl+"login", data);
  }

  getUser(id){
    return this.http.get<any>(this.userUrl+id);
  }

  loggedIn(){
    return localStorage.getItem('token');
  }

  logedIn(): boolean {
    return !!localStorage.getItem('token');
  }

  getToken() {
    return localStorage.getItem('token');
  }

  userLogout() {
    return localStorage.clear();
  }
}
