import { Component, OnInit, DoCheck } from '@angular/core';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.css']
})
export class NavigationComponent implements OnInit, DoCheck {
  id : string = localStorage.getItem('id');
  user : any;
  constructor(public _auth : AuthService) { }

  ngOnInit() {
    this._auth.getUser(this.id).subscribe(user=>{
      this.user = user;
      console.log(user.name);
      
    })
  }

  ngDoCheck(){
  }


}
