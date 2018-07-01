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
  { path: 'open-play/lfg', component: LfgComponent },
  { path: 'open-play/report-game', component: ReportGameComponent },
  {
    path: 'open-play/player-record',
    component: PlayerRecordComponent,
    children: [
      { path: 'open-play/player-record/view', component: ViewPlayerRecordComponent },
      { path: 'open-play/player-record/game/:id', component: PlayerGameDetailsComponent },
    ],
  },
  { path: 'open-play/leaderboard', component: LeaderboardComponent },
  { path: 'open-play', redirectTo: 'open-play/report-game', pathMatch: 'full' },
]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class OpenPlayRoutingModule {}
