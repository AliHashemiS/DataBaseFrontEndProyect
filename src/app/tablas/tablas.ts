import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-root',
  templateUrl: './tablas.html',
  styleUrls: ['./tablas.css']
})
export class TablasComponent {
  public title = 'Visor de diagramas y privilegios de bases de datos';
  tablas = [];

  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.queryParams.subscribe(params => {
      params.tablas.forEach(element => {
        const tableName = element.split(',')[1]
        this.tablas.push(tableName)
      });
      console.log(this.tablas);
    });
  }
}

