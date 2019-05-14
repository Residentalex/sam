import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EconomicoPaymentsPlansComponent } from './economico-payments-plans.component';

describe('EconomicoPaymentsPlansComponent', () => {
  let component: EconomicoPaymentsPlansComponent;
  let fixture: ComponentFixture<EconomicoPaymentsPlansComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EconomicoPaymentsPlansComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EconomicoPaymentsPlansComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
