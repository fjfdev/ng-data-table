import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule, Injector } from '@angular/core';
import { createCustomElement } from '@angular/elements';
import { FormsModule } from '@angular/forms';

import {
  MatButtonModule,
  MatCardModule,
  MatIconModule,
  MatPaginatorModule,
  MatTableModule
} from '@angular/material';

import { DataTableComponent } from './data-table/data-table.component';
import { MagicCellComponent } from './magic-cell/magic-cell.component';

@NgModule({
  declarations: [
    DataTableComponent,
    MagicCellComponent
  ],
  imports: [
    BrowserAnimationsModule,
    BrowserModule,
    FormsModule,
    MatButtonModule,
    MatCardModule,
    MatIconModule,
    MatPaginatorModule,
    MatTableModule
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
