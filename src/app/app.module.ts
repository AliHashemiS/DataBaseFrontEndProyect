import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { LoginComponent } from './login/login';
import { FormsModule, ReactiveFormsModule  } from '@angular/forms';
import { LoginService } from './service/login-service';

@NgModule({
  declarations: [
    LoginComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [LoginService],
  bootstrap: [LoginComponent]
})
export class AppModule { }
