import { CommonModule } from '@angular/common'
import { NgModule } from '@angular/core'

import { ActionStatusComponent } from './action-status/action-status.component'
import { ErrorMessageComponent } from './error-message/error-message.component'

@NgModule({
  imports: [CommonModule],
  declarations: [ErrorMessageComponent, ActionStatusComponent],
  exports: [CommonModule, ErrorMessageComponent, ActionStatusComponent],
})
export class OpticsControlsModule {}
