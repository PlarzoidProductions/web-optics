import { CommonModule } from '@angular/common'
import { NgModule } from '@angular/core'

import { LeaderboardComponent } from './leaderboard/leaderboard.component'
import { LfgComponent } from './lfg/lfg.component'
import { OpenPlayRoutingModule } from './open-play-routing.module'
import {
  PlayerDetailsComponent,
} from './report-game/player-details/player-details.component'
import { ReportGameComponent } from './report-game/report-game.component'
import { AchievementsService } from './services/achievements.service'
import { MatchmakingService } from './services/matchmaking.service'
import { OpenPlayService } from './services/open-play.service'

@NgModule({
  imports: [CommonModule, OpenPlayRoutingModule],
  declarations: [
    ReportGameComponent,
    LfgComponent,
    LeaderboardComponent,
    PlayerDetailsComponent,
  ],
  providers: [MatchmakingService, OpenPlayService, AchievementsService],
})
export class OpenPlayModule {}
