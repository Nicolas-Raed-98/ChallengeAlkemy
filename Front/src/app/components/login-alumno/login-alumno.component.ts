import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Validators } from '@angular/forms';
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
  constructor() { }

  ngOnInit(): void {
  }
  onLogin(){

  }

}
