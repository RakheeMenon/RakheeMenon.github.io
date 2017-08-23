import { BadInput } from './../common/bad-input';
import { NotFoundError } from './../common/not-found-error';
import { AppError } from './../common/app-error';
import { PostsService } from './../services/posts.service';
import { Component, OnInit } from '@angular/core';
import { Http } from "@angular/http";

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent implements OnInit {
  posts:any[];
  
  constructor(private service:PostsService) {                                  //we have injected HTTP class in this  hence we need to register it as a provider
    
        
  }                       
      ngOnInit(){
        this.service.getAll()
          .subscribe(posts => this.posts=posts);
                                        //console.log(response.json());
                                              //displayed lists of posts on the browser instead on console

      }
  createPost(input:HTMLInputElement){
    let post={title:input.value}          //we create the posts object & immediately place it inside posts.
    this.posts.splice(0,0,post);      

    input.value='';

    this.service.create(post)
    .subscribe(
      newPost =>{
      post['id']=newPost.id;
      
    },
      (error:Response)=>{
        this.posts.splice(0,1);          //updating UI

        if(error instanceof BadInput){        //error handling
          //this.form.setErrors(error.originalError)
        }
        else throw error;
      });
  }

  updatePost(post){
    this.service.update(post)
    .subscribe(
      updatedPost=>{
      console.log(updatedPost);
    });
  }

  deletePost(post){
    let index=this.posts.indexOf(post);
    this.posts.splice(index,1);

    this.service.delete(post.id)             //calling the server
    .subscribe(
      null,
      (error:AppError)=>{
        this.posts.splice(index,0,post);
          if(error instanceof NotFoundError){
            alert('This post has already been deleted');
          }
          else throw error;
    });
  }

}
