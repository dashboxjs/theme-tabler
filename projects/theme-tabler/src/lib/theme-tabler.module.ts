import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { DxOptionSwitchDefinition, DxOptionTextDefinition } from '@dashbox/common';
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
  menusLocations: [
    {
      key: 'main',
      nameTranslation: '@theme.menusLocations.main.title',
      descriptionTranslation: '@theme.menusLocations.main.description'
    }
  ],
  gizmos,
  options: [
    {
      nameTranslation: "@theme.options.basic.title",
      options: [
        <DxOptionTextDefinition> {
          type: "text",
          key: "logoPath",
          defaultValue: "/assets/images/logo.svg",
          nameTranslation: "@theme.options.basic.logoPath"
        },
        <DxOptionSwitchDefinition> {
          type: "switch",
          key: "displayProjectName",
          defaultValue: true,
          nameTranslation: "@theme.options.basic.displayProjectName"
        },
        <DxOptionSwitchDefinition> {
          type: "switch",
          key: "displayProjectDescription",
          defaultValue: true,
          nameTranslation: "@theme.options.basic.displayProjectDescription"
        }
      ]
    }
  ]
})
export class DxThemeTablerModule {}
