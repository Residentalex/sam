import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EvaluacionMethodComponent } from './evaluacion-method.component';

describe('EvaluacionMethodComponent', () => {
  let component: EvaluacionMethodComponent;
  let fixture: ComponentFixture<EvaluacionMethodComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EvaluacionMethodComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EvaluacionMethodComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
