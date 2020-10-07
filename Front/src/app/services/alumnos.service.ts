import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment.prod';
import { AlumnoViewModel } from '../models/alumno-view-model';

@Injectable({
  providedIn: 'root'
})
export class AlumnosService {

  constructor(private http: HttpClient) { }

  public getAlumnos(): Observable<AlumnoViewModel[]>{
    return this.http.get<AlumnoViewModel[]>(environment.baseUrl + '/alumnos');

  }
}
