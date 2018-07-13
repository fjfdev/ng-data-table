import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-magic-cell',
  templateUrl: './magic-cell.component.html',
  styleUrls: ['./magic-cell.component.scss']
})
export class MagicCellComponent implements OnInit {
  @Input() cellValue;
  @Output() valueChanged = new EventEmitter<string>();

  showEdit: boolean;
  isEditing: boolean;
  previousValue;
  constructor() { }

  ngOnInit() {
    this.showEdit = false;
    this.isEditing = false;
  }

  toggleEdit() {
    this.showEdit = this.isEditing ? false : !this.showEdit;
  }

  editCell() {
    this.showEdit = false;
    this.isEditing = true;
    this.previousValue = this.cellValue;
  }

  acceptEditCell() {
    this.isEditing = false;
    this.valueChanged.emit(this.cellValue);
  }

  closeEditCell() {
    this.isEditing = false;
    this.cellValue = this.previousValue;
  }

}
