import { ComponentFixture, TestBed, async } from '@angular/core/testing'

import { ViewPlayerRecordComponent } from './view-player-record.component'

describe('ViewPlayerRecordComponent', () => {
  let component: ViewPlayerRecordComponent
  let fixture: ComponentFixture<ViewPlayerRecordComponent>

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ViewPlayerRecordComponent],
    }).compileComponents()
  }))

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewPlayerRecordComponent)
    component = fixture.componentInstance
    fixture.detectChanges()
  })

  it('should create', () => {
    expect(component).toBeTruthy()
  })
})
