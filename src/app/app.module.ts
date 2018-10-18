import { HttpClientModule } from '@angular/common/http'
import { NgModule } from '@angular/core'
import { FlexLayoutModule } from '@angular/flex-layout'
import { BrowserModule } from '@angular/platform-browser'

import { AppRoutingModule } from './app-routing.module'
import { AppComponent } from './app.component'
import { HeaderComponent } from './header/header.component'
import { LoginComponent } from './login/login.component'
import { NavComponent } from './nav/nav.component'
import { PageNotFoundComponent } from './page-not-found/page-not-found.component'
import { GameSystemsService } from './services/game-systems.service'
import { PlayerService } from './services/player.service'
import { PrizeService } from './services/prize.service';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MainNavComponent } from './main-nav/main-nav.component';
import { LayoutModule } from '@angular/cdk/layout';
import { MatToolbarModule, MatButtonModule, MatSidenavModule, MatIconModule, MatListModule } from '@angular/material'

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HeaderComponent,
    NavComponent,
    PageNotFoundComponent,
    MainNavComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, FlexLayoutModule, HttpClientModule, BrowserAnimationsModule, LayoutModule, MatToolbarModule, MatButtonModule, MatSidenavModule, MatIconModule, MatListModule],
  providers: [PlayerService, PrizeService, GameSystemsService],
  bootstrap: [AppComponent],
})
export class AppModule {}
