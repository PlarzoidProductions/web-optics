import { NgModule } from '@angular/core'
import { RouterModule, Routes } from '@angular/router'

import { PageNotFoundComponent } from './page-not-found/page-not-found.component'

const routes: Routes = [
  { path: 'player', loadChildren: 'app/player/player.module#PlayerModule' },
  { path: 'open-play', loadChildren: 'app/open-play/open-play.module#OpenPlayModule' },
  {
    path: 'tournament',
    loadChildren: 'app/tournament/tournament.module#TournamentModule',
  },
  { path: 'admin', loadChildren: 'app/admin/admin.module#AdminModule' },
  { path: '', redirectTo: 'player/register', pathMatch: 'full' },
  { path: '**', component: PageNotFoundComponent },
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
