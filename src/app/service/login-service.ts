import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';

@Injectable()
export class LoginService {
  constructor(private http: HttpClient) { }

  //Url para logearse los privilegios desde el back end
  configUrl = 'http://localhost:4000/api/tabla';

  //Envia los datos necesarios para logearse al backend por medio de un http 
  //y recibe las tablas de la base de datos
  getConfig({server, port, database, password, username}):Observable<any> {
    let params = new HttpParams().set("server",server).set("port",port).set("database",database).set("password",password).set("username",username); //Create new HttpParam
    return this.http.get(this.configUrl, {params:params});
  }
}