import { ComponentFixture, TestBed, async } from '@angular/core/testing'

import { LfgComponent } from './lfg.component'

describe('LfgComponent', () => {
  let component: LfgComponent
  let fixture: ComponentFixture<LfgComponent>

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [LfgComponent],
    }).compileComponents()
  }))

  beforeEach(() => {
    fixture = TestBed.createComponent(LfgComponent)
    component = fixture.componentInstance
    fixture.detectChanges()
  })

  it('should create', () => {
    expect(component).toBeTruthy()
  })
})
