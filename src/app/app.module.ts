import { NgModule } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'
import { RouterModule } from '@angular/router'

import { AdminModule } from './admin/admin.module'
import { AppComponent } from './app.component'
import { LoginComponent } from './login/login.component'
import { OpenPlayModule } from './open-play/open-play.module'
import { PlayerModule } from './player/player.module'
import { GameSystemsService } from './services/game-systems.service'
import { PlayerService } from './services/player.service'
import { PrizeService } from './services/prize.service'
import { TournamentModule } from './tournament/tournament.module'

@NgModule({
  declarations: [AppComponent, LoginComponent],
  imports: [
    AdminModule,
    BrowserModule,
    PlayerModule,
    OpenPlayModule,
    TournamentModule,
    RouterModule.forRoot([]),
  ],
  providers: [PlayerService, PrizeService, GameSystemsService],
  bootstrap: [AppComponent],
})
export class AppModule {}
