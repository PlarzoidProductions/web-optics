import { CommonModule } from '@angular/common'
import { NgModule } from '@angular/core'

import { LeaderboardComponent } from './leaderboard/leaderboard.component'
import { LfgComponent } from './lfg/lfg.component'
import { OpenPlayRoutingModule } from './open-play-routing.module'
import {
  PlayerGameDetailsComponent,
} from './player-record/player-game-details/player-game-details.component'
import { PlayerRecordComponent } from './player-record/player-record.component'
import {
  ViewPlayerRecordComponent,
} from './player-record/view-player-record/view-player-record.component'
import { ReportGameComponent } from './report-game/report-game.component'
import { AchievementsService } from './services/achievements.service'
import { MatchmakingService } from './services/matchmaking.service'
import { OpenPlayService } from './services/open-play.service'

@NgModule({
  imports: [CommonModule, OpenPlayRoutingModule],
  declarations: [
    ReportGameComponent,
    PlayerGameDetailsComponent,
    LfgComponent,
    ViewPlayerRecordComponent,
    LeaderboardComponent,
    PlayerRecordComponent,
  ],
  providers: [MatchmakingService, OpenPlayService, AchievementsService],
})
export class OpenPlayModule {}
