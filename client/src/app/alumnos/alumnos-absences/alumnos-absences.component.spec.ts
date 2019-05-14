import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AlumnosAbsencesComponent } from './alumnos-absences.component';

describe('AlumnosAbsencesComponent', () => {
  let component: AlumnosAbsencesComponent;
  let fixture: ComponentFixture<AlumnosAbsencesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AlumnosAbsencesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AlumnosAbsencesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
