import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EconomicoInventoryComponent } from './economico-inventory.component';

describe('EconomicoInventoryComponent', () => {
  let component: EconomicoInventoryComponent;
  let fixture: ComponentFixture<EconomicoInventoryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EconomicoInventoryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EconomicoInventoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
