import { Component, DoCheck, Input } from '@angular/core'
import { AbstractControl } from '@angular/forms'

@Component({
  selector: 'app-error-message',
  template: `
<div *ngIf="displayError">
  <i class="fa fa-exclamation-triangle"></i>
  <span class="inline-error-text"><ng-content></ng-content></span>
</div>
  `,
})
export class ErrorMessageComponent implements DoCheck {
  displayError: Boolean = false
  @Input() control: AbstractControl
  @Input() causes: string[]
  @Input() disabledBy: string[] = []

  constructor() {}

  ngDoCheck() {
    this.displayError =
      this.control.touched &&
      this.control.invalid &&
      !this.hasError(this.disabledBy) &&
      this.hasError(this.causes)
  }

  hasError(errors: string[]): boolean {
    return errors.some(e => this.control.hasError(e))
  }
}
