import { Item } from './../item';
import { Router, ActivatedRoute } from '@angular/router';
import { ItemMasterService } from './../services/item-master.service';
import { BadInput } from './../common/bad-input';
import { NotFoundError } from './../common/not-found-error';
import { AppError } from './../common/app-error';
import { FormGroup, FormBuilder, Validators,FormControl } from '@angular/forms';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-item-details',
  templateUrl: './item-details.component.html',
  styleUrls: ['./item-details.component.css']
})
export class ItemDetailsComponent implements OnInit {
  //Itemid:number;
  itemname:string;
  itemno:number;
  itemdescription:string;
  itemgroup:string;
  items:any[];
  form:FormGroup;
  item =new Item();
   group = [
    {id:1,name:'Casting'},
    {id:2,name:'Forging'},
    {id:3,name:'Machining'},
  ]
  constructor(
              private service:ItemMasterService,
              private _router: Router,
              fb:FormBuilder,
              private _route:ActivatedRoute) {

                this.form=fb.group({
                  itemName:['',Validators.required],
                  itemNo:['',Validators.required],
                  itemDescription:['',Validators.required],
                  itemGroup:['',Validators.required]
    })

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
           /* let id=this._route.snapshot.params['id'];
            this.Itemid=id;
            console.log(id);
            this.service.getDetails(id)
            .subscribe(
                item => this.item = item,
                response => {
                    if (response.status == 404) {
                        this._router.navigate(['NotFound']);
                    }
                });*/
                /*this.service.getAll()
          .subscribe(item => this.item);*/


                  this._route.paramMap
                  .subscribe(params=>{
                  let Itemid=+params.get('id');
                  console.log(Itemid);
                  this.service.getDetails(Itemid)
                  .subscribe(item=>{                                        //xyz=>this.item=xyz
                     this.item=item
                    //this.item=item,
                    //this.item=items,
                    //console.log(items);
                    //console.log("xyz");
                    },
                   (error:Response)=>{
                 //updating UI

                  if(error instanceof BadInput){        //error handling
                    // this.form.setErrors(error.originalError)
                    }
                      else throw error;
                    });

                  });

      
  }


 EditItem(item){
    this.service.update(item)
      .subscribe(item=>{
        this.item=item;
      });

  }

  


  get itemName(){
    return this.form.get('itemName');
  }

  get itemNo(){
    return this.form.get('itemNo');
  }

  get itemDescription(){
    return this.form.get('itemDescription');
  }

  get itemGroup(){
    return this.form.get('itemGroup');
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
