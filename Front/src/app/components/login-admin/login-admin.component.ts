import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Validators } from '@angular/forms';
import { LoginService } from 'src/app/services/login.service';
import { LoginAdminViewModel } from 'src/app/models/login-admin-view-model';
import { Router } from '@angular/router';
@Component({
  selector: 'app-login-admin',
  templateUrl: './login-admin.component.html',
  styleUrls: ['./login-admin.component.css']
})
export class LoginAdminComponent implements OnInit {
    
    admin = new FormGroup ({
    user: new FormControl('', Validators.required),
    password: new FormControl('', Validators.required)
  });
  
  constructor() { }

  ngOnInit(): void {
  }


  onLogin(){

  }
  }

