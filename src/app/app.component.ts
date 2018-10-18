import { Component } from '@angular/core'

@Component({
  selector: 'app-root',
  template: `
  <app-main-nav [title]="title"></app-main-nav>
  `,
  styles: [],
})
export class AppComponent {
  title = 'O.P.T.I.C.S.'
  version = '0.1'
}
