import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HypermdComponent } from './hypermd.component';

describe('HypermdComponent', () => {
  let component: HypermdComponent;
  let fixture: ComponentFixture<HypermdComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HypermdComponent ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HypermdComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
