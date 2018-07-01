import { NgModule } from '@angular/core'
import { RouterModule, Routes } from '@angular/router'

import {
  ManageTournamentComponent,
} from './manage-tournament/manage-tournament.component'
import { PairingsComponent } from './manage-tournament/pairings/pairings.component'
import {
  RegisterPlayersComponent,
} from './manage-tournament/register-players/register-players.component'
import {
  ReportMatchComponent,
} from './manage-tournament/report-match/report-match.component'
import {
  RoundResultsComponent,
} from './manage-tournament/round-results/round-results.component'
import {
  TournamentResultsComponent,
} from './manage-tournament/tournament-results/tournament-results.component'
import { TournamentListComponent } from './tournament-list/tournament-list.component'

const routes: Routes = [
  { path: 'tournament/list', component: TournamentListComponent },
  {
    path: 'tournament/manage',
    component: ManageTournamentComponent,
    children: [
      {
        path: ':id',
        component: TournamentResultsComponent,
        children: [
          { path: 'pairings', component: PairingsComponent },
          { path: 'report-match', component: ReportMatchComponent },
          { path: 'round-results', component: RoundResultsComponent },
          { path: 'register', component: RegisterPlayersComponent },
        ],
      },
    ],
  },
  { path: 'tournament', redirectTo: 'tournament/list', pathMatch: 'full' },
]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TournamentRoutingModule {}
