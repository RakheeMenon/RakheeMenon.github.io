import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'favorite',
  templateUrl: './favorite.component.html',
  styleUrls: ['./favorite.component.css']
})
export class FavoriteComponent {
  @Input('isfavorite') isFavorite:Boolean;
  @Output('change') change=new EventEmitter();
  
  onClick(){
    this.isFavorite=!this.isFavorite;
    this.change.emit({newValue:this.isFavorite});     /*Here we are passing some data when the event has
                                             been raised. subscriber of change event is the app
                                            component bcoz that is were we are handling the event(onfavChang)
                                            In case 2 we pass an object with property new value having boolean value*/
  }
}
export interface FavChangedEventArgs{
  newValue:Boolean
}

