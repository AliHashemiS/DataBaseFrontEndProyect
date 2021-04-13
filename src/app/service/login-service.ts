import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';

@Injectable()
export class LoginService {
  constructor(private http: HttpClient) { }

  configUrl = 'http://localhost:4000/api/test';

  getConfig({server, port, database, password, username}):Observable<any> {
    let params = new HttpParams().set("server",server).set("port",port).set("database",database).set("password",password).set("username",username); //Create new HttpParam
    return this.http.get(this.configUrl, {params:params});
  }
}