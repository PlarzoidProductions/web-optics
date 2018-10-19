import { ComponentFixture, TestBed, async } from '@angular/core/testing'
import { FlexLayoutModule } from '@angular/flex-layout'
import { FormsModule, ReactiveFormsModule } from '@angular/forms'

import { PlayerService } from '../../services/player.service'
import { PlayerRegistrationComponent } from './player-registration.component'

describe('PlayerRegistrationComponent', () => {
  let component: PlayerRegistrationComponent
  let fixture: ComponentFixture<PlayerRegistrationComponent>

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [FormsModule, ReactiveFormsModule, FlexLayoutModule],
      providers: [PlayerService],
      declarations: [PlayerRegistrationComponent],
    }).compileComponents()
  }))

  beforeEach(() => {
    fixture = TestBed.createComponent(PlayerRegistrationComponent)
    component = fixture.componentInstance
    fixture.detectChanges()
  })

  it('should create', () => {
    expect(component).toBeTruthy()
  })
})
