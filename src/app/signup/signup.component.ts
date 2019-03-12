import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  user = {
    name : "",
    email : "",
    password : ""
  }
  constructor(public _auth : AuthService, private _router : Router) { }

  ngOnInit() {
  this.onSignup();
  }

  onSignup(){
    console.log(this.user);
   this._auth.userRegister(this.user).subscribe(
     res=>{
       console.log(res);
       localStorage.setItem('id', res.id);
       localStorage.setItem('token', res.token);
       this._router.navigate(['/home']);
     },
     err=>{
       console.log(err);

     }) 
  }
}
