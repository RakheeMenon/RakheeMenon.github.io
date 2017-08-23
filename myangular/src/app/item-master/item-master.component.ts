import { Router } from '@angular/router';
import { BadInput } from './../common/bad-input';
import { NotFoundError } from './../common/not-found-error';
import { AppError } from './../common/app-error';
import { FormGroup, FormBuilder, Validators,FormControl } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import {ItemMasterService} from './../services/item-master.service'
import {Item} from './../item';


@Component({
  selector: 'item-master',
  templateUrl: './item-master.component.html',
  styleUrls: ['./item-master.component.css']
})
export class ItemMasterComponent implements OnInit {
  itemmaster:any[];
  itemname:string;
  itemno:number;
  itemdescription:string;
  itemgroup:string;
  item=new Item();
  form:FormGroup;
  items:any[];
  group = [
    {id:1,name:'Casting'},
    {id:2,name:'Forging'},
    {id:3,name:'Machining'},
  ]

  ngOnInit(){

          this.service.getAll()
          .subscribe(item => console.log(item));
  }

  constructor(
              private service:ItemMasterService,
              fb:FormBuilder,
              private _router: Router
              ) 
  { 
      this.form=fb.group({
      itemName:['',Validators.required],
      itemNo:['',Validators.required],
      itemDescription:['',Validators.required],
      itemGroup:['',Validators.required]
    })
  }


  createPost(){
    //let items={itemName:input.value,itemNo:input.value,itemDescription:input.value,itemGroup:input.value}          //we create the posts object & immediately place it inside posts.
    //this.items.splice(0,0,items);  
    //var result;
    //input.value='';
    console.log("saved");
    this.service.create(this.item)
    //console.log(result);
    .subscribe(
      item=>{
        //item=console.log(item);
        this.itemname=item.itemName;
        this.itemno=item.itemNo;
        this.itemdescription=item.itemDescription;
        this.itemgroup=item.itemGroup;
        debugger;
      //post['id']=newPost.id;
       //this._router.navigate(['item']);
      
    },
    (error:Response)=>{
                 //updating UI

        if(error instanceof BadInput){        //error handling
         // this.form.setErrors(error.originalError)
        }
        else throw error;
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

  submit(){
    console.log("Submitted");
  }
}
