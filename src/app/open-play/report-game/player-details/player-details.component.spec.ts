import { ComponentFixture, TestBed, async } from '@angular/core/testing'

import { PlayerDetailsComponent } from './player-details.component'

describe('PlayerDetailsComponent', () => {
  let component: PlayerDetailsComponent
  let fixture: ComponentFixture<PlayerDetailsComponent>

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [PlayerDetailsComponent],
    }).compileComponents()
  }))

  beforeEach(() => {
    fixture = TestBed.createComponent(PlayerDetailsComponent)
    component = fixture.componentInstance
    fixture.detectChanges()
  })

  it('should create', () => {
    expect(component).toBeTruthy()
  })
})
