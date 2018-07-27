import { Component, Input, OnDestroy, OnInit } from '@angular/core'

import { Observable, Subscription } from 'rxjs'

export class ActionStatus {
  constructor(
    public type: ActionStatusType = ActionStatusType.IDLE,
    public message: string = null,
    public permanent = false
  ) {}
}

export enum ActionStatusType {
  IDLE = 'IDLE',
  PENDING = 'PENDING',
  SUCCESS = 'SUCCESS',
  FAILURE = 'FAILURE',
}

@Component({
  selector: 'app-action-status',
  template: `
<div fxLayout="column" fxLayoutAlign="start center">
  <div fxFlex *ngIf="state === 'PENDING'" class="pending-message">
    <i class="fa fa-circle-o-notch fa-spin"></i> {{ message }}
  </div>
  <div fxFlex *ngIf="state === 'SUCCESS'" class="success-message">
    <i class="fa fa-check-circle"></i> {{ message }}
  </div>
  <div fxFlex *ngIf="state === 'ERROR'" class="error-message">
    <i class="fa fa-times-circle"></i> {{ message }}
  </div>
</div>
  `,
  styles: [],
})
export class ActionStatusComponent implements OnInit, OnDestroy {
  @Input() action: Observable<ActionStatus>
  private actionSubscription: Subscription

  state: ActionStatusType
  message: string

  constructor() {}

  ngOnInit() {
    this.reset()
    this.actionSubscription = this.action.subscribe(a => this.setCondition(a))
  }

  ngOnDestroy() {
    this.actionSubscription.unsubscribe()
  }

  reset(): void {
    this.setCondition(new ActionStatus())
  }

  private setCondition(action: ActionStatus): void {
    if (!action) {
      action = new ActionStatus()
    }
    this.state = action.type
    this.message = action.message
    // Unless specified otherwise...
    if (!action.permanent) {
      setTimeout(() => this.reset(), 5000)
    }
  }
}
