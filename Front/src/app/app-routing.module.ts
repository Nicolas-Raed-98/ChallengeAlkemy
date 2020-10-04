import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { LoginAdminComponent } from './components/login-admin/login-admin.component';
import { LoginAlumnoComponent } from './components/login-alumno/login-alumno.component';
import { LoginComponent } from './components/login/login.component';
import { OpcionesAdminComponent } from './components/opciones-admin/opciones-admin.component';
import { OpcionesAlumnoComponent } from './components/opciones-alumno/opciones-alumno.component';
const routes: Routes = [
  { path: "", pathMatch: "full", redirectTo: 'login' },
  { path: "loginAdmin", component: LoginAdminComponent, pathMatch: "full" },
  { path: "loginAlumno", component: LoginAlumnoComponent, pathMatch: "full" },
  { path: "login", component: LoginComponent, pathMatch: "full" },
  { path: "optionsAdmin", component: OpcionesAdminComponent, pathMatch: "full" },
  { path: "optionsStudent", component: OpcionesAlumnoComponent, pathMatch: "full" }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
