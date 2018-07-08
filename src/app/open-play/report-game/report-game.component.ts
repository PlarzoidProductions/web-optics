import { Component, OnInit } from '@angular/core'
import { AbstractControl, FormBuilder, FormGroup, Validators } from '@angular/forms'

import { Subscription } from 'rxjs/Subscription'

import { PlayerDetail } from '../models/player-detail.model'

@Component({
  selector: 'app-report-game',
  templateUrl: './report-game.component.html',
  styleUrls: ['./report-game.component.css'],
})
export class ReportGameComponent implements OnInit {
  gameForm: FormGroup

  playerDetails: PlayerDetail[] = [null, null]

  detailsSub: Subscription

  constructor() {
    this.buildForm()
  }

  ngOnInit() {}

  buildForm() {
    const builder = new FormBuilder()
    this.gameForm = builder.group({
      playerDetails: builder.array([], Validators.min(2)),
    })
  }

  onAddPlayer() {
    this.playerDetails.push(null)
  }

  get playerDetailsArray(): AbstractControl {
    return this.gameForm.get('playerDetails')
  }
}
