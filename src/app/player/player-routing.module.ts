import { NgModule } from '@angular/core'
import { RouterModule, Routes } from '@angular/router'

import {
  PlayerRegistrationComponent,
} from './player-registration/player-registration.component'
import { RedeemPrizeComponent } from './redeem-prize/redeem-prize.component'

const routes: Routes = [
  { path: 'player/register', component: PlayerRegistrationComponent },
  { path: 'player/redeem', component: RedeemPrizeComponent },
  { path: 'player', redirectTo: 'player/register', pathMatch: 'full' },
]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PlayerRoutingModule {}
