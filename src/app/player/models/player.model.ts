import { AbstractItem } from '../../models/base.model'
import { Club, IClub } from './club.model'

export interface IPlayer {
  firstName: string
  lastName: string
  badgeId?: string
  vip?: boolean
  club?: IClub
}

export interface IApiPlayer extends IPlayer {
  id: string
}

export class Player extends AbstractItem<IPlayer> implements IPlayer {
  constructor(
    public firstName: string = null,
    public lastName: string = null,
    public badgeId: string = null,
    public vip: boolean = false,
    public club: Club = null
  ) {
    super()
  }

  toJSON(): IApiPlayer {
    return {
      id: this.id ? this.id : null,
      firstName: this.firstName,
      lastName: this.lastName,
      badgeId: this.badgeId,
      vip: this.vip,
      club: this.club ? this.club : null,
    }
  }

  fromJSON(json: any): Player {
    this.id = json.id ? json.id : null
    this.firstName = json.firstName ? json.firstName : this.firstName
    this.lastName = json.lastName ? json.lastName : this.lastName
    this.badgeId = json.badgeId ? json.badgeId : this.badgeId
    this.vip = json.vip ? json.vip : this.vip
    this.club = json.club ? json.club : this.club

    return this
  }

  fromForm(): Player {
    return this
  }
}
