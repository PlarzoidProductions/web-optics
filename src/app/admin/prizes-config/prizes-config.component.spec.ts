import { async, ComponentFixture, TestBed } from '@angular/core/testing'

import { PrizesConfigComponent } from './prizes-config.component'

describe('PrizesConfigComponent', () => {
  let component: PrizesConfigComponent
  let fixture: ComponentFixture<PrizesConfigComponent>

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [PrizesConfigComponent],
    }).compileComponents()
  }))

  beforeEach(() => {
    fixture = TestBed.createComponent(PrizesConfigComponent)
    component = fixture.componentInstance
    fixture.detectChanges()
  })

  it('should create', () => {
    expect(component).toBeTruthy()
  })
})
