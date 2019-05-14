import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EconomicoExpensesComponent } from './economico-expenses.component';

describe('EconomicoExpensesComponent', () => {
  let component: EconomicoExpensesComponent;
  let fixture: ComponentFixture<EconomicoExpensesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EconomicoExpensesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EconomicoExpensesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
