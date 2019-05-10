import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AlumnosScheaduleComponent } from './alumnos-scheadule.component';

describe('AlumnosScheaduleComponent', () => {
  let component: AlumnosScheaduleComponent;
  let fixture: ComponentFixture<AlumnosScheaduleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AlumnosScheaduleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AlumnosScheaduleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
