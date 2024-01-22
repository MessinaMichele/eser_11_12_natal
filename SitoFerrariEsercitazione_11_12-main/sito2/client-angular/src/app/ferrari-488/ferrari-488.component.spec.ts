import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Ferrari488Component } from './ferrari-488.component';

describe('Ferrari488Component', () => {
  let component: Ferrari488Component;
  let fixture: ComponentFixture<Ferrari488Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Ferrari488Component]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(Ferrari488Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
