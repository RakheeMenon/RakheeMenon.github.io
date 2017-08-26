import { Router, ActivatedRoute } from '@angular/router';
import { BadInput } from './../common/bad-input';
import { NotFoundError } from './../common/not-found-error';
import { AppError } from './../common/app-error';
import { FormGroup, FormBuilder, Validators,FormControl } from '@angular/forms';
import { Component, OnInit, Input } from '@angular/core';
import {ItemMasterService} from './../services/item-master.service'
import {Item} from './../item';


@Component({
  selector: 'item-master',
  templateUrl: './item-master.component.html',
  styleUrls: ['./item-master.component.css']
})
export class ItemMasterComponent implements OnInit {
  //itemmaster:any[];
  itemname:string;
  itemno:number;
  itemdescription:string;
  itemgroup:string;
  item=new Item();
  form:FormGroup;
  items:any[];
  list:any[];
  group = [
    {id:1,name:'Casting'},
    {id:2,name:'Forging'},
    {id:3,name:'Machining'},
  ]

  ngOnInit(){

          /*this.service.getAll()
          .subscribe(item => console.log(item));*/
  }

  constructor(
              private service:ItemMasterService,
              fb:FormBuilder,
              private _router: Router,
              private _route:ActivatedRoute
              ) 
  { 
      this.form=fb.group({
      itemName:['',Validators.required],
      itemNo:['',Validators.required],
      itemDescription:['',Validators.required],
      itemGroup:['',Validators.required]
    })
  }


  submit(input){
    console.log(input);
    console.log('rohit')
    let item ={}
    this.itemname=input.itemName;
    this.itemno=input.itemNo;
    this.itemdescription=input.itemDescription;
    this.itemgroup=input.itemGroup;
    /*let items={itemNaminpute:input.value,itemNo:input.value,itemDescription:input.value,itemGroup:input.value}
    console.log(items);
    console.log('test')          //we create the posts object & immediately place it inside posts.;
    this.items.splice(0,0,items);  
    
    //var result;
    //input.value='';input
    console.log("saved");
    console.log(input)
    console.log('input')
    console.log(this.item);
    console.log('this.template')*/
   // let items={itemName:input.value,itemNo:input.value,itemDescription:input.value,itemGroup:input.value}
    
    var result=this.service.create(input)
    //console.log(result);
    //con
    result.subscribe(
      item=>{
        //item=console.log(item);
        this.itemname=item.itemName;
        this.itemno=item.itemNo;
        this.itemdescription=item.itemDescription;
        this.itemgroup=item.itemGroup;
        
      //post['id']=newPost.id;*/
       this._router.navigate(['items']);
      
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

  
}
