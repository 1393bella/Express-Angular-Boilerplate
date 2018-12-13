import { Component, OnInit } from '@angular/core';
import { HttpFetchService } from '../http-fetch.service';

@Component({
  selector: 'app-SampleOne',
  templateUrl: './SampleOne.component.html',
  styleUrls: ['./SampleOne.component.css']
})
export class SampleOneComponent implements OnInit {
  result:any;
  constructor(private _http:HttpFetchService) { }

  ngOnInit() {
    let id ="5c128402f1e3860c583a0aad";
    let observe = this._http.yank(id,"One");
    observe.subscribe(data=>{
      this.result=data;
      console.log(this.result);
    })
  }

}
