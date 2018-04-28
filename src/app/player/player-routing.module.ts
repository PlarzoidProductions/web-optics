import { NgModule } from '@angular/core'
import { RouterModule, Routes } from '@angular/router'

import {
  PlayerRegistrationComponent,
} from './player-registration/player-registration.component'

const routes: Routes = [
  { path: '', redirectTo: 'register', pathMatch: 'full' },
  { path: 'register', component: PlayerRegistrationComponent },
]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PlayerRoutingModule {}
