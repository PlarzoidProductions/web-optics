import { Component } from '@angular/core'

@Component({
  selector: 'app-root',
  template: `
  <div fxLayout="column" fxLayoutAlign="center space-between" fxFlexFill>
  <div fxFlex>
    <app-header [version]="version" [title]="title"></app-header>
  </div>
  <div fxFlex fxLayout="row" fxFlexAlign="start stetch">
    <div fxFlex="15">
      <app-nav></app-nav>
    </div>
    <div fxFlex>
      <body>
        <router-outlet></router-outlet>
      </body>
    </div>
  </div>
</div>
  `,
  styles: [],
})
export class AppComponent {
  title = 'O.P.T.I.C.S.'
  version = '0.1'
}
