import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SessionviewerComponent } from './sessionviewer.component';

describe('SessionviewerComponent', () => {
  let component: SessionviewerComponent;
  let fixture: ComponentFixture<SessionviewerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SessionviewerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SessionviewerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
