import { Component, OnInit, ViewChild } from '@angular/core';
import {animate, state, style, transition, trigger} from '@angular/animations';

import { MatTableDataSource } from '@angular/material/table';
import { ProfesorViewModel } from 'src/app/models/profesor-view-model';
import { SelectionModel } from '@angular/cdk/collections';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';


@Component({
  selector: 'app-table-teacher',
  templateUrl: './table-admin.component.html',
  styleUrls: ['./table-admin.component.css'],
  
})
export class TableTeacherComponent implements OnInit {
  
  columnsToDisplay = [
    'nombre', 
    'apellido',
    'dni', 
    'estado'];

  dataSource: any;
  selection = new SelectionModel<ProfesorViewModel>(true, []);
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;
 
  
  
  
  
  ngOnInit(): void {
    this.dataSource = new MatTableDataSource<ProfesorViewModel>([
      {nombre : 'Nicolás',
      apellido : 'Raed',
      dni : '1234',
      estado : true},
      {nombre : 'Nicolás',
      apellido : 'Lopez',
      dni : '1234',
      estado : true},
      {nombre : 'Nicolás',
      apellido : 'Perez',
      dni : '1234',
      estado : true} 
    ]);
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }
  
}

