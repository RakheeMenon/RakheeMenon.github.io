import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';
import { ItemMasterService } from './../services/item-master.service';
import { Component, OnInit } from '@angular/core';
import { NotFoundError } from './../common/not-found-error';
import { AppError } from './../common/app-error';
//import { Observable } from 'rxjs/Observable';
//import 'rxjs/add/observable/combineLatest';
import {ChangeDetectionStrategy, Input} from "@angular/core";
//import {PaginationInstance} from
import {Item} from './../item';
import { PaginationInstance } from "ngx-pagination/dist/ngx-pagination";

@Component({
  selector: 'item-master-list',
  templateUrl: './item-master-list.component.html',
  styleUrls: ['./item-master-list.component.css'],
  changeDetection: ChangeDetectionStrategy.Default
})
export class ItemMasterListComponent implements OnInit {

public maxSize:number=7;
public config : PaginationInstance={
  itemsPerPage: 10,
  currentPage :1
};
public labels: any= {
  previousLabel: 'Previous',
  nextLabel: 'Next',
  ScreenReaderPaginationLabel: 'page',
  ScreenCurrentPaginationLabel: `You're on page`
};
items:any[];
item=new Item();
public Itemid:number;
itemname:string;
itemno:number;
itemdescription:string;
itemgroup:string;
p:number[]=[];

//myWindow;
showHide: false;
  constructor(private service:ItemMasterService,
              private router:Router,
              private route:ActivatedRoute) { 
                
              }
  
  ngOnInit() {

    this.service.getAll()
      .subscribe(items => this.items=items);
            
      /* this.service.getDetails(this.id)
			.subscribe(
                item => this.item = item,
                response => {
                    if (response.status == 404) {
                        this.router.navigate(['NotFound']);
                    }
                });
                  this.route.paramMap
          .subscribe(params=>{
          let id=+params.get('id');

          });
    /*this.route.paramMap
      .subscribe(params=>{
      let id=+params.get('id');*/
        
  }     
        
              
              

      
      //console.log(this.item.id); 

      
        //});
    
   

  
    /*Observable.combineLatest([
      this.route.paramMap,
      
    ])*/
    
    /*.subscribe(combined=>{
      let id=combined[0].get('id');
      this.service.getid(id)
      //let id=this.route.snapshot.paramMap.get('id');
      console.log(id);
        //this.service.get();
      this.service.getAll()
      .subscribe(items => this.items=items);

      });
        //let id=+params.get('id');
        //console.log(id);
     
     /* this.route.paramMap
      .subscribe(params=>{
        console.log(params);
      
       });*/
  /*    updateItem(){
    
    this.service.update(this.item)
    .subscribe(
      item=>{
        //this.service.getAll()
      //console.log(updatedPost);
       
    });
  }*/

  EditItem(item){


    this.router.navigate(['/items',item.id])

    
       /* var result;
        this.service.getDetails(id)
		            	.subscribe(
                    item => this.item = item,
                    response => {
                    if (response.status == 404) {
                        this.router.navigate(['NotFound']);
                    }
                  });*/
        /*this.itemname=item.itemName;
        this.itemno=item.itemNo;
        this.itemdescription=item.itemDescription;
        this.itemgroup=item.itemGroup;*/
      /* this.route.paramMap
          .subscribe(params=>{
           let Itemid=+params.get('id');
            this.service.getDetails(Itemid)
			.subscribe(
                item => this.item = item,
                response => {
                    if (response.status == 404) {
                        this.router.navigate(['NotFound']);
                    }
                });
          });*/
              
            console.log("clicked");
  }

   /*preventNormal(event:MouseEvent){
    event.preventDefault()
    alert("Are you sure you want to delete this item??")
  }*/

  deleteItem(item){
    if(confirm("Are you sure you want to delete this item"+' '+item.itemName+"?")){
    let index=this.items.indexOf(item);
    this.items.splice(index,1);

    this.service.delete(item.id)
    .subscribe(
       null,
      /*(error:AppError)=>{
        this.items.splice(index,0,item);
          if(error instanceof NotFoundError){
            alert('This post has already been deleted');
          }
          else throw error;
      }*/
    )
    }

    
  }
/*onPageChange(number: number) {
        console.log('change to page', number);
        this.config.currentPage = number;
    }*/

  /*public pageChanged(event:any):void {
//this method will trigger every page click  
    console.log('Number items per page: ' + event.itemsPerPage);
  };*/
/*closeWin(myWindow) {
    myWindow.close();
}*/

 
  
}

  
  

  


