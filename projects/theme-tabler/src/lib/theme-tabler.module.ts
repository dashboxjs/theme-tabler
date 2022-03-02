import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { DxCommonModule } from '@dashbox/core';
import { DxTheme } from '@dashbox/core';
import { TranslateModule } from '@ngx-translate/core';
import { TablerIconsModule } from 'angular-tabler-icons';
import * as TablerIcons from 'angular-tabler-icons/icons';

import { ContainerComponent } from './container/container.component';
import { BaseComponent } from './core/base.component';
import { ButtonComponent } from './gizmos/actions/button/button.component';
import { TextComponent } from './gizmos/data-displays/text/text.component';
import { AlertComponent } from './gizmos/feedbacks/alert/alert.component';
import { LayoutHorizontalComponent } from './gizmos/layouts/horizontal/horizontal.component';

const gizmos = [
  // Actions
  ButtonComponent,

  // Data Displays,
  TextComponent,

  // Feedbacks
  AlertComponent,

  // Layouts
  LayoutHorizontalComponent,
];

@NgModule({
  declarations: [ContainerComponent, BaseComponent, ...gizmos],
  imports: [
    CommonModule,
    RouterModule,
    DxCommonModule,
    TablerIconsModule.pick(TablerIcons),
    TranslateModule.forChild(),
  ],
})
@DxTheme({
  name: 'Tabler',
  version: '1.0.0',
  container: ContainerComponent,
  gizmos,
})
export class DxThemeTablerModule {}
