import { Component, OnInit } from '@angular/core';
import { MateriasDescripcionComponent } from '../materias-descripcion/materias-descripcion.component';
import { MatDialog } from '@angular/material/dialog';
import { MateriasViewModel } from 'src/app/models/materias-view-model';

@Component({
  selector: 'app-materias-disponibles',
  templateUrl: './materias-disponibles.component.html',
  styleUrls: ['./materias-disponibles.component.css']
})
export class MateriasDisponiblesComponent implements OnInit {

  public materiasViewModel : MateriasViewModel[];

  constructor(public dialog: MatDialog) {}
  ngOnInit(): void {
    
  }
  onRowClicked()
    {
      this.materiasViewModel = new Array<MateriasViewModel>();
      let materia = new MateriasViewModel();
      materia.nombre = 'Fisica';
      materia.horario = '10';
      materia.profesor = 'Juan';
      materia.cupoMax = '20';
      materia.descripcion = 'Lorem Ipsum es simplemente el texto de relleno de las imprentas y archivos de texto. Lorem Ipsum ha sido el texto de relleno estándar de las industrias desde el año 1500, cuando un impresor (N. del T. persona que se dedica a la imprenta) desconocido usó una galería de textos y los mezcló de tal manera que logró hacer un libro de textos especimen. No sólo sobrevivió 500 años, sino que tambien ingresó como texto de relleno en documentos electrónicos, quedando esencialmente igual al original. Fue popularizado en los 60s con la creación de'; 
      materia.programa = 'El programa de la materia, se fundamenta en un abordaje de la teoría y l práctica del psicoanálisis con niños y adolescentes. Esto se dirige a los  estudiantes avanzados de la carrera de Licenciatura en Psicopedagogía parabrindar los elementos necesarios para una escucha y una aproximación psicoanalítica en la práctica psicopedagógica, tanto clínica como institucional o',
      this.materiasViewModel.push(materia);
      this.openDialog(materia);
    }

  public openDialog(materiaViewModel : MateriasViewModel) {
    const dialogRef = this.dialog.open(MateriasDescripcionComponent, {
      width: '600px',
      data: {materiaViewModel: materiaViewModel}

    });
   
    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }
}


 


