import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EconomicoDocumentsSearchComponent } from './economico-documents-search.component';

describe('EconomicoDocumentsSearchComponent', () => {
  let component: EconomicoDocumentsSearchComponent;
  let fixture: ComponentFixture<EconomicoDocumentsSearchComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EconomicoDocumentsSearchComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EconomicoDocumentsSearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
