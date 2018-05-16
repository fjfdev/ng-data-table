import { Component, OnInit, ViewChild, ViewEncapsulation } from '@angular/core';

import {
  MatPaginator,
  MatTableDataSource
} from '@angular/material';

import { Paginator } from './paginator.interface';
import { ColumnsInfo } from './columnsInfo.interface';

@Component({
  selector: 'app-data-table',
  templateUrl: './data-table.component.html',
  styleUrls: ['./data-table.component.scss'],
  encapsulation: ViewEncapsulation.Native
})
export class DataTableComponent implements OnInit {

  columnsInfo: ColumnsInfo;
  displayedColumns: Array<string>;
  paginatorInfo: Paginator;
  dataSource;

  @ViewChild(MatPaginator) paginator: MatPaginator;

  constructor() { }

  ngOnInit() {
    this.initColumns();
    this.fillData();
    this.setPaginator();
  }

  initColumns(): void {
    this.columnsInfo = {
      columns: [
        {name: 'column1', displayName: 'Order', parseAs: 'string'},
        {name: 'column2', displayName: 'Name', parseAs: 'string'},
        {name: 'column3', displayName: 'Weight', parseAs: 'string'},
      ],
      columnLastIndex: 3
    };
    this.displayedColumns = this.columnsInfo.columns.map( elem => elem.name);
  }

  fillData(): void {
    this.dataSource = new MatTableDataSource([
      {column1: '1', column2: 'Hydrogen', column3: '1.0079'},
      {column1: '2', column2: 'Helium', column3: '4.0026'},
      {column1: '3', column2: 'Lithium', column3: '6.941'},
      {column1: '4', column2: 'Beryllium', column3: '9.0122'},
      {column1: '5', column2: 'Boron', column3: '10.811'},
      {column1: '6', column2: 'Carbon', column3: '12.0107'},
      {column1: '7', column2: 'Nitrogen', column3: '14.0067'},
      {column1: '8', column2: 'Oxygen', column3: '15.9994'},
      {column1: '9', column2: 'Fluorine', column3: '18.9984'},
      {column1: '10', column2: 'Neon', column3: '20.1797'},
      {column1: '11', column2: 'Sodium', column3: '22.9897'},
      {column1: '12', column2: 'Magnesium', column3: '24.305'},
      {column1: '13', column2: 'Aluminum', column3: '26.9815'},
      {column1: '14', column2: 'Silicon', column3: '28.0855'},
      {column1: '15', column2: 'Phosphorus', column3: '30.9738'},
      {column1: '16', column2: 'Sulfur', column3: '32.065'},
      {column1: '17', column2: 'Chlorine', column3: '35.453'},
      {column1: '18', column2: 'Argon', column3: '39.948'},
      {column1: '19', column2: 'Potassium', column3: '39.0983'},
      {column1: '20', column2: 'Calcium', column3: '40.078'}
    ]);
  }

  setPaginator(): void {
    this.paginatorInfo = {
      length: 100,
      pageSize: 5,
      pageSizeOptions: [5, 10, 25, 100]
    };
    this.dataSource.paginator = this.paginator;
  }

  addColumn(columnName: string) {
    const newIndex = this.columnsInfo.columnLastIndex;
    const newColumn = {name: 'column${newIndex}', displayName: columnName, parseAs: 'string'};
    this.columnsInfo.columns.push(newColumn);
    this.columnsInfo.columnLastIndex++;
  }

  removeColumn(columnIndex: number) {
    this.columnsInfo.columns.splice(columnIndex, 1);
  }
}
