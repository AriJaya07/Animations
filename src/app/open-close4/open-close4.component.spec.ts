import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OpenClose4Component } from './open-close4.component';

describe('OpenClose4Component', () => {
  let component: OpenClose4Component;
  let fixture: ComponentFixture<OpenClose4Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OpenClose4Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OpenClose4Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
