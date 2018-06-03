import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LeaveSheetComponent } from './leave-sheet.component';

describe('LeaveSheetComponent', () => {
  let component: LeaveSheetComponent;
  let fixture: ComponentFixture<LeaveSheetComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LeaveSheetComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LeaveSheetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
