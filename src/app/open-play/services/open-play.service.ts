import { Injectable } from '@angular/core'

import { BehaviorSubject } from 'rxjs'

import { OpenPlayGame } from '../models/open-play-game.model'

@Injectable()
export class OpenPlayService {
  currentGame: BehaviorSubject<OpenPlayGame>

  constructor() {}
}
