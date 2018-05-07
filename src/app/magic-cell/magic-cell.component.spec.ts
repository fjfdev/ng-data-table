import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MagicCellComponent } from './magic-cell.component';

describe('MagicCellComponent', () => {
  let component: MagicCellComponent;
  let fixture: ComponentFixture<MagicCellComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MagicCellComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MagicCellComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
