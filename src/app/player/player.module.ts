import { CommonModule } from '@angular/common'
import { NgModule } from '@angular/core'
import { FormsModule, ReactiveFormsModule } from '@angular/forms'

import {
  PlayerRegistrationComponent,
} from './player-registration/player-registration.component'
import { PlayerRoutingModule } from './player-routing.module'
import { RedeemPrizeComponent } from './redeem-prize/redeem-prize.component'

@NgModule({
  imports: [CommonModule, PlayerRoutingModule, FormsModule, ReactiveFormsModule],
  declarations: [PlayerRegistrationComponent, RedeemPrizeComponent],
})
export class PlayerModule {}
