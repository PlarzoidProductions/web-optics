import { BrowserModule } from '@angular/platform-browser'
import { NgModule } from '@angular/core'

import { AppComponent } from './app.component';
import { PlayerModule } from './player/player.module';
import { OpenPlayModule } from './open-play/open-play.module';
import { TournamentModule } from './tournament/tournament.module';
import { AdminModule } from './admin/admin.module';
import { LoginComponent } from './login/login.component';
import { PlayerService } from './services/player.service';
import { PrizeService } from './services/prize.service';
import { GameSystemsService } from './services/game-systems.service'

@NgModule({
  declarations: [AppComponent, LoginComponent],
  imports: [
    BrowserModule,
    PlayerModule,
    OpenPlayModule,
    TournamentModule,
    AdminModule
  ],
  providers: [PlayerService, PrizeService, GameSystemsService],
  bootstrap: [AppComponent],
})
export class AppModule {}
