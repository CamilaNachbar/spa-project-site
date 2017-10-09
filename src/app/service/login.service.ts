import { Injectable } from '@angular/core';
import { Http, RequestOptions, Response } from "@angular/http";
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

@Injectable()
export class LoginService {

  constructor(private http: Http) { }

  login(nickname: String, password: String) {
    return this.http.post('http://localhost:8080/login',
      JSON.stringify({ nickname: nickname, password: password })).map((response: Response) => {
       debugger;       
        var token = response.headers.get("authorization"); localStorage.setItem("token", token);
        var token_expiration = response.headers.get("authorization_expiration"); localStorage.setItem("token_expiration", token_expiration);
      
      });

  }
}
