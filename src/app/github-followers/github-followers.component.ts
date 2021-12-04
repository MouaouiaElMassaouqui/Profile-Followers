import { Component, OnInit } from '@angular/core';
import { AppError } from '../CommonValidators/app-error';
import { NotFoundError } from '../CommonValidators/not-found-error';
import { GithubFollowersService } from './../Services/github-followers.service';

@Component({
  selector: 'app-github-followers',
  templateUrl: './github-followers.component.html',
  styleUrls: ['./github-followers.component.css']
})
export class GithubFollowersComponent implements OnInit {
  
   followers : any = [];
  constructor(private followersService: GithubFollowersService) { }

  ngOnInit(): void {
    this.getFollowers();
  }
   
   getFollowers(){

    this.followersService.getAll().subscribe(followers => {
      this.followers = followers;
      console.log(followers)
    }, (error : AppError) => {
         if(error instanceof NotFoundError){
           alert('unexpected error')
         }else {
           alert('expected error');
         }
    })
   }

}
