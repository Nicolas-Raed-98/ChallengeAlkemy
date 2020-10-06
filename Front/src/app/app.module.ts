import { BrowserModule } from '@angular/platform-browser';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA  } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AngularMaterialModule } from './angular-material/angular-material.module';
import { FlexLayoutModule} from '@angular/flex-layout';
import { LoginAdminComponent } from './components/login-admin/login-admin.component';
import { LoginAlumnoComponent } from './components/login-alumno/login-alumno.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { LoginComponent } from './components/login/login.component';
import { HttpClientModule } from '@angular/common/http';
import { OpcionesAdminComponent } from './components/opciones-admin/opciones-admin.component';
import { OpcionesAlumnoComponent } from './components/opciones-alumno/opciones-alumno.component';
import { TableTeacherComponent } from './components/table-admin/table-admin.component';
import { TableMateriasComponent } from './components/table-materias/table-materias.component';
import { MateriasDisponiblesComponent } from './components/materias-disponibles/materias-disponibles.component';
import { InicioComponent } from './components/inicio/inicio.component';
import { MateriasDescripcionComponent } from './components/materias-descripcion/materias-descripcion.component';
@NgModule({
  declarations: [
    AppComponent,
    LoginAdminComponent,
    LoginAlumnoComponent,
    LoginComponent,
    OpcionesAdminComponent,
    OpcionesAlumnoComponent,
    TableTeacherComponent,
    TableMateriasComponent,
    MateriasDisponiblesComponent,
    InicioComponent,
    MateriasDescripcionComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    AngularMaterialModule,
    FlexLayoutModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AppModule { }
