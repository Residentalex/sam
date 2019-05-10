import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DocentesEvaluationComponent } from './docentes-evaluation.component';

describe('DocentesEvaluationComponent', () => {
  let component: DocentesEvaluationComponent;
  let fixture: ComponentFixture<DocentesEvaluationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DocentesEvaluationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DocentesEvaluationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
