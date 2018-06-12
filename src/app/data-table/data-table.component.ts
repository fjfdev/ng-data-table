import { Component, OnInit, ViewChild, ViewEncapsulation } from '@angular/core';
import { SelectionModel } from '@angular/cdk/collections';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';

import {
  MatPaginator,
  MatTableDataSource,
} from '@angular/material';

import { Paginator } from './paginator.interface';
import { ColumnsInfo } from './columnsInfo.interface';
import { Column } from './column.interface';

import { AppStateInterface } from '../app-state.interface';
import * as ColumnsInfoActions from '../columnsInfo.actions';

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
  tableSelection;

  columnsInfo$: Observable<ColumnsInfo>;

  @ViewChild(MatPaginator) paginator: MatPaginator;

  constructor(private store: Store<AppStateInterface>) {
    this.columnsInfo$ = this.store.select('columnsInfo');
  }

  ngOnInit() {
    this.initColumns();
    this.fillData();
    this.initMultiSelect();
    this.setPaginator();
  }

  initColumns(): void {
    this.columnsInfo = {
      columns: [
        {name: 'order', displayName: 'Order', parseAs: 'string'},
        {name: 'name', displayName: 'Name', parseAs: 'string'},
        {name: 'weight', displayName: 'Weight', parseAs: 'string'},
      ],
      columnLastIndex: 3
    };
    this.displayedColumns = this.columnsInfo.columns.map( elem => elem.name);
  }

  fillData(): void {
    this.dataSource = new MatTableDataSource([
      {order: '1', name: 'Hydrogen', weight: '1.0079'},
      {order: '2', name: 'Helium', weight: '4.0026'},
      {order: '3', name: 'Lithium', weight: '6.941'},
      {order: '4', name: 'Beryllium', weight: '9.0122'},
      {order: '5', name: 'Boron', weight: '10.811'},
      {order: '6', name: 'Carbon', weight: '12.0107'},
      {order: '7', name: 'Nitrogen', weight: '14.0067'},
      {order: '8', name: 'Oxygen', weight: '15.9994'},
      {order: '9', name: 'Fluorine', weight: '18.9984'},
      {order: '10', name: 'Neon', weight: '20.1797'},
      {order: '11', name: 'Sodium', weight: '22.9897'},
      {order: '12', name: 'Magnesium', weight: '24.305'},
      {order: '13', name: 'Aluminum', weight: '26.9815'},
      {order: '14', name: 'Silicon', weight: '28.0855'},
      {order: '15', name: 'Phosphorus', weight: '30.9738'},
      {order: '16', name: 'Sulfur', weight: '32.065'},
      {order: '17', name: 'Chlorine', weight: '35.453'},
      {order: '18', name: 'Argon', weight: '39.948'},
      {order: '19', name: 'Potassium', weight: '39.0983'},
      {order: '20', name: 'Calcium', weight: '40.078'}
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

  initMultiSelect(): void {
    const initalSelection = [];
    const allowMultiSelect = true;
    this.tableSelection = new SelectionModel(allowMultiSelect, initalSelection);
  }

  areAllRowsSelected() {
    const numSelected = this.tableSelection.selected.length;
    const numRows = this.dataSource.data.length;
    return numSelected === numRows;
  }

  areRowsSelected() {
    const areRows = this.tableSelection.selected.length > 0;
    return areRows;
  }

  masterToggle() {
    this.areAllRowsSelected() ?
      this.tableSelection.clear() :
      this.dataSource.data.forEach(row => this.tableSelection.select(row));
  }

  isCheckboxChecked() {
    return this.tableSelection.hasValue() && this.areAllRowsSelected();
  }

  isCheckboxIntermediate() {
    return this.tableSelection.hasValue() && !this.areAllRowsSelected();
  }

  addColumn(columnName?: string) {
    // const newIndex = this.columnsInfo.columnLastIndex;
    // const newColumn = {name: 'column${newIndex}', displayName: columnName, parseAs: 'string'};
    // this.columnsInfo.columns.push(newColumn);
    // this.columnsInfo.columnLastIndex++;
    const newColumn: Column = {name: 'test', displayName: 'test', parseAs: 'string'};
    this.store.dispatch(new ColumnsInfoActions.AddColumn(newColumn));
  }

  removeColumn(columnIndex?: number) {
    // this.columnsInfo.columns.splice(columnIndex, 1);
    this.store.dispatch(new ColumnsInfoActions.RemoveColumn('one'));

    // this.store.dispatch({type: 'REMOVE_COLUMN'});
  }

}
