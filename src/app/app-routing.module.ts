import { NgModule } from '@angular/core'
import { RouterModule, Routes } from '@angular/router'

import { PlayerModule } from './player/player.module'

const routes: Routes = [
  { path: '', redirectTo: '/player', pathMatch: 'full' },
  { path: '/player', loadChildren: () => PlayerModule },
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
