import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'course-form',
  templateUrl: './course-form.component.html',
  styleUrls: ['./course-form.component.css']
})
export class CourseFormComponent {

  categories=[
    { id:1,name:'Arts'},
    {id:2,name:'Development'},
    {id:3,name:'RND'}
  ];
  submit(f){
    console.log(f);
  }

}
