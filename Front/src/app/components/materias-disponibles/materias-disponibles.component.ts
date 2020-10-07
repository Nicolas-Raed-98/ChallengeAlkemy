import { Component, OnInit } from '@angular/core';
import { MateriasDescripcionComponent } from '../materias-descripcion/materias-descripcion.component';
import { MatDialog } from '@angular/material/dialog';
import { MateriaViewModel } from 'src/app/models/materia-view-model';

@Component({
  selector: 'app-materias-disponibles',
  templateUrl: './materias-disponibles.component.html',
  styleUrls: ['./materias-disponibles.component.css']
})
export class MateriasDisponiblesComponent implements OnInit {

  public materiasViewModel : MateriaViewModel[];

  constructor(public dialog: MatDialog) {}
  ngOnInit(): void {
    
  }
  onRowClicked()
    {
      this.materiasViewModel = new Array<MateriaViewModel>();
      let materia = new MateriaViewModel();
      
      this.materiasViewModel.push(materia);
      this.openDialog(materia);
    }

  public openDialog(materiaViewModel : MateriaViewModel) {
    const dialogRef = this.dialog.open(MateriasDescripcionComponent, {
      width: '600px',
      data: {materiaViewModel: materiaViewModel}

    });
   
    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }
}


 


