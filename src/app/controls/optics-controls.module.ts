import { CommonModule } from '@angular/common'
import { NgModule } from '@angular/core'

import { ErrorMessageComponent } from './error-message/error-message.component'

@NgModule({
  imports: [CommonModule],
  declarations: [ErrorMessageComponent],
  exports: [CommonModule, ErrorMessageComponent],
})
export class OpticsControlsModule {}
