import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EconomicoConceptsComponent } from './economico-concepts.component';

describe('EconomicoConceptsComponent', () => {
  let component: EconomicoConceptsComponent;
  let fixture: ComponentFixture<EconomicoConceptsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EconomicoConceptsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EconomicoConceptsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
