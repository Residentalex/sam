import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AlumnosSectionComponent } from './alumnos-section.component';

describe('AlumnosSectionComponent', () => {
  let component: AlumnosSectionComponent;
  let fixture: ComponentFixture<AlumnosSectionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AlumnosSectionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AlumnosSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
