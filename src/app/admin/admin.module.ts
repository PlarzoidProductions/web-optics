import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'

import { AdminRoutingModule } from './admin-routing.module'
import { ManageUsersComponent } from './manage-users/manage-users.component'
import { OpenPlayConfigComponent } from './open-play-config/open-play-config.component'
import { PrizesConfigComponent } from './prizes-config/prizes-config.component'
import { TournamentConfigComponent } from './tournament-config/tournament-config.component'
import { StatisticsComponent } from './statistics/statistics.component'
import { AuthService } from './services/auth.service'

@NgModule({
  imports: [CommonModule, AdminRoutingModule],
  declarations: [
    ManageUsersComponent,
    OpenPlayConfigComponent,
    PrizesConfigComponent,
    TournamentConfigComponent,
    StatisticsComponent,
  ],
  providers: [AuthService],
})
export class AdminModule {}
