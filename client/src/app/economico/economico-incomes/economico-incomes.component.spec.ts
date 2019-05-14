import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EconomicoIncomesComponent } from './economico-incomes.component';

describe('EconomicoIncomesComponent', () => {
  let component: EconomicoIncomesComponent;
  let fixture: ComponentFixture<EconomicoIncomesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EconomicoIncomesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EconomicoIncomesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
