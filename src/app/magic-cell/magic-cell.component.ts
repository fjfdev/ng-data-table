import { Component, OnInit, Input } from '@angular/core';

enum CellTypes {
  number,
  text,
  date
}

@Component({
  selector: 'app-magic-cell',
  templateUrl: './magic-cell.component.html',
  styleUrls: ['./magic-cell.component.scss']
})
export class MagicCellComponent implements OnInit {
  @Input() cellValue;
  @Input() cellType: CellTypes;

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
  }

  closeEditCell() {
    this.isEditing = false;
    this.cellValue = this.previousValue;
  }

}
