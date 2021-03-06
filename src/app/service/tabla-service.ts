import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { UserService } from './user-service';

@Injectable()
export class TablaService {
    usuario;

    constructor(private http: HttpClient, private userService: UserService) { }

    configUrl = 'http://localhost:4000/api/table/attributes';

    //Envia el nombre de la tabla seleccionada para recibir los atributos de esta
    getConfig(tableName:string):Observable<any> {
        this.usuario = this.userService.getUser();
        let params = new HttpParams()
            .set("server", this.usuario.server)
            .set("port", this.usuario.port).set("database", this.usuario.database)
            .set("password", this.usuario.password).set("username", this.usuario.username)
            .set("tableName", tableName); //Create new HttpParam
        return this.http.get(this.configUrl, {params:params});
    }
}