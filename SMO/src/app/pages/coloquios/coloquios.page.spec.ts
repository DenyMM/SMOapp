import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ColoquiosPage } from './coloquios.page';

describe('ColoquiosPage', () => {
  let component: ColoquiosPage;
  let fixture: ComponentFixture<ColoquiosPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ColoquiosPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ColoquiosPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
