import { AbstractItem } from '../../models/base.model'

export interface IClub {
  name: string
  description: string
}

export interface IApiClub extends IClub {
  id: string
}

export class Club extends AbstractItem<IClub> implements IClub {
  constructor(public name: string = null, public description: string = null) {
    super()
  }

  toJSON(): IApiClub {
    return {
      id: this.id ? this.id : null,
      name: this.name,
      description: this.description,
    }
  }

  fromJSON(json: any): Club {
    this.id = json.id ? json.id : null
    this.name = json.name ? json.name : null
    this.description = json.description ? json.description : null

    return this
  }

  fromForm(): Club {
    return this
  }
}
