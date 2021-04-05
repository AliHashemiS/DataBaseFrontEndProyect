import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';

@Injectable()
export class LoginService {
  constructor(private http: HttpClient) { }

  configUrl = 'http://localhost:4000/api/test';

  getConfig():Observable<any> {
    return this.http.get(this.configUrl);
  }

}