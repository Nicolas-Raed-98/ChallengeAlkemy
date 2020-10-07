import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MateriaViewModel } from 'src/app/models/materia-view-model';

@Component({
  selector: 'app-materias-descripcion',
  templateUrl: './materias-descripcion.component.html',
  styleUrls: ['./materias-descripcion.component.css']
})
export class MateriasDescripcionComponent implements OnInit {

  materiaViewModel: MateriaViewModel;

  constructor(public dialogRef: MatDialogRef<MateriasDescripcionComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any) {
      this.materiaViewModel = data.materiaViewModel;
     }

  ngOnInit(): void {
  }

}
