import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AllAllocationsComponent } from './all-allocations.component';

describe('AllAllocationsComponent', () => {
  let component: AllAllocationsComponent;
  let fixture: ComponentFixture<AllAllocationsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AllAllocationsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AllAllocationsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
