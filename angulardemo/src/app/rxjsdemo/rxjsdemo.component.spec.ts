import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RxjsdemoComponent } from './rxjsdemo.component';

describe('RxjsdemoComponent', () => {
  let component: RxjsdemoComponent;
  let fixture: ComponentFixture<RxjsdemoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RxjsdemoComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(RxjsdemoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
