import { Component } from '@angular/core';
import { FormGroup, FormBuilder } from  '@angular/forms';
import { LoginService } from '../service/login-service';

@Component({
  selector: 'app-root',
  templateUrl: './login.html',
  styleUrls: ['./login.css']
})
export class LoginComponent {
  public title = 'Visor de diagramas y privilegios de bases de datos';

  constructor(private formBuilder: FormBuilder, private config: LoginService) {
    this.createContactForm();
  }

  contactForm: FormGroup;

  createContactForm(){
    this.contactForm = this.formBuilder.group({
      server: [''], 
      port: [''], 
      database: [''], 
      password: [''], 
      host: ['']
    });
  }

  onSubmit(){
    this.config.getConfig().subscribe(rest =>{
      console.log(rest);
    });
    //console.log(this.contactForm.value);
  }
}

