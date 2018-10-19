import { HttpClient } from '@angular/common/http'
import { Injectable } from '@angular/core'

import { BehaviorSubject, Observable } from 'rxjs'
import { map } from 'rxjs/operators'

import { IApiPlayer, Player } from '../player/models/player.model'

export interface IPlayerService {
  playerList: BehaviorSubject<Map<string, Player>>

  updatePlayerList(): void

  registerPlayer(newPlayer: Player): Observable<Player>
}

@Injectable()
export class PlayerService implements IPlayerService {
  playerList: BehaviorSubject<Map<string, Player>>
  private url = 'http://localhost:8080/player/'

  constructor(private http: HttpClient) {
    this.playerList = new BehaviorSubject<Map<string, Player>>(new Map())
  }

  public updatePlayerList(): Observable<Map<string, Player>> {
    const playerMap = new Map<string, Player>()
    this.http
      .get<IApiPlayer[]>(this.url)
      .pipe(
        map((apiPlayers: IApiPlayer[]) => {
          return new Map(apiPlayers.map((p): [string, Player] => [p.id, new Player().fromJSON(p)]))
        })
      )
      .subscribe(this.playerList)

    return this.playerList.asObservable()
  }

  public registerPlayer(newPlayer: Player): Observable<Player> {
    return this.http.post<IApiPlayer>(this.url, newPlayer).pipe(map(p => new Player().fromJSON(p)))
  }

  public getPlayerById(id: string): Observable<Player> {
    return this.http.get<IApiPlayer>(this.url + id).pipe(map(p => new Player().fromJSON(p)))
  }
}
