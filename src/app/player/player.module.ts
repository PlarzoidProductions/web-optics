import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PlayerRoutingModule } from './player-routing.module';
import { PlayerRegistrationComponent } from './player-registration/player-registration.component';
import { RedeemPrizeComponent } from './redeem-prize/redeem-prize.component';

@NgModule({
  imports: [
    CommonModule,
    PlayerRoutingModule
  ],
  declarations: [PlayerRegistrationComponent, RedeemPrizeComponent]
})
export class PlayerModule { }
