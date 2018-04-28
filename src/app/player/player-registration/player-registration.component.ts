import { Component, OnDestroy, OnInit } from '@angular/core'
import { FormBuilder, FormGroup, Validators } from '@angular/forms'

import { Subscription } from 'rxjs/Subscription'

import { Player } from '../../services/player.interface'
import { PlayerService } from '../../services/player.service'

@Component({
  selector: 'app-player-registration',
  templateUrl: './player-registration.component.html',
  styleUrls: ['./player-registration.component.css'],
})
export class PlayerRegistrationComponent implements OnInit, OnDestroy {
  registrationFormGroup: FormGroup

  clearStatusSubscription: Subscription

  successMessage: string
  errorMessage: string

  constructor(private playerService: PlayerService) {}

  ngOnInit() {
    this.registrationFormGroup = this.buildForm()
    this.clearStatusSubscription = this.registrationFormGroup.valueChanges.subscribe(
      change => {
        this.resetStatus()
      }
    )
  }

  ngOnDestroy() {
    this.clearStatusSubscription.unsubscribe()
  }

  private buildForm(): FormGroup {
    return new FormBuilder().group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
    })
  }

  onRegister() {
    this.playerService
      .registerPlayer(this.registrationFormGroup.value as Player)
      .then(player => this.handleSuccess(player))
      .catch(error => this.displayError(error))
  }

  private handleSuccess(player: Player): void {
    this.registrationFormGroup.reset()

    this.successMessage = `Successfully registered ${player.firstName} ${
      player.lastName
    } as Player #${player.id}!`
  }

  private displayError(error: Error): void {
    this.errorMessage = error.message
  }

  private resetStatus(): void {
    this.successMessage = null
    this.errorMessage = null
  }
}
