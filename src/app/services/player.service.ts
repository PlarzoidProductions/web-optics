import { Injectable, OnInit } from '@angular/core'
import { BehaviorSubject } from 'rxjs/BehaviorSubject'
import { Observable } from 'rxjs/Observable'

import 'rxjs/add/observable/of'

import { IPlayerService, Player } from './player.interface'

@Injectable()
export class PlayerService implements IPlayerService, OnInit {

  playerList: BehaviorSubject<Player[]>

  constructor() { }

  ngOnInit() {
    this.playerList = new BehaviorSubject<Player[]>([])
  }

  public updatePlayerList(): void { }

  public async registerPlayer(newPlayer: Player): Promise<Player> {
    return await Observable.of(newPlayer).toPromise()
  }

}
