import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReportMatchComponent } from './report-match.component';

describe('ReportMatchComponent', () => {
  let component: ReportMatchComponent;
  let fixture: ComponentFixture<ReportMatchComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReportMatchComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReportMatchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
