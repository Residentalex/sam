import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EconomicoCashSummaryComponent } from './economico-cash-summary.component';

describe('EconomicoCashSummaryComponent', () => {
  let component: EconomicoCashSummaryComponent;
  let fixture: ComponentFixture<EconomicoCashSummaryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EconomicoCashSummaryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EconomicoCashSummaryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
