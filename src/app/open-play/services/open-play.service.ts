import { Injectable } from '@angular/core'

import { BehaviorSubject } from 'rxjs/BehaviorSubject'

import { OpenPlayGame } from '../models/open-play-game.model'

@Injectable()
export class OpenPlayService {
  currentGame: BehaviorSubject<OpenPlayGame>

  constructor() {}
}
