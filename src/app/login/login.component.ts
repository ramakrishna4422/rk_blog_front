import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import { Route, Router } from '@angular/router';
import { PostsService } from '../posts.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  user = {
    email : "",
    password : ""
  }
  constructor(private _auth : AuthService, private _router : Router, private _posts : PostsService) { }

  ngOnInit() {
  }
  userlogin(){
    console.log(this.user);
    this._auth.userLogin(this.user).subscribe(
      res=>{
        console.log(res);
        localStorage.setItem('id', res.id);
        localStorage.setItem('token', res.token);
        this._router.navigate(['/home']);
        this._posts.sendPost(res.id);
      },
      err=>{
        console.log(err);
        
      }
    )
    
  }

}
