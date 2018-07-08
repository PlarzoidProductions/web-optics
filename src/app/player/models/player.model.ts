import { AbstractItem } from '../../models/base.model'
import { Club } from './club.model'

export interface IPlayer {
  firstName: string
  lastName: string
  badgeId?: string
  vip?: boolean
  club?: Club
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

  toJSON() {
    return {
      id: this.id ? this.id : null,
      firstName: this.firstName,
      lastName: this.lastName,
      badgeId: this.badgeId,
      vip: this.vip,
      club: this.club ? this.club.toJSON() : null,
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
}
