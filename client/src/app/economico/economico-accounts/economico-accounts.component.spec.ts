import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EconomicoAccountsComponent } from './economico-accounts.component';

describe('EconomicoAccountsComponent', () => {
  let component: EconomicoAccountsComponent;
  let fixture: ComponentFixture<EconomicoAccountsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EconomicoAccountsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EconomicoAccountsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
