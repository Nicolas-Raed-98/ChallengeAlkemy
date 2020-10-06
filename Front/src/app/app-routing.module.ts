import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { LoginAdminComponent } from './components/login-admin/login-admin.component';
import { LoginAlumnoComponent } from './components/login-alumno/login-alumno.component';
import { LoginComponent } from './components/login/login.component';
import { OpcionesAdminComponent } from './components/opciones-admin/opciones-admin.component';
import { OpcionesAlumnoComponent } from './components/opciones-alumno/opciones-alumno.component';
import { TableTeacherComponent } from './components/table-admin/table-admin.component';
import { TableMateriasComponent } from './components/table-materias/table-materias.component';
import { MateriasDisponiblesComponent } from './components/materias-disponibles/materias-disponibles.component';
import { MateriasDescripcionComponent } from './components/materias-descripcion/materias-descripcion.component';
const routes: Routes = [
  { path: "", pathMatch: "full", redirectTo: 'login' },
  { path: "loginAdmin", component: LoginAdminComponent, pathMatch: "full" },
  { path: "loginAlumno", component: LoginAlumnoComponent, pathMatch: "full" },
  { path: "login", component: LoginComponent, pathMatch: "full" },
  { path: "optionsAdmin", component: OpcionesAdminComponent, pathMatch: "full" },
  { path: "optionsStudent", component: OpcionesAlumnoComponent, pathMatch: "full" },
  { path: "tableTeacher", component: TableTeacherComponent, pathMatch: "full" },
  { path: "tableSubjects", component: TableMateriasComponent, pathMatch: "full" },
  { path: "davailableSubjects", component: MateriasDisponiblesComponent, pathMatch: "full" },
  { path: "subjectDescr", component: MateriasDescripcionComponent, pathMatch: "full" },
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
