import { NgModule } from '@angular/core'
import { RouterModule, Routes } from '@angular/router'

import { LeaderboardComponent } from './leaderboard/leaderboard.component'
import { LfgComponent } from './lfg/lfg.component'
import {
  PlayerGameDetailsComponent,
} from './player-record/player-game-details/player-game-details.component'
import { PlayerRecordComponent } from './player-record/player-record.component'
import {
  ViewPlayerRecordComponent,
} from './player-record/view-player-record/view-player-record.component'
import { ReportGameComponent } from './report-game/report-game.component'

const routes: Routes = [
  { path: 'lfg', component: LfgComponent },
  { path: 'report-game', component: ReportGameComponent },
  {
    path: 'player-record',
    component: PlayerRecordComponent,
    children: [
      { path: 'player-record/:id', component: ViewPlayerRecordComponent },
      { path: 'player-record/:id/game', component: PlayerGameDetailsComponent },
    ],
  },
  { path: 'leaderboard', component: LeaderboardComponent },
  { path: '', redirectTo: 'report-game', pathMatch: 'full' },
]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class OpenPlayRoutingModule {}
