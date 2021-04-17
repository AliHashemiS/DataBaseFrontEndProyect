import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { LoginComponent } from './login/login';
import { FormsModule, ReactiveFormsModule  } from '@angular/forms';
import { LoginService } from './service/login-service';
import { AppRoutingModule } from './app-routing.module';
import { TablasComponent } from "./tablas/tablas";
import { AppComponent } from './app.component';
import { UserService } from './service/user-service';
import { TablaService } from './service/tabla-service';
import { AtributePrivilegeService } from './service/attibute-service';

//Se importan los componentes y se agregan a declarations
@NgModule({
  declarations: [
    LoginComponent,
    TablasComponent,
    AppComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    AppRoutingModule
  ],
  //Los servicios utilizados para realizar la conexión se agregan en providers
  providers: [LoginService, UserService, TablaService, AtributePrivilegeService],
  bootstrap: [AppComponent]
})
export class AppModule { }
