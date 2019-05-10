import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AlumnosSearchComponent } from './alumnos-search.component';

describe('AlumnosSearchComponent', () => {
  let component: AlumnosSearchComponent;
  let fixture: ComponentFixture<AlumnosSearchComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AlumnosSearchComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AlumnosSearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
