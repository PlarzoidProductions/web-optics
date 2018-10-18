import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout'
import { ChangeDetectionStrategy, Component, Input } from '@angular/core'

import { Observable } from 'rxjs'
import { map } from 'rxjs/operators'

@Component({
  selector: 'app-main-nav',
  templateUrl: './main-nav.component.html',
  styleUrls: ['./main-nav.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MainNavComponent {
  @Input() title: string

  isHandset$: Observable<boolean> = this.breakpointObserver
    .observe(Breakpoints.Handset)
    .pipe(map(result => result.matches))

  constructor(private breakpointObserver: BreakpointObserver) {}
}
