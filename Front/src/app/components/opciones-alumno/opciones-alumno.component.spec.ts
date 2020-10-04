import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OpcionesAlumnoComponent } from './opciones-alumno.component';

describe('OpcionesAlumnoComponent', () => {
  let component: OpcionesAlumnoComponent;
  let fixture: ComponentFixture<OpcionesAlumnoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OpcionesAlumnoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OpcionesAlumnoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
