import { AbstractItem } from '../../models/base.model'
import { IApiPlayerDetail, PlayerDetail } from './player-detail.model'

export interface IOpenPlayGame {
  date: Date
  playerDetails: Map<string, PlayerDetail>
}

export interface IApiOpenPlayGame {
  date: string
  playerDetails: IApiPlayerDetail[]
}

export class OpenPlayGame extends AbstractItem<IOpenPlayGame> implements IOpenPlayGame {
  constructor(public date: Date = null, public playerDetails: Map<string, PlayerDetail> = null) {
    super()
    this.playerDetails = new Map<string, PlayerDetail>()
  }

  toJSON(): IApiOpenPlayGame {
    const players: IApiPlayerDetail[] = []
    this.playerDetails.forEach(p => players.push(p.toJSON()))
    return {
      date: this.date.toISOString(),
      playerDetails: players,
    }
  }

  fromJSON(json: IApiOpenPlayGame): OpenPlayGame {
    this.date = new Date(json.date)
    this.playerDetails = new Map()
    json.playerDetails.forEach(p =>
      this.playerDetails.set(p.player.id, new PlayerDetail().fromJSON(p))
    )

    return this
  }

  fromForm(): OpenPlayGame {
    return this
  }
}
