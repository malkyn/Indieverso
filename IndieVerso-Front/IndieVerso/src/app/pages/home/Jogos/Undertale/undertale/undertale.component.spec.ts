/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { UndertaleComponent } from './undertale.component';

describe('UndertaleComponent', () => {
  let component: UndertaleComponent;
  let fixture: ComponentFixture<UndertaleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UndertaleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UndertaleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
