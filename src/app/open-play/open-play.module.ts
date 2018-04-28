import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'

import { OpenPlayRoutingModule } from './open-play-routing.module'
import { ReportGameComponent } from './report-game/report-game.component'
import { PlayerGameDetailsComponent } from './player-game-details/player-game-details.component'
import { LfgComponent } from './lfg/lfg.component'
import { ViewPlayerRecordComponent } from './view-player-record/view-player-record.component'
import { LeaderboardComponent } from './leaderboard/leaderboard.component'
import { MatchmakingService } from './services/matchmaking.service'
import { OpenPlayService } from './services/open-play.service'
import { AchievementsService } from './services/achievements.service'

@NgModule({
  imports: [CommonModule, OpenPlayRoutingModule],
  declarations: [
    ReportGameComponent,
    PlayerGameDetailsComponent,
    LfgComponent,
    ViewPlayerRecordComponent,
    LeaderboardComponent,
  ],
  providers: [MatchmakingService, OpenPlayService, AchievementsService],
})
export class OpenPlayModule {}
