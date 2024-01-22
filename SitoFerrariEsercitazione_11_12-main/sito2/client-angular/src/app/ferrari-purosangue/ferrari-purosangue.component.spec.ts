import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FerrariPurosangueComponent } from './ferrari-purosangue.component';

describe('FerrariPurosangueComponent', () => {
  let component: FerrariPurosangueComponent;
  let fixture: ComponentFixture<FerrariPurosangueComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FerrariPurosangueComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(FerrariPurosangueComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
