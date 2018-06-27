import { Component, OnInit } from '@angular/core'

export enum ActionStatusState {
  IDLE = 'IDLE',
  PENDING = 'PENDING',
  SUCCESS = 'SUCCESS',
  FAILURE = 'FAILURE',
}

@Component({
  selector: 'app-action-status',
  template: `
<div fxLayout="column" fxLayoutAlign="start center">
  <div fxFlex *ngIf="pending" class="pending-message">
    <i class="fa fa-circle-o-notch fa-spin"></i> {{ message }}
  </div>
  <div fxFlex *ngIf="success" class="success-message">
    <i class="fa fa-check-circle"></i> {{ message }}
  </div>
  <div fxFlex *ngIf="failure" class="error-message">
    <i class="fa fa-times-circle"></i> {{ message }}
  </div>
</div>
  `,
  styles: [],
})
export class ActionStatusComponent implements OnInit {
  state: ActionStatusState
  message: string

  constructor() {}

  ngOnInit() {
    this.reset()
  }

  notifyPending(message: string, permanent: boolean = true): void {
    this.setCondition(ActionStatusState.PENDING, message, permanent)
  }

  notifySuccess(message: string, permanent: boolean = false): void {
    this.setCondition(ActionStatusState.SUCCESS, message, permanent)
  }

  notifyFailure(message: string, permanent: boolean = true): void {
    this.setCondition(ActionStatusState.FAILURE, message, permanent)
  }

  reset(): void {
    this.setCondition(ActionStatusState.IDLE, null, true)
  }

  private setCondition(
    state: ActionStatusState,
    message: string,
    permanent: boolean
  ): void {
    this.state = state
    this.message = message
    // Unless specified otherwise...
    if (!permanent) {
      setTimeout(() => this.reset(), 5000)
    }
  }

  get pending(): boolean {
    return this.state === ActionStatusState.PENDING
  }
  get success(): boolean {
    return this.state === ActionStatusState.SUCCESS
  }
  get failure(): boolean {
    return this.state === ActionStatusState.FAILURE
  }
}
