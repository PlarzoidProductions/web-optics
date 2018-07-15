import { NgModule } from '@angular/core'
import { RouterModule, Routes } from '@angular/router'

import {
  PlayerRegistrationComponent,
} from './player-registration/player-registration.component'
import { RedeemPrizeComponent } from './redeem-prize/redeem-prize.component'

const routes: Routes = [
  { path: 'register', component: PlayerRegistrationComponent },
  { path: 'redeem', component: RedeemPrizeComponent },
  { path: '', redirectTo: 'register', pathMatch: 'full' },
]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PlayerRoutingModule {}
