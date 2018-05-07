import { Component, OnInit, Input } from '@angular/core';
import { ChangeDetectorRef} from '@angular/core';
import { ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-magic-cell',
  templateUrl: './magic-cell.component.html',
  styleUrls: ['./magic-cell.component.scss'],
  changeDetection: ChangeDetectionStrategy.Default
})
export class MagicCellComponent implements OnInit {
  @Input() cellValue;
  showEdit: boolean;
  isEditing: boolean;

  constructor(private cdRef: ChangeDetectorRef) { }

  ngOnInit() {
    this.showEdit = false;
    this.isEditing = false;
    this._updateComponent();
  }

  toggleEdit() {
    this.showEdit = this.isEditing ? false : !this.showEdit;
    this._updateComponent();
  }

  editCell() {
    this.showEdit = false;
    this.isEditing = true;
    this._updateComponent();
  }

  acceptEditCell() {
    this.isEditing = false;
    this._updateComponent();
  }

  closeEditCell() {
    this.isEditing = false;
    this._updateComponent();
  }

  private _updateComponent() {
    this.cdRef.detectChanges();
  }

}
