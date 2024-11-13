import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JsonreaderComponent } from './jsonreader.component';

describe('JsonreaderComponent', () => {
  let component: JsonreaderComponent;
  let fixture: ComponentFixture<JsonreaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [JsonreaderComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(JsonreaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
