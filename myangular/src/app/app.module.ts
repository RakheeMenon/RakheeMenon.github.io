import {ItemMasterService} from './services/item-master.service'
import { GithubFollowersService } from './services/github-followers.service';
import { AppErrorHandler } from './common/app-error-handler';
import { ErrorHandler } from '@angular/core';
import { PostsService } from './services/posts.service';
import {HttpModule} from '@angular/http';
import { AuthorsService } from './services/authors.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
//import { NgClass } from '@angular/common';
import { AppComponent } from './app.component';
import { AuthorsComponent } from './authors/authors.component';
import { FavoriteComponent } from './favorite/favorite.component';
import { LikeComponent } from './like/like.component';
import { CustomPipesComponent } from './custom-pipes/custom-pipes.component';
import { TitlecasePipe } from './titlecase.pipe';
import { PostsComponent } from './posts/posts.component';
import { ZippyComponent } from './zippy/zippy.component';
import { DemoComponent } from './demo/demo.component';
import { ContactFormComponent } from './contact-form/contact-form.component';
import { CourseFormComponent } from './course-form/course-form.component';
import { SignupFormComponent } from './signup-form/signup-form.component';
import { NewcourseFormComponent } from './newcourse-form/newcourse-form.component';
import { ChangePasswordComponent } from './change-password/change-password.component';
import {RouterModule} from '@angular/router';
import { NavbarComponent } from './navbar/navbar.component';
import { HomeComponent } from './home/home.component';
import { NotfoundComponent } from './notfound/notfound.component';
import { PostComponent } from './post/post.component';
import { GithubFollowersComponent } from './github-followers/github-followers.component';
import { GithubProfileComponent } from './github-profile/github-profile.component';
import { ArchiveComponent } from './archive/archive.component';
import { ItemMasterComponent } from './item-master/item-master.component';
import {Item} from './item';
import { ItemMasterListComponent } from './item-master-list/item-master-list.component';
import { ItemDetailsComponent } from './item-details/item-details.component';
//import { ItemMlistComponent } from './item-mlist/item-mlist.component';
//import { ItemMComponent } from './item-m/item-m.component';

@NgModule({
  declarations: [
    AppComponent,
    AuthorsComponent,
    FavoriteComponent,
    LikeComponent,
    CustomPipesComponent,
    TitlecasePipe,
    PostsComponent,
    ZippyComponent,
    DemoComponent,
    ContactFormComponent,
    CourseFormComponent,
    SignupFormComponent,
    NewcourseFormComponent,
    ChangePasswordComponent,
    NavbarComponent,
    HomeComponent,
    NotfoundComponent,
    PostComponent,
    GithubFollowersComponent,
    GithubProfileComponent,
    ArchiveComponent,
    ItemMasterComponent,
    ItemMasterListComponent,
    ItemDetailsComponent,
    //ItemMlistComponent,
    //ItemMComponent,
    //NgClass
  
  ],
  imports: [
            BrowserModule,
            FormsModule,
            HttpModule,
            ReactiveFormsModule,
          
    RouterModule.forRoot([
      {
        path:'',
        component:HomeComponent
      },
      {
        path:'lists',
        component:ItemMasterListComponent
      },
      {
        path:'items/:id',
        component:ItemMasterComponent
      },
      {
        path:'items',
        component:ItemMasterComponent
      },
      /*{
        path:'archive/:year/:month',
        component:ArchiveComponent
      },*/
      /*{
        path:'details',
        component: ItemDetailsComponent
      },*/
      {
        path:'followers/:id/:username',
        component:GithubProfileComponent
      },
      {
        path:'followers',
        component:GithubFollowersComponent
      },
      
      {
        path:'posts',
        component:PostsComponent
      },
      {
        path:'**',
        component:NotfoundComponent
      }
      /*{
        path:'item/:id',
        component:ItemMasterComponent
      },
      {
        path:'items/new',
        component:ItemMasterComponent
      },
      {
        path:'items',
        component:ItemMasterComponent
      },*/
      
      
    ])
  ],
  providers: [AuthorsService,
              PostsService,
              GithubFollowersService,
              {provide:ErrorHandler,useClass:AppErrorHandler},
              ItemMasterService,
             ],
  bootstrap: [AppComponent]
})



export class AppModule { 
  
}
