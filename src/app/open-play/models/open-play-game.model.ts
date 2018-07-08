import { AbstractItem } from '../../models/base.model'
import { PlayerDetail } from './player-detail.model'

export interface IOpenPlayGame {
  date: Date
  playerDetails: Map<string, PlayerDetail>
}

export class OpenPlayGame extends AbstractItem<IOpenPlayGame> implements IOpenPlayGame {
  constructor(
    public date: Date = null,
    public playerDetails: Map<string, PlayerDetail> = null
  ) {
    super()
    this.playerDetails = new Map<string, PlayerDetail>()
  }

  toJSON() {}

  fromJSON(json: any): IOpenPlayGame {
    return this
  }
}
