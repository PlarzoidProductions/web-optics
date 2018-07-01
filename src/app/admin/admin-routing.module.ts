import { NgModule } from '@angular/core'
import { RouterModule, Routes } from '@angular/router'

import { ManageUsersComponent } from './manage-users/manage-users.component'
import { OpenPlayConfigComponent } from './open-play-config/open-play-config.component'
import { PrizesConfigComponent } from './prizes-config/prizes-config.component'
import { StatisticsComponent } from './statistics/statistics.component'
import {
  TournamentConfigComponent,
} from './tournament-config/tournament-config.component'

const routes: Routes = [
  { path: 'admin/users', component: ManageUsersComponent },
  { path: 'admin/config/open-play', component: OpenPlayConfigComponent },
  { path: 'admin/config/prizes', component: PrizesConfigComponent },
  { path: 'admin/config/tournaments', component: TournamentConfigComponent },
  { path: 'admin/statistics', component: StatisticsComponent },
  { path: 'admin/config', redirectTo: 'admin/config/open-play', pathMatch: 'full' },
  { path: 'admin', redirectTo: 'admin/statistics', pathMatch: 'full' },
]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AdminRoutingModule {}
