import { Injectable } from '@angular/core';
import { MateriaViewModel } from '../models/materia-view-model';
import { environment } from 'src/environments/environment.prod';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class MateriasService {

  constructor(private http: HttpClient) { }

  public getMaterias(): Observable<MateriaViewModel[]>{
    return this.http.get<MateriaViewModel[]>(environment.baseUrl + '/materias');

  }
  public getMateriasDisponibles(idAlumno: number): Observable<MateriaViewModel[]>{
    return this.http.get<MateriaViewModel[]>(environment.baseUrl + `/materias/${idAlumno}`);

  }
}
