import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

/*
  Generated class for the ApiDataProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class ApiDataProvider {

  api_url = 'http://localhost:3000/users';

  constructor(public http: HttpClient) {
    console.log('Hello ApiDataProvider Provider');
    
  }

  getData(){
    return this.http.get(this.api_url)
  }

  addData(adddata){
    
    return this.http.post(this.api_url ,adddata)
  }

  delData(id){
    return this.http.delete(this.api_url+'/'+id)
  }

}
