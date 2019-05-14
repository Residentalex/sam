import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AlumnosFamilyComponent } from './alumnos-family.component';

describe('AlumnosFamilyComponent', () => {
  let component: AlumnosFamilyComponent;
  let fixture: ComponentFixture<AlumnosFamilyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AlumnosFamilyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AlumnosFamilyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
