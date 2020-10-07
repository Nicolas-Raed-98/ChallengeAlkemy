import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment.prod';
import { LoginAdminViewModel } from '../models/login-admin-view-model';
import { LocalStorageProviderService } from './local-storage-provider.service';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { LoginAlumnoViewModel } from '../models/login-alumno-view-model';


@Injectable({
  providedIn: 'root'
})
export class LoginService {
  

  constructor(public http: HttpClient) { }

  public get baseUrl(): string
  {
    return environment.baseUrl;
  }

      
  public loginAdmin(loginAdminViewModel: LoginAdminViewModel){
      return this.http.post(this.baseUrl + '/loginAdministrador', loginAdminViewModel)
      .pipe(map((response => {let tokenInfo = response.json();
        LocalStorageProviderService.authenticationToken = tokenInfo.token;
        return false;
      })));
  }
  public loginAlumno(loginAlumnoViewModel: LoginAlumnoViewModel){
    return this.http.post(this.baseUrl + '/loginAlumno', loginAlumnoViewModel)
    .pipe(map((response => {let tokenInfo = response.json();
      LocalStorageProviderService.authenticationToken = tokenInfo.token;
      return false;
    })));
  }
}
   
      
  
    


