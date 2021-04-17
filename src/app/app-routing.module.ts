import { NgModule } from '@angular/core';
import { TablasComponent } from "./tablas/tablas";
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login';

//Se crean los paths para los componentes
const routes: Routes = [
  {path: 'tablas', component: TablasComponent},
  { path: '**', component: LoginComponent}
];

@NgModule({
  declarations: [],
  imports: [RouterModule.forRoot(routes)],
  exports:[RouterModule],
  bootstrap: [AppComponent]
})
export class AppRoutingModule { }
