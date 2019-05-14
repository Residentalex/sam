import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AlumnosRecordComponent } from './alumnos-record.component';

describe('AlumnosRecordComponent', () => {
  let component: AlumnosRecordComponent;
  let fixture: ComponentFixture<AlumnosRecordComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AlumnosRecordComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AlumnosRecordComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
