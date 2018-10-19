import { NgModule } from '@angular/core'
import { RouterModule, Routes } from '@angular/router'

import { ManageUsersComponent } from './manage-users/manage-users.component'
import { OpenPlayConfigComponent } from './open-play-config/open-play-config.component'
import { PrizesConfigComponent } from './prizes-config/prizes-config.component'
import { StatisticsComponent } from './statistics/statistics.component'
import { TournamentConfigComponent } from './tournament-config/tournament-config.component'

const routes: Routes = [
  { path: 'users', component: ManageUsersComponent },
  { path: 'config/open-play', component: OpenPlayConfigComponent },
  { path: 'config/prizes', component: PrizesConfigComponent },
  { path: 'config/tournaments', component: TournamentConfigComponent },
  { path: 'statistics', component: StatisticsComponent },
  { path: 'config', redirectTo: 'config/open-play', pathMatch: 'full' },
  { path: '', redirectTo: 'admin/statistics', pathMatch: 'full' },
]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AdminRoutingModule {}
