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
  selectedtables= [];

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

  tableExist(tableName) {
    for (let index = 0; index < this.selectedtables.length; index++) {
      const element = this.selectedtables[index];
      if(element.name == tableName) {
        return true;
      }
    }
    return false;
  }

  getTableAttributes(tableName) {
    if(!this.tableExist(tableName)) {
      this.tablaSeleccionada = tableName; 
      this.tabla.getConfig(tableName).subscribe(rest =>{
        this.atributosTabla = rest;
        const selectedTable = {
          name: tableName,
          attributes: rest
        }
        this.selectedtables.push(selectedTable)
        console.log(this.selectedtables);
      },(rest) => {
        alert(rest)
      });
    }
  }

  getAttribute(attribute, clickedTable) {
    this.attributePrivilege.getConfig(clickedTable, attribute).subscribe(rest =>{
      this.privilegeTable = rest;
      alert(rest.toString())
    },() => {
      alert("Error!!!")
    });
  }
}

