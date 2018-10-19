import { NgModule } from '@angular/core'
import { RouterModule, Routes } from '@angular/router'

import { PlayerGameDetailsComponent } from './player-record/player-game-details/player-game-details.component'
import { PlayerRecordComponent } from './player-record/player-record.component'
import { ViewPlayerRecordComponent } from './player-record/view-player-record/view-player-record.component'
import { PlayerRegistrationComponent } from './player-registration/player-registration.component'
import { RedeemPrizeComponent } from './redeem-prize/redeem-prize.component'

const routes: Routes = [
  { path: 'register', component: PlayerRegistrationComponent },
  { path: 'redeem', component: RedeemPrizeComponent },
  {
    path: 'view-record',
    component: PlayerRecordComponent,
    children: [
      { path: 'player-record/:id', component: ViewPlayerRecordComponent },
      { path: 'player-record/:id/game', component: PlayerGameDetailsComponent },
    ],
  },
  { path: '', redirectTo: 'register', pathMatch: 'full' },
]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PlayerRoutingModule {}
