import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditorMdPage } from './editor-md.page';

describe('EditorMdPage', () => {
  let component: EditorMdPage;
  let fixture: ComponentFixture<EditorMdPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditorMdPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditorMdPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
