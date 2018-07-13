import { SelectionModel } from '@angular/cdk/collections';
import { Component, Input, OnInit, ViewEncapsulation } from '@angular/core';

import {
  MatTableDataSource,
} from '@angular/material';

import { Store } from '@ngrx/store';

import { Observable } from 'rxjs';
import { filter, map, reduce } from 'rxjs/operators';

import { AppStateInterface } from '../app-state.interface';
import { DataTable } from './data-table.interface';

import * as DataTableActions from './data-table.actions';
import {EditColumn} from './data-table.actions';

@Component({
  selector: 'app-data-table',
  templateUrl: './data-table.component.html',
  styleUrls: ['./data-table.component.scss'],
  encapsulation: ViewEncapsulation.Native
})
export class DataTableComponent implements OnInit {

  @Input() dataSource;

  displayedColumns: Array<string>;
  tableDataSource;
  tableSelection;

  dataTable$: Observable<DataTable>;

  constructor(private store: Store<AppStateInterface>) {
    this.dataTable$ = this.store.select('dataTable');
  }

  ngOnInit() {
    this.fillData();
    this.fillColumns();
    //this.initMultiSelect();
  }

  fillColumns(): void {
  }

  fillData(): void {
    const tableColumns = [];

    this.dataSource = [
      {order: '1', name: 'Hydrogen', weight: '1.0079'},
      {order: '2', name: 'Helium', weight: '4.0026'},
      {order: '3', name: 'Lithium', weight: '6.941'},
      {order: '4', name: 'Beryllium', weight: '9.0122'},
      // {order: '5', name: 'Boron', weight: '10.811'},
      // {order: '6', name: 'Carbon', weight: '12.0107'},
      // {order: '7', name: 'Nitrogen', weight: '14.0067'},
      // {order: '8', name: 'Oxygen', weight: '15.9994'},
      // {order: '9', name: 'Fluorine', weight: '18.9984'},
      // {order: '10', name: 'Neon', weight: '20.1797'},
      // {order: '11', name: 'Sodium', weight: '22.9897'},
      // {order: '12', name: 'Magnesium', weight: '24.305'},
      // {order: '13', name: 'Aluminum', weight: '26.9815'},
      // {order: '14', name: 'Silicon', weight: '28.0855'},
      // {order: '15', name: 'Phosphorus', weight: '30.9738'},
      // {order: '16', name: 'Sulfur', weight: '32.065'},
      // {order: '17', name: 'Chlorine', weight: '35.453'},
      // {order: '18', name: 'Argon', weight: '39.948'},
      // {order: '19', name: 'Potassium', weight: '39.0983'},
      // {order: '20', name: 'Calcium', weight: '40.078'}
    ];

    this.dataSource.forEach( (row) => {
      this.store.dispatch(new DataTableActions.AddRow(row));
    });


    this.tableDataSource = new MatTableDataSource(this.dataSource);
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

  addColumn() {
    const newColumn = 'new_column';
    this.store.dispatch(new DataTableActions.AddColumn(newColumn));
  }

  columnExists(columnToCheck: string) {

  }

  onCellChanges() {

  }

  onColumnChanges(oldColumnName: string , newColumnDisplayName: string) {
    const validName = newColumnDisplayName.replace(/ /g, '_');
    const actionPayload = {
      oldColumnName,
      newColumnName: validName
    };
    this.store.dispatch(new DataTableActions.EditColumn(actionPayload));
  }

  addRow() {
  }

  removeColumn(columnIndex?: number) {
  }



}
