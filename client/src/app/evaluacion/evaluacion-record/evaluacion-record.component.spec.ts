import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EvaluacionRecordComponent } from './evaluacion-record.component';

describe('EvaluacionRecordComponent', () => {
  let component: EvaluacionRecordComponent;
  let fixture: ComponentFixture<EvaluacionRecordComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EvaluacionRecordComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EvaluacionRecordComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
