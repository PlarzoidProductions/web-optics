import { ComponentFixture, TestBed, async } from '@angular/core/testing'

import { RegisterPlayersComponent } from './register-players.component'

describe('RegisterPlayersComponent', () => {
  let component: RegisterPlayersComponent
  let fixture: ComponentFixture<RegisterPlayersComponent>

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [RegisterPlayersComponent],
    }).compileComponents()
  }))

  beforeEach(() => {
    fixture = TestBed.createComponent(RegisterPlayersComponent)
    component = fixture.componentInstance
    fixture.detectChanges()
  })

  it('should create', () => {
    expect(component).toBeTruthy()
  })
})
