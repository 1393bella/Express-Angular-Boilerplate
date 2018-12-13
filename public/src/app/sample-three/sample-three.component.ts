import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-sample-three',
  templateUrl: './sample-three.component.html',
  styleUrls: ['./sample-three.component.css']
})
export class SampleThreeComponent implements OnInit {
  nestedBlurb:any
  constructor(private _route:ActivatedRoute) { }

  ngOnInit() {
    this._route.params.subscribe(params => {
      this.nestedBlurb=params;
      console.log(params)
    })
  }

}
