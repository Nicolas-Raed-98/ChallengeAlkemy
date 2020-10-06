 import { Component, OnInit, ViewChild } from '@angular/core';
import { MateriasViewModel } from 'src/app/models/materias-view-model';
import { MatSort } from '@angular/material/sort';
import { MatPaginator } from '@angular/material/paginator';
import { SelectionModel } from '@angular/cdk/collections';
import { MatTableDataSource } from '@angular/material/table';

 @Component({
   selector: 'app-table-materias',
   templateUrl: './table-materias.component.html',
   styleUrls: ['./table-materias.component.css']
 })
export class TableMateriasComponent implements OnInit {

   constructor() { }

   columnsToDisplay = [
    'nombre', 
    'horario',
    'profesor', 
    'cupomax'];

  dataSource: any;
  selection = new SelectionModel<MateriasViewModel>(true, []);
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;
  
   
  ngOnInit(): void {
    this.dataSource = new MatTableDataSource<MateriasViewModel>([
      {nombre : 'Matematicas',
      horario : '10:30 a 12:30',
      profesor : 'Nicolas Raed',
      cupoMax :  '12344'
      },
      {nombre : 'Lengua',
      horario : '10:30 a 12:30',
      profesor : 'Nicolas Raed',
      cupoMax : '30'
      },
      {nombre : 'Geografia',
      horario : '10:30 a 12:30',
      profesor : 'Nicolas Raed',
      cupoMax : '1230'
      },
      
    ]);
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }


 }
