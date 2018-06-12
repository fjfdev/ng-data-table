import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule, Injector } from '@angular/core';
import { createCustomElement } from '@angular/elements';
import { FormsModule } from '@angular/forms';

import { FlexLayoutModule } from '@angular/flex-layout';

import {
  MatButtonModule,
  MatCardModule,
  MatCheckboxModule,
  MatIconModule,
  MatPaginatorModule,
  MatTableModule,
  MatToolbarModule
} from '@angular/material';

import { DataTableComponent } from './data-table/data-table.component';
import { MagicCellComponent } from './magic-cell/magic-cell.component';

import { StoreModule } from '@ngrx/store';
import { columnsInfoReducer } from './columnsInfo.reducer';

@NgModule({
  declarations: [
    DataTableComponent,
    MagicCellComponent
  ],
  imports: [
    BrowserAnimationsModule,
    BrowserModule,
    FlexLayoutModule,
    FormsModule,
    MatButtonModule,
    MatCardModule,
    MatCheckboxModule,
    MatIconModule,
    MatToolbarModule,
    MatPaginatorModule,
    MatTableModule,
    StoreModule.forRoot({
      columnsInfo: columnsInfoReducer
    })
  ],
  entryComponents: [DataTableComponent],
  bootstrap: [DataTableComponent]// Keep only for development
})
export class AppModule {
  constructor(private injector: Injector) {
    const customElement = createCustomElement(DataTableComponent, {injector});
    customElements.define('data-table', customElement);
  }

  ngDoBootstrap() {}
}
