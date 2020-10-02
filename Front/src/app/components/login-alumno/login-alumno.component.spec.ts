import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LoginAlumnoComponent } from './login-alumno.component';

describe('LoginAlumnoComponent', () => {
  let component: LoginAlumnoComponent;
  let fixture: ComponentFixture<LoginAlumnoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LoginAlumnoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LoginAlumnoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
