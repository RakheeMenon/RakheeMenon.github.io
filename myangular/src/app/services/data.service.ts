import { BadInput } from './../common/bad-input';
import { NotFoundError } from './../common/not-found-error';
import { AppError } from './../common/app-error';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';
import 'rxjs/add/operator/map';
import { Http,Headers,RequestOptions } from '@angular/http';
import { Injectable } from '@angular/core';

@Injectable()
export class DataService {
 
  constructor(private url:string,private http:Http) { }


  getDetails(id){
     console.log("id=" + id)
     console.log(this.getUserUrl(id))
		return this.http.get(this.getUserUrl(id))
      .map(response => response.json())
      .catch(this.handleError);
	}

  getAll(){
     console.log("all items url:" + this.url)
    return this.http.get(this.url)
    .map(response=>response.json())
    .catch(this.handleError);
  }

   

  create(resource){
    //console.log(resource);
    let headers = new Headers({
           /*  "Access-Control-Allow-Origin":'*',
            "Access-Control-Allow-Headers":'Accept, Content-Type, Origin',
            "Access-Control-Allow-Methods":'GET, POST, PUT,DELETE,OPTIONS',*/
            "Content-Type": 'application/json'
            });
        let options = new RequestOptions({ headers: headers });
    console.log('resources')
    return this.http.post(this.url,JSON.stringify(resource),options)
    .map(response=>response.json())
    .catch(this.handleError);
  }

  update(resource){
    let headers = new Headers({
           /* "Access-Control-Allow-Origin":'*',
            "Access-Control-Allow-Headers":'Accept, Content-Type, Origin',
            "Access-Control-Allow-Methods":'GET, POST, PUT, DELETE, OPTIONS',*/
            "Content-Type": 'application/json'
            });
        let options = new RequestOptions({ headers: headers });
    return this.http.put(this.getUserUrl(resource.id)+'/',JSON.stringify(resource),options)
    .map(response=>response.json())
    .catch(this.handleError);
  }
  
  delete(id){
    console.log("xyzz")
    console.log(id)
    return this.http.delete(this.getUserUrl(id))
    .map(response=>response.json())
    .catch(this.handleError);
  }

  private getUserUrl(id){
    console.log(this.url)
		return this.url + id;
	}

  private handleError(error:Response){

    if(error.status===400)
        return Observable.throw(new BadInput(error.json()))

    if(error.status===404)
        return Observable.throw(new NotFoundError(error))

    return Observable.throw(new AppError());
  }

}
