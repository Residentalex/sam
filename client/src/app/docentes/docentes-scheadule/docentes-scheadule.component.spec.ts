import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DocentesScheaduleComponent } from './docentes-scheadule.component';

describe('DocentesScheaduleComponent', () => {
  let component: DocentesScheaduleComponent;
  let fixture: ComponentFixture<DocentesScheaduleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DocentesScheaduleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DocentesScheaduleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
