import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FerrariPininfarinaComponent } from './ferrari-pininfarina.component';

describe('FerrariPininfarinaComponent', () => {
  let component: FerrariPininfarinaComponent;
  let fixture: ComponentFixture<FerrariPininfarinaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FerrariPininfarinaComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(FerrariPininfarinaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
