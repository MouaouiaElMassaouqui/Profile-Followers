import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { AppError } from '../CommonValidators/app-error';
import { BadInput } from '../CommonValidators/bad-input';
import { NotFoundError } from '../CommonValidators/not-found-error';
import { PostService } from '../Services/post.service';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent implements OnInit {
   posts : any = [];
   appear = true;
   post = {
     id : 0, 
     title: '',
     body: '',
     userId:0
   }
  constructor(private postService : PostService) { 
    
  }

  ngOnInit(): void {
    this.getPosts();

  }

  getPosts(){
    this.postService.getAll().subscribe(response => { this.posts = response },
      (error : Response) =>{
        alert('unexpected error');
        console.log(error)
      }
    )
  }
  editPost(post){
    this.appear=false;
    this.post = post;
  }
  updatePost(){
    this.postService.update(this.post).subscribe(response => 
      { 
      this.post = {
        id: 0,
        title: '',
        body: '',
        userId: 0
      }
      this.appear= true;
      }
    )

  }
  addPost(){
    this.postService.Create(this.post).subscribe(response => { 
      this.posts.unshift(this.post)
      this.post = {
        id: 0,
        title: '',
        body: '',
        userId: 0
      }, (error : AppError) =>{
        if(error instanceof BadInput){
          alert(' thank you for vverify your informations');
        console.log(error);      
        } else {
          alert('unexpected error');
          console.log(error);
        }
      }
     }
    )
   
  }

  postError = {
  id: 1000,
  title: '',
  body: '',
  userId: 1000
}
  deletePost(post){
    this.postService.delete(123).subscribe(response => {
      let index = this.posts.indexOf(this.postError);
      this.posts.splice(index, 1);
      console.log(response);
  }, 
  (error: AppError) => {
    if (error instanceof NotFoundError){
      alert('this post is already deleted');
      console.log(error);
    }else {
      alert('unexpected error');
      console.log(error);
    }
     
  })
  }


}
