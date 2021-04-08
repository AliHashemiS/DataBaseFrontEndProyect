import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { LoginComponent } from './login/login';
import { FormsModule, ReactiveFormsModule  } from '@angular/forms';
import { LoginService } from './service/login-service';
import { AppRoutingModule } from './app-routing.module';
import { TablasComponent } from "./tablas/tablas";
import { AppComponent } from './app.component';


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
  providers: [LoginService],
  bootstrap: [AppComponent]
})
export class AppModule { }
