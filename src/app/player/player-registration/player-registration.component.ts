import { Component, OnDestroy, OnInit, ViewChild } from '@angular/core'
import { AbstractControl, FormBuilder, FormGroup, Validators } from '@angular/forms'

import { Subscription } from 'rxjs/Subscription'

import {
  ActionStatusComponent,
} from '../../controls/action-status/action-status.component'
import { Player } from '../../services/player.interface'
import { PlayerService } from '../../services/player.service'

@Component({
  selector: 'app-player-registration',
  templateUrl: './player-registration.component.html',
  styleUrls: ['./player-registration.component.css'],
})
export class PlayerRegistrationComponent implements OnInit, OnDestroy {
  registrationFormGroup: FormGroup

  @ViewChild(ActionStatusComponent) status: ActionStatusComponent
  clearStatusSubscription: Subscription

  constructor(private playerService: PlayerService) {}

  ngOnInit() {
    this.registrationFormGroup = this.buildForm()
    this.clearStatusSubscription = this.registrationFormGroup.valueChanges.subscribe(() =>
      this.status.reset()
    )
  }

  ngOnDestroy() {
    this.clearStatusSubscription.unsubscribe()
  }

  private buildForm(): FormGroup {
    return new FormBuilder().group({
      firstName: ['', [Validators.required, Validators.minLength(2)]],
      lastName: ['', [Validators.required, Validators.minLength(2)]],
      badgeId: [''],
      vip: [false],
      clubId: [''],
    })
  }

  onRegister() {
    this.status.notifyPending('Attempting to register...')
    this.playerService
      .registerPlayer(this.registrationFormGroup.value as Player)
      .then(player => this.handleSuccess(player))
      .catch(error => this.displayError(error))
  }

  private handleSuccess(player: Player): void {
    this.registrationFormGroup.reset()
    this.status.notifySuccess(this.buildSuccessMessage(player))
  }

  private buildSuccessMessage(player: Player): string {
    return `Successfully registered ${player.firstName} ${player.lastName} as Player #${
      player.id
    }!`
  }

  private displayError(error: Error): void {
    this.status.notifyFailure(error.message)
  }

  get firstNameField(): AbstractControl {
    return this.registrationFormGroup.get('firstName')
  }
  get lastNameField(): AbstractControl {
    return this.registrationFormGroup.get('lastName')
  }
  get badgeIdField(): AbstractControl {
    return this.registrationFormGroup.get('badgeId')
  }
  get vipCheckbox(): AbstractControl {
    return this.registrationFormGroup.get('vip')
  }
  get clubIdField(): AbstractControl {
    return this.registrationFormGroup.get('clubId')
  }
}
