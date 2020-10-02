import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { InicioComponent } from './components/inicio/inicio.component';
import {AngularMaterialModule} from './angular-material/angular-material.module';
import { FlexLayoutModule} from '@angular/flex-layout';
import { LoginAdminComponent } from './components/login-admin/login-admin.component';
import { LoginAlumnoComponent } from './components/login-alumno/login-alumno.component';
@NgModule({
  declarations: [
    AppComponent,
    InicioComponent,
    LoginAdminComponent,
    LoginAlumnoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    AngularMaterialModule,
    FlexLayoutModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
