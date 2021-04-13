import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { UserService } from './user-service';

@Injectable()
export class AtributePrivilegeService {
    usuario;

    constructor(private http: HttpClient, private userService: UserService) { }

    configUrl = 'http://localhost:4000/api/table/attributes/privilege';

    getConfig(tableName:string, attribute:string):Observable<any> {
        this.usuario = this.userService.getUser();
        let params = new HttpParams()
            .set("server", this.usuario.server)
            .set("port", this.usuario.port).set("database", this.usuario.database)
            .set("password", this.usuario.password).set("username", this.usuario.username)
            .set("tableName", tableName)
            .set("attributeName", attribute); //Create new HttpParam
        return this.http.get(this.configUrl, {params:params});
    }
}