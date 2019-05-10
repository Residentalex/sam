import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DocentesSearchComponent } from './docentes-search.component';

describe('DocentesSearchComponent', () => {
  let component: DocentesSearchComponent;
  let fixture: ComponentFixture<DocentesSearchComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DocentesSearchComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DocentesSearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
