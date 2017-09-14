import { Item } from './../item';
import { Router, ActivatedRoute } from '@angular/router';
import { ItemMasterService } from './../services/item-master.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-item-details',
  templateUrl: './item-details.component.html',
  styleUrls: ['./item-details.component.css']
})
export class ItemDetailsComponent implements OnInit {
  Itemid:number;
  itemname:string;
  itemno:number;
  itemdescription:string;
  itemgroup:string;
  item =new Item();
  constructor(
              private service:ItemMasterService,
              private _router: Router,
              private _route:ActivatedRoute) {

               }

  ngOnInit() {
     /*this._route.paramMap
      .subscribe(params=>{
        let id=+params.get('id');
        console.log(id);
        this.service.getDetails(id)
            .subscribe(
              item=>this.item=item,
              response=>{
                if(response.status == 404){
                   this._router.navigate(['NotFound']);
                }*/
              //});
            let id=this._route.snapshot.params['id'];
            this.Itemid=id;
            console.log(id);
            this.service.getDetails(id)
            .subscribe(
                item => this.item = item,
                response => {
                    if (response.status == 404) {
                        this._router.navigate(['NotFound']);
                    }
                });

      
  }



  /*updateItem(){
    
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

  

}
