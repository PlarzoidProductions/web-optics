import { AbstractItem } from '../../models/base.model'
import { Player } from '../../player/models/player.model'

export interface IPlayerDetail {
  player: Player
  size: number
  fullyPainted: boolean
  themeForce: boolean
}

export class PlayerDetail extends AbstractItem<IPlayerDetail> implements IPlayerDetail {
  constructor(
    public player: Player = null,
    public size: number = NaN,
    public fullyPainted: boolean = false,
    public themeForce: boolean = false
  ) {
    super()
  }

  toJSON() {
    return {
      id: this.id ? this.id : null,
      player: this.player ? this.player.toJSON() : null,
      size: this.size ? this.size : 0,
      fullyPainted: this.fullyPainted,
      themeForce: this.themeForce,
    }
  }

  fromJSON(json: any): IPlayerDetail {
    this.id = json.id ? json.id : null
    this.player = json.player ? new Player().fromJSON(json.player) : null
    this.size = json.size ? json.size : NaN
    this.fullyPainted = json.fullyPainted ? json.fullyPainted : false
    this.themeForce = json.themeForce ? json.themeForce : false

    return this
  }
}
