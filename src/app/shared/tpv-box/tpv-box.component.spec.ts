import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TpvBoxComponent } from './tpv-box.component';

describe('TpvBoxComponent', () => {
  let component: TpvBoxComponent;
  let fixture: ComponentFixture<TpvBoxComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TpvBoxComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TpvBoxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
