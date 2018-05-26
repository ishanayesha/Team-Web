import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OngoingIssuesComponent } from './ongoing-issues.component';

describe('OngoingIssuesComponent', () => {
  let component: OngoingIssuesComponent;
  let fixture: ComponentFixture<OngoingIssuesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OngoingIssuesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OngoingIssuesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
