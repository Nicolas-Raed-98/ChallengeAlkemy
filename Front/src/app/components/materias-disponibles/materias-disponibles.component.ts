import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-materias-disponibles',
  templateUrl: './materias-disponibles.component.html',
  styleUrls: ['./materias-disponibles.component.css']
})
export class MateriasDisponiblesComponent implements OnInit {

  typesOfShoes: any;
  
  constructor() { }

  ngOnInit(): void {
    this.typesOfShoes
  }

}
