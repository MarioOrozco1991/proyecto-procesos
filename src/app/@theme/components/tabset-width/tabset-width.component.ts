import { Component, ChangeDetectionStrategy, OnInit } from '@angular/core';
import { NbTabsetModule } from '@nebular/theme';


@Component({
  selector: 'ngx-tabset-width',
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './tabset-width.component.html',
  styles: [`
    :host nb-tab {
      padding: 1.25rem;
    }
  `],
})
export class TabsetWidthComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
