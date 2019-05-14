import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DocentesAbsencesComponent } from './docentes-absences.component';

describe('DocentesAbsencesComponent', () => {
  let component: DocentesAbsencesComponent;
  let fixture: ComponentFixture<DocentesAbsencesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DocentesAbsencesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DocentesAbsencesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
