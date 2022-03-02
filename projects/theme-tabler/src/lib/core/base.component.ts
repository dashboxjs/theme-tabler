import { Component, OnDestroy } from '@angular/core';
import { ReplaySubject } from 'rxjs';

@Component({
  selector: 'theme-base',
  template: '',
})
export class BaseComponent implements OnDestroy {
  /**
   * Fired on component destroyed
   */
  destroyed$ = new ReplaySubject<1>(0);

  public ngOnDestroy(): void {
    this.destroyed$.next(1);
  }
}
