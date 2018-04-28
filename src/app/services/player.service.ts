import { Injectable, OnInit } from '@angular/core'

import { BehaviorSubject } from 'rxjs/BehaviorSubject'
import { Observable } from 'rxjs/Observable'

import 'rxjs/add/observable/of'

import { IPlayerService, Player } from './player.interface'

@Injectable()
export class PlayerService implements IPlayerService, OnInit {
  playerListBehaviorSubject: BehaviorSubject<Player[]> = new BehaviorSubject<Player[]>([])

  constructor() {}

  ngOnInit() {}

  public updatePlayerList(): void {}

  public async registerPlayer(newPlayer: Player): Promise<Player> {
    const updatedPlayerList = this.playerListBehaviorSubject.getValue()
    const newPlayerId = updatedPlayerList.push(newPlayer)
    this.playerListBehaviorSubject.next(updatedPlayerList)

    return await Observable.of({
      ...newPlayer,
      id: String(newPlayerId),
    } as Player).toPromise()
  }
}
