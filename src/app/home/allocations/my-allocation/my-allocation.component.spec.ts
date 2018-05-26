import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyAllocationComponent } from './my-allocation.component';

describe('MyAllocationComponent', () => {
  let component: MyAllocationComponent;
  let fixture: ComponentFixture<MyAllocationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyAllocationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyAllocationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
