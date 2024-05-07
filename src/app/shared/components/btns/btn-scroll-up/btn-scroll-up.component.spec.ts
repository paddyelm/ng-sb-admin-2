import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BtnScrollUpComponent } from './btn-scroll-up.component';

describe('BtnScrollUpComponent', () => {
  let component: BtnScrollUpComponent;
  let fixture: ComponentFixture<BtnScrollUpComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BtnScrollUpComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(BtnScrollUpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
