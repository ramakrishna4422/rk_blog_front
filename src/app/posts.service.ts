import { Injectable } from '@angular/core';
import { Subject, BehaviorSubject } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PostsService {
 _sub = new BehaviorSubject("hi");
 _curr = this._sub.asObservable();
 postsUrl = "http://localhost:2020/api/posts"
 addPost = "http://localhost:2020/users/addPost/"
  constructor(private http : HttpClient) { }

  sendPost(msg){
    console.log(msg);
    this._sub.next(msg);
  }

  getAllPosts(){
    return this.http.get(this.postsUrl);
  }
  postNew(id, data){
    return this.http.put(this.addPost+id, data);
  }

}
