import { Component, OnInit, Input, OnChanges } from '@angular/core';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css']
})
export class ContentComponent implements OnInit, OnChanges {
  @Input() searchThis: string;

  constructor() { }

  ngOnInit() {
  }

  ngOnChanges() {
    console.log("Content Component: "+this.searchThis);
  }

}
