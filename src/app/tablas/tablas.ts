import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { UserService } from '../service/user-service';


@Component({
  selector: 'app-root',
  templateUrl: './tablas.html',
  styleUrls: ['./tablas.css']
})
export class TablasComponent {
  public title = 'Visor de diagramas y privilegios de bases de datos';
  tablas = [];
  user;

  constructor(private route: ActivatedRoute, private userService: UserService) { }

  ngOnInit() {
    this.user = this.userService.getUser();
    console.log(this.user);
    this.route.queryParams.subscribe(params => {
      params.tablas.forEach(element => {
        const tableName = element.split(',')[1]
        this.tablas.push(tableName)
      });
      console.log(this.tablas);
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
    console.log(tableName);
  }
}

