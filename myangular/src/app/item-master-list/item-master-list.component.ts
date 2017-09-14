import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';
import { ItemMasterService } from './../services/item-master.service';
import { Component, OnInit } from '@angular/core';
//import { Observable } from 'rxjs/Observable';
//import 'rxjs/add/observable/combineLatest';
import {Item} from './../item';

@Component({
  selector: 'item-master-list',
  templateUrl: './item-master-list.component.html',
  styleUrls: ['./item-master-list.component.css']
})
export class ItemMasterListComponent implements OnInit {
items:any[];
item=new Item();
id:number;
itemname:string;
itemno:number;
itemdescription:string;
itemgroup:string;
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
        this.itemname=item.itemName;
        this.itemno=item.itemNo;
        this.itemdescription=item.itemDescription;
        this.itemgroup=item.itemGroup;
    });
  }*/

  Edit(item){
       this.router.navigate(['/items',item.id])
            console.log("clicked");
  }
  
}

  
  

  


