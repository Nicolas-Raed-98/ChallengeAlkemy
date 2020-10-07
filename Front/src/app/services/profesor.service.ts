import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ProfesorViewModel } from '../models/profesor-view-model';
import { environment } from 'src/environments/environment.prod';

@Injectable({
  providedIn: 'root'
})
export class ProfesorService {

  constructor(private http: HttpClient) { }

  public getProfesor(): Observable<ProfesorViewModel[]>{
    return this.http.get<ProfesorViewModel[]>(environment.baseUrl + '/profesor');

  }
}
