import { CommonModule } from '@angular/common'
import { NgModule } from '@angular/core'

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
import { PairingService } from './services/pairing.service'
import { TournamentService } from './services/tournament.service'
import { TournamentListComponent } from './tournament-list/tournament-list.component'
import { TournamentRoutingModule } from './tournament-routing.module'

@NgModule({
  imports: [CommonModule, TournamentRoutingModule],
  declarations: [
    RegisterPlayersComponent,
    PairingsComponent,
    ReportMatchComponent,
    RoundResultsComponent,
    TournamentResultsComponent,
    TournamentListComponent,
    ManageTournamentComponent,
  ],
  providers: [PairingService, TournamentService],
})
export class TournamentModule {}
