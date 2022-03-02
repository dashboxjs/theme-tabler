import { Component, OnInit } from '@angular/core';
import { DxContext } from '@dashbox/common';
import { DxContextService } from '@dashbox/core';
import { DxGizmo } from '@dashbox/core';
import { takeUntil } from 'rxjs';

import { BaseComponent } from '../../../core/base.component';

@Component({
  selector: 'tabler-layout-horizontal',
  templateUrl: './horizontal.component.html',
  styleUrls: ['./horizontal.component.scss'],
})
@DxGizmo({
  type: 'layout-horizontal',
  nameTranslation: 'Horizontal',
  category: 'layout',
  layout: true,
})
export class LayoutHorizontalComponent extends BaseComponent implements OnInit {
  context?: DxContext;

  constructor(private readonly contextService: DxContextService) {
    super();
  }

  public ngOnInit(): void {
    this.contextService.context$
      .pipe(takeUntil(this.destroyed$))
      .subscribe((context: DxContext) => (this.context = context));
  }
}
