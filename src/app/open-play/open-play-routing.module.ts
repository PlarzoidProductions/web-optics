import { NgModule } from '@angular/core'
import { RouterModule, Routes } from '@angular/router'

import { LeaderboardComponent } from './leaderboard/leaderboard.component'
import { LfgComponent } from './lfg/lfg.component'
import { ReportGameComponent } from './report-game/report-game.component'

const routes: Routes = [
  { path: 'lfg', component: LfgComponent },
  { path: 'report-game', component: ReportGameComponent },
  { path: 'leaderboard', component: LeaderboardComponent },
  { path: '', redirectTo: 'report-game', pathMatch: 'full' },
]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class OpenPlayRoutingModule {}
