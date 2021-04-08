import { Component } from '@angular/core';
import { FormGroup, FormBuilder } from  '@angular/forms';
import { LoginService } from '../service/login-service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './login.html',
  styleUrls: ['./login.css']
})
export class LoginComponent {
  public title = 'Visor de diagramas y privilegios de bases de datos';

  constructor(private formBuilder: FormBuilder, private config: LoginService, private router:Router) {
    this.createContactForm();
  }

  contactForm: FormGroup;

  createContactForm(){
    this.contactForm = this.formBuilder.group({
      server: [''], 
      port: [''], 
      database: [''], 
      password: [''], 
      username: ['']
    });
  }

  onSubmit(){
    var result
    /*this.contactForm.value son los datos que se resiben 
    por medio del login y se mandan al backend para realizar la conexion*/
    this.config.getConfig(this.contactForm.value).subscribe(rest =>{
      result = rest;
      console.log('3');
      this.router.navigate(['tablas'], { queryParams: { tablas: rest} });
    },() => {
      alert("Error de conexion, datos erroneos revisar los datos!!!")
  });
  }
}

