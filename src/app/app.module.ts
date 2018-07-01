import { NgModule } from '@angular/core'
import { FlexLayoutModule } from '@angular/flex-layout'
import { BrowserModule } from '@angular/platform-browser'

import { AdminModule } from './admin/admin.module'
import { AppRoutingModule } from './app-routing.module'
import { AppComponent } from './app.component'
import { HeaderComponent } from './header/header.component'
import { LoginComponent } from './login/login.component'
import { NavComponent } from './nav/nav.component'
import { OpenPlayModule } from './open-play/open-play.module'
import { PlayerModule } from './player/player.module'
import { GameSystemsService } from './services/game-systems.service'
import { PlayerService } from './services/player.service'
import { PrizeService } from './services/prize.service'
import { TournamentModule } from './tournament/tournament.module';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component'

@NgModule({
  declarations: [AppComponent, LoginComponent, HeaderComponent, NavComponent, PageNotFoundComponent],
  imports: [
    AdminModule,
    BrowserModule,
    PlayerModule,
    OpenPlayModule,
    TournamentModule,
    AppRoutingModule,
    FlexLayoutModule,
  ],
  providers: [PlayerService, PrizeService, GameSystemsService],
  bootstrap: [AppComponent],
})
export class AppModule {}
