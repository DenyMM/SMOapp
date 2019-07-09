import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DirectivaPage } from './directiva.page';

describe('DirectivaPage', () => {
  let component: DirectivaPage;
  let fixture: ComponentFixture<DirectivaPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DirectivaPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DirectivaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
