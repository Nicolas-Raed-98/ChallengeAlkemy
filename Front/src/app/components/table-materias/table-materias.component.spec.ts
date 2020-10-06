import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TableMateriasComponent } from './table-materias.component';

describe('TableMateriasComponent', () => {
  let component: TableMateriasComponent;
  let fixture: ComponentFixture<TableMateriasComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TableMateriasComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TableMateriasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
