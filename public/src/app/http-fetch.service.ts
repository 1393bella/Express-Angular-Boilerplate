import { Injectable } from '@angular/core';
// <*> IMPORTANT! HttpClient has to come from @angular,
// NOT selenium.
import { HttpClient } from '@angular/common/http'


// <*> ng g s <your-service-name-here>
// if "http-fetch" doesn't work for you
// Include in app.nmodule.ts Providers array
@Injectable({
  providedIn: 'root'
})
export class HttpFetchService {
  
  // <*> HTTP cliend is not imported by default
  // Add manually
  constructor(private _http:HttpClient) { }
    //RESTful routes in action
    getAllSamples(){
      return this._http.get('/api/samples');
    }

    getOneSample(id){
      return this._http.get('/api/samples/'+id+'/');
    }

    postNewSample(data){
      return this._http.post('/api/samples/',data);
    }

    updateSample(id,data){
      return this._http.post('/api/samples/'+id+'/',data);
    }
    deleteSample(id){
      return this._http.delete('/api/samples/'+id+'/');
    }

    yank(id,str){
      return this._http.get('/api/dependents/'+id+'/'+str+'/')
    }
}
