import { ComponentFixture, TestBed, async } from '@angular/core/testing'

import { PlayerRecordComponent } from './player-record.component'

describe('PlayerRecordComponent', () => {
  let component: PlayerRecordComponent
  let fixture: ComponentFixture<PlayerRecordComponent>

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [PlayerRecordComponent],
    }).compileComponents()
  }))

  beforeEach(() => {
    fixture = TestBed.createComponent(PlayerRecordComponent)
    component = fixture.componentInstance
    fixture.detectChanges()
  })

  it('should create', () => {
    expect(component).toBeTruthy()
  })
})
