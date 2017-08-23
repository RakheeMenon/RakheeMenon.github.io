import { FormGroup, FormArray, FormControl } from '@angular/forms';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'newcourse-form',
  templateUrl: './newcourse-form.component.html',
  styleUrls: ['./newcourse-form.component.css']
})
export class NewcourseFormComponent {


  form=new FormGroup({
    topics:new FormArray([])
  })

  addTopic(topic:HTMLInputElement){

    this.topics.push(new FormControl(topic.value));                  //topics-> we get a reference so that we can push a topic.
    topic.value='';
  }

  get topics(){                                                                //getter
    return this.form.get('topics') as FormArray
  }


  removeTopic(topic:FormControl){

    let index=this.topics.controls.indexOf(topic);
    this.topics.removeAt(index);

  }
}
