import { Component, OnInit, DoCheck } from '@angular/core';
import { PostsService } from '../posts.service';
import { AuthService } from '../auth.service';
import { MatDialog } from '@angular/material';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit, DoCheck {
  dataStatus = "name";
  posts : any= [];
  myPosts : any= [];
  id = localStorage.getItem('id');

  constructor(private _post : PostsService, private _auth:AuthService, public dialog: MatDialog) { }

  ngOnInit() {
    this.getAllPosts();
    this.getUserDetails();
    this.getAll()
  }

  ngDoCheck(){
  }

  getAllPosts(){
    this._post.getAllPosts().subscribe(
      res=>{
        console.log(res);
        this.posts = res;
        this.posts.reverse();
      }, err=>{
        console.log(err);
      }
    )
  }

  getAll(){
    this._post._curr.subscribe(result=>{
      if(result){
        this.getAllPosts();
        this.getUserDetails();
      }
    })
  }
  getUserDetails(){
      this._auth.getUser(this.id).subscribe(user=>{
        console.log("user details", user.posts);
        this.myPosts = user.posts;
        this.myPosts.reverse();
        this.getAllPosts();
      })
  }

  openDialog() {
    const dialogRef = this.dialog.open(DialogContentExampleDialog);

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }
}


@Component({
  selector: 'dialog-content-example-dialog',
  templateUrl: 'dialog-content-example-dialog.html',
})
export class DialogContentExampleDialog implements OnInit{
  id = localStorage.getItem('id');
  post = {
    title : "",
    description : ""
  }
  constructor(private _post : PostsService, private _auth : AuthService){}

  ngOnInit(){
  }
  sendPost(){
    console.log(this.post);
    this._post.postNew(this.id, this.post).subscribe(res=>{
      console.log(res);
      this._post.sendPost(res);
    })  
  }

}