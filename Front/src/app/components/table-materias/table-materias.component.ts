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
    this.dataSource = new MatTableDataSource<MateriasViewModel>();
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }


 }
