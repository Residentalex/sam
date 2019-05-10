import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EconomicoPaymentsComponent } from './economico-payments.component';

describe('EconomicoPaymentsComponent', () => {
  let component: EconomicoPaymentsComponent;
  let fixture: ComponentFixture<EconomicoPaymentsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EconomicoPaymentsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EconomicoPaymentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
