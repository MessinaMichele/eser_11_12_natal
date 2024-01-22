import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FerrariSf90Component } from './ferrari-sf90.component';

describe('FerrariSf90Component', () => {
  let component: FerrariSf90Component;
  let fixture: ComponentFixture<FerrariSf90Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FerrariSf90Component]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(FerrariSf90Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
