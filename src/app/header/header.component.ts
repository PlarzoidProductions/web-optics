import { Component, Input, OnInit } from '@angular/core'

@Component({
  selector: 'app-header',
  template: `
<header>
  <div fxLayout="row" fxLayoutAlign="space-between end">
    <div fxFlex class="left-side">Admin Log In</div>
    <div fxFlex class="center">O.P.T.I.C.S.</div>
    <div fxFlex class="right-side">Version {{ version }}</div>
  </div>
  <hr/>
</header>`,
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent implements OnInit {
  @Input()
  title: string
  @Input()
  version: string

  constructor() {}

  ngOnInit() {}
}
