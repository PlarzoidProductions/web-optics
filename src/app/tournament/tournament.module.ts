import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'

import { TournamentRoutingModule } from './tournament-routing.module'
import { RegisterPlayersComponent } from './register-players/register-players.component'
import { PairingsComponent } from './pairings/pairings.component'
import { ReportMatchComponent } from './report-match/report-match.component'
import { RoundResultsComponent } from './round-results/round-results.component'
import { TournamentResultsComponent } from './tournament-results/tournament-results.component'
import { PairingService } from './services/pairing.service'
import { TournamentService } from './services/tournament.service'

@NgModule({
  imports: [CommonModule, TournamentRoutingModule],
  declarations: [
    RegisterPlayersComponent,
    PairingsComponent,
    ReportMatchComponent,
    RoundResultsComponent,
    TournamentResultsComponent,
  ],
  providers: [PairingService, TournamentService],
})
export class TournamentModule {}
