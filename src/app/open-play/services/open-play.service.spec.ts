import { TestBed, inject } from '@angular/core/testing'

import { OpenPlayService } from './open-play.service'

describe('OpenPlayService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [OpenPlayService],
    })
  })

  it(
    'should be created',
    inject([OpenPlayService], (service: OpenPlayService) => {
      expect(service).toBeTruthy()
    })
  )
})
