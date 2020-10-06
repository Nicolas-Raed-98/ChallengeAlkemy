import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MateriasDescripcionComponent } from './materias-descripcion.component';

describe('MateriasDescripcionComponent', () => {
  let component: MateriasDescripcionComponent;
  let fixture: ComponentFixture<MateriasDescripcionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MateriasDescripcionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MateriasDescripcionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
