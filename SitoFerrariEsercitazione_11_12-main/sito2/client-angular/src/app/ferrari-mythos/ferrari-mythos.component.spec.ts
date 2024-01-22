import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FerrariMythosComponent } from './ferrari-mythos.component';

describe('FerrariMythosComponent', () => {
  let component: FerrariMythosComponent;
  let fixture: ComponentFixture<FerrariMythosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FerrariMythosComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(FerrariMythosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
