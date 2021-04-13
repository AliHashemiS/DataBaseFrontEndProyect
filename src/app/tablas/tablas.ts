import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { UserService } from '../service/user-service';
import { TablaService } from '../service/tabla-service';
import { AtributePrivilegeService } from '../service/attibute-service';

@Component({
  selector: 'app-root',
  templateUrl: './tablas.html',
  styleUrls: ['./tablas.css']
})
export class TablasComponent {
  public title = 'Visor de diagramas y privilegios de bases de datos';
  tablas = [];
  user;
  tablaSeleccionada = "";
  atributosTabla = [];
  privilegeTable = [];

  constructor(private route: ActivatedRoute, private userService: UserService, private tabla: TablaService, private attributePrivilege: AtributePrivilegeService) { }

  ngOnInit() {
    this.user = this.userService.getUser();
    this.route.queryParams.subscribe(params => {
      params.tablas.forEach(element => {
        const tableName = element.split(',')[1]
        this.tablas.push(tableName)
      });
      this.getTableAttributes(this.tablas[0]);
      this.tablaSeleccionada = this.tablas[0];
    });
  }

  ngAfterViewInit() {
    this.removeBodyLeftSpace();
  }

  removeBodyLeftSpace() {
    const element = document.body
    element.style.marginLeft = '0px';
  }

  getTableAttributes(tableName) {
    this.tablaSeleccionada = tableName; 
    this.tabla.getConfig(tableName).subscribe(rest =>{
      this.atributosTabla = rest;
    },(rest) => {
      alert(rest)
    });
  }

  getAttribute(attribute) {
    this.attributePrivilege.getConfig(this.tablaSeleccionada, attribute).subscribe(rest =>{
      this.privilegeTable = rest;
      alert(rest.toString())
    },() => {
      alert("Error!!!")
    });
  }
}

