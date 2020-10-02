import { Component, OnInit } from '@angular/core';
import {ThemePalette} from '@angular/material/core';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  checked = false;
  constructor() { }

  ngOnInit(): void {
  }

}
