import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { LoginAdminComponent } from './components/login-admin/login-admin.component';
import { LoginAlumnoComponent } from './components/login-alumno/login-alumno.component';
import { LoginComponent } from './components/login/login.component';
const routes: Routes = [
  { path: "", pathMatch: "full", redirectTo: 'login' },
  { path: "loginAdmin", component: LoginAdminComponent, pathMatch: "full" },
  { path: "loginAlumno", component: LoginAlumnoComponent, pathMatch: "full" },
  { path: "login", component: LoginComponent, pathMatch: "full" }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
