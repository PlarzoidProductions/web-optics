import { CommonModule } from '@angular/common'
import { NgModule } from '@angular/core'
import { FlexLayoutModule } from '@angular/flex-layout'
import { FormsModule, ReactiveFormsModule } from '@angular/forms'

import { OpticsControlsModule } from '../controls/optics-controls.module'
import {
  PlayerGameDetailsComponent,
} from './player-record/player-game-details/player-game-details.component'
import { PlayerRecordComponent } from './player-record/player-record.component'
import {
  ViewPlayerRecordComponent,
} from './player-record/view-player-record/view-player-record.component'
import {
  PlayerRegistrationComponent,
} from './player-registration/player-registration.component'
import { PlayerRoutingModule } from './player-routing.module'
import { RedeemPrizeComponent } from './redeem-prize/redeem-prize.component'

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    FlexLayoutModule,
    OpticsControlsModule,
    PlayerRoutingModule,
  ],
  declarations: [
    PlayerRegistrationComponent,
    RedeemPrizeComponent,
    PlayerRecordComponent,
    PlayerGameDetailsComponent,
    ViewPlayerRecordComponent,
  ],
})
export class PlayerModule {}
