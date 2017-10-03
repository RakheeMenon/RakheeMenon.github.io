import { Component, OnInit, EventEmitter, Output, Input } from '@angular/core';

@Component({
  selector: 'custom',
  templateUrl: './custom.component.html',
  styleUrls: ['./custom.component.css']
})
export class CustomComponent implements OnInit {
  @Input() maxSize: number;
  @Output() pageChange: EventEmitter<number>;

  constructor() { }

  ngOnInit() {
  }

}


