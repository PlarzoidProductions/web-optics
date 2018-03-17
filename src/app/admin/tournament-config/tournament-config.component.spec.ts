import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TournamentConfigComponent } from './tournament-config.component';

describe('TournamentConfigComponent', () => {
  let component: TournamentConfigComponent;
  let fixture: ComponentFixture<TournamentConfigComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TournamentConfigComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TournamentConfigComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
