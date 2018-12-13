import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sample-two',
  templateUrl: './sample-two.component.html',
  styleUrls: ['./sample-two.component.css']
})
export class SampleTwoComponent implements OnInit {
  modifier=4
  blurb="Nested route is nested"
  constructor() { }

  ngOnInit() {
  }

}
