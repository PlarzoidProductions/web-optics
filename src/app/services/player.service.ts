import { Injectable, OnInit } from '@angular/core'

import { BehaviorSubject } from 'rxjs/BehaviorSubject'
import { Observable } from 'rxjs/Observable'

import 'rxjs/add/observable/of'

import { Player } from '../player/models/player.model'

export interface IPlayerService {
  playerList: BehaviorSubject<Player[]>

  updatePlayerList(): void

  registerPlayer(newPlayer: Player): Observable<Player>
}

@Injectable()
export class PlayerService implements IPlayerService, OnInit {
  playerList: BehaviorSubject<Player[]> = new BehaviorSubject<Player[]>([])

  constructor() {}

  ngOnInit() {}

  public updatePlayerList(): void {}

  public registerPlayer(newPlayer: Player): Observable<Player> {
    const updatedPlayerList = this.playerList.getValue()

    // Fake adding to a database
    const storedPlayer: Player = new Player().fromJSON({
      ...newPlayer,
      id: String(updatedPlayerList.length),
    })
    updatedPlayerList.push(storedPlayer)
    this.playerList.next(updatedPlayerList)

    return Observable.of(storedPlayer)
  }
}
