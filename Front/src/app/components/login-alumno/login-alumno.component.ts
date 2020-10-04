import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Validators } from '@angular/forms';
import { LoginAlumnoViewModel } from 'src/app/models/login-alumno-view-model';
import { LoginService } from 'src/app/services/login.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-login-alumno',
  templateUrl: './login-alumno.component.html',
  styleUrls: ['./login-alumno.component.css']
})
export class LoginAlumnoComponent implements OnInit {
    alumno = new FormGroup ({
    dni: new FormControl('', Validators.required),
    legajo: new FormControl('', Validators.required)
  });  

  constructor(private loginService: LoginService, private router: Router ) { }

  errorMessage: string = "";
  public loginAlumnoViewModel: LoginAlumnoViewModel = new LoginAlumnoViewModel();

  ngOnInit(): void {
  }


  // onLogin(){
  //   this.loginService.loginAlumno(this.loginAlumnoViewModel)
  //     .subscribe(success =>{
  //         if(success){
  //           this.router.navigate(["optionsStudent"]);
  //         }
        
  //     }, error => this.errorMessage = "Usuario ó contraseña incorrectos.");
  // }

}
