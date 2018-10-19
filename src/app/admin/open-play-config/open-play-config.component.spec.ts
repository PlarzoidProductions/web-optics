import { ComponentFixture, TestBed, async } from '@angular/core/testing'

import { OpenPlayConfigComponent } from './open-play-config.component'

describe('OpenPlayConfigComponent', () => {
  let component: OpenPlayConfigComponent
  let fixture: ComponentFixture<OpenPlayConfigComponent>

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [OpenPlayConfigComponent],
    }).compileComponents()
  }))

  beforeEach(() => {
    fixture = TestBed.createComponent(OpenPlayConfigComponent)
    component = fixture.componentInstance
    fixture.detectChanges()
  })

  it('should create', () => {
    expect(component).toBeTruthy()
  })
})
