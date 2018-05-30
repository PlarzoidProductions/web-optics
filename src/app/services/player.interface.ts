import { BehaviorSubject } from 'rxjs/BehaviorSubject'

export interface Player {
  id?: string
  firstName: string
  lastName: string
  badgeId?: string
  vip?: boolean
  clubId?: string
}

export interface IPlayerService {
  playerListBehaviorSubject: BehaviorSubject<Player[]>

  updatePlayerList(): void

  registerPlayer(newPlayer: Player): Promise<Player>
}
