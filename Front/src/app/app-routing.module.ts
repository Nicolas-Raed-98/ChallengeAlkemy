import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { LoginAdminComponent } from './components/login-admin/login-admin.component';
import { LoginAlumnoComponent } from './components/login-alumno/login-alumno.component';
import { InicioComponent } from './components/inicio/inicio.component';
const routes: Routes = [
  { path: "", pathMatch: "full", redirectTo: 'Inicio' },
  { path: "Inicio", component: InicioComponent, pathMatch: "full" },
  { path: "loginAdmin", component: LoginAdminComponent, pathMatch: "full" },
  { path: "loginAlumno", component: LoginAlumnoComponent, pathMatch: "full" }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
