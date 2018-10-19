import { Component, EventEmitter, OnDestroy, OnInit } from '@angular/core'
import { AbstractControl, FormBuilder, FormGroup, Validators } from '@angular/forms'

import { Subscription } from 'rxjs'

import {
  ActionStatus,
  ActionStatusType,
} from '../../controls/action-status/action-status.component'
import { Player } from '../../player/models/player.model'
import { PlayerService } from '../../services/player.service'

@Component({
  selector: 'app-player-registration',
  templateUrl: './player-registration.component.html',
  styleUrls: ['./player-registration.component.css'],
})
export class PlayerRegistrationComponent implements OnInit, OnDestroy {
  registrationFormGroup: FormGroup

  submitStatus: EventEmitter<ActionStatus> = new EventEmitter<ActionStatus>()
  clearStatusSubscription: Subscription

  constructor(private playerService: PlayerService) {}

  ngOnInit() {
    this.registrationFormGroup = this.buildForm()
    this.clearStatusSubscription = this.registrationFormGroup.valueChanges.subscribe(() =>
      this.submitStatus.emit(null)
    )
  }

  ngOnDestroy() {
    this.clearStatusSubscription.unsubscribe()
  }

  buildForm(): FormGroup {
    return new FormBuilder().group({
      firstName: ['', [Validators.required, Validators.minLength(2)]],
      lastName: ['', [Validators.required, Validators.minLength(2)]],
      badgeId: [''],
      vip: [false],
      club: [''],
    })
  }

  onRegister() {
    this.submitStatus.emit(new ActionStatus(ActionStatusType.PENDING, 'Attempting to register...'))
    this.playerService
      .registerPlayer(this.registrationFormGroup.value as Player)
      .subscribe(player => this.handleSuccess(player), error => this.displayError(error))
  }

  handleSuccess(player: Player): void {
    this.registrationFormGroup.reset()
    this.submitStatus.emit(
      new ActionStatus(ActionStatusType.SUCCESS, this.buildSuccessMessage(player))
    )
  }

  buildSuccessMessage(player: Player): string {
    return `Successfully registered ${player.firstName} ${player.lastName}!`
  }

  displayError(error: Error): void {
    this.submitStatus.emit(new ActionStatus(ActionStatusType.FAILURE, error.message))
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
  get clubField(): AbstractControl {
    return this.registrationFormGroup.get('club')
  }
}
