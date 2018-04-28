import { OpenPlayModule } from './open-play.module'

describe('OpenPlayModule', () => {
  let openPlayModule: OpenPlayModule

  beforeEach(() => {
    openPlayModule = new OpenPlayModule()
  })

  it('should create an instance', () => {
    expect(openPlayModule).toBeTruthy()
  })
})
