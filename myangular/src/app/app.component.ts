import { FavChangedEventArgs } from './favorite/favorite.component';
import { AuthorsComponent } from './authors/authors.component';
import { Component } from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title='app';
    post={
    //isFavorite:true,
    likesCount:20,
    isLiked:true,
  }

   onFavoriteChanged(eventArgs:FavChangedEventArgs){
     console.log("Favorite Changed:",eventArgs);
   }

  
}
