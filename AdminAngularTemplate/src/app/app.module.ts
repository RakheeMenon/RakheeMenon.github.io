import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {RouterModule} from '@angular/router';
import { AppComponent } from './app.component';
import { AppHeaderComponent } from './app-header/app-header.component';
import { AppMenuComponent } from './app-menu/app-menu.component';
import { AppFooterComponent } from './app-footer/app-footer.component';
import { ItemMasterComponent } from './item-master/item-master.component';
import { AppContentComponent } from './app-content/app-content.component';
import { ItemGroupComponent } from './item-group/item-group.component';
import { ItemCategoryComponent } from './item-category/item-category.component';


@NgModule({
  declarations: [
    AppComponent,
    AppHeaderComponent,
    AppMenuComponent,
    AppFooterComponent,
    ItemMasterComponent,
    AppContentComponent,
    ItemGroupComponent,
    ItemCategoryComponent,
    
    
  ],
  imports: [
    BrowserModule,


     RouterModule.forRoot([

      {
        path:'itemgrp',
        component:ItemGroupComponent
      },

      {
        path:'items',
        component:ItemMasterComponent
      },
      {
        path:'itemcat',
        component:ItemCategoryComponent
      }


      ])

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
