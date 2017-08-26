import { ActivatedRoute } from '@angular/router';
import { ItemMasterService } from './../services/item-master.service';
import { Component, OnInit } from '@angular/core';
import {Item} from './../item';

@Component({
  selector: 'item-master-list',
  templateUrl: './item-master-list.component.html',
  styleUrls: ['./item-master-list.component.css']
})
export class ItemMasterListComponent implements OnInit {
items:any[];
//item=new Item();
 //itemname:string;
  //itemno:number;
  //itemdescription:string;
  //itemgroup:string;
  constructor(private service:ItemMasterService,
              private route:ActivatedRoute) { }

  ngOnInit() {
        
      
        //let id=+params.get('id');
        //console.log(id);
      this.service.getAll()
      .subscribe(items => this.items=items);
     /* this.route.paramMap
      .subscribe(params=>{
        console.log(params);
      
       });*/
  }

  

}
