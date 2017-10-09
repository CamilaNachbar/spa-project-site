import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/toPromise';
import { Product } from '../model/product';
import { Http, RequestOptions, Headers } from '@angular/http';
@Injectable()
export class HomeService {

  constructor(private http: Http) { }

  public getAllProducts() {
    let headers = new Headers({ 'Authorization': localStorage.getItem("token") });
    return this.http.get('http://localhost:8080/product', new RequestOptions({ headers: headers }) ).toPromise().then(response => response.json());
  
  }

}
