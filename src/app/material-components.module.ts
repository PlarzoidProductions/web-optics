import { CommonModule } from '@angular/common'
import { NgModule } from '@angular/core'
import {
  MatButtonModule,
  MatIconModule,
  MatInputModule,
  MatListModule,
  MatSidenavModule,
  MatToolbarModule,
} from '@angular/material'

const materialComponents = [
  MatButtonModule,
  MatIconModule,
  MatListModule,
  MatSidenavModule,
  MatToolbarModule,
  MatInputModule,
]

@NgModule({
  imports: [CommonModule, materialComponents],
  declarations: [],
  exports: [materialComponents],
})
export class MaterialComponentsModule {}
