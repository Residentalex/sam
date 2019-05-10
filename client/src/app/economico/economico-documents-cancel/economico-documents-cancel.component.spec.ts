import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EconomicoDocumentsCancelComponent } from './economico-documents-cancel.component';

describe('EconomicoDocumentsCancelComponent', () => {
  let component: EconomicoDocumentsCancelComponent;
  let fixture: ComponentFixture<EconomicoDocumentsCancelComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EconomicoDocumentsCancelComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EconomicoDocumentsCancelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
