import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FerrariPortofinoComponent } from './ferrari-portofino.component';

describe('FerrariPortofinoComponent', () => {
  let component: FerrariPortofinoComponent;
  let fixture: ComponentFixture<FerrariPortofinoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FerrariPortofinoComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(FerrariPortofinoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
